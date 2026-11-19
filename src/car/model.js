import * as THREE from 'three';
import { curve, clamp, lerp, smoothstep } from '../util.js';
import { Batch } from '../world/batch.js';

// Overall dimensions (metres). Origin: on the ground, centred between the axles' midpoint; +z is forward.
export const DIM = {
  frontZ: 1.38, rearZ: -1.34, wheelbase: 2.72, trackHalf: 0.85,
  rFront: 0.345, rRear: 0.362, wFront: 0.265, wRear: 0.315, height: 1.16, length: 4.42,
};

export const PAINTS = [
  { id: 'white', name: 'Aero White', color: '#cfd1ce', metal: 0.12, rough: 0.36, coat: 0.7, cost: 0 },
  { id: 'cherry', name: 'Cherry Red', color: '#a20d1c', metal: 0.55, rough: 0.3, coat: 1, cost: 1500 },
  { id: 'black', name: 'Solid Black', color: '#0b0b0d', metal: 0.4, rough: 0.22, coat: 1, cost: 4000 },
  { id: 'silver', name: 'Midnight Silver', color: '#42464c', metal: 0.8, rough: 0.3, coat: 1, cost: 8000 },
  { id: 'blue', name: 'Deep Blue', color: '#0f2f72', metal: 0.65, rough: 0.28, coat: 1, cost: 13000 },
  { id: 'quick', name: 'Quicksilver', color: '#9a9fa6', metal: 0.95, rough: 0.2, coat: 1, cost: 20000 },
  { id: 'stealth', name: 'Stealth Grey', color: '#55585d', metal: 0.3, rough: 0.5, coat: 0.4, cost: 28000 },
  { id: 'ultra', name: 'Ultra Red', color: '#d3101c', metal: 0.35, rough: 0.26, coat: 1, cost: 38000 },
  { id: 'orange', name: 'Sunset Orange', color: '#ee5a12', metal: 0.5, rough: 0.3, coat: 1, cost: 50000 },
  { id: 'teal', name: 'Aurora Teal', color: '#0f9d93', metal: 0.7, rough: 0.26, coat: 1, cost: 65000 },
  { id: 'violet', name: 'Ultraviolet', color: '#4a22b8', metal: 0.7, rough: 0.26, coat: 1, cost: 82000 },
  { id: 'gold', name: 'Solar Gold', color: '#c9961c', metal: 0.95, rough: 0.24, coat: 1, cost: 100000 },
  { id: 'matte', name: 'Matte Black', color: '#141416', metal: 0.2, rough: 0.78, coat: 0, cost: 125000 },
  { id: 'chrome', name: 'Liquid Chrome', color: '#c9ccd2', metal: 1, rough: 0.06, coat: 1, cost: 150000 },
];

