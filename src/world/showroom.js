import * as THREE from 'three';

// Reveal hall used by the main menu and the garage. It sits far below the island, fully enclosed,
// so it never shows up during play. The car is only displayed here; physics stays on the island.
export const SHOW_Y = -400;
export const STAGE_TOP = SHOW_Y + 0.18;

export function buildShowroom() {
  const g = new THREE.Group();
  const basic = (r, gr, b) => new THREE.MeshBasicMaterial({ color: new THREE.Color(r, gr, b), fog: false });
  const floor = new THREE.Mesh(new THREE.CircleGeometry(42, 64).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x0b0c10, roughness: 0.2, metalness: 0.75, fog: false, envMapIntensity: 0.12 }));
  floor.receiveShadow = true;
  const stage = new THREE.Mesh(new THREE.CylinderGeometry(4.3, 4.5, 0.18, 64), new THREE.MeshStandardMaterial({ color: 0x1b1d24, roughness: 0.32, metalness: 0.7, fog: false, envMapIntensity: 0.12 }));
  stage.position.y = 0.09;
  stage.receiveShadow = true;
  g.userData.stage = stage;
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(42, 42, 26, 64, 1, true), new THREE.MeshBasicMaterial({ color: 0x07080b, side: THREE.BackSide, fog: false }));
  wall.position.y = 13;
  const roof = new THREE.Mesh(new THREE.CircleGeometry(42, 48).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x040507, fog: false }));
  roof.position.y = 26;
  g.add(floor, stage, wall, roof);
  // glowing rings on the stage edge, the floor and the ceiling
  const ring = (r, tube, y, mat) => { const m = new THREE.Mesh(new THREE.TorusGeometry(r, tube, 6, 96).rotateX(Math.PI / 2), mat); m.position.y = y; g.add(m); return m; };
  ring(4.42, 0.035, 0.19, basic(4.5, 4.1, 3.6));
  ring(9, 0.03, 0.02, basic(2.6, 0.22, 0.16));
  ring(16, 0.03, 0.02, basic(0.5, 0.5, 0.55));
  ring(8, 0.14, 13, basic(5, 4.7, 4.2));
  ring(15, 0.08, 16, basic(2.4, 2.3, 2.2));
  // vertical light blades around the hall
  const blade = new THREE.BoxGeometry(0.35, 15, 0.12);
  for (let k = 0; k < 24; k++) {
    const a = (k / 24) * Math.PI * 2, m = new THREE.Mesh(blade, k % 3 === 0 ? basic(3.2, 0.3, 0.22) : basic(1.5, 1.45, 1.4));
    m.position.set(Math.sin(a) * 40, 8.5, Math.cos(a) * 40);
    m.rotation.y = a;
    g.add(m);
  }
  // title wall
  const c = document.createElement('canvas');
  c.width = 2048; c.height = 384;
  const x = c.getContext('2d');
  x.fillStyle = '#07080b'; x.fillRect(0, 0, 2048, 384);
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#fff3e0';
  x.font = 'italic 700 250px "Barlow Condensed", "Arial Narrow", Arial, sans-serif';
  x.fillText('FLYING ROADSTER', 1024, 200);
  x.fillStyle = '#e2202c'; x.fillRect(250, 340, 1548, 14);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  for (const a of [0, Math.PI]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(40, 7.5), new THREE.MeshBasicMaterial({ map: tex, fog: false }));
    m.position.set(Math.sin(a) * -38, 11, Math.cos(a) * -38);
    m.rotation.y = a;
    g.add(m);
  }
  // neutral studio lights so the paint reads true whatever the time of day outside
  for (const [lx, ly, lz, i] of [[5, 9, 6, 150], [-7, 7, -4, 100], [0, 12, -9, 90]]) {
    const l = new THREE.PointLight(0xffffff, i, 45, 2);
    l.position.set(lx, ly, lz);
    g.add(l);
  }
  g.position.y = SHOW_Y;
  return g;
}
