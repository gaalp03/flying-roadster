import * as THREE from 'three';
import { mulberry32 } from '../util.js';
import { CITY } from './layout.js';
import { ROAD_LIFT } from './roads.js';
import { Batch } from './batch.js';

const WIN_W = 3.2, FLOOR_H = 3.4, TILE = 16; // windows per texture tile

function windowTextures(style, seed) {
  const rng = mulberry32(seed);
  const S = 512, cell = S / TILE;
  const diffuse = document.createElement('canvas'), lit = document.createElement('canvas');
  diffuse.width = diffuse.height = lit.width = lit.height = S;
  const g = diffuse.getContext('2d'), l = lit.getContext('2d');
  l.fillStyle = '#000';
  l.fillRect(0, 0, S, S);
  if (style === 'A') {
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, S, S);
    for (let j = 0; j < TILE; j++) {
      g.fillStyle = 'rgba(0,0,0,0.07)';
      g.fillRect(0, j * cell + cell - 2, S, 2);
      for (let i = 0; i < TILE; i++) {
        const x = i * cell + 7, y = j * cell + 6, w = cell - 14, h = cell - 13;
        g.fillStyle = '#26313f';
        g.fillRect(x, y, w, h);
        g.fillStyle = '#51657c';
        g.fillRect(x, y, w, 5);
        g.fillStyle = 'rgba(255,255,255,0.5)';
        g.fillRect(x - 1, y + h, w + 2, 2);
        if (rng() < 0.34) {
          const warm = rng();
          l.fillStyle = warm < 0.6 ? '#ffc778' : warm < 0.88 ? '#ffe3b8' : '#bcd6ff';
          l.globalAlpha = 0.55 + rng() * 0.45;
          l.fillRect(x, y, w, h);
          l.globalAlpha = 1;
        }
      }
    }
  } else {
    g.fillStyle = '#8fb0c9';
    g.fillRect(0, 0, S, S);
    for (let j = 0; j < TILE; j++) {
      for (let i = 0; i < TILE; i++) {
        const x = i * cell, y = j * cell;
        const v = 0.72 + rng() * 0.28;
        g.fillStyle = `rgb(${Math.round(150 * v)},${Math.round(186 * v)},${Math.round(214 * v)})`;
        g.fillRect(x + 1, y + 1, cell - 2, cell - 8);
        g.fillStyle = '#dfe9f0';
        g.fillRect(x, y + cell - 7, cell, 5);
        g.fillStyle = '#31404f';
        g.fillRect(x, y, 2, cell);
        if (rng() < 0.24) {
          l.fillStyle = rng() < 0.8 ? '#e8a85c' : '#cfe0ff';
          l.globalAlpha = 0.3 + rng() * 0.4;
          l.fillRect(x + 2, y + 1, cell - 3, cell - 8);
          l.globalAlpha = 1;
        }
      }
    }
  }
  const make = (c) => {
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  };
  return { map: make(diffuse), emissiveMap: make(lit) };
}

