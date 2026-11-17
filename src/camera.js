import * as THREE from 'three';
import { clamp, lerp, damp, dampAngle, smoothstep, easeInOut } from './util.js';
import { TOP_FLY } from './vehicle.js';

const _t = new THREE.Vector3(), _p = new THREE.Vector3(), _l = new THREE.Vector3(), _g = { h: 0 };

// Chase camera with mouse orbit, a cinematic take-off shot and free orbit modes for menus / photo mode.
export class CameraRig {
  constructor(camera, world) {
    this.cam = camera;
    this.world = world;
    this.yaw = 0;
    this.orbitYaw = 0; this.orbitPitch = 0; this.manual = 0;
    this.zoom = 1;
    this.focus = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.fov = 60;
    this.shake = 0;
    this.kick = 0;
    this.punch = 0;
    this.roll = 0;
    this.time = 0;
    this.cine = null;
    this.orbit = { yaw: 0.7, pitch: 0.16, dist: 7, roll: 0, fov: 42, panX: 0, panY: 0, floor: null };
    this.sens = 1;
    this.snapNext = true;
  }

  snap(car) {
    this.yaw = car.yaw;
    this.focus.copy(car.pos).y += 1.05;
    this.orbitYaw = this.orbitPitch = 0;
    this.snapNext = true;
  }

  addShake(a) { this.shake = Math.min(1.2, this.shake + a); }

  aspectFov(base) {
    const a = this.cam.aspect;
    if (a >= 1.2) return base;
    // keep a comfortable horizontal field of view on tall screens
    const h = 2 * Math.atan(Math.tan((base * Math.PI) / 360) * 1.2);
    return clamp((2 * Math.atan(Math.tan(h / 2) / a) * 180) / Math.PI, base, 96);
  }

  // Launch cinematic: a low tracking shot beside the ramp lip, then a sweep back behind the car.
  startCinematic(car, duration) {
    const sy = Math.sin(car.yaw), cy = Math.cos(car.yaw);
    const sun = this.world.sky.v.sunDir;
    const side = sun.x * cy - sun.z * sy > 0 ? 1 : -1; // put the camera on the sunlit side
    const pos = new THREE.Vector3(car.pos.x + sy * 21 + cy * side * 10.5, car.pos.y + 0.6, car.pos.z + cy * 21 - sy * side * 10.5);
    this.world.ground(pos.x, pos.y + 50, pos.z, _g);
    pos.y = Math.max(pos.y, _g.h + 1.4);
    this.cine = { t: 0, duration, pos, side };
  }

