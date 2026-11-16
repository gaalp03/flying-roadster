import * as THREE from 'three';
import { fbm, smoothstep, lerp, clamp, vnoise } from '../util.js';
import { SIZE, MOUNTAIN, BAY, AIR, CITY, CAPE, WINDHILL } from './layout.js';

const sdRect = (x, z, x0, z0, x1, z1) => Math.hypot(Math.max(x0 - x, 0, x - x1), Math.max(z0 - z, 0, z - z1));

function plateau(h, x, z, x0, z0, x1, z1, y, blend) {
  const d = sdRect(x, z, x0, z0, x1, z1);
  return d >= blend ? h : lerp(y, h, smoothstep(0, blend, d));
}

// The designed landscape before roads are cut into it.
export function designHeight(x, z) {
  const d = Math.hypot(x, z);
  const warp = (fbm(x * 0.0011 + 3.1, z * 0.0011 - 7.7, 3, 11) - 0.5) * 520;
  const m = smoothstep(1800, 1180, d + warp);
  let h = -30 + m * 44;
  h += m * m * (fbm(x * 0.0021 + 20, z * 0.0021 + 9, 4, 5) - 0.42) * 85;
  h += m * (fbm(x * 0.012, z * 0.012, 2, 31) - 0.5) * 5;

  // Mount Ember
  const md = Math.hypot(x - MOUNTAIN.x, z - MOUNTAIN.z) / MOUNTAIN.r;
  if (md < 1) {
    const k = 1 - md, shape = k * k * (3 - 2 * k);
    const ridge = 1 - Math.abs(fbm(x * 0.0042 + 50, z * 0.0042 - 20, 3, 77) * 2 - 1);
    h += shape * MOUNTAIN.h * (0.8 + 0.2 * ridge);
  }
  // Wind farm hills
  const wd = Math.hypot(x - WINDHILL.x, z - WINDHILL.z) / WINDHILL.r;
  if (wd < 1) { const k = 1 - wd; h += k * k * (3 - 2 * k) * WINDHILL.h * (0.4 + 0.6 * m); }

  // Bay carved in front of the launch ramp
  const e = Math.hypot((x - BAY.x) / BAY.rx, (z - BAY.z) / BAY.rz);
  h = lerp(h, -16, smoothstep(1.22, 0.8, e));

  // Lighthouse cape
  const cd = Math.hypot(x - CAPE.x, z - CAPE.z);
  if (cd < CAPE.r) h = Math.max(h, -6 + (CAPE.h + 6) * smoothstep(CAPE.r, CAPE.r * 0.3, cd));

  // Wide flat beaches just above the waterline
  if (h > 0 && h < 7) h = 7 * Math.pow(h / 7, 1.9);

  h = plateau(h, x, z, AIR.x0, AIR.z0, AIR.x1, AIR.z1, AIR.y, 80);
  h = plateau(h, x, z, CITY.x0 - 24, CITY.z0 - 24, CITY.x1 + 24, CITY.z1 + 24, CITY.y, 90);
  const sd = Math.hypot(x - MOUNTAIN.x, z - MOUNTAIN.z);
  if (sd < MOUNTAIN.summitR + 70) h = lerp(MOUNTAIN.summitY, h, smoothstep(MOUNTAIN.summitR, MOUNTAIN.summitR + 70, sd));
  return h;
}

const C = (hex) => new THREE.Color(hex);
const PAL = {
  seabed: C('#1d5e6b'), wetSand: C('#c9b083'), sand: C('#e6cf9f'), grassA: C('#86a75a'), grassB: C('#5f9150'),
  dry: C('#b3ab66'), rock: C('#8d8176'), rockDark: C('#6f6660'), peak: C('#c4b8aa'), pave: C('#878b92'),
};

