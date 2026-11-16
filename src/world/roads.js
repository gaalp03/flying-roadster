import * as THREE from 'three';
import { lerp, smoothstep } from '../util.js';
import { MOUNTAIN, CAPE } from './layout.js';

export const ROAD_LIFT = 0.12; // road surface sits this far above the terrain it was cut into

function summitSpiral() {
  const pts = [[-100, -60], [-112, -150]];
  const a0 = 1.42, turns = 1.62, steps = 24;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = a0 + t * turns * Math.PI * 2;
    const r = lerp(640, MOUNTAIN.summitR - 10, Math.pow(t, 0.92));
    pts.push([MOUNTAIN.x + Math.cos(a) * r, MOUNTAIN.z + Math.sin(a) * r]);
  }
  return pts;
}

const DEFS = [
  {
    id: 'coast', closed: true, halfW: 9, lanes: 4, deck: 15,
    pts: [[-440, 150], [-405, 430], [-470, 760], [-545, 1040], [-380, 1172], [-40, 1178], [300, 1172], [560, 1050],
      [900, 945], [1230, 935], [1345, 700], [1345, 300], [1290, -150], [1140, -600], [820, -800], [500, -560],
      [250, -250], [-100, -60], [-330, 40]],
  },
  { id: 'summit', halfW: 6.5, lanes: 2, deck: 8, join: 'coast', endY: MOUNTAIN.summitY, pts: summitSpiral() },
  { id: 'cape', halfW: 6.5, lanes: 2, deck: 7, join: 'coast', pts: [[-545, 1040], [-660, 1180], [-790, 1320], [CAPE.x + 26, CAPE.z - 34]] },
  { id: 'airlink', halfW: 6.5, lanes: 2, deck: 8, join: 'coast', pts: [[-440, 150], [-505, 196], [-572, 246], [-606, 300]] },
];

function sampleRoad(def, heightFn, others) {
  const curve = new THREE.CatmullRomCurve3(def.pts.map((p) => new THREE.Vector3(p[0], 0, p[1])), !!def.closed, 'centripetal');
  const n = Math.ceil(curve.getLength() / 5);
  const sp = curve.getSpacedPoints(n);
  if (def.closed) sp.pop();
  const N = sp.length;
  const pts = sp.map((v) => ({ x: v.x, z: v.z, y: 0, base: heightFn(v.x, v.z), bridge: false, nx: 0, nz: 0, s: 0 }));
  let y = pts.map((p) => (p.base < -0.6 ? Math.max(def.deck, p.base) : Math.max(p.base, 3.2)));

  let startY = null, endY = def.endY ?? null;
  if (def.join) {
    const host = others.find((r) => r.id === def.join);
    let best = 1e9;
    for (const q of host.pts) {
      const d = Math.hypot(q.x - pts[0].x, q.z - pts[0].z);
      if (d < best) { best = d; startY = q.y; }
    }
  }
  const K = 8;
  for (let pass = 0; pass < 9; pass++) {
    const out = new Array(N);
    for (let i = 0; i < N; i++) {
      let s = 0;
      for (let k = -K; k <= K; k++) {
        const j = def.closed ? (i + k + N) % N : Math.min(N - 1, Math.max(0, i + k));
        s += y[j];
      }
      out[i] = s / (2 * K + 1);
    }
    y = out;
    if (startY !== null) for (let i = 0; i < 10; i++) y[i] = lerp(startY, y[i], smoothstep(0, 10, i));
    if (endY !== null) for (let i = 0; i < 10; i++) y[N - 1 - i] = lerp(endY, y[N - 1 - i], smoothstep(0, 10, i));
  }
  let s = 0;
  for (let i = 0; i < N; i++) {
    const p = pts[i];
    const a = pts[def.closed ? (i - 1 + N) % N : Math.max(0, i - 1)];
    const b = pts[def.closed ? (i + 1) % N : Math.min(N - 1, i + 1)];
    const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1;
    p.tx = dx / l; p.tz = dz / l;
    p.nx = dz / l; p.nz = -dx / l;
    p.y = y[i];
    p.bridge = p.y - p.base > 4.2 && p.base < 2.5;
    if (i > 0) s += Math.hypot(p.x - pts[i - 1].x, p.z - pts[i - 1].z);
    p.s = s;
  }
  return { id: def.id, halfW: def.halfW, lanes: def.lanes, closed: !!def.closed, pts };
}

