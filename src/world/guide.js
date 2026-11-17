import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { AIR, LAUNCH, SPAWN } from './layout.js';
import { ROAD_LIFT } from './roads.js';

// Segmented ring (unit radius, facing +z) so a spinning ring actually reads as spinning.
export function dashedRingGeo(dashes = 8, fill = 0.62, tube = 0.045) {
  const parts = [], step = (Math.PI * 2) / dashes;
  for (let i = 0; i < dashes; i++) {
    const g = new THREE.TorusGeometry(1, tube, 5, 10, step * fill);
    g.rotateZ(i * step);
    parts.push(g);
  }
  const m = mergeGeometries(parts);
  parts.forEach((p) => p.dispose());
  return m;
}

const GATES = 6;
const HOT = new THREE.Color(5, 4.6, 3.6);

// Runway guidance that leads a new player from the spawn point to the launch ramp:
// spinning gates with a light wave running toward the ramp, scrolling chevrons on the tarmac
// and a beacon with a light beam above the ramp that can be seen from anywhere on the island.
export function buildGuide() {
  const group = new THREE.Group();
  const y = AIR.y + ROAD_LIFT, z = LAUNCH.z;
  const rampStart = LAUNCH.x - LAUNCH.len / 2;
  const gates = [];
  for (let i = 0; i < GATES; i++) {
    const x = SPAWN.x + 70 + ((rampStart - 90 - SPAWN.x - 70) * i) / (GATES - 1);
    gates.push({ x, y: y + 6.6, z, r: 6.2, pulse: 0 });
  }

  // gates: an outer and an inner segmented ring per gate, counter-rotating
  const outerGeo = dashedRingGeo(10, 0.7, 0.05), innerGeo = dashedRingGeo(5, 0.42, 0.075);
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false, toneMapped: true });
  const outer = new THREE.InstancedMesh(outerGeo, mat, GATES), inner = new THREE.InstancedMesh(innerGeo, mat, GATES);
  outer.frustumCulled = inner.frustumCulled = false;
  group.add(outer, inner);

  // scrolling chevrons along the centre line
  const c = document.createElement('canvas');
  c.width = 128; c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.beginPath();
  g.moveTo(34, 6); g.lineTo(70, 32); g.lineTo(34, 58); g.lineTo(52, 58); g.lineTo(88, 32); g.lineTo(52, 6);
  g.closePath(); g.fill();
  const chevTex = new THREE.CanvasTexture(c);
  chevTex.wrapS = THREE.RepeatWrapping;
  chevTex.anisotropy = 8;
  const len = rampStart - 8 - (SPAWN.x + 30), cw = 6;
  chevTex.repeat.set(len / (cw * 3), 1);
  const chevMat = new THREE.MeshBasicMaterial({ map: chevTex, color: new THREE.Color(1.5, 0.42, 0.1), transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, polygonOffset: true, polygonOffsetFactor: -2 });
  const chev = new THREE.Mesh(new THREE.PlaneGeometry(len, cw).rotateX(-Math.PI / 2), chevMat);
  chev.position.set(SPAWN.x + 30 + len / 2, y + 0.05, z);
  group.add(chev);

  // beacon above the ramp: spinning down arrow, a flat spinning halo and a tall light beam
  const bx = LAUNCH.x, bz = LAUNCH.z, by = y + LAUNCH.h + 17;
  const beacon = new THREE.Group();
  beacon.position.set(bx, by, bz);
  const arrowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(4.2, 1.3, 0.5), fog: false });
  const arrow = new THREE.Mesh(new THREE.ConeGeometry(2.4, 4.6, 4, 1).rotateX(Math.PI), arrowMat);
  const halo = new THREE.Mesh(dashedRingGeo(12, 0.55, 0.04).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(3.4, 3.1, 2.6), fog: false }));
  halo.scale.setScalar(5.2);
  beacon.add(arrow, halo);
  const beamTex = (() => {
    const bc = document.createElement('canvas');
    bc.width = 4; bc.height = 128;
    const bg = bc.getContext('2d'), gr = bg.createLinearGradient(0, 0, 0, 128);
    gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(0.75, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,1)');
    bg.fillStyle = gr; bg.fillRect(0, 0, 4, 128);
    return new THREE.CanvasTexture(bc);
  })();
  const beamMat = new THREE.MeshBasicMaterial({ map: beamTex, color: new THREE.Color(1.5, 0.55, 0.25), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.6, 220, 12, 1, true), beamMat);
  beam.position.set(bx, by + 2 + 110, bz);
  group.add(beacon, beam);

  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), qs = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), col = new THREE.Color();
  const face = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(1, 0, 0)), axis = new THREE.Vector3(0, 0, 1);
  let lastX = null, time = 0;
  const guide = {
    group, gates, passed: -1,
    update(dt, focus, dim) {
      time += dt;
      guide.passed = -1;
      if (focus && lastX != null) {
        for (let i = 0; i < GATES; i++) {
          const gt = gates[i];
          if ((lastX - gt.x) * (focus.x - gt.x) <= 0 && lastX !== focus.x && Math.hypot(focus.y + 0.6 - gt.y, focus.z - gt.z) < gt.r) { gt.pulse = 1; guide.passed = i; }
        }
      }
      lastX = focus ? focus.x : null;
      const glow = 1 - dim * 0.55;
      for (let i = 0; i < GATES; i++) {
        const gt = gates[i];
        gt.pulse = Math.max(0, gt.pulse - dt * 1.4);
        // a light wave runs from the spawn toward the ramp
        const wave = Math.pow(Math.max(0, Math.sin(time * 3.1 - i * 0.85)), 6);
        const k = (0.6 + wave * 1.6) * glow, sc = gt.r * (1 + gt.pulse * 0.35);
        col.setRGB(2.6 * k, 0.55 * k, 0.16 * k).lerp(HOT, gt.pulse);
        p.set(gt.x, gt.y, gt.z);
        q.copy(face).multiply(qs.setFromAxisAngle(axis, time * 0.9 + i * 0.5));
        outer.setMatrixAt(i, m.compose(p, q, s.set(sc, sc, sc)));
        outer.setColorAt(i, col);
        q.copy(face).multiply(qs.setFromAxisAngle(axis, -time * 1.7 - i * 0.5));
        inner.setMatrixAt(i, m.compose(p, q, s.setScalar(sc * 0.86)));
        inner.setColorAt(i, col);
      }
      for (const im of [outer, inner]) im.instanceMatrix.needsUpdate = true;
      outer.instanceColor.needsUpdate = inner.instanceColor.needsUpdate = true;
      chevTex.offset.x = -(time * 0.9) % 1;
      chevMat.opacity = 0.85 * glow;
      arrow.rotation.y = time * 1.6;
      halo.rotation.y = -time * 0.7;
      beacon.position.y = by + Math.sin(time * 2.2) * 0.9;
      const blink = 0.7 + 0.3 * Math.sin(time * 4.4);
      arrowMat.color.setRGB(4.2 * blink, 1.3 * blink, 0.5 * blink);
      beamMat.opacity = 0.75 * glow;
    },
  };
  guide.update(0, null, 0);
  return guide;
}