  update(dt, car, drag, opts = {}) {
    this.time += dt;
    const cam = this.cam, speed = car.speed, fly = car.mode === 'fly';
    const sk = clamp(speed / TOP_FLY, 0, 1);

    // heading follow
    let want = car.yaw;
    if (car.mode === 'air') want = speed > 6 ? Math.atan2(car.vel.x, car.vel.z) : this.yaw;
    else if (speed > 9 && car.mode === 'drive') {
      const vy = Math.atan2(car.vel.x, car.vel.z);
      const fwd = Math.cos(vy - car.yaw) > 0;
      want = fwd ? car.yaw + clamp(Math.atan2(Math.sin(vy - car.yaw), Math.cos(vy - car.yaw)), -0.6, 0.6) * 0.45 : car.yaw;
    }
    if (opts.lookBack) want += Math.PI;
    this.yaw = this.snapNext ? want : dampAngle(this.yaw, want, opts.lookBack ? 14 : 3.2 + sk * 4, dt);

    if (drag && (drag.x || drag.y)) {
      this.orbitYaw -= drag.x * 0.0052 * this.sens;
      this.orbitPitch = clamp(this.orbitPitch + drag.y * 0.004 * this.sens, -0.5, 1.15);
      this.manual = 2.2;
    }
    if (drag && drag.zoom) this.zoom = clamp(this.zoom + drag.zoom * 0.1, 0.7, 2.2);
    this.manual -= dt;
    if (this.manual <= 0 && speed > 3) {
      this.orbitYaw = dampAngle(this.orbitYaw, 0, 2.5, dt);
      this.orbitPitch = damp(this.orbitPitch, 0, 2.5, dt);
    }

    const portrait = cam.aspect < 1 ? 1.22 : 1;
    const dist = (fly ? 8.2 + sk * 3 : 6.5 + sk * 2.2) * this.zoom * portrait;
    const climb = clamp(car.vel.y / 40, -0.5, 0.5);
    const el = clamp((fly ? 0.21 : 0.19) + this.orbitPitch - (fly || car.mode === 'air' ? climb * 0.28 : 0), -0.45, 1.3);
    const yawT = this.yaw + this.orbitYaw;

    _t.copy(car.pos); _t.y += 1.05;
    if (this.snapNext) this.focus.copy(_t);
    else {
      this.focus.x = damp(this.focus.x, _t.x, 22, dt);
      this.focus.z = damp(this.focus.z, _t.z, 22, dt);
      this.focus.y = damp(this.focus.y, _t.y, 12, dt);
    }
    _p.set(this.focus.x - Math.sin(yawT) * Math.cos(el) * dist, this.focus.y + Math.sin(el) * dist + 0.25, this.focus.z - Math.cos(yawT) * Math.cos(el) * dist);

    // keep the camera out of the ground and out of buildings
    for (let k = 0; k < 5; k++) {
      this.world.ground(_p.x, _p.y + 400, _p.z, _g);
      if (_p.y >= _g.h + 0.9) break;
      if (k === 4 || _g.h - _p.y < 3) { _p.y = _g.h + 0.9; break; }
      _p.lerp(this.focus, 0.3);
    }
    const ahead = 2 + speed * 0.035;
    _l.set(this.focus.x + Math.sin(this.yaw) * ahead * (opts.lookBack ? -1 : 1), this.focus.y + 0.25 + (fly ? climb * 2.2 : 0), this.focus.z + Math.cos(this.yaw) * ahead * (opts.lookBack ? -1 : 1));

    this.kick = damp(this.kick, car.boosting ? 1 : 0, 5, dt);
    let fov = 58 + smoothstep(0, 1, sk) * 17 + this.kick * 6;
    let rollT = fly ? car.roll * 0.22 : -car.yawRate * 0.012 * sk;

    // cinematic blend
    if (this.cine) {
      const c = this.cine;
      c.t += opts.realDt ?? dt;
      const k = c.t / c.duration;
      const out = smoothstep(0.7, 1, k);
      const track = _t.copy(car.pos); track.y += 0.7;
      const cp = c.pos;
      // slight dolly so the shot is never static
      const dol = easeInOut(clamp(k / 0.75, 0, 1));
      cp.y += (opts.realDt ?? dt) * 0.5;
      const px = cp.x + Math.sin(car.yaw) * dol * 5, pz = cp.z + Math.cos(car.yaw) * dol * 5;
      _p.set(lerp(px, _p.x, out), lerp(cp.y, _p.y, out), lerp(pz, _p.z, out));
      _l.lerpVectors(track, _l, out);
      fov = lerp(34 - dol * 4, fov, out);
      rollT = lerp(-c.side * 0.06, rollT, out);
      if (k >= 1) this.cine = null;
    }

    // lift-off FOV punch, decays on real time so it also plays out of slow motion
    fov += this.punch * 16;
    this.punch = Math.max(0, this.punch - (opts.realDt ?? dt) * 1.1);

    this.shake = Math.max(0, this.shake - dt * 2.4);
    const sh = this.shake * this.shake * 0.35 + (car.boosting ? 0.012 : 0) + (fly ? sk * 0.008 : 0);
    if (sh > 0) {
      const t = this.time;
      _p.x += Math.sin(t * 61) * sh; _p.y += Math.sin(t * 73 + 1) * sh; _p.z += Math.sin(t * 67 + 2) * sh;
    }

    cam.position.copy(_p);
    this.look.copy(_l);
    cam.up.set(0, 1, 0);
    cam.lookAt(_l);
    this.roll = this.snapNext ? rollT : damp(this.roll, rollT, 4, dt);
    cam.rotateZ(this.roll);
    this.fov = this.snapNext ? fov : damp(this.fov, fov, 5, dt);
    cam.fov = this.aspectFov(this.fov);
    cam.near = lerp(0.6, 3, smoothstep(6, 60, car.alt || 0));
    cam.updateProjectionMatrix();
    this.snapNext = false;
  }

  // Free orbit around the car (menu, garage, photo mode).
  updateOrbit(dt, car, drag, auto = 0) {
    const o = this.orbit, cam = this.cam;
    if (drag) {
      if (drag.x || drag.y) {
        o.yaw -= drag.x * 0.006;
        o.pitch = clamp(o.pitch + drag.y * 0.005, -0.25, 1.45);
      }
      if (drag.zoom) o.dist = clamp(o.dist * (1 + drag.zoom * 0.08), 3.6, 60);
    }
    o.yaw += auto * dt;
    const cy = car.yaw;
    _t.copy(car.pos);
    _t.y += 0.62 + o.panY;
    const a = cy + o.yaw;
    // horizontal pan is along the camera's own right axis so it stays put on screen while orbiting
    _t.x -= Math.cos(a) * o.panX; _t.z += Math.sin(a) * o.panX;
    const portrait = cam.aspect < 1 ? 1.35 : 1, d = o.dist * portrait;
    _p.set(_t.x + Math.sin(a) * Math.cos(o.pitch) * d, _t.y + Math.sin(o.pitch) * d, _t.z + Math.cos(a) * Math.cos(o.pitch) * d);
    if (o.floor != null) { if (_p.y < o.floor) _p.y = o.floor; } else {
      this.world.ground(_p.x, _p.y + 400, _p.z, _g);
      if (_p.y < _g.h + 0.35) _p.y = _g.h + 0.35;
      if (_p.y < 0.4) _p.y = 0.4;
    }
    cam.position.copy(_p);
    cam.up.set(0, 1, 0);
    cam.lookAt(_t);
    cam.rotateZ(o.roll);
    cam.fov = cam.aspect < 1 ? clamp(o.fov * 1.25, 20, 100) : o.fov;
    cam.near = 0.3;
    cam.updateProjectionMatrix();
    this.snapNext = true;
    this.yaw = car.yaw;
    this.focus.copy(car.pos).y += 1.05;
  }
}