function groundAtlas() {
  const S = 512, c = document.createElement('canvas');
  c.width = S * 2; c.height = S;
  const g = c.getContext('2d');
  const px = S / CITY.pitch, half = (CITY.street / 2) * px, walk = 3.2 * px;
  for (let tile = 0; tile < 2; tile++) {
    const ox = tile * S;
    g.save();
    g.translate(ox, 0);
    g.beginPath();
    g.rect(0, 0, S, S);
    g.clip();
    g.fillStyle = '#3b3e46';
    g.fillRect(0, 0, S, S);
    for (let i = 0; i < 3000; i++) {
      const v = 52 + Math.random() * 26;
      g.fillStyle = `rgba(${v},${v + 2},${v + 8},0.3)`;
      g.fillRect(Math.random() * S, Math.random() * S, 2, 2);
    }
    // sidewalk + block interior
    g.fillStyle = '#b3aea4';
    g.fillRect(half, half, S - 2 * half, S - 2 * half);
    g.fillStyle = tile === 0 ? '#96938c' : '#6f9a57';
    g.fillRect(half + walk, half + walk, S - 2 * (half + walk), S - 2 * (half + walk));
    if (tile === 0) {
      g.strokeStyle = 'rgba(0,0,0,0.08)';
      g.lineWidth = 1;
      for (let k = half + walk; k < S - half - walk; k += 4 * px) {
        g.beginPath(); g.moveTo(k, half + walk); g.lineTo(k, S - half - walk); g.stroke();
        g.beginPath(); g.moveTo(half + walk, k); g.lineTo(S - half - walk, k); g.stroke();
      }
    } else {
      g.strokeStyle = '#d8c9a3';
      g.lineWidth = 3 * px;
      g.beginPath(); g.moveTo(half + walk, half + walk); g.lineTo(S - half - walk, S - half - walk); g.stroke();
      g.beginPath(); g.moveTo(S - half - walk, half + walk); g.lineTo(half + walk, S - half - walk); g.stroke();
      g.fillStyle = '#d8c9a3';
      g.beginPath(); g.arc(S / 2, S / 2, 11 * px, 0, 7); g.fill();
      g.fillStyle = '#7fa965';
      for (let i = 0; i < 60; i++) { g.globalAlpha = 0.5; g.beginPath(); g.arc(half + walk + Math.random() * (S - 2 * half - 2 * walk), half + walk + Math.random() * (S - 2 * half - 2 * walk), 4 + Math.random() * 9, 0, 7); g.fill(); }
      g.globalAlpha = 1;
    }
    // lane dashes down the middle of each street (the tile edges)
    g.fillStyle = '#e8b64a';
    for (let k = half + 14; k < S - half - 14; k += 34) {
      g.fillRect(0, k, 2.5, 18); g.fillRect(S - 2.5, k, 2.5, 18);
      g.fillRect(k, 0, 18, 2.5); g.fillRect(k, S - 2.5, 18, 2.5);
    }
    // crosswalks
    g.fillStyle = '#e9e6dc';
    const cw = 4 * px;
    for (let k = 5; k < half - 4; k += 9) {
      g.fillRect(half + 2, k, cw, 5); g.fillRect(S - half - 2 - cw, k, cw, 5);
      g.fillRect(half + 2, S - k - 5, cw, 5); g.fillRect(S - half - 2 - cw, S - k - 5, cw, 5);
      g.fillRect(k, half + 2, 5, cw); g.fillRect(k, S - half - 2 - cw, 5, cw);
      g.fillRect(S - k - 5, half + 2, 5, cw); g.fillRect(S - k - 5, S - half - 2 - cw, 5, cw);
    }
    g.restore();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

const WALL_A = ['#efe3cf', '#dccab2', '#cdbcab', '#e6d6c2', '#bfae9d', '#d9b99e', '#d2d8da', '#f3eadb', '#c9906f', '#e2c7a6'];
const WALL_B = ['#b4d2e4', '#9cc0d8', '#bfdcd8', '#d6c2a4', '#a9b8d2', '#cfe2ec', '#94b6c8'];

export function buildCity(colliders) {
  const rng = mulberry32(2026);
  const group = new THREE.Group();
  const walls = { A: { pos: [], nor: [], uv: [], col: [] }, B: { pos: [], nor: [], uv: [], col: [] } };
  const roofs = new Batch();
  const pads = [], rampSpots = [], beacons = [], parks = [], roofList = [];
  const col = new THREE.Color();
  const Y = CITY.y + ROAD_LIFT;

  function wallQuad(W, ax, az, bx, bz, y0, y1, nx, nz, color, uOff, vOff) {
    const w = Math.hypot(bx - ax, bz - az);
    const u = Math.max(1, Math.round(w / WIN_W)) / TILE, v = Math.max(1, Math.round((y1 - y0) / FLOOR_H)) / TILE;
    W.pos.push(ax, y0, az, bx, y0, bz, bx, y1, bz, ax, y0, az, bx, y1, bz, ax, y1, az);
    W.uv.push(uOff, vOff, uOff + u, vOff, uOff + u, vOff + v, uOff, vOff, uOff + u, vOff + v, uOff, vOff + v);
    for (let i = 0; i < 6; i++) { W.nor.push(nx, 0, nz); W.col.push(color.r, color.g, color.b); }
  }

  // One box tier of a building (axis aligned), with windowed walls, a roof and a collider.
  function tier(x, z, hx, hz, y0, y1, style, hex) {
    const W = walls[style];
    col.set(hex);
    const uo = Math.floor(rng() * TILE) / TILE, vo = Math.floor(rng() * TILE) / TILE;
    wallQuad(W, x - hx, z + hz, x + hx, z + hz, y0, y1, 0, 1, col, uo, vo);
    wallQuad(W, x + hx, z + hz, x + hx, z - hz, y0, y1, 1, 0, col, uo, vo);
    wallQuad(W, x + hx, z - hz, x - hx, z - hz, y0, y1, 0, -1, col, uo, vo);
    wallQuad(W, x - hx, z - hz, x - hx, z + hz, y0, y1, -1, 0, col, uo, vo);
    const roof = new THREE.Color(hex).multiplyScalar(0.5).lerp(new THREE.Color('#5c6068'), 0.5);
    roofs.box(x, y1 - 0.05, z, hx * 2, 0.1, hz * 2, roof.getHex());
    roofs.box(x, y1 - 0.03, z, hx * 2 - 3, 0.1, hz * 2 - 3, roof.clone().multiplyScalar(1.25).getHex());
    colliders.add({ x, z, hx, hz, y0: y0 - 3, y1, kind: 'building' });
    roofList.push({ x, z, hx, hz, y: y1 });
  }

  function building(x, z, hx, hz, h, ring) {
    const tall = h > 70;
    const style = tall ? (rng() < 0.7 ? 'B' : 'A') : rng() < 0.16 ? 'B' : 'A';
    const pal = style === 'A' ? WALL_A : WALL_B;
    const hex = pal[Math.floor(rng() * pal.length)];
    if (tall && Math.min(hx, hz) > 12 && rng() < 0.75) {
      const h1 = h * (0.5 + rng() * 0.25);
      tier(x, z, hx, hz, Y, Y + h1, style, hex);
      const inset = 4 + rng() * 4;
      tier(x, z, hx - inset, hz - inset, Y + h1, Y + h, style, hex);
      if (rng() < 0.4) {
        const in2 = inset + 4 + rng() * 3, h3 = 10 + rng() * 22;
        if (Math.min(hx, hz) - in2 > 4) {
          tier(x, z, hx - in2, hz - in2, Y + h, Y + h + h3, style, hex);
          return { x, z, hx: hx - in2, hz: hz - in2, top: Y + h + h3 };
        }
      }
      return { x, z, hx: hx - inset, hz: hz - inset, top: Y + h };
    }
    tier(x, z, hx, hz, Y, Y + h, style, hex);
    return { x, z, hx, hz, top: Y + h };
  }

  const tops = [];
  const ground = { pos: [], uv: [], idx: [] };
  const U = (CITY.pitch - CITY.street) / 2 - 4; // usable half extent inside a block
  for (let j = 0; j < CITY.n; j++) {
    for (let i = 0; i < CITY.n; i++) {
      const cx = CITY.x0 + (i + 0.5) * CITY.pitch, cz = CITY.z0 + (j + 0.5) * CITY.pitch;
      const ring = Math.max(Math.abs(i - 4), Math.abs(j - 4));
      const key = `${i},${j}`;
      const isPark = key === '2,6' || key === '7,3';
      const isPlaza = key === '6,6' || key === '1,2';
      // ground cell
      const b = ground.pos.length / 3, h = CITY.pitch / 2, u0 = isPark ? 0.5 : 0;
      ground.pos.push(cx - h, Y, cz - h, cx + h, Y, cz - h, cx - h, Y, cz + h, cx + h, Y, cz + h);
      ground.uv.push(u0 + 0.001, 1, u0 + 0.499, 1, u0 + 0.001, 0, u0 + 0.499, 0);
      ground.idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3);
      if (isPark) { parks.push({ x: cx, z: cz, r: U }); continue; }
      if (isPlaza) { rampSpots.push({ x: cx, z: cz, y: Y, plaza: true }); continue; }
      if (ring === 0) {
        // Aurora Tower, the landmark with a rooftop helipad
        const hex = '#8fb7cf';
        tier(cx, cz, 27, 27, Y, Y + 70, 'B', hex);
        tier(cx, cz, 21, 21, Y + 70, Y + 170, 'B', hex);
        tier(cx, cz, 15, 15, Y + 170, Y + 246, 'B', hex);
        pads.push({ x: cx, z: cz, y: Y + 246, r: 10, name: 'Aurora Tower' });
        beacons.push([cx + 14, Y + 248, cz + 14], [cx - 14, Y + 248, cz - 14]);
        tops.push({ x: cx, z: cz, hx: 15, hz: 15, top: Y + 246, ring });
        continue;
      }
      const r = rng();
      const hRange = ring === 1 ? [88, 190] : ring === 2 ? [34, 92] : ring === 3 ? [11, 34] : [8, 20];
      const H = () => hRange[0] + rng() * (hRange[1] - hRange[0]);
      const g = 2.5; // half gap between buildings sharing a block
      let made = [];
      if ((ring === 1 && r < 0.5) || (ring === 2 && r < 0.25)) {
        const s = U - rng() * 5;
        made.push(building(cx, cz, s, s, H() * 1.1, ring));
      } else if ((ring <= 2 && r < 0.7) || (ring > 2 && r < 0.3)) {
        const w = U / 2 - g / 2;
        if (rng() < 0.5) { made.push(building(cx - w - g, cz, w, U, H(), ring), building(cx + w + g, cz, w, U, H(), ring)); }
        else { made.push(building(cx, cz - w - g, U, w, H(), ring), building(cx, cz + w + g, U, w, H(), ring)); }
      } else if (r < 0.86 || ring <= 2) {
        const w = U / 2 - g / 2;
        for (const sx of [-1, 1]) for (const sz of [-1, 1]) made.push(building(cx + sx * (w + g), cz + sz * (w + g), w, w, H() * (0.7 + rng() * 0.5), ring));
      } else {
        const w = U / 2 - g / 2;
        made.push(building(cx, cz - w - g, U, w, H(), ring));
        for (const sx of [-1, 1]) made.push(building(cx + sx * (w + g), cz + w + g, w, w, H() * 0.8, ring));
      }
      for (const m of made) tops.push({ ...m, ring });
    }
  }

  // A few rooftop helipads on mid-rise buildings.
  const cand = tops.filter((t) => t.ring >= 1 && t.ring <= 2 && Math.min(t.hx, t.hz) >= 11).sort((a, b) => b.top - a.top);
  const padNames = ['Skyline Deck', 'Harbor View', 'Midtown Roof'];
  [cand[0], cand[Math.floor(cand.length / 2)], cand[cand.length - 2]].forEach((t, k) => {
    if (t) pads.push({ x: t.x, z: t.z, y: t.top, r: Math.min(9, Math.min(t.hx, t.hz) - 1.5), name: padNames[k] });
  });
  // Tall-building beacons
  for (const t of tops) if (t.top > 150 && t.ring > 0) beacons.push([t.x, t.top + 1.5, t.z]);

  const mats = {};
  for (const style of ['A', 'B']) {
    const W = walls[style];
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(W.pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(W.nor, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(W.uv, 2));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(W.col, 3));
    const tex = windowTextures(style, style === 'A' ? 5 : 9);
    const mat = new THREE.MeshLambertMaterial({ map: tex.map, emissiveMap: tex.emissiveMap, emissive: 0xffffff, emissiveIntensity: 1, vertexColors: true });
    mats[style] = mat;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.matrixAutoUpdate = false;
    group.add(mesh);
  }
  group.add(roofs.build());

  const gg = new THREE.BufferGeometry();
  gg.setAttribute('position', new THREE.Float32BufferAttribute(ground.pos, 3));
  gg.setAttribute('uv', new THREE.Float32BufferAttribute(ground.uv, 2));
  gg.setIndex(ground.idx);
  gg.computeVertexNormals();
  const gm = new THREE.Mesh(gg, new THREE.MeshLambertMaterial({ map: groundAtlas(), polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }));
  gm.receiveShadow = true;
  gm.matrixAutoUpdate = false;
  group.add(gm);

  return { group, mats, pads, rampSpots, beacons, parks, tops, roofList };
}
