import * as THREE from 'three';
import { mulberry32, fbm } from '../util.js';
import { AIR, RUNWAY, LAUNCH, CITY, MOUNTAIN, BAY, CAPE, WINDHILL } from './layout.js';
import { ROAD_LIFT } from './roads.js';
import { Batch } from './batch.js';

const FONT = '"Barlow Condensed", "Arial Narrow", Arial, sans-serif';

function canvasTex(w, h, draw, opts = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (opts.repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function chevron(g, cx, cy, s) {
  g.beginPath();
  g.moveTo(cx - 50 * s, cy + 32 * s); g.lineTo(cx, cy - 18 * s); g.lineTo(cx + 50 * s, cy + 32 * s);
  g.lineTo(cx + 50 * s, cy + 6 * s); g.lineTo(cx, cy - 44 * s); g.lineTo(cx - 50 * s, cy + 6 * s);
  g.closePath();
  g.fill();
}

export function buildProps({ terrain, roads, colliders, city, pierZ }) {
  const group = new THREE.Group();
  const rng = mulberry32(4242);
  const solid = new Batch();   // lit, vertex-coloured static geometry
  const glow = new Batch();    // unlit emissive bits (lamps, LED strips)
  const ramps = [], pads = [...city.pads], rings = [], spheres = [], animated = [];
  const beacons = [...city.beacons, ...(roads.beaconPositions || [])];
  const tops = { kicker: { pos: [], uv: [], idx: [] }, launch: { pos: [], uv: [], idx: [] } };

  // ------------------------------------------------------------------ ramps
  function addRamp(d) {
    d.curve = d.curve || 1.6;
    const c = Math.cos(d.yaw), s = Math.sin(d.yaw), segs = 14, T = tops[d.launch ? 'launch' : 'kicker'];
    const W = (lx, ly, lz) => [d.x + lx * c + lz * s, d.baseY + ly, d.z - lx * s + lz * c];
    const prof = (t) => d.h * Math.pow(t, d.curve);
    const base = T.pos.length / 3, w = d.halfW, L = d.len, side = d.launch ? 0x1d1e24 : 0x30343c;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs, lz = -L / 2 + t * L, y = prof(t);
      T.pos.push(...W(-w, y, lz), ...W(w, y, lz));
      T.uv.push(0, (t * L) / 8, 1, (t * L) / 8);
      if (i > 0) {
        const a = base + (i - 1) * 2, b = base + i * 2;
        T.idx.push(a, b, a + 1, a + 1, b, b + 1);
        const z0 = lz - L / segs, y0 = prof((i - 1) / segs);
        solid.quad(W(-w, -3, z0), W(-w, -3, lz), W(-w, y, lz), W(-w, y0, z0), side);
        solid.quad(W(w, -3, lz), W(w, -3, z0), W(w, y0, z0), W(w, y, lz), side);
        // raised edge rails
        const pitch = -Math.atan2(y - y0, L / segs), len = Math.hypot(y - y0, L / segs) + 0.05;
        for (const sx of [-1, 1]) {
          const p = W(sx * (w - 0.16), (y + y0) / 2 + 0.1, (lz + z0) / 2);
          (d.launch ? glow : solid).box(p[0], p[1], p[2], 0.3, 0.22, len, d.launch ? (i % 2 ? 0xffe2c2 : 0xff4a3a) : (i % 2 ? 0xf5f1e6 : 0x2a2d33), d.yaw, pitch);
        }
      }
    }
    solid.quad(W(-w, -3, L / 2), W(w, -3, L / 2), W(w, d.h, L / 2), W(-w, d.h, L / 2), side);
    d.collider = colliders.add({ x: d.x, z: d.z, hx: w, hz: L / 2, yaw: d.yaw, y0: d.baseY - 3, y1: d.baseY, y2: d.baseY + d.h, curve: d.curve, kind: 'ramp', launch: !!d.launch, name: d.name });
    d.lipX = d.x + s * L / 2; d.lipZ = d.z + c * L / 2; d.lipY = d.baseY + d.h;
    ramps.push(d);
    return d;
  }

  const paved = AIR.y + ROAD_LIFT;
  addRamp({ ...LAUNCH, baseY: paved, launch: true, name: 'Proving Ground Launch' });
  // stunt park on the south apron
  addRamp({ x: -1400, z: 462, yaw: Math.PI / 2, len: 14, halfW: 5, h: 3, baseY: paved });
  addRamp({ x: -1310, z: 462, yaw: Math.PI / 2, len: 20, halfW: 5.5, h: 5.2, baseY: paved });
  addRamp({ x: -1196, z: 462, yaw: Math.PI / 2, len: 22, halfW: 6, h: 6, baseY: paved });
  addRamp({ x: -1104, z: 462, yaw: -Math.PI / 2, len: 22, halfW: 6, h: 6, baseY: paved });
  addRamp({ x: -960, z: 470, yaw: Math.PI / 2, len: 12, halfW: 4, h: 2.4, curve: 1.3, baseY: paved });
  addRamp({ x: -920, z: 470, yaw: -Math.PI / 2, len: 12, halfW: 4, h: 2.4, curve: 1.3, baseY: paved });
  addRamp({ x: -1500, z: 300, yaw: 0.9, len: 16, halfW: 5, h: 4, baseY: paved });

  // highway kickers on the right-hand lanes
  const coast = roads.roads[0];
  for (const [f, side, h] of [[0.045, 1, 3.4], [0.34, 1, 3.6], [0.46, -1, 3.2], [0.58, 1, 4], [0.72, -1, 3.4], [0.86, 1, 3.8], [0.95, -1, 3.2]]) {
    const p = coast.pts[Math.floor(f * coast.pts.length)];
    if (p.bridge) continue;
    const yaw = Math.atan2(p.tx, p.tz) + (side < 0 ? Math.PI : 0);
    addRamp({ x: p.x + p.nx * 4.6 * side, z: p.z + p.nz * 4.6 * side, yaw, len: 17, halfW: 3.7, h, baseY: p.y + ROAD_LIFT });
  }
  if (roads.bayBridge) {
    const b = roads.bayBridge;
    addRamp({ x: b.x + Math.cos(b.yaw) * -4.6, z: b.z - Math.sin(b.yaw) * -4.6, yaw: b.yaw + Math.PI, len: 15, halfW: 3.6, h: 3, baseY: b.y + ROAD_LIFT });
  }
  // summit send
  const sdx = CITY.x0 + 300 - MOUNTAIN.x, sdz = CITY.z0 + 300 - MOUNTAIN.z, sl = Math.hypot(sdx, sdz);
  addRamp({ x: MOUNTAIN.x + (sdx / sl) * 17, z: MOUNTAIN.z + (sdz / sl) * 17, yaw: Math.atan2(sdx, sdz), len: 30, halfW: 6.5, h: 6.5, curve: 1.8, baseY: MOUNTAIN.summitY, launch: true, name: 'Summit Send' });
  // city plazas and rooftops
  for (const spot of city.rampSpots) {
    const yaw = Math.atan2(CITY.x0 + 4.5 * CITY.pitch - spot.x, CITY.z0 + 4.5 * CITY.pitch - spot.z);
    addRamp({ x: spot.x, z: spot.z, yaw: Math.round(yaw / (Math.PI / 2)) * (Math.PI / 2), len: 20, halfW: 5.5, h: 5, baseY: spot.y });
    pads.push({ x: spot.x + 18, z: spot.z - 18, y: spot.y, r: 7, name: 'Plaza' });
  }
  const roofRamps = city.tops.filter((t) => t.ring >= 2 && t.ring <= 3 && Math.min(t.hx, t.hz) >= 11 && !city.pads.some((p) => p.x === t.x && p.z === t.z));
  for (let k = 0; k < 4 && k < roofRamps.length; k++) {
    const t = roofRamps[Math.floor((k + 0.5) * roofRamps.length / 4)];
    const toC = Math.atan2(CITY.x0 + 4.5 * CITY.pitch - t.x, CITY.z0 + 4.5 * CITY.pitch - t.z);
    const yaw = Math.round(toC / (Math.PI / 2)) * (Math.PI / 2), along = Math.abs(Math.sin(yaw)) > 0.5 ? t.hx : t.hz;
    addRamp({ x: t.x + Math.sin(yaw) * (along - 8.5), z: t.z + Math.cos(yaw) * (along - 8.5), yaw, len: 15, halfW: 4, h: 3.2, baseY: t.top });
  }

  // ------------------------------------------------------------------ pier, ferris wheel, pier launch
  {
    const px = 880, z0 = pierZ - 26, z1 = pierZ + 190, deck = 6.6;
    colliders.add({ x: px, z: (z0 + z1) / 2, hx: 8, hz: (z1 - z0) / 2, y0: deck - 1.2, y1: deck, kind: 'deck', quiet: true });
    solid.box(px, deck - 0.6, (z0 + z1) / 2, 16, 1.2, z1 - z0, 0xb98f66);
    solid.box(px, deck + 0.03, (z0 + z1) / 2, 12, 0.08, z1 - z0 - 2, 0xcaa37a);
    for (let z = z0 + 12; z < z1; z += 24) for (const sx of [-1, 1]) solid.box(px + sx * 6.5, (deck - 8) / 2 - 0.6, z, 1.1, deck + 8, 1.1, 0x6e5a48);
    for (let z = z0 + 6; z < z1 - 30; z += 12) for (const sx of [-1, 1]) {
      solid.box(px + sx * 7.7, deck + 1.9, z, 0.18, 3.8, 0.18, 0x3a3d44);
      glow.box(px + sx * 7.7, deck + 3.9, z, 0.5, 0.5, 0.5, 0xffd9a0);
    }
    // approach from the beach
    const startY = Math.max(terrain.heightAt(px, z0 - 16), 1);
    colliders.add({ x: px, z: z0 - 8, hx: 8, hz: 8.2, y0: startY - 3, y1: startY, y2: deck, kind: 'ramp', quiet: true });
    solid.box(px, (startY + deck) / 2 - 0.45, z0 - 8, 16, 0.9, 16.6, 0xb98f66, 0, -Math.atan2(deck - startY, 16));
    addRamp({ x: px, z: z1 - 17, yaw: 0, len: 30, halfW: 6, h: 6.5, curve: 1.8, baseY: deck, launch: true, name: 'Pier Launch' });
    // ferris wheel on a side platform
    const fx = px + 30, fz = pierZ + 70, R = 27, cy = deck + R + 5;
    colliders.add({ x: fx, z: fz, hx: 22, hz: 14, y0: deck - 1.2, y1: deck, kind: 'deck', quiet: true });
    solid.box(fx, deck - 0.6, fz, 44, 1.2, 28, 0xb98f66);
    for (const sz of [-1, 1]) {
      for (const sx of [-1, 1]) solid.box(fx + sx * 8, (deck + cy) / 2, fz + sz * 3, 0.9, Math.hypot(cy - deck, 16) + 1, 0.9, 0xf2ede2, 0, 0, sx * Math.atan2(16, cy - deck));
    }
    for (const sx of [-1, 1]) colliders.add({ x: fx + sx * 13, z: fz, hx: 3, hz: 3.6, y0: deck, y1: deck + 11, kind: 'prop' });
    const wheel = new THREE.Group();
    const wb = new Batch(), wg = new Batch();
    for (const sz of [-1.6, 1.6]) {
      wb.addGeometry(new THREE.TorusGeometry(R, 0.35, 5, 40), wb.matrix(0, 0, sz), 0xf2ede2);
      wb.addGeometry(new THREE.TorusGeometry(R * 0.55, 0.22, 4, 32), wb.matrix(0, 0, sz), 0xf2ede2);
    }
    const cabs = ['#e5484d', '#f2a33a', '#3aa6c9', '#f2ede2'];
    for (let k = 0; k < 16; k++) {
      const a = (k / 16) * Math.PI * 2;
      wb.box(Math.cos(a) * R / 2, Math.sin(a) * R / 2, 0, R, 0.2, 0.2, 0xf2ede2, 0, 0, a);
      wg.box(Math.cos(a) * R, Math.sin(a) * R, 0, 0.5, 0.5, 3.6, k % 2 ? 0xffc27a : 0xff6a5a);
    }
    wheel.add(wb.build(null, false), wg.build(new THREE.MeshBasicMaterial({ vertexColors: true }), false));
    wheel.children.forEach((m) => { m.matrixAutoUpdate = true; });
    const cabins = [];
    for (let k = 0; k < 16; k++) {
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.4, 2.2), new THREE.MeshLambertMaterial({ color: cabs[k % 4] }));
      wheel.add(cab);
      cabins.push(cab);
    }
    wheel.position.set(fx, cy, fz);
    group.add(wheel);
    animated.push((dt, t) => {
      wheel.rotation.z = t * 0.07;
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        cabins[k].position.set(Math.cos(a) * R, Math.sin(a) * R - 1.9, 0);
        cabins[k].rotation.z = -wheel.rotation.z;
      }
    });
    spheres.push({ x: fx, y: cy, z: fz, r: 3.5, name: 'wheel hub' });
  }

  // ------------------------------------------------------------------ proving ground
  {
    const y = paved;
    const runwayTex = canvasTex(4096, 128, (g, w, h) => {
      g.fillStyle = '#454850';
      g.fillRect(0, 0, w, h);
      for (let i = 0; i < 14000; i++) { const v = 62 + Math.random() * 30; g.fillStyle = `rgba(${v},${v + 2},${v + 8},0.35)`; g.fillRect(Math.random() * w, Math.random() * h, 3, 2); }
      g.fillStyle = '#ece9df';
      g.fillRect(0, 5, w, 3); g.fillRect(0, h - 8, w, 3);
      for (let x = 240; x < w - 700; x += 150) g.fillRect(x, h / 2 - 2, 80, 4);
      for (let k = 0; k < 8; k++) g.fillRect(40, 14 + k * 13.2, 120, 7);
      // launch chevrons leading to the ramp
      for (let k = 0; k < 7; k++) {
        g.fillStyle = k % 2 ? '#ece9df' : '#ff4a3a';
        g.save();
        g.translate(w - 640 + k * 84, h / 2);
        g.beginPath();
        g.moveTo(0, -50); g.lineTo(34, 0); g.lineTo(0, 50); g.lineTo(26, 50); g.lineTo(60, 0); g.lineTo(26, -50);
        g.closePath(); g.fill();
        g.restore();
      }
    });
    const rw = new THREE.Mesh(new THREE.PlaneGeometry(RUNWAY.x1 - RUNWAY.x0, RUNWAY.halfW * 2).rotateX(-Math.PI / 2), new THREE.MeshLambertMaterial({ map: runwayTex, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 }));
    rw.position.set((RUNWAY.x0 + RUNWAY.x1) / 2, y, RUNWAY.z);
    const apronTex = canvasTex(256, 256, (g) => {
      g.fillStyle = '#a9a69d';
      g.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 1500; i++) { const v = 150 + Math.random() * 40; g.fillStyle = `rgba(${v},${v},${v - 8},0.25)`; g.fillRect(Math.random() * 256, Math.random() * 256, 3, 3); }
      g.strokeStyle = 'rgba(60,60,60,0.35)'; g.lineWidth = 2;
      g.strokeRect(0, 0, 256, 256);
    }, { repeat: true });
    const apronMat = new THREE.MeshLambertMaterial({ map: apronTex, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4 });
    const x0 = AIR.x0 + 28, x1 = AIR.x1 - 20;
    for (const [za, zb] of [[AIR.z0 + 10, RUNWAY.z - RUNWAY.halfW], [RUNWAY.z + RUNWAY.halfW, AIR.z1 - 10]]) {
      const geo = new THREE.PlaneGeometry(x1 - x0, zb - za).rotateX(-Math.PI / 2);
      const uv = geo.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (x1 - x0) / 24, uv.getY(i) * (zb - za) / 24);
      const m = new THREE.Mesh(geo, apronMat);
      m.position.set((x0 + x1) / 2, y, (za + zb) / 2);
      m.receiveShadow = true;
      group.add(m);
    }
    // filler strips beside the runway ends
    for (const [xa, xb] of [[x0, RUNWAY.x0], [RUNWAY.x1, x1]]) {
      const geo = new THREE.PlaneGeometry(xb - xa, RUNWAY.halfW * 2).rotateX(-Math.PI / 2);
      const uv = geo.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (xb - xa) / 24, uv.getY(i) * RUNWAY.halfW / 12);
      const m = new THREE.Mesh(geo, apronMat);
      m.position.set((xa + xb) / 2, y, RUNWAY.z);
      m.receiveShadow = true;
      group.add(m);
    }
    rw.receiveShadow = true;
    group.add(rw);
    // runway edge lights
    for (let x = RUNWAY.x0 + 10; x < RUNWAY.x1; x += 28) for (const s of [-1, 1]) glow.box(x, y + 0.2, RUNWAY.z + s * (RUNWAY.halfW + 1.2), 0.5, 0.4, 0.5, x > RUNWAY.x1 - 200 ? 0xff5a3c : 0xffe7b8);

    // fly-through hangar (open at both ends, runs east-west)
    const hx = -1250, hz = 296, hl = 76, hw = 17, hh = 15;
    for (const s of [-1, 1]) {
      colliders.add({ x: hx, z: hz + s * (hw + 0.7), hx: hl / 2, hz: 0.9, y0: y - 2, y1: y + hh, kind: 'building' });
      solid.box(hx, y + hh / 2, hz + s * (hw + 0.7), hl, hh, 1.6, 0xd9d4c7);
      solid.box(hx, y + 1.1, hz + s * (hw + 1.56), hl, 2.2, 0.12, 0xc9483a);
    }
    colliders.add({ x: hx, z: hz, hx: hl / 2, hz: hw + 1.6, y0: y + hh, y1: y + hh + 5.5, kind: 'building' });
    const arch = new THREE.CylinderGeometry(hw + 1.6, hw + 1.6, hl, 14, 1, false, 0, Math.PI);
    solid.addGeometry(arch, solid.matrix(hx, y + hh, hz, 0.32, 1, 1, 0, 0, Math.PI / 2), 0xbfc5c9);
    for (let k = -3; k <= 3; k++) glow.box(hx + k * 10, y + hh - 0.3, hz, 1.6, 0.25, 0.5, 0xfff1d0);
    // closed hangars
    for (const cx of [-1432, -1085]) {
      colliders.add({ x: cx, z: 286, hx: 30, hz: 20, y0: y - 2, y1: y + 15, kind: 'building' });
      solid.box(cx, y + 7.5, 286, 60, 15, 40, 0xd9d4c7);
      solid.box(cx, y + 15.6, 286, 61, 1.2, 41, 0xbfc5c9);
      solid.box(cx, y + 5.5, 306.1, 42, 11, 0.3, 0x8d949c);
      solid.box(cx, y + 12.6, 306.15, 60, 1, 0.3, 0xc9483a);
    }
    // control tower
    colliders.add({ x: -985, z: 282, hx: 4, hz: 4, y0: y - 2, y1: y + 30, kind: 'building' });
    colliders.add({ x: -985, z: 282, hx: 6.5, hz: 6.5, y0: y + 30, y1: y + 36.5, kind: 'building' });
    solid.box(-985, y + 15, 282, 8, 30, 8, 0xe9e4d8);
    solid.box(-985, y + 30.6, 282, 13.6, 1.2, 13.6, 0xc9483a);
    solid.box(-985, y + 33, 282, 12.4, 3.6, 12.4, 0x7fb9c9);
    solid.box(-985, y + 35.6, 282, 14, 1.6, 14, 0xe9e4d8);
    beacons.push([-985, y + 39, 282]);
    pads.push({ x: -915, z: 300, y, r: 9, name: 'Proving Ground' });
    // container stacks (near-miss playground)
    const cc = [0xc9483a, 0x2f7f9a, 0xe9a23b, 0x4c8c5a, 0xe9e4d8];
    for (let k = 0; k < 9; k++) {
      const x = -820 - (k % 3) * 22, z = 450 + Math.floor(k / 3) * 16, n = 1 + ((k * 7) % 3);
      for (let j = 0; j < n; j++) solid.box(x, y + 1.45 + j * 2.9, z, 12.2, 2.9, 2.6, cc[(k + j) % 5]);
      colliders.add({ x, z, hx: 6.1, hz: 1.3, y0: y - 1, y1: y + n * 2.9, kind: 'prop' });
    }
    // launch gantry and flood-light masts
    const gx = -690;
    for (const s of [-1, 1]) {
      solid.box(gx, y + 9, RUNWAY.z + s * 25, 1.4, 18, 1.4, 0x25272d);
      colliders.add({ x: gx, z: RUNWAY.z + s * 25, hx: 0.9, hz: 0.9, y0: y - 1, y1: y + 18, kind: 'prop' });
    }
    solid.box(gx, y + 17.2, RUNWAY.z, 2, 3.6, 52, 0x25272d);
    colliders.add({ x: gx, z: RUNWAY.z, hx: 1, hz: 26, y0: y + 15.4, y1: y + 19, kind: 'prop' });
    const signTex = canvasTex(1024, 96, (g, w, h) => {
      g.fillStyle = '#101115'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#ff4a3a'; g.fillRect(0, 0, w, 6); g.fillRect(0, h - 6, w, 6);
      g.font = `italic 700 62px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#fff3e0';
      g.fillText('FLIGHT  TEST   ›››   FULL  THROTTLE   ›››', w / 2, h / 2 + 3);
    });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(40, 3), new THREE.MeshBasicMaterial({ map: signTex }));
    sign.position.set(gx - 1.05, y + 17.2, RUNWAY.z);
    sign.rotation.y = -Math.PI / 2;
    group.add(sign);
    for (const [mx, mz] of [[-610, 344], [-610, 416], [-545, 348], [-545, 412]]) {
      solid.box(mx, y + 11, mz, 0.7, 22, 0.7, 0x25272d);
      glow.box(mx, y + 22.4, mz, 1, 2.2, 4.4, 0xfff1d0, mz < RUNWAY.z ? 0.5 : -0.5);
      colliders.add({ x: mx, z: mz, hx: 0.6, hz: 0.6, y0: y - 1, y1: y + 23, kind: 'prop' });
    }
  }

  // ------------------------------------------------------------------ landmarks
  // lighthouse
  {
    const x = CAPE.x, z = CAPE.z, y = terrain.heightAt(x, z);
    for (let k = 0; k < 6; k++) solid.cyl(x, y + 3 + k * 6, z, 3.6 - k * 0.28 - 0.28, 3.6 - k * 0.28, 6, k % 2 ? 0xc9483a : 0xf2ede2, 10);
    solid.cyl(x, y + 36.4, z, 3.4, 3.4, 0.8, 0x30343c, 10);
    glow.addGeometry(new THREE.CylinderGeometry(1.8, 1.8, 3, 8), glow.matrix(x, y + 38.3, z), 0xfff1c0);
    solid.addGeometry(new THREE.ConeGeometry(2.6, 2.6, 8), solid.matrix(x, y + 41.1, z), 0xc9483a);
    colliders.add({ x, z, hx: 3.4, hz: 3.4, y0: y - 3, y1: y + 42, kind: 'building' });
    const beamGeo = new THREE.CylinderGeometry(0.6, 9, 150, 10, 1, true).rotateX(Math.PI / 2).translate(0, 0, 75);
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xfff1c0, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    const beam = new THREE.Group();
    const b1 = new THREE.Mesh(beamGeo, beamMat), b2 = new THREE.Mesh(beamGeo, beamMat);
    b2.rotation.y = Math.PI;
    beam.add(b1, b2);
    beam.position.set(x, y + 38.3, z);
    group.add(beam);
    animated.push((dt, t, lamps) => { beam.rotation.y = t * 0.5; beamMat.opacity = 0.03 + 0.1 * Math.min(lamps, 1.5); beam.visible = lamps > 0.05; });
    pads.push({ x: x + 22, z: z + 4, y: terrain.heightAt(x + 22, z + 4), r: 7, name: 'Lighthouse Cape' });
  }
  // summit observatory + pad
  {
    const x = MOUNTAIN.x - 27, z = MOUNTAIN.z + 6, y = MOUNTAIN.summitY;
    solid.cyl(x, y + 3, z, 8, 8.4, 6, 0xe9e4d8, 12);
    solid.addGeometry(new THREE.SphereGeometry(8, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), solid.matrix(x, y + 6, z), (v) => (Math.abs(v.x) < 1.2 && v.z > 0 ? 0x30343c : 0xf7f3ea));
    colliders.add({ x, z, hx: 7.4, hz: 7.4, y0: y - 3, y1: y + 13, kind: 'building' });
    solid.box(MOUNTAIN.x - 6, y + 14, MOUNTAIN.z - 36, 0.5, 28, 0.5, 0xc9483a);
    colliders.add({ x: MOUNTAIN.x - 6, z: MOUNTAIN.z - 36, hx: 0.5, hz: 0.5, y0: y - 2, y1: y + 28, kind: 'prop' });
    beacons.push([MOUNTAIN.x - 6, y + 28.6, MOUNTAIN.z - 36]);
    pads.push({ x: MOUNTAIN.x + 2, z: MOUNTAIN.z - 22, y, r: 8, name: 'Mount Ember Summit' });
  }
  // wind turbines
  {
    const blades = new THREE.Group();
    const hubMat = new THREE.MeshLambertMaterial({ color: 0xf7f3ea });
    const blade = new THREE.BoxGeometry(1.5, 27, 0.4).translate(0, 14.5, 0);
    for (let k = 0; k < 7; k++) {
      const a = k * 0.9 + 0.4, d = 70 + ((k * 97) % 230);
      const x = WINDHILL.x + Math.cos(a) * d, z = WINDHILL.z + Math.sin(a) * d, y = terrain.heightAt(x, z);
      if (y < 4) continue;
      solid.cyl(x, y + 31, z, 1.1, 2, 62, 0xf7f3ea, 8);
      colliders.add({ x, z, hx: 1.6, hz: 1.6, y0: y - 3, y1: y + 62, kind: 'prop' });
      const rotor = new THREE.Group();
      const nac = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.4, 6), hubMat);
      for (let b = 0; b < 3; b++) { const m = new THREE.Mesh(blade, hubMat); m.rotation.z = (b / 3) * Math.PI * 2; rotor.add(m); }
      rotor.position.set(0, 0, 3.4);
      const head = new THREE.Group();
      head.add(nac, rotor);
      head.position.set(x, y + 62.5, z);
      head.rotation.y = 2.2;
      blades.add(head);
      const speed = 0.7 + (k % 3) * 0.18;
      animated.push((dt, t) => { rotor.rotation.z = t * speed + k; });
      beacons.push([x, y + 64.5, z]);
    }
    group.add(blades);
    const wy = terrain.heightAt(WINDHILL.x, WINDHILL.z);
    pads.push({ x: WINDHILL.x, z: WINDHILL.z, y: wy, r: 8, name: 'Wind Farm' });
  }
  // landing barge anchored in the bay
  {
    const x = BAY.x + 30, z = BAY.z - 190, top = 3.6;
    colliders.add({ x, z, hx: 30, hz: 13, y0: -4, y1: top, kind: 'deck', quiet: true });
    solid.box(x, top / 2 - 2, z, 60, top + 4, 26, 0x2b2e35);
    solid.box(x, top + 0.02, z, 58, 0.1, 24, 0x3d4149);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) glow.box(x + sx * 29, top + 0.5, z + sz * 12, 0.6, 1, 0.6, 0xffc27a);
    pads.push({ x, z, y: top, r: 10, name: 'Bay Barge', bonus: 1.5 });
  }
  // sailboats and hot-air balloons
  {
    const sail = new Batch();
    sail.box(0, 0.5, 0, 2.6, 1.3, 8, 0xf2ede2);
    sail.box(0, 6.5, -0.4, 0.2, 11, 0.2, 0x6e5a48);
    sail.quad([0, 1.8, -0.7], [0, 1.8, -4.4], [0, 11.5, -0.7], [0, 11.5, -0.7], 0xfdf8ee);
    sail.quad([0, 11.5, -0.7], [0, 1.8, -4.4], [0, 1.8, -0.7], [0, 1.8, -0.7], 0xfdf8ee);
    sail.quad([0, 1.8, -0.1], [0, 10.5, -0.1], [0, 1.8, 3.6], [0, 1.8, 3.6], 0xff8a5c);
    sail.quad([0, 1.8, 3.6], [0, 10.5, -0.1], [0, 1.8, -0.1], [0, 1.8, -0.1], 0xff8a5c);
    const boatGeo = sail.build().geometry, boatMat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const spots = [[BAY.x - 90, BAY.z + 120], [BAY.x + 120, BAY.z + 330], [BAY.x - 30, BAY.z - 40], [BAY.x + 60, BAY.z + 560], [BAY.x - 150, BAY.z + 640], [1240, 1500], [300, 1640], [-1500, 1100], [1640, 200]];
    spots.forEach(([x, z], k) => {
      if (terrain.heightAt(x, z) > -3) return;
      const boat = new THREE.Mesh(boatGeo, boatMat);
      boat.position.set(x, 0, z);
      boat.rotation.y = k * 1.7;
      group.add(boat);
      animated.push((dt, t) => { boat.position.y = Math.sin(t * 0.9 + k) * 0.25; boat.rotation.z = Math.sin(t * 0.7 + k * 2) * 0.05; });
    });
    const stripes = [['#e5484d', '#fdf3df'], ['#f2a33a', '#2f7f9a'], ['#7c5cc4', '#fdf3df'], ['#2f9a7a', '#f2d23a'], ['#e5484d', '#f2a33a']];
    const bspots = [[BAY.x + 40, 150, BAY.z - 380], [640, 210, 60], [260, 130, 1300], [-620, 170, -260], [1340, 160, -480]];
    bspots.forEach(([x, y, z], k) => {
      const bb = new Batch();
      const [c1, c2] = stripes[k];
      const env = new THREE.SphereGeometry(10, 12, 8);
      bb.addGeometry(env, bb.matrix(0, 0, 0, 1, 1.15, 1), (v) => (Math.floor((Math.atan2(v.z, v.x) / (Math.PI * 2) + 0.5) * 12) % 2 ? c1 : c2));
      bb.addGeometry(new THREE.CylinderGeometry(5.2, 1.6, 6, 12, 1, true), bb.matrix(0, -12.4, 0), (v) => (Math.floor((Math.atan2(v.z, v.x) / (Math.PI * 2) + 0.5) * 12) % 2 ? c1 : c2));
      bb.box(0, -17.4, 0, 2.2, 1.8, 2.2, 0x8a6a4a);
      const balloon = bb.build(new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide }), false);
      balloon.matrixAutoUpdate = true;
      balloon.position.set(x, y, z);
      group.add(balloon);
      const sph = { x, y, z, r: 11.5, name: 'balloon' };
      spheres.push(sph);
      animated.push((dt, t) => { sph.y = y + Math.sin(t * 0.15 + k * 2) * 9; balloon.position.y = sph.y; balloon.rotation.y = t * 0.03 + k; });
    });
  }

  // ------------------------------------------------------------------ rings
  const chains = [];
  function chain(name, pts, r = 8) {
    const id = chains.length;
    chains.push({ name, count: pts.length, id });
    pts.forEach((p, i) => {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
      const dir = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]).normalize();
      rings.push({ pos: new THREE.Vector3(p[0], p[1], p[2]), dir, r, chain: id, index: i, cooldown: 0, pulse: 0 });
    });
  }
  chain('Liftoff Line', [[-440, 50, 380], [-310, 66, 384], [-170, 76, 394], [-30, 78, 410], [120, 72, 430], [280, 68, 452], [430, 78, 470]], 9);
  const sx = (k) => CITY.x0 + k * CITY.pitch, sz = (k) => CITY.z0 + k * CITY.pitch, cy = CITY.y;
  chain('Downtown Slalom', [[sx(3), cy + 38, sz(0) + 30], [sx(3), cy + 50, sz(2)], [sx(3), cy + 62, sz(4)], [sx(3) + 28, cy + 66, sz(5) - 12], [sx(4) + 20, cy + 70, sz(5)],
    [sx(6) - 20, cy + 74, sz(5)], [sx(6), cy + 68, sz(5) - 30], [sx(6), cy + 56, sz(3)], [sx(6), cy + 44, sz(1)]], 7.5);
  if (roads.bayBridge) {
    const b = roads.bayBridge, fx = Math.sin(b.yaw), fz = Math.cos(b.yaw);
    chain('Bridge Thread', [-0.44, -0.23, 0, 0.23, 0.44].map((f) => [b.x + fx * f * b.len, b.y + 14 + (Math.abs(f) < 0.3 ? 1 : 0), b.z + fz * f * b.len]), 7.5);
    // cross under the deck halfway between the two piers nearest to mid-span
    const piers = colliders.boxes.filter((c) => c.kind === 'pier' && Math.hypot(c.x - b.x, c.z - b.z) < 140).sort((p, q) => Math.hypot(p.x - b.x, p.z - b.z) - Math.hypot(q.x - b.x, q.z - b.z));
    const ux = piers.length > 1 ? (piers[0].x + piers[1].x) / 2 : b.x + fx * 22, uz = piers.length > 1 ? (piers[0].z + piers[1].z) / 2 : b.z + fz * 22;
    chain('Under the Deck', [[ux - fz * 150, 6.5, uz + fx * 150], [ux - fz * 60, 6, uz + fx * 60], [ux, 6, uz], [ux + fz * 70, 6.5, uz - fx * 70], [ux + fz * 160, 9, uz - fx * 160]], 5.6);
  }
  {
    const summit = roads.roads.find((r) => r.id === 'summit');
    const pts = [];
    for (let k = 1; k <= 9; k++) { const p = summit.pts[Math.floor((k / 10) * summit.pts.length)]; pts.push([p.x, p.y + 20, p.z]); }
    pts.push([MOUNTAIN.x, MOUNTAIN.summitY + 34, MOUNTAIN.z]);
    chain('Summit Climb', pts, 9);
  }
  {
    const pts = [];
    for (let k = 0; k < 8; k++) {
      const a = 0.25 + k * 0.2;
      let d = 900;
      while (d < 2100 && terrain.heightAt(Math.cos(a) * d, Math.sin(a) * d) > -1.5) d += 15;
      pts.push([Math.cos(a) * (d + 70), 7.5, Math.sin(a) * (d + 70)]);
    }
    chain('Coast Skimmer', pts, 7);
  }
  chain('Hangar Run', [[-1420, AIR.y + 26, 330], [-1330, AIR.y + 9.5, 296], [-1250, AIR.y + 8, 296], [-1170, AIR.y + 9.5, 296], [-1060, AIR.y + 30, 330]], 6.2);
  {
    const pts = [];
    for (let k = 0; k < 9; k++) { const a = (k / 9) * Math.PI * 2; pts.push([260 + Math.cos(a) * 430, 420 + Math.sin(a * 2) * 40, 60 + Math.sin(a) * 430]); }
    chain('Cloud Nine', pts, 10);
  }

  const ringGeo = new THREE.TorusGeometry(1, 0.055, 6, 36);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false });
  const ringMesh = new THREE.InstancedMesh(ringGeo, ringMat, rings.length);
  ringMesh.frustumCulled = false;
  const haloGeo = new THREE.RingGeometry(0.72, 1.0, 36);
  const haloMat = new THREE.MeshBasicMaterial({ color: 0x66e8ff, transparent: true, opacity: 0.07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  const haloMesh = new THREE.InstancedMesh(haloGeo, haloMat, rings.length);
  haloMesh.frustumCulled = false;
  group.add(ringMesh, haloMesh);
  const rm = new THREE.Matrix4(), rq = new THREE.Quaternion(), rs = new THREE.Vector3(), rc = new THREE.Color(), zAxis = new THREE.Vector3(0, 0, 1);
  const ON = new THREE.Color(0.55, 3.0, 3.9), OFF = new THREE.Color(0.1, 0.16, 0.22), HOT = new THREE.Color(5, 4.4, 2.8);
  function updateRings(dt) {
    for (let i = 0; i < rings.length; i++) {
      const r = rings[i];
      if (r.cooldown > 0) r.cooldown -= dt;
      r.pulse = Math.max(0, r.pulse - dt * 1.6);
      const s = r.r * (1 + r.pulse * 0.5);
      rq.setFromUnitVectors(zAxis, r.dir);
      rm.compose(r.pos, rq, rs.set(s, s, s));
      ringMesh.setMatrixAt(i, rm);
      haloMesh.setMatrixAt(i, rm);
      rc.copy(r.cooldown > 0 ? OFF : ON).lerp(HOT, r.pulse);
      ringMesh.setColorAt(i, rc);
      haloMesh.setColorAt(i, r.cooldown > 0 ? OFF : ON);
    }
    ringMesh.instanceMatrix.needsUpdate = true;
    haloMesh.instanceMatrix.needsUpdate = true;
    ringMesh.instanceColor.needsUpdate = true;
    haloMesh.instanceColor.needsUpdate = true;
  }
  updateRings(0);

  // ------------------------------------------------------------------ ramp surfaces, pads
  const kickTex = canvasTex(128, 128, (g) => {
    g.fillStyle = '#f0702e'; g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#d95c20'; g.fillRect(0, 0, 128, 3);
    g.fillStyle = '#fff3e0'; chevron(g, 64, 70, 0.9);
  }, { repeat: true });
  const launchTex = canvasTex(128, 128, (g) => {
    g.fillStyle = '#17181d'; g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#24262d'; g.fillRect(0, 0, 128, 3);
    g.fillStyle = '#7a2b25'; chevron(g, 64, 70, 0.95);
  }, { repeat: true });
  const launchGlow = canvasTex(128, 128, (g) => {
    g.fillStyle = '#000'; g.fillRect(0, 0, 128, 128);
    g.fillStyle = '#ff5a40'; chevron(g, 64, 70, 0.95);
  }, { repeat: true });
  const launchMat = new THREE.MeshLambertMaterial({ map: launchTex, emissiveMap: launchGlow, emissive: 0xffffff, emissiveIntensity: 1.6 });
  for (const [key, mat] of [['kicker', new THREE.MeshLambertMaterial({ map: kickTex })], ['launch', launchMat]]) {
    const T = tops[key], geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(T.pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(T.uv, 2));
    geo.setIndex(T.idx);
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, mat);
    m.castShadow = m.receiveShadow = true;
    m.matrixAutoUpdate = false;
    group.add(m);
  }

  const padTex = canvasTex(256, 256, (g) => {
    g.clearRect(0, 0, 256, 256);
    g.strokeStyle = '#fff3e0'; g.lineWidth = 12;
    g.beginPath(); g.arc(128, 128, 116, 0, 7); g.stroke();
    g.strokeStyle = '#ff5a40'; g.lineWidth = 8;
    g.beginPath(); g.arc(128, 128, 74, 0, 7); g.stroke();
    g.fillStyle = '#fff3e0';
    g.beginPath(); g.arc(128, 128, 18, 0, 7); g.fill();
    for (let k = 0; k < 4; k++) { g.save(); g.translate(128, 128); g.rotate(k * Math.PI / 2); g.fillRect(-5, -108, 10, 26); g.restore(); }
  });
  const padMat = new THREE.MeshBasicMaterial({ map: padTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -8 });
  for (const p of pads) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(p.r, 28).rotateX(-Math.PI / 2), padMat);
    m.position.set(p.x, p.y + 0.06, p.z);
    m.matrixAutoUpdate = false;
    m.updateMatrix();
    m.renderOrder = 2;
    group.add(m);
    p.done = false;
  }

  // ------------------------------------------------------------------ trees
  {
    const near = new Set();
    for (const road of roads.roads) for (const p of road.pts) {
      const r = road.halfW + 16;
      for (let x = Math.floor((p.x - r) / 16); x <= Math.floor((p.x + r) / 16); x++) for (let z = Math.floor((p.z - r) / 16); z <= Math.floor((p.z + r) / 16); z++) near.add(x * 4096 + z);
    }
    const palm = new Batch(), pine = new Batch(), round = new Batch();
    for (let k = 0; k < 4; k++) palm.cyl(k * 0.22, 1 + k * 1.9, 0, 0.2 - k * 0.02, 0.26 - k * 0.02, 2.1, k % 2 ? 0x8a6a4a : 0x7b5d41, 5, 0, 0, -0.12);
    for (let k = 0; k < 7; k++) { const a = (k / 7) * Math.PI * 2; palm.box(0.75 + Math.sin(a) * 1.5, 7.6, Math.cos(a) * 1.5, 0.9, 0.1, 3.4, k % 2 ? 0x4f9a4a : 0x3f8744, a, 0.42); }
    pine.cyl(0, 0.9, 0, 0.22, 0.3, 1.8, 0x6b4f3a, 5);
    [[2.6, 2.0, 3.0, 0x2f6a40], [4.3, 1.5, 2.6, 0x377547], [5.8, 1.0, 2.2, 0x3f8250]].forEach(([y, r, h, c]) => pine.addGeometry(new THREE.ConeGeometry(r, h, 6), pine.matrix(0, y, 0), c));
    round.cyl(0, 1.2, 0, 0.22, 0.3, 2.4, 0x6b4f3a, 5);
    round.addGeometry(new THREE.IcosahedronGeometry(2.3, 0), round.matrix(0, 4, 0, 1, 0.9, 1), 0x5f9d4c);
    round.addGeometry(new THREE.IcosahedronGeometry(1.5, 0), round.matrix(1.2, 3.3, 0.6), 0x6aa955);
    const lists = { palm: [], pine: [], round: [] };
    const n3 = new THREE.Vector3();
    for (let i = 0; i < 26000; i++) {
      const x = (rng() - 0.5) * 3700, z = (rng() - 0.5) * 3700, y = terrain.heightAt(x, z);
      if (y < 2.4 || y > 215) continue;
      if (x > CITY.x0 - 34 && x < CITY.x1 + 34 && z > CITY.z0 - 34 && z < CITY.z1 + 34) continue;
      if (x > AIR.x0 - 6 && x < AIR.x1 + 14 && z > AIR.z0 - 6 && z < AIR.z1 + 6) continue;
      if (near.has(Math.floor(x / 16) * 4096 + Math.floor(z / 16))) continue;
      if (Math.hypot(x - CAPE.x, z - CAPE.z) < 34 || Math.hypot(x - 880, z - pierZ) < 40) continue;
      if (terrain.normalAt(x, z, n3).y < 0.84) continue;
      const patch = fbm(x * 0.0045 + 4, z * 0.0045 - 2, 3, 91);
      let type;
      if (y < 8.5) { if (rng() > 0.2) continue; type = 'palm'; }
      else if (y < 42) { if (rng() > (patch - 0.38) * 3.2) continue; type = rng() < 0.12 ? 'palm' : 'round'; }
      else { if (rng() > (patch - 0.3) * 3.4) continue; type = y > 70 || rng() < 0.6 ? 'pine' : 'round'; }
      lists[type].push([x, y, z]);
    }
    for (const park of city.parks) {
      for (let k = 0; k < 22; k++) {
        const x = park.x + (rng() - 0.5) * 2 * (park.r - 2), z = park.z + (rng() - 0.5) * 2 * (park.r - 2);
        if (Math.hypot(x - park.x, z - park.z) < 13) continue;
        lists.round.push([x, CITY.y + ROAD_LIFT, z]);
      }
    }
    const treeMat = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), col = new THREE.Color();
    const treeMeshes = [];
    for (const [type, batch] of [['palm', palm], ['pine', pine], ['round', round]]) {
      const list = lists[type];
      const inst = new THREE.InstancedMesh(batch.build().geometry, treeMat, list.length);
      list.forEach(([x, y, z], i) => {
        const s = (type === 'palm' ? 0.95 : type === 'pine' ? 1.25 : 1.05) * (0.75 + rng() * 0.7);
        q.setFromEuler(e.set((rng() - 0.5) * 0.08, rng() * Math.PI * 2, (rng() - 0.5) * 0.08));
        m4.compose(n3.set(x, y - 0.15, z), q, new THREE.Vector3(s, s * (0.85 + rng() * 0.35), s));
        inst.setMatrixAt(i, m4);
        inst.setColorAt(i, col.setScalar(0.82 + rng() * 0.36));
      });
      inst.castShadow = true;
      inst.receiveShadow = false;
      inst.frustumCulled = false;
      group.add(inst);
      treeMeshes.push(inst);
    }
    group.userData.trees = treeMeshes;
  }

  // ------------------------------------------------------------------ finalize
  group.add(solid.build());
  const glowMat = new THREE.MeshBasicMaterial({ vertexColors: true });
  group.add(glow.build(glowMat, false));

  const bGeo = new THREE.BufferGeometry();
  bGeo.setAttribute('position', new THREE.Float32BufferAttribute(beacons.flat(), 3));
  const beaconMat = new THREE.PointsMaterial({ color: 0xff3a2a, size: 7, sizeAttenuation: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
  const beaconPts = new THREE.Points(bGeo, beaconMat);
  beaconPts.frustumCulled = false;
  group.add(beaconPts);

  return {
    group, ramps, pads, rings, chains, spheres, launchMat, glowMat,
    update(dt, t, lamps) {
      for (const fn of animated) fn(dt, t, lamps);
      updateRings(dt);
      const blink = Math.pow(Math.max(0, Math.sin(t * 3.2)), 6);
      beaconMat.opacity = (0.25 + 0.75 * blink) * Math.min(1, 0.35 + lamps);
      beaconMat.color.setRGB(6, 0.8, 0.5);
      glowMat.color.setScalar(0.8 + lamps * 1.9);
      launchMat.emissiveIntensity = 0.9 + lamps * 1.6;
    },
  };
}