function roadTexture(lanes) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#3b3e46';
  g.fillRect(0, 0, 256, 256);
  // asphalt grain
  for (let i = 0; i < 2600; i++) {
    const v = 50 + Math.random() * 30;
    g.fillStyle = `rgba(${v},${v + 2},${v + 8},0.35)`;
    g.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
  }
  g.fillStyle = '#e9e6dc';
  g.fillRect(12, 0, 5, 256);
  g.fillRect(239, 0, 5, 256);
  if (lanes === 4) {
    g.fillStyle = '#e8b64a';
    g.fillRect(123, 0, 3.5, 256);
    g.fillRect(130, 0, 3.5, 256);
    g.fillStyle = '#e9e6dc';
    g.fillRect(68, 20, 4, 96);
    g.fillRect(184, 20, 4, 96);
    g.fillRect(68, 148, 4, 96);
    g.fillRect(184, 148, 4, 96);
  } else {
    g.fillStyle = '#e8b64a';
    g.fillRect(125, 16, 6, 100);
    g.fillRect(125, 144, 6, 100);
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.ClampToEdgeWrapping;
  t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export class Roads {
  constructor(heightFn) {
    this.roads = [];
    for (const def of DEFS) this.roads.push(sampleRoad(def, heightFn, this.roads));
    this.cell = 32;
    this.hash = new Map();
    for (const road of this.roads) {
      const P = road.pts, N = P.length, segs = road.closed ? N : N - 1;
      for (let i = 0; i < segs; i++) {
        const a = P[i], b = P[(i + 1) % N];
        if (a.bridge && b.bridge) continue;
        const pad = road.halfW + 2;
        const i0 = Math.floor((Math.min(a.x, b.x) - pad) / this.cell), i1 = Math.floor((Math.max(a.x, b.x) + pad) / this.cell);
        const j0 = Math.floor((Math.min(a.z, b.z) - pad) / this.cell), j1 = Math.floor((Math.max(a.z, b.z) + pad) / this.cell);
        const seg = { ax: a.x, az: a.z, bx: b.x, bz: b.z, w: road.halfW };
        for (let j = j0; j <= j1; j++) {
          for (let ii = i0; ii <= i1; ii++) {
            const key = ii * 4096 + j;
            let list = this.hash.get(key);
            if (!list) this.hash.set(key, (list = []));
            list.push(seg);
          }
        }
      }
    }
  }

  // 0 off-road .. 1 on the road surface.
  surfaceAt(x, z) {
    const list = this.hash.get(Math.floor(x / this.cell) * 4096 + Math.floor(z / this.cell));
    if (!list) return 0;
    let w = 0;
    for (let k = 0; k < list.length; k++) {
      const s = list[k];
      const dx = s.bx - s.ax, dz = s.bz - s.az;
      let t = ((x - s.ax) * dx + (z - s.az) * dz) / (dx * dx + dz * dz);
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const d = Math.hypot(x - s.ax - dx * t, z - s.az - dz * t);
      if (d < s.w + 0.9) {
        const v = d < s.w - 0.3 ? 1 : (s.w + 0.9 - d) / 1.2;
        if (v > w) w = v;
      }
    }
    return w;
  }

  buildMeshes(terrain) {
    const group = new THREE.Group();
    const byLanes = { 2: [], 4: [] };
    for (const road of this.roads) byLanes[road.lanes].push(road);
    for (const lanes of [4, 2]) {
      const pos = [], uv = [], idx = [];
      for (const road of byLanes[lanes]) {
        const P = road.pts, N = P.length, count = road.closed ? N + 1 : N, base = pos.length / 3;
        const total = P[N - 1].s + 5;
        for (let r = 0; r < count; r++) {
          const p = P[r % N];
          const s = r === N ? total : p.s;
          for (let k = 0; k < 5; k++) {
            const u = (k - 2) / 2, vx = p.x + p.nx * u * road.halfW, vz = p.z + p.nz * u * road.halfW;
            const y = p.bridge ? p.y + ROAD_LIFT : Math.max(terrain.heightAt(vx, vz), p.y - 0.4) + ROAD_LIFT;
            pos.push(vx, y, vz);
            uv.push(k / 4, s / 24);
          }
          if (r > 0) {
            const a = base + (r - 1) * 5, b = base + r * 5;
            for (let k = 0; k < 4; k++) idx.push(a + k, a + k + 1, b + k, b + k, a + k + 1, b + k + 1);
          }
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      const mat = new THREE.MeshLambertMaterial({ map: roadTexture(lanes), polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.receiveShadow = true;
      mesh.matrixAutoUpdate = false;
      group.add(mesh);
    }
    return group;
  }

  // Bridge decks, barriers, piers and the bay bridge towers. Adds matching colliders.
  buildBridges(colliders, terrain) {
    const boxes = []; // visual boxes: { x, y, z, sx, sy, sz, yaw, pitch, color }
    const concrete = 0xb9b4aa, dark = 0x55585f, steel = 0xd8d2c6;
    const lights = [];
    let mainRun = null;
    for (const road of this.roads) {
      const P = road.pts, N = P.length;
      let run = [];
      const flush = () => {
        if (run.length > 1) {
          const len = run[run.length - 1].s - run[0].s;
          if (road.id === 'coast' && (!mainRun || len > mainRun.len)) mainRun = { run: run.slice(), len, road };
          let sincePier = 1e9;
          for (let i = 0; i < run.length - 1; i++) {
            const a = run[i], b = run[i + 1];
            const mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2, l = Math.hypot(b.x - a.x, b.z - a.z);
            const yaw = Math.atan2(b.x - a.x, b.z - a.z), ya = a.y + ROAD_LIFT, yb = b.y + ROAD_LIFT;
            const w = road.halfW + 0.9;
            colliders.add({ x: mx, z: mz, hx: w, hz: l / 2 + 0.35, yaw, y0: Math.min(ya, yb) - 1.5, y1: ya, y2: yb, kind: 'deck', quiet: true });
            const pitch = -Math.atan2(yb - ya, l);
            boxes.push({ x: mx, y: (ya + yb) / 2 - 0.8, z: mz, sx: w * 2, sy: 1.5, sz: l + 0.5, yaw, pitch, color: concrete });
            for (const side of [-1, 1]) {
              const ox = Math.cos(yaw) * side * (w - 0.3), oz = -Math.sin(yaw) * side * (w - 0.3);
              colliders.add({ x: mx + ox, z: mz + oz, hx: 0.32, hz: l / 2 + 0.35, yaw, y0: Math.min(ya, yb) - 1.5, y1: ya + 0.95, y2: yb + 0.95, kind: 'rail', quiet: true });
              boxes.push({ x: mx + ox, y: (ya + yb) / 2 + 0.47, z: mz + oz, sx: 0.5, sy: 0.95, sz: l + 0.5, yaw, pitch, color: steel });
            }
            sincePier += l;
            const floor = terrain.heightAt(mx, mz);
            if (sincePier > 44 && (ya + yb) / 2 - floor > 3) {
              sincePier = 0;
              const top = (ya + yb) / 2 - 1.5, bot = floor - 2;
              boxes.push({ x: mx, y: (top + bot) / 2, z: mz, sx: w * 1.3, sy: top - bot, sz: 2.6, yaw, pitch: 0, color: dark });
              colliders.add({ x: mx, z: mz, hx: w * 0.65, hz: 1.3, yaw, y0: bot, y1: top, kind: 'pier' });
            }
          }
        }
        run = [];
      };
      for (let i = 0; i < N; i++) {
        if (P[i].bridge) run.push(P[i]);
        else flush();
      }
      flush();
    }

    // Suspension towers and cables on the bay bridge.
    const cablePts = [];
    this.bayBridge = null;
    if (mainRun) {
      const R = mainRun.run, w = mainRun.road.halfW + 2.6;
      const at = (f) => R[Math.round(f * (R.length - 1))];
      const towerTop = 78;
      const towers = [at(0.27), at(0.73)];
      for (const t of towers) {
        const yaw = Math.atan2(t.tx, t.tz), floor = terrain.heightAt(t.x, t.z) - 2;
        for (const side of [-1, 1]) {
          const x = t.x + t.nx * side * w, z = t.z + t.nz * side * w;
          boxes.push({ x, y: (towerTop + floor) / 2, z, sx: 3.2, sy: towerTop - floor, sz: 4.4, yaw, pitch: 0, color: 0xc9483a });
          colliders.add({ x, z, hx: 1.6, hz: 2.2, yaw, y0: floor, y1: towerTop, kind: 'tower' });
          lights.push([x, towerTop + 1.2, z]);
        }
        for (const y of [towerTop - 3, t.y + 30, t.y - 4]) {
          boxes.push({ x: t.x, y, z: t.z, sx: w * 2, sy: y < t.y ? 3 : 2.4, sz: 3.2, yaw, pitch: 0, color: 0xc9483a });
          if (y > t.y) colliders.add({ x: t.x, z: t.z, hx: w, hz: 1.6, yaw, y0: y - 1.2, y1: y + 1.2, kind: 'tower' });
        }
      }
      // Main cables: abutment -> tower -> sag -> tower -> abutment
      const iA = Math.round(0.27 * (R.length - 1)), iB = Math.round(0.73 * (R.length - 1));
      for (const side of [-1, 1]) {
        const line = [];
        for (let i = 0; i < R.length; i++) {
          const p = R[i];
          let y;
          if (i <= iA) y = lerp(p.y + 2, towerTop - 2, Math.pow(i / iA, 1.7));
          else if (i >= iB) y = lerp(p.y + 2, towerTop - 2, Math.pow((R.length - 1 - i) / (R.length - 1 - iB), 1.7));
          else { const u = (i - iA) / (iB - iA) * 2 - 1; y = lerp(p.y + 7, towerTop - 2, u * u); }
          line.push(new THREE.Vector3(p.x + p.nx * side * w, y, p.z + p.nz * side * w));
        }
        cablePts.push(line);
      }
      const mid = at(0.5);
      this.bayBridge = { x: mid.x, z: mid.z, y: mid.y, yaw: Math.atan2(mid.tx, mid.tz), halfW: mainRun.road.halfW, len: mainRun.len };
    }

    // Merge all boxes into one mesh.
    const group = new THREE.Group();
    if (boxes.length) {
      const unit = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
      const pos = [], nor = [], col = [];
      const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), nn = new THREE.Vector3(), c = new THREE.Color();
      const up = unit.attributes.position, un = unit.attributes.normal;
      for (const b of boxes) {
        e.set(b.pitch, b.yaw, 0, 'YXZ');
        q.setFromEuler(e);
        m.compose(v.set(b.x, b.y, b.z), q, nn.set(b.sx, b.sy, b.sz));
        c.set(b.color);
        for (let i = 0; i < up.count; i++) {
          v.fromBufferAttribute(up, i).applyMatrix4(m);
          nn.fromBufferAttribute(un, i).applyQuaternion(q);
          pos.push(v.x, v.y, v.z); nor.push(nn.x, nn.y, nn.z); col.push(c.r, c.g, c.b);
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
      const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true }));
      mesh.castShadow = mesh.receiveShadow = true;
      mesh.matrixAutoUpdate = false;
      group.add(mesh);
    }
    if (cablePts.length) {
      const cableMat = new THREE.MeshLambertMaterial({ color: 0xc9483a });
      const hang = [];
      for (const line of cablePts) {
        const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(line), 90, 0.38, 5, false), cableMat);
        tube.matrixAutoUpdate = false;
        group.add(tube);
      }
      const R = mainRun.run, w = mainRun.road.halfW + 2.6;
      for (let i = 3; i < R.length - 3; i += 3) {
        for (let s = 0; s < 2; s++) {
          const top = cablePts[s][i], side = s ? 1 : -1;
          hang.push(top.x, top.y, top.z, R[i].x + R[i].nx * side * (w - 1.6), R[i].y + 1, R[i].z + R[i].nz * side * (w - 1.6));
        }
      }
      const hg = new THREE.BufferGeometry();
      hg.setAttribute('position', new THREE.Float32BufferAttribute(hang, 3));
      const lines = new THREE.LineSegments(hg, new THREE.LineBasicMaterial({ color: 0xd8a79c, transparent: true, opacity: 0.75 }));
      lines.matrixAutoUpdate = false;
      group.add(lines);
    }
    this.beaconPositions = lights;
    return group;
  }
}