// ---------------------------------------------------------------- body loft
// Half cross-section control points P0..P7 from the underside centre, around the flank, to the roof centre.
const K = {
  wb: curve([[-2.2, 0.62], [-1.34, 0.8], [0, 0.84], [1.38, 0.8], [1.9, 0.7], [2.22, 0.46]]),
  yb: curve([[-2.2, 0.36], [-1.9, 0.28], [-1.34, 0.17], [0, 0.15], [1.38, 0.15], [2.0, 0.16], [2.22, 0.2]]),
  ws: curve([[-2.2, 0.8], [-1.34, 0.965], [-0.6, 0.945], [0.6, 0.935], [1.38, 0.945], [1.9, 0.85], [2.22, 0.54]]),
  ys: curve([[-2.2, 0.42], [-1.34, 0.29], [0, 0.26], [1.38, 0.26], [2.0, 0.25], [2.22, 0.27]]),
  wm: curve([[-2.2, 0.865], [-1.8, 0.985], [-1.34, 1.03], [-0.75, 0.99], [0, 0.93], [0.75, 0.945], [1.38, 0.995], [1.9, 0.89], [2.22, 0.58]]),
  ym: curve([[-2.2, 0.63], [-1.34, 0.66], [-0.75, 0.6], [0, 0.52], [0.75, 0.5], [1.38, 0.56], [1.9, 0.46], [2.22, 0.36]]),
  wsh: curve([[-2.2, 0.8], [-1.34, 0.935], [-0.75, 0.92], [0, 0.9], [0.75, 0.895], [1.38, 0.885], [1.9, 0.76], [2.22, 0.46]]),
  ysh: curve([[-2.2, 0.8], [-1.8, 0.89], [-1.34, 0.925], [-0.75, 0.9], [0, 0.855], [0.75, 0.815], [1.38, 0.805], [1.9, 0.63], [2.22, 0.44]]),
  wg: curve([[-2.2, 0.7], [-1.34, 0.75], [-0.75, 0.8], [0, 0.815], [0.75, 0.8], [0.95, 0.78], [1.38, 0.68], [1.9, 0.55], [2.22, 0.33]]),
  yg: curve([[-2.2, 0.855], [-1.45, 0.965], [-0.75, 0.915], [0, 0.875], [0.75, 0.83], [0.95, 0.815], [1.38, 0.735], [1.9, 0.61], [2.22, 0.44]]),
  wr: curve([[-2.2, 0.42], [-1.45, 0.5], [-0.9, 0.58], [-0.05, 0.63], [0.3, 0.6], [0.95, 0.52], [1.38, 0.42], [1.9, 0.33], [2.22, 0.2]]),
};
const lin = (keys) => (x) => {
  if (x <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) if (x <= keys[i][0]) return lerp(keys[i - 1][1], keys[i][1], (x - keys[i - 1][0]) / (keys[i][0] - keys[i - 1][0]));
  return keys[keys.length - 1][1];
};
const roofArc = curve([[-1.45, 0.985], [-0.9, 1.085], [-0.35, 1.15], [-0.05, 1.16], [0.3, 1.13]]);
const hoodArc = curve([[0.95, 0.835], [1.4, 0.74], [1.85, 0.62], [2.1, 0.52], [2.22, 0.44]]);
const deckArc = lin([[-2.2, 0.868], [-2.1, 0.898], [-1.9, 0.908], [-1.45, 0.985]]);
const yc = (z) => (z < -1.45 ? deckArc(z) : z <= 0.3 ? roofArc(z) : z < 0.95 ? lerp(1.13, 0.835, (z - 0.3) / 0.65) : hoodArc(z));
const roofEdge = curve([[-1.45, 0.975], [-0.9, 1.06], [-0.35, 1.115], [-0.05, 1.125], [0.3, 1.1]]);
const hoodEdge = curve([[0.95, 0.83], [1.38, 0.732], [1.85, 0.614], [2.1, 0.518], [2.22, 0.44]]);
const deckEdge = lin([[-2.2, 0.864], [-2.1, 0.892], [-1.9, 0.902], [-1.45, 0.975]]);
const yr = (z) => (z < -1.45 ? deckEdge(z) : z <= 0.3 ? roofEdge(z) : z < 0.95 ? lerp(1.1, 0.83, (z - 0.3) / 0.65) : hoodEdge(z));

const GLASS_Z0 = -1.45, GLASS_Z1 = 0.95, Z_TAIL = -2.2, Z_NOSE = 2.22;
const ARCH = [{ z: DIM.frontZ, r: DIM.rFront, a: DIM.rFront + 0.052 }, { z: DIM.rearZ, r: DIM.rRear, a: DIM.rRear + 0.052 }];