export class Terrain {
  constructor(roads) {
    const n = (this.n = 320);
    this.size = SIZE;
    this.half = SIZE / 2;
    this.cell = SIZE / n;
    const N = n + 1;
    const h = (this.h = new Float32Array(N * N));
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) h[j * N + i] = designHeight(-this.half + i * this.cell, -this.half + j * this.cell);
    }
    this.flatten(roads);
  }

  // Blend the heightfield toward the road surface so roads sit in cuts and on embankments.
  flatten(roads) {
    const N = this.n + 1, h = this.h;
    const best = new Float32Array(h.length).fill(9), target = new Float32Array(h.length);
    for (const road of roads) {
      const inner = road.halfW + 9, outer = road.halfW + 44;
      for (const p of road.pts) {
        if (p.bridge) continue;
        const i0 = Math.max(0, Math.floor((p.x - outer + this.half) / this.cell));
        const i1 = Math.min(N - 1, Math.ceil((p.x + outer + this.half) / this.cell));
        const j0 = Math.max(0, Math.floor((p.z - outer + this.half) / this.cell));
        const j1 = Math.min(N - 1, Math.ceil((p.z + outer + this.half) / this.cell));
        for (let j = j0; j <= j1; j++) {
          for (let i = i0; i <= i1; i++) {
            const dn = (Math.hypot(-this.half + i * this.cell - p.x, -this.half + j * this.cell - p.z) - inner) / (outer - inner);
            const k = j * N + i;
            if (dn < best[k]) { best[k] = dn; target[k] = p.y; }
          }
        }
      }
    }
    for (let k = 0; k < h.length; k++) {
      if (best[k] < 1) h[k] = lerp(target[k], h[k], smoothstep(0, 1, best[k]));
    }
  }

  // Exact height of the rendered triangle mesh at (x, z).
  heightAt(x, z) {
    const n = this.n, N = n + 1;
    let gx = (x + this.half) / this.cell, gz = (z + this.half) / this.cell;
    if (gx < 0 || gz < 0 || gx >= n || gz >= n) return -30;
    const i = gx | 0, j = gz | 0, fx = gx - i, fz = gz - j, k = j * N + i, h = this.h;
    const a = h[k], b = h[k + 1], c = h[k + N], d = h[k + N + 1];
    return fx + fz <= 1 ? a + (b - a) * fx + (c - a) * fz : d + (c - d) * (1 - fx) + (b - d) * (1 - fz);
  }

  normalAt(x, z, out) {
    const e = 2.5;
    out.set(this.heightAt(x - e, z) - this.heightAt(x + e, z), 2 * e, this.heightAt(x, z - e) - this.heightAt(x, z + e));
    return out.normalize();
  }

  buildMesh() {
    const n = this.n, N = n + 1, h = this.h;
    const pos = new Float32Array(N * N * 3), col = new Float32Array(N * N * 3);
    const c = new THREE.Color(), t = new THREE.Color();
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const k = j * N + i, x = -this.half + i * this.cell, z = -this.half + j * this.cell, y = h[k];
        pos[k * 3] = x; pos[k * 3 + 1] = y; pos[k * 3 + 2] = z;
        const hl = h[j * N + Math.max(0, i - 1)], hr = h[j * N + Math.min(n, i + 1)];
        const hu = h[Math.max(0, j - 1) * N + i], hd = h[Math.min(n, j + 1) * N + i];
        const slope = Math.hypot(hr - hl, hd - hu) / (2 * this.cell);
        const nz = vnoise(x * 0.006, z * 0.006, 3), nz2 = vnoise(x * 0.031, z * 0.031, 9);
        if (y < 0.4) {
          c.copy(PAL.wetSand).lerp(PAL.seabed, smoothstep(0.4, -7, y));
        } else if (y < 3.4 + nz * 1.5) {
          c.copy(PAL.sand).lerp(PAL.wetSand, smoothstep(1.4, 0.4, y));
        } else {
          c.copy(PAL.grassA).lerp(PAL.grassB, smoothstep(0.3, 0.7, nz)).lerp(PAL.dry, smoothstep(0.55, 0.95, nz2) * 0.6);
          c.lerp(PAL.sand, smoothstep(6.5, 3.4, y) * 0.7);
          t.copy(PAL.rock).lerp(PAL.rockDark, nz2);
          c.lerp(t, smoothstep(0.34, 0.58, slope + nz2 * 0.08));
          c.lerp(PAL.peak, smoothstep(170, 255, y + nz * 40) * 0.85);
        }
        // Paved ground under the city and the proving ground
        const cityD = sdRect(x, z, CITY.x0 - 10, CITY.z0 - 10, CITY.x1 + 10, CITY.z1 + 10);
        if (cityD < 30) c.lerp(PAL.pave, smoothstep(30, 0, cityD));
        const airD = sdRect(x, z, AIR.x0 + 10, AIR.z0 + 10, AIR.x1 - 10, AIR.z1 - 10);
        if (airD < 40 && y > 6) c.lerp(PAL.dry, smoothstep(40, 0, airD) * 0.75);
        c.multiplyScalar(0.94 + nz2 * 0.12);
        col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b;
      }
    }
    const idx = new Uint32Array(n * n * 6);
    let q = 0;
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        const a = j * N + i, b = a + 1, cc = a + N, d = cc + 1;
        idx[q++] = a; idx[q++] = cc; idx[q++] = b; idx[q++] = b; idx[q++] = cc; idx[q++] = d;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.computeVertexNormals();
    this.colors = col;
    const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }));
    mesh.receiveShadow = true;
    mesh.matrixAutoUpdate = false;
    return mesh;
  }

  // 8-bit height texture (-16..16 m) used by the water shader for shore foam and shallows.
  buildHeightTexture() {
    const N = this.n + 1, data = new Uint8Array(N * N);
    for (let k = 0; k < data.length; k++) data[k] = clamp(Math.round((this.h[k] + 16) / 32 * 255), 0, 255);
    const tex = new THREE.DataTexture(data, N, N, THREE.RedFormat, THREE.UnsignedByteType);
    tex.magFilter = tex.minFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  }
}
