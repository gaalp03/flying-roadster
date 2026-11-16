import { SIZE, CITY, RUNWAY } from './world/layout.js';

// Round heading-up minimap drawn from a pre-rendered image of the island.
export class Minimap {
  constructor(canvas, world) {
    this.canvas = canvas;
    this.world = world;
    this.ctx = canvas.getContext('2d');
    this.base = this.render(world);
    this.frame = 0;
  }

  render(world) {
    const S = 512, c = document.createElement('canvas');
    c.width = c.height = S;
    const g = c.getContext('2d'), t = world.terrain, N = t.n + 1;
    const img = g.createImageData(N, N), col = t.colors;
    for (let k = 0; k < N * N; k++) {
      const h = t.h[k];
      let r = col[k * 3], gr = col[k * 3 + 1], b = col[k * 3 + 2];
      if (h < 0) { r = 0.07; gr = 0.2; b = 0.3; } // water
      const sh = h < 0 ? 1 : 0.85 + Math.min(0.3, h / 600);
      img.data[k * 4] = Math.min(255, Math.sqrt(r) * 255 * sh * 0.8);
      img.data[k * 4 + 1] = Math.min(255, Math.sqrt(gr) * 255 * sh * 0.8);
      img.data[k * 4 + 2] = Math.min(255, Math.sqrt(b) * 255 * sh * 0.8);
      img.data[k * 4 + 3] = 255;
    }
    const tmp = document.createElement('canvas');
    tmp.width = tmp.height = N;
    tmp.getContext('2d').putImageData(img, 0, 0);
    g.imageSmoothingEnabled = true;
    g.drawImage(tmp, 0, 0, S, S);
    const m = (v) => ((v + SIZE / 2) / SIZE) * S;
    g.fillStyle = 'rgba(70,74,84,0.9)';
    g.fillRect(m(CITY.x0), m(CITY.z0), m(CITY.x1) - m(CITY.x0), m(CITY.z1) - m(CITY.z0));
    g.fillStyle = 'rgba(190,190,200,0.5)';
    for (const b of world.city.roofList) g.fillRect(m(b.x - b.hx), m(b.z - b.hz), (b.hx * 2 / SIZE) * S, (b.hz * 2 / SIZE) * S);
    g.fillStyle = '#3a3d45';
    g.fillRect(m(RUNWAY.x0), m(RUNWAY.z - RUNWAY.halfW), m(RUNWAY.x1) - m(RUNWAY.x0), (RUNWAY.halfW * 2 / SIZE) * S);
    g.lineCap = g.lineJoin = 'round';
    for (const pass of [0, 1]) {
      for (const road of world.roads.roads) {
        g.strokeStyle = pass ? '#f3ead8' : 'rgba(20,22,28,0.8)';
        g.lineWidth = (road.lanes === 4 ? 3.2 : 2.2) + (pass ? 0 : 1.6);
        g.beginPath();
        road.pts.forEach((p, i) => (i ? g.lineTo(m(p.x), m(p.z)) : g.moveTo(m(p.x), m(p.z))));
        if (road.closed) g.closePath();
        g.stroke();
      }
    }
    for (const r of world.ramps) {
      g.fillStyle = r.launch ? '#ff4a3a' : '#f0902e';
      g.beginPath(); g.arc(m(r.x), m(r.z), r.launch ? 4.2 : 2.6, 0, 7); g.fill();
    }
    g.strokeStyle = '#fff3e0'; g.lineWidth = 1.4;
    for (const p of world.pads) { g.beginPath(); g.arc(m(p.x), m(p.z), 3.2, 0, 7); g.stroke(); }
    return c;
  }

  draw(car) {
    if (this.frame++ % 2) return;
    const cv = this.canvas, g = this.ctx, W = cv.width, R = W / 2, S = this.base.width;
    const range = car.mode === 'fly' ? 620 : 380;
    this.range = this.range ? this.range + (range - this.range) * 0.06 : range;
    const scale = R / this.range / (S / SIZE);
    g.clearRect(0, 0, W, W);
    g.save();
    g.beginPath(); g.arc(R, R, R - 2, 0, 7); g.clip();
    g.fillStyle = '#12303f';
    g.fillRect(0, 0, W, W);
    g.translate(R, R);
    g.rotate(car.yaw + Math.PI);
    g.scale(scale, scale);
    const mx = ((car.pos.x + SIZE / 2) / SIZE) * S, mz = ((car.pos.z + SIZE / 2) / SIZE) * S;
    g.drawImage(this.base, -mx, -mz);
    // rings
    const k = S / SIZE;
    for (const r of this.world.rings) {
      if (r.cooldown > 0) continue;
      const dx = r.pos.x - car.pos.x, dz = r.pos.z - car.pos.z;
      if (dx * dx + dz * dz > this.range * this.range * 1.1) continue;
      g.fillStyle = '#5fe6ff';
      g.beginPath(); g.arc(dx * k, dz * k, 2.2 / scale, 0, 7); g.fill();
    }
    g.restore();
    // car arrow
    g.save();
    g.translate(R, R);
    g.fillStyle = '#ff3b30'; g.strokeStyle = '#fff'; g.lineWidth = W * 0.012;
    const a = W * 0.055;
    g.beginPath(); g.moveTo(0, -a * 1.3); g.lineTo(a, a); g.lineTo(0, a * 0.5); g.lineTo(-a, a); g.closePath();
    g.fill(); g.stroke();
    g.restore();
    g.strokeStyle = 'rgba(255,255,255,0.28)'; g.lineWidth = W * 0.02;
    g.beginPath(); g.arc(R, R, R - W * 0.012, 0, 7); g.stroke();
  }
}
