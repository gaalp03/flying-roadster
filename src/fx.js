import * as THREE from 'three';
import { clamp, lerp, smoothstep } from './util.js';
import { DIM } from './car/model.js';

const pVert = /* glsl */ `
attribute float size;
attribute vec4 tint;
uniform float uScale;
varying vec4 vTint;
void main() {
  vTint = tint;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * uScale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const pFrag = /* glsl */ `
varying vec4 vTint;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.25, d) * vTint.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vTint.rgb, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

class Particles {
  constructor(n, additive) {
    this.n = n;
    this.pos = new Float32Array(n * 3);
    this.vel = new Float32Array(n * 3);
    this.tint = new Float32Array(n * 4);
    this.size = new Float32Array(n);
    this.life = new Float32Array(n);
    this.max = new Float32Array(n);
    this.s0 = new Float32Array(n);
    this.s1 = new Float32Array(n);
    this.a0 = new Float32Array(n);
    this.grav = new Float32Array(n);
    this.drag = new Float32Array(n);
    this.next = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('tint', new THREE.BufferAttribute(this.tint, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({
      vertexShader: pVert, fragmentShader: pFrag, uniforms: { uScale: { value: 600 } },
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 6 : 5;
  }

  spawn(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a, grav = 0, drag = 0) {
    const i = this.next;
    this.next = (i + 1) % this.n;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.tint[i * 4] = r; this.tint[i * 4 + 1] = g; this.tint[i * 4 + 2] = b; this.tint[i * 4 + 3] = a;
    this.life[i] = this.max[i] = life;
    this.s0[i] = s0; this.s1[i] = s1; this.a0[i] = a; this.grav[i] = grav; this.drag[i] = drag;
    this.size[i] = s0;
  }

  update(dt) {
    const { pos, vel, tint, size, life, max, n } = this;
    for (let i = 0; i < n; i++) {
      if (life[i] <= 0) continue;
      life[i] -= dt;
      if (life[i] <= 0) { size[i] = 0; tint[i * 4 + 3] = 0; continue; }
      const k = 1 - life[i] / max[i], d = 1 - this.drag[i] * dt;
      vel[i * 3] *= d; vel[i * 3 + 1] = vel[i * 3 + 1] * d - this.grav[i] * dt; vel[i * 3 + 2] *= d;
      pos[i * 3] += vel[i * 3] * dt; pos[i * 3 + 1] += vel[i * 3 + 1] * dt; pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
      size[i] = lerp(this.s0[i], this.s1[i], k);
      tint[i * 4 + 3] = this.a0[i] * (1 - k) * Math.min(1, k * 12);
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true;
    g.attributes.tint.needsUpdate = true;
    g.attributes.size.needsUpdate = true;
  }
}

const plumeVert = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const plumeFrag = /* glsl */ `
uniform float uTime, uPower;
uniform vec3 uCore, uEdge;
varying vec2 vUv;
void main() {
  float t = 1.0 - vUv.y;
  float flick = 0.82 + 0.18 * sin(uTime * 55.0 + vUv.x * 19.0) * sin(uTime * 31.0 + t * 9.0);
  float a = pow(1.0 - t, 1.6) * flick * uPower;
  vec3 col = mix(uCore, uEdge, smoothstep(0.0, 0.55, t));
  gl_FragColor = vec4(col * a * 5.0, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

const rnd = (a) => (Math.random() - 0.5) * 2 * a;
const _v = new THREE.Vector3(), _w = new THREE.Vector3(), _q = new THREE.Quaternion();

// All transient visual effects: thruster plumes, particles, light trails, speed streaks, shockwaves.
export class Effects {
  constructor(scene, carModel) {
    this.scene = scene;
    this.model = carModel;
    this.add = new Particles(700, true);
    this.alpha = new Particles(600, false);
    scene.add(this.add.points, this.alpha.points);
    this.time = 0;

    // thruster plumes (children of the car body so they follow every pose)
    const mk = () => new THREE.ShaderMaterial({
      vertexShader: plumeVert, fragmentShader: plumeFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      uniforms: { uTime: { value: 0 }, uPower: { value: 0 }, uCore: { value: new THREE.Color(1.0, 1.0, 1.0) }, uEdge: { value: new THREE.Color(0.25, 0.6, 1.0) } },
    });
    this.rearMat = mk();
    this.liftMat = mk();
    const cone = new THREE.CylinderGeometry(0.085, 0.02, 1, 10, 1, true).rotateX(Math.PI / 2).translate(0, 0, -0.5);
    {
      // uv.y must run 1 at the nozzle -> 0 at the tip
      const uv = cone.attributes.uv, p = cone.attributes.position;
      for (let i = 0; i < uv.count; i++) uv.setY(i, 1 + p.getZ(i));
    }
    this.rear = [];
    for (const n of carModel.nozzles) {
      const m = new THREE.Mesh(cone, this.rearMat);
      m.position.copy(n);
      m.visible = false;
      carModel.body.add(m);
      this.rear.push(m);
    }
    const down = new THREE.CylinderGeometry(0.26, 0.06, 1, 12, 1, true).translate(0, -0.5, 0);
    {
      const uv = down.attributes.uv, p = down.attributes.position;
      for (let i = 0; i < uv.count; i++) uv.setY(i, 1 + p.getY(i));
    }
    this.lifts = [];
    for (const w of carModel.wheels) {
      const m = new THREE.Mesh(down, this.liftMat);
      m.position.set(w.s * 0.74, 0.17, w.z);
      m.visible = false;
      carModel.body.add(m);
      this.lifts.push(m);
    }

    // tail light trails
    const N = (this.trailN = 26);
    this.trails = [];
    this.trailMat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    for (let s = 0; s < 2; s++) {
      const g = new THREE.BufferGeometry();
      const pos = new Float32Array(N * 2 * 3), col = new Float32Array(N * 2 * 3), idx = [];
      for (let i = 0; i < N - 1; i++) idx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 2, i * 2 + 1, i * 2 + 3);
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
      g.setAttribute('color', new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
      g.setIndex(idx);
      const mesh = new THREE.Mesh(g, this.trailMat);
      mesh.frustumCulled = false;
      mesh.renderOrder = 6;
      scene.add(mesh);
      this.trails.push({ mesh, pts: [], local: new THREE.Vector3((s ? -1 : 1) * 0.74, 0.757, -2.14) });
    }
    this.trailPower = 0;
    this.trailAcc = 0;

    // speed streaks around the camera
    const SN = (this.streakN = 40);
    this.streakPos = new Float32Array(SN * 6);
    this.streakSeed = [];
    for (let i = 0; i < SN; i++) this.streakSeed.push(new THREE.Vector3(rnd(1), rnd(1), Math.random()));
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(this.streakPos, 3).setUsage(THREE.DynamicDrawUsage));
    this.streakMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    this.streaks = new THREE.LineSegments(sg, this.streakMat);
    this.streaks.frustumCulled = false;
    this.streaks.renderOrder = 7;
    scene.add(this.streaks);

    // shockwave rings
    this.waves = [];
    const wg = new THREE.RingGeometry(0.82, 1, 40);
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(wg, new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 3.2, 4), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
      m.visible = false;
      m.renderOrder = 6;
      scene.add(m);
      this.waves.push({ m, t: 1, size: 8 });
    }
  }

  shockwave(pos, dir, size = 9, color = 0xbfe9ff) {
    const w = this.waves.find((x) => x.t >= 1) || this.waves[0];
    w.t = 0; w.size = size;
    w.m.position.copy(pos);
    w.m.quaternion.setFromUnitVectors(_v.set(0, 0, 1), _w.copy(dir).normalize());
    w.m.visible = true;
  }

  burst(kind, x, y, z, vx = 0, vy = 0, vz = 0, n = 12) {
    const A = this.add, B = this.alpha;
    for (let i = 0; i < n; i++) {
      if (kind === 'spark') A.spawn(x, y, z, vx * 0.4 + rnd(7), vy * 0.4 + Math.random() * 6, vz * 0.4 + rnd(7), 0.35 + Math.random() * 0.4, 0.22, 0.05, 3, 1.6, 0.5, 1, 16, 1.5);
      else if (kind === 'dust') B.spawn(x + rnd(1.2), y + 0.2, z + rnd(1.2), vx * 0.25 + rnd(3), 0.6 + Math.random() * 2, vz * 0.25 + rnd(3), 0.8 + Math.random() * 0.7, 0.8, 3.6, 0.78, 0.7, 0.6, 0.34, -0.4, 1.6);
      else if (kind === 'splash') B.spawn(x + rnd(1.5), y, z + rnd(1.5), vx * 0.3 + rnd(5), 4 + Math.random() * 9, vz * 0.3 + rnd(5), 0.7 + Math.random() * 0.6, 0.6, 2.2, 0.92, 0.97, 1, 0.6, 14, 0.6);
      else if (kind === 'ring') A.spawn(x + rnd(6), y + rnd(6), z + rnd(6), vx * 0.5 + rnd(6), vy * 0.5 + rnd(6), vz * 0.5 + rnd(6), 0.5 + Math.random() * 0.5, 0.5, 0.05, 0.5, 2.2, 3, 1, 0, 1);
      else if (kind === 'ignite') A.spawn(x, y, z, vx + rnd(9), vy + rnd(9), vz + rnd(9), 0.3 + Math.random() * 0.45, 0.9, 0.1, 1.6, 2.6, 4, 1, 0, 2.5);
      else if (kind === 'confetti') A.spawn(x + rnd(1), y + 1, z + rnd(1), rnd(6), 4 + Math.random() * 6, rnd(6), 0.8 + Math.random() * 0.6, 0.3, 0.1, 1 + Math.random() * 2, 1 + Math.random() * 2, 1 + Math.random() * 2, 1, 9, 1);
    }
  }

  update(dt, car, camera, viewH) {
    this.time += dt;
    const t = this.time, body = this.model.body;
    const scale = viewH / (2 * Math.tan((camera.fov * Math.PI) / 360));
    this.add.mat.uniforms.uScale.value = scale;
    this.alpha.mat.uniforms.uScale.value = scale;

    // plumes
    const rearP = car.thrust * (car.mode === 'fly' ? 1 : 0.85);
    this.rearMat.uniforms.uTime.value = t;
    this.rearMat.uniforms.uPower.value = clamp(rearP * 1.3, 0, 1.25);
    for (const m of this.rear) {
      m.visible = rearP > 0.02;
      const len = 0.5 + rearP * (car.mode === 'fly' ? 2.6 : 1.9) + Math.sin(t * 47) * 0.08;
      m.scale.set(1 + rearP * 0.5, 1 + rearP * 0.5, len);
    }
    const liftP = car.fold * car.lift;
    this.liftMat.uniforms.uTime.value = t + 3;
    this.liftMat.uniforms.uPower.value = clamp(liftP * 1.1, 0, 1.1);
    for (const m of this.lifts) {
      m.visible = liftP > 0.02;
      m.scale.set(1, 0.5 + liftP * 1.5 + Math.sin(t * 41 + m.position.z) * 0.06, 1);
    }
    this.model.setThrust(Math.max(rearP, liftP * 0.3));

    const sp = car.speed, p = car.pos, sy = Math.sin(car.yaw), cy = Math.cos(car.yaw);
    // boost / thruster embers
    if (rearP > 0.5 && Math.random() < dt * 60 * rearP) {
      _v.set(rnd(0.3), 0.56, -2.3).applyQuaternion(car.quat).add(p);
      this.add.spawn(_v.x, _v.y, _v.z, car.vel.x * 0.6 - sy * 6 + rnd(1.5), car.vel.y * 0.6 + rnd(1.5), car.vel.z * 0.6 - cy * 6 + rnd(1.5), 0.25 + Math.random() * 0.25, 0.4, 0.05, 0.7, 1.7, 3.2, 0.9, 0, 2);
    }
    // tyre dust and smoke
    if (car.mode === 'drive' && car.offGround < 0.05 && sp > 4) {
      const off = car.surf !== 'road', sliding = car.slip > 5.5;
      const rate = (off ? smoothstep(4, 40, sp) * 34 : 0) + (sliding ? 44 : 0);
      if (rate > 0 && Math.random() < dt * rate) {
        const side = Math.random() < 0.5 ? 1 : -1;
        _v.set(side * DIM.trackHalf, 0.1, DIM.rearZ).applyQuaternion(car.quat).add(p);
        const c = off ? (car.surf === 'sand' ? [0.86, 0.78, 0.62] : [0.62, 0.58, 0.46]) : [0.85, 0.85, 0.88];
        this.alpha.spawn(_v.x, _v.y, _v.z, car.vel.x * 0.25 + rnd(1.2), 0.8 + Math.random() * 1.6, car.vel.z * 0.25 + rnd(1.2), 0.7 + Math.random() * 0.7, 0.7, off ? 3.4 : 2.6, c[0], c[1], c[2], off ? 0.32 : 0.22, -0.3, 1.4);
      }
    }
    // skimming spray / ground dust in flight
    if (car.mode === 'fly' && car.skim && sp > 14 && car.alt < 3.2) {
      const k = smoothstep(14, 70, sp) * (1 - car.alt / 3.4);
      if (Math.random() < dt * 90 * k) {
        const wtr = car.skim === 'water';
        const gx = p.x - sy * 1.6 + rnd(0.9), gz = p.z - cy * 1.6 + rnd(0.9), gy = car.groundY + 0.15;
        if (wtr) this.alpha.spawn(gx, gy, gz, car.vel.x * 0.35 + rnd(4), 2.5 + Math.random() * 5, car.vel.z * 0.35 + rnd(4), 0.6 + Math.random() * 0.6, 0.7, 3, 0.9, 0.96, 1, 0.5, 9, 0.8);
        else this.alpha.spawn(gx, gy, gz, car.vel.x * 0.3 + rnd(3), 1 + Math.random() * 2.5, car.vel.z * 0.3 + rnd(3), 0.7 + Math.random() * 0.6, 0.8, 3.6, 0.72, 0.66, 0.54, 0.3, -0.2, 1.2);
      }
    }
    // hover wash when flying low and slow
    if (car.mode === 'fly' && car.alt < 5 && !car.overWater && Math.random() < dt * 22 * (1 - car.alt / 5)) {
      const a = Math.random() * 6.28;
      this.alpha.spawn(p.x + Math.cos(a) * 1.3, car.groundY + 0.15, p.z + Math.sin(a) * 1.3, Math.cos(a) * 7, 0.6, Math.sin(a) * 7, 0.6, 0.6, 2.6, 0.75, 0.7, 0.6, 0.22, 0, 2.4);
    }
    this.add.update(dt);
    this.alpha.update(dt);

    // light trails
    const want = car.mode === 'fly' ? smoothstep(20, 60, sp) : car.boosting ? 1 : smoothstep(46, 62, sp) * 0.7;
    this.trailPower = lerp(this.trailPower, want, 1 - Math.exp(-4 * dt));
    this.trailAcc += Math.hypot(car.vel.x, car.vel.y, car.vel.z) * dt;
    const push = this.trailAcc > 0.3; // one segment every 30 cm keeps the ribbon a fixed length
    if (push) this.trailAcc = 0;
    const N = this.trailN;
    for (const tr of this.trails) {
      _v.copy(tr.local).applyQuaternion(car.quat).add(p);
      if (tr.pts.length === 0) for (let i = 0; i < N; i++) tr.pts.push(_v.clone());
      if (push) { const last = tr.pts.pop(); last.copy(_v); tr.pts.unshift(last); } else tr.pts[0].copy(_v);
      const pos = tr.mesh.geometry.attributes.position, col = tr.mesh.geometry.attributes.color;
      for (let i = 0; i < N; i++) {
        const q = tr.pts[i], k = 1 - i / (N - 1), a = k * k * this.trailPower;
        pos.setXYZ(i * 2, q.x, q.y - 0.02 - 0.02 * k, q.z);
        pos.setXYZ(i * 2 + 1, q.x, q.y + 0.02 + 0.02 * k, q.z);
        col.setXYZ(i * 2, 3.4 * a, 0.2 * a, 0.12 * a);
        col.setXYZ(i * 2 + 1, 3.4 * a, 0.2 * a, 0.12 * a);
      }
      pos.needsUpdate = col.needsUpdate = true;
      tr.mesh.visible = this.trailPower > 0.01;
    }

    // speed streaks
    const so = smoothstep(58, 100, sp) * 0.22;
    this.streakMat.opacity = so;
    this.streaks.visible = so > 0.01;
    if (so > 0.01) {
      const vl = Math.hypot(car.vel.x, car.vel.y, car.vel.z) || 1;
      const dx = car.vel.x / vl, dy = car.vel.y / vl, dz = car.vel.z / vl;
      _q.setFromUnitVectors(_v.set(0, 0, 1), _w.set(dx, dy, dz));
      const L = 90, len = 1 + sp * 0.035;
      for (let i = 0; i < this.streakN; i++) {
        const s = this.streakSeed[i];
        s.z -= (sp * dt) / L;
        if (s.z < 0) { s.z += 1; s.x = rnd(1); s.y = rnd(1); }
        const r = 9 + Math.abs(s.x) * 16;
        _v.set(Math.cos(s.y * 3.14159) * r, Math.sin(s.y * 3.14159) * r * 0.7 + 1, (s.z - 0.35) * L).applyQuaternion(_q).add(p);
        this.streakPos[i * 6] = _v.x; this.streakPos[i * 6 + 1] = _v.y; this.streakPos[i * 6 + 2] = _v.z;
        this.streakPos[i * 6 + 3] = _v.x - dx * len; this.streakPos[i * 6 + 4] = _v.y - dy * len; this.streakPos[i * 6 + 5] = _v.z - dz * len;
      }
      this.streaks.geometry.attributes.position.needsUpdate = true;
    }

    for (const w of this.waves) {
      if (w.t >= 1) continue;
      w.t += dt / 0.55;
      const k = Math.min(w.t, 1), e = 1 - Math.pow(1 - k, 3);
      w.m.scale.setScalar(0.6 + e * w.size);
      w.m.material.opacity = (1 - k) * 0.9;
      if (k >= 1) w.m.visible = false;
    }
  }
}