function controlRing(z) {
  const p = [
    [0, K.yb(z)], [K.wb(z), K.yb(z)], [K.ws(z), K.ys(z)], [K.wm(z), K.ym(z)],
    [K.wsh(z), K.ysh(z)], [K.wg(z), K.yg(z)], [K.wr(z), yr(z)], [0, yc(z)],
  ];
  for (const w of ARCH) {
    const dz = z - w.z;
    if (Math.abs(dz) < w.a) {
      const ya = w.r + Math.sqrt(w.a * w.a - dz * dz);
      // wheel-well roof, kept safely below the hood / deck skin
      p[1][0] = 0.6; p[1][1] = Math.max(p[1][1], Math.min(ya, p[5][1] - 0.09));
      p[2][1] = Math.max(p[2][1], ya); p[2][0] = Math.max(p[2][0], p[3][0] - 0.012);
      p[3][1] = Math.max(p[3][1], ya + 0.03);
      p[4][1] = Math.max(p[4][1], p[3][1] + 0.03);
    }
  }
  return p;
}

// Catmull-Rom through the control ring; u in 0..7. Segments 0-1 and 1-2 stay straight (underbody, sill).
function ringPoint(p, u, out) {
  const i = Math.min(6, Math.floor(u)), t = u - i;
  if (i < 2) { out[0] = lerp(p[i][0], p[i + 1][0], t); out[1] = lerp(p[i][1], p[i + 1][1], t); return out; }
  const a = i === 2 ? p[2] : p[i - 1], b = p[i], c = p[i + 1];
  const d = i === 6 ? [-p[6][0], p[6][1]] : p[i + 2];
  const t2 = t * t, t3 = t2 * t;
  for (let k = 0; k < 2; k++) {
    out[k] = 0.5 * (2 * b[k] + (c[k] - a[k]) * t + (2 * a[k] - 5 * b[k] + 4 * c[k] - d[k]) * t2 + (-a[k] + 3 * b[k] - 3 * c[k] + d[k]) * t3);
  }
  return out;
}

const tri = (z, c, w) => Math.max(0, 1 - Math.abs(z - c) / w);
function warpZ(z, u, x) {
  const t = clamp((u - 5) / 2, 0, 1), f = t * (2 - t);
  let o = 0.13 * f * tri(z, GLASS_Z1, 0.55) - 0.15 * f * tri(z, GLASS_Z0, 0.6);
  o -= 0.4 * smoothstep(1.45, Z_NOSE, z) * x * x;   // rounded nose in plan view
  o += 0.17 * smoothstep(-1.7, Z_TAIL, z) * x * x;  // softly rounded tail
  return z + o;
}

const _rp = [0, 0];
// Point on the body surface. side: +1 (car's left, +x) or -1.
function loftPoint(z, u, side, lift = 0, out = new THREE.Vector3()) {
  const p = controlRing(z);
  ringPoint(p, u, _rp);
  const x = _rp[0], y = _rp[1];
  out.set(x * side, y, warpZ(z, u, x));
  if (lift) {
    const e = 0.02;
    ringPoint(p, Math.min(7, u + e), _rp);
    const du = new THREE.Vector3(_rp[0] * side - out.x, _rp[1] - y, warpZ(z, u + e, _rp[0]) - out.z);
    ringPoint(controlRing(z + e), u, _rp);
    const dz = new THREE.Vector3(_rp[0] * side - out.x, _rp[1] - y, warpZ(z + e, u, _rp[0]) - out.z);
    const n = du.cross(dz).normalize();
    if (n.x * side < 0 && Math.abs(n.x) > 0.2) n.negate();
    else if (Math.abs(n.x) <= 0.2 && n.y < 0) n.negate();
    out.addScaledVector(n, lift);
  }
  return out;
}

function stations() {
  const list = [];
  for (let z = Z_TAIL; z < Z_NOSE - 0.03; z += 0.105) list.push(z);
  list.push(Z_NOSE, Z_NOSE - 0.045, Z_TAIL + 0.04);
  const forced = [GLASS_Z0, GLASS_Z1, 0.3];
  for (const w of ARCH) for (let k = 0; k <= 12; k++) forced.push(w.z + w.a * Math.cos((k / 12) * Math.PI) * 0.9999);
  let out = list.filter((z) => !forced.some((f) => Math.abs(f - z) < 0.04)).concat(forced);
  out.sort((a, b) => a - b);
  return out;
}

const RING_U = [0, 1, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.34, 5.67, 6, 6.34, 6.67, 7];

function buildShell() {
  const Z = stations(), nu = RING_U.length;
  const pts = [];
  for (let i = 0; i < Z.length; i++) {
    const ctrl = controlRing(Z[i]), row = [];
    for (let j = 0; j < nu; j++) {
      ringPoint(ctrl, RING_U[j], _rp);
      row.push([_rp[0], _rp[1], warpZ(Z[i], RING_U[j], _rp[0])]);
    }
    pts.push(row);
  }
  const buckets = { paint: { pos: [], idx: [], map: new Map() }, glass: { pos: [], idx: [], map: new Map() }, trim: { pos: [], idx: [], map: new Map() } };
  const vert = (B, i, j, side) => {
    const p = pts[i][j], key = i * 1000 + j * 4 + (p[0] < 1e-5 ? 0 : side + 2);
    let id = B.map.get(key);
    if (id === undefined) { id = B.pos.length / 3; B.pos.push(p[0] * side, p[1], p[2]); B.map.set(key, id); }
    return id;
  };
  const raw = (B, x, y, z) => { B.pos.push(x, y, z); return B.pos.length / 3 - 1; };
  // Winding is decided once per side from a reference panel, so every face of the grid is oriented consistently.
  const tri = (B, flip, i0, i1, i2) => { if (i0 === i1 || i1 === i2 || i0 === i2) return; if (flip) B.idx.push(i0, i2, i1); else B.idx.push(i0, i1, i2); };
  const iRef = Math.floor(Z.length / 2), jRef = 3;
  const normalOf = (A, Bp, C, side) => {
    const ux = (Bp[0] - A[0]) * side, uy = Bp[1] - A[1], uz = Bp[2] - A[2], vx = (C[0] - A[0]) * side, vy = C[1] - A[1], vz = C[2] - A[2];
    return [uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx];
  };
  for (const side of [1, -1]) {
    const flip = normalOf(pts[iRef][jRef], pts[iRef + 1][jRef], pts[iRef + 1][jRef + 1], side)[0] * side < 0;
    for (let i = 0; i < Z.length - 1; i++) {
      const zm = (Z[i] + Z[i + 1]) / 2;
      for (let j = 0; j < nu - 1; j++) {
        const um = (RING_U[j] + RING_U[j + 1]) / 2;
        const B = um < 2 ? buckets.trim : um < 5 ? buckets.paint : zm > GLASS_Z0 && zm < GLASS_Z1 ? buckets.glass : buckets.paint;
        const a = vert(B, i, j, side), b = vert(B, i + 1, j, side), c = vert(B, i + 1, j + 1, side), d = vert(B, i, j + 1, side);
        tri(B, flip, a, b, c); tri(B, flip, a, c, d);
      }
    }
    // end caps: lower fascia is black, upper part is paint
    for (const [i, dz, split] of [[0, -0.03, 3], [Z.length - 1, 0.035, 2]]) {
      const row = pts[i], yMid = (row[0][1] + row[nu - 1][1]) / 2 + (i === 0 ? 0.02 : -0.03), centre = [0, yMid, row[0][2] + dz];
      const capFlip = normalOf(row[jRef], row[jRef + 1], centre, side)[2] * dz < 0;
      for (let j = 0; j < nu - 1; j++) {
        const B = (RING_U[j] + RING_U[j + 1]) / 2 < split ? buckets.trim : buckets.paint;
        const key = `cap${i}`;
        if (B[key] === undefined) B[key] = raw(B, centre[0], centre[1], centre[2]);
        tri(B, capFlip, vert(B, i, j, side), vert(B, i, j + 1, side), B[key]);
      }
    }
  }
  const out = {};
  for (const k in buckets) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(buckets[k].pos, 3));
    g.setIndex(buckets[k].idx);
    g.computeVertexNormals();
    out[k] = g;
  }
  return out;
}

// Thin decal strip lying on the body between stations z0..z1 and ring coordinates ua..ub (numbers or functions of t).
function decal(z0, z1, ua, ub, steps, lift = 0.006, across = 2) {
  const pos = [], idx = [], n = across + 1;
  for (const side of [1, -1]) {
    const base = pos.length / 3;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps, z = lerp(z0, z1, t);
      const [a, b] = typeof ua === 'function' ? [ua(t), ub(t)] : [ua, ub];
      for (let k = 0; k < n; k++) { const p = loftPoint(z, lerp(a, b, k / across), side, lift); pos.push(p.x, p.y, p.z); }
      if (i > 0) {
        const p0 = base + (i - 1) * n, p1 = base + i * n;
        for (let k = 0; k < across; k++) {
          if (side > 0) idx.push(p0 + k, p1 + k, p0 + k + 1, p0 + k + 1, p1 + k, p1 + k + 1);
          else idx.push(p0 + k, p0 + k + 1, p1 + k, p0 + k + 1, p1 + k + 1, p1 + k);
        }
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function buildWheel(r, width, mats) {
  const g = new THREE.Group();
  const prof = [[r - 0.1, -width / 2], [r - 0.03, -width / 2], [r, -width / 2 + 0.035], [r, width / 2 - 0.035], [r - 0.03, width / 2], [r - 0.1, width / 2]];
  const tire = new THREE.Mesh(new THREE.LatheGeometry(prof.map((p) => new THREE.Vector2(p[0], p[1])), 22).rotateZ(-Math.PI / 2), mats.tire);
  const rr = r - 0.095, face = width / 2 - 0.035;
  // parts sharing a material are merged so a wheel costs four draw calls
  const dark = new Batch(), bright = new Batch(), m4 = new THREE.Matrix4(), rot = new THREE.Matrix4();
  dark.addGeometry(new THREE.CircleGeometry(rr, 22).rotateY(Math.PI / 2), m4.makeTranslation(width * 0.18, 0, 0), 0xffffff);
  dark.addGeometry(new THREE.CylinderGeometry(0.062, 0.07, 0.05, 12).rotateZ(-Math.PI / 2), m4.makeTranslation(face, 0, 0), 0xffffff);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(rr * 0.78, rr * 0.78, 0.02, 20).rotateZ(Math.PI / 2).translate(width * 0.2, 0, 0), mats.brake);
  // thin-spoke lightweight wheel: spokes in pairs
  const n = 9, blade = new THREE.BoxGeometry(0.022, rr - 0.05, 0.016).translate(0, (rr - 0.05) / 2 + 0.05, 0);
  for (let k = 0; k < n; k++) {
    for (const off of [-0.085, 0.085]) bright.addGeometry(blade, m4.makeTranslation(face, 0, 0).multiply(rot.makeRotationX((k / n) * Math.PI * 2 + off)), 0xffffff);
  }
  bright.addGeometry(new THREE.TorusGeometry(rr - 0.012, 0.014, 5, 26).rotateY(Math.PI / 2), m4.makeTranslation(face, 0, 0), 0xffffff);
  const darkMesh = dark.build(mats.rimDark, false), brightMesh = bright.build(mats.rim, false);
  darkMesh.matrixAutoUpdate = brightMesh.matrixAutoUpdate = true;
  g.add(tire, darkMesh, disc, brightMesh);
  tire.castShadow = true;
  return g;
}

export class CarModel {
  constructor() {
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);

    const m = (this.mats = {
      paint: new THREE.MeshPhysicalMaterial({ color: 0xcfd1ce, metalness: 0.12, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.13, envMapIntensity: 1.1 }),
      glass: new THREE.MeshPhysicalMaterial({ color: 0x14100b, metalness: 0.2, roughness: 0.32, clearcoat: 0.6, clearcoatRoughness: 0.28, sheen: 0.6, sheenColor: 0x8a6430, sheenRoughness: 0.4 }),
      titan: new THREE.MeshStandardMaterial({ color: 0x8d9197, metalness: 0.92, roughness: 0.34 }),
      trim: new THREE.MeshStandardMaterial({ color: 0x0c0d0f, metalness: 0.3, roughness: 0.55 }),
      tire: new THREE.MeshStandardMaterial({ color: 0x131417, roughness: 0.9, metalness: 0 }),
      rim: new THREE.MeshStandardMaterial({ color: 0x9a9ea5, metalness: 0.95, roughness: 0.3 }),
      rimDark: new THREE.MeshStandardMaterial({ color: 0x17181b, metalness: 0.7, roughness: 0.5 }),
      brake: new THREE.MeshStandardMaterial({ color: 0x4a4d52, metalness: 0.8, roughness: 0.45 }),
      head: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      tail: new THREE.MeshBasicMaterial({ color: 0xff2014 }),
      nozzle: new THREE.MeshBasicMaterial({ color: 0x000000 }),
    });
    m.head.color.setRGB(3.4, 3.5, 3.8);
    m.tail.color.setRGB(3.4, 0.07, 0.05);

    const shell = buildShell();
    for (const k of ['paint', 'glass', 'trim']) {
      const mesh = new THREE.Mesh(shell[k], m[k]);
      mesh.castShadow = true;
      this.body.add(mesh);
    }
    const add = (geo, mat, shadow = false) => { const o = new THREE.Mesh(geo, mat); o.castShadow = shadow; this.body.add(o); return o; };

    // lights
    {
      // slim full-width light bar across the lower nose (the headlights themselves are hidden)
      const pos = [], idx = [], n = 16, y0 = 0.298, y1 = 0.318;
      for (let i = 0; i <= n; i++) {
        const x = lerp(-0.5, 0.5, i / n), z = lerp(Z_NOSE + 0.047, 2.116, Math.abs(x) / 0.55);
        pos.push(x, y0, z, x, y1, z);
        if (i > 0) { const a = (i - 1) * 2, b = i * 2; idx.push(a, b, a + 1, b, b + 1, a + 1); }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      add(g, m.head);
    }
    add(decal(Z_TAIL + 0.012, Z_TAIL + 0.3, (t) => lerp(3.5, 3.6, t), (t) => lerp(3.66, 3.66, t), 4), m.tail);
    {
      // full-width rear light blade following the rounded tail
      const pos = [], idx = [], n = 14, y0 = 0.748, y1 = 0.766;
      for (let i = 0; i <= n; i++) {
        const x = lerp(-0.8, 0.8, i / n), z = Z_TAIL + 0.17 * x * x - 0.034 + Math.abs(x) * 0.012;
        pos.push(x, y0, z, x, y1, z);
        if (i > 0) { const a = (i - 1) * 2, b = i * 2; idx.push(a, a + 1, b, b, a + 1, b + 1); }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      add(g, m.tail);
    }
    // side vents behind the front wheels, door shut lines
    add(decal(0.74, 0.95, (t) => lerp(2.5, 2.9, t), (t) => lerp(3.5, 3.25, t), 3), m.trim);
    add(decal(0.6, 0.612, 2, 4.95, 1, 0.004, 10), m.trim);
    add(decal(-0.66, -0.648, 2, 4.95, 1, 0.004, 10), m.trim);
    // diffuser fins, splitter, mirrors
    for (const x of [-0.42, -0.14, 0.14, 0.42]) add(new THREE.BoxGeometry(0.02, 0.13, 0.3).translate(x, 0.43, Z_TAIL + 0.14), m.trim);
    for (const s of [1, -1]) {
      add(new THREE.BoxGeometry(0.14, 0.02, 0.04).translate(s * 0.92, 0.868, 0.6), m.trim);
      const cap = add(new THREE.BoxGeometry(0.03, 0.055, 0.13).translate(s * 1.0, 0.878, 0.59), m.titan, true);
      cap.geometry.computeVertexNormals();
    }

    // rear thruster nozzles
    this.nozzles = [];
    for (const x of [-0.26, 0, 0.26]) {
      add(new THREE.CylinderGeometry(0.062, 0.075, 0.12, 10).rotateX(Math.PI / 2).translate(x, 0.56, Z_TAIL + 0.03), m.trim);
      add(new THREE.CircleGeometry(0.052, 10).rotateY(Math.PI).translate(x, 0.56, Z_TAIL - 0.032), m.nozzle);
      this.nozzles.push(new THREE.Vector3(x, 0.56, Z_TAIL - 0.04));
    }

    // wheels: pivot (fold) -> steer -> spin
    this.wheels = [];
    const defs = [
      { z: DIM.frontZ, s: 1, r: DIM.rFront, w: DIM.wFront, front: true }, { z: DIM.frontZ, s: -1, r: DIM.rFront, w: DIM.wFront, front: true },
      { z: DIM.rearZ, s: 1, r: DIM.rRear, w: DIM.wRear }, { z: DIM.rearZ, s: -1, r: DIM.rRear, w: DIM.wRear },
    ];
    const jetMat = (this.jetMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.2, 2.6, 3.4), transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    for (const d of defs) {
      const pivot = new THREE.Group(), steer = new THREE.Group(), spin = new THREE.Group();
      const x = d.s * (DIM.trackHalf + (d.front ? 0 : 0.012) - d.w / 2 + 0.13);
      pivot.position.set(x, d.r, d.z);
      const wheel = buildWheel(d.r, d.w, m);
      if (d.s < 0) wheel.rotation.y = Math.PI;
      spin.add(wheel);
      steer.add(spin);
      pivot.add(steer);
      const jet = new THREE.Mesh(new THREE.CircleGeometry(d.r * 0.82, 18).rotateY(d.s > 0 ? Math.PI / 2 : -Math.PI / 2), jetMat);
      jet.position.x = d.s * (d.w / 2 + 0.012);
      pivot.add(jet);
      this.body.add(pivot);
      this.wheels.push({ pivot, steer, spin, home: pivot.position.clone(), ...d });
    }
    this.fold = 0;
    this.spinAngle = 0;
    this.setPaint(PAINTS[0]);
  }

  setPaint(p) {
    const m = this.mats.paint;
    m.color.set(p.color);
    m.metalness = p.metal;
    m.roughness = Math.max(p.rough, 0.14);
    m.clearcoat = p.coat;
    this.paint = p;
  }

  // fold: 0 wheels down .. 1 flight configuration; steer in radians; spin in radians travelled.
  pose(fold, steer, spinDelta, hover) {
    this.fold = fold;
    this.spinAngle += spinDelta;
    const f = fold * fold * (3 - 2 * fold);
    for (const w of this.wheels) {
      w.pivot.rotation.z = -w.s * f * Math.PI / 2;
      w.pivot.position.set(lerp(w.home.x, w.s * 0.74, f), lerp(w.home.y, 0.31, f), w.home.z);
      w.steer.rotation.y = w.front ? steer * (1 - f) : 0;
      w.spin.rotation.x = this.spinAngle * (1 - f) + f * this.spinAngle * 0.2;
    }
    this.jetMat.opacity = f * hover;
  }

  setLights(brake, night) {
    const t = this.mats.tail.color, k = 1 + brake * 1.6 + night * 0.3;
    t.setRGB(3.4 * k, 0.07 * k, 0.05 * k);
    const h = 3.2 + night * 3;
    this.mats.head.color.setRGB(h, h * 1.03, h * 1.12);
  }

  setThrust(v) {
    this.mats.nozzle.color.setRGB(3 * v, 5 * v, 7 * v);
  }
}
