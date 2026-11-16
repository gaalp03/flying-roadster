// Static world colliders: yaw-rotated boxes with an optionally sloped/curved top (ramps, roofs, bridge decks).
export const STEP = 0.55; // highest ledge the car treats as drivable ground

export class Colliders {
  constructor() {
    this.boxes = [];
    this.cell = 64;
    this.grid = new Map();
  }

  // b: { x, z, hx, hz, yaw, y0 (bottom), y1 (top at local -z end), y2 (top at local +z end), curve, kind, ... }
  add(b) {
    b.yaw = b.yaw || 0;
    b.c = Math.cos(b.yaw);
    b.s = Math.sin(b.yaw);
    if (b.y2 === undefined) b.y2 = b.y1;
    b.curve = b.curve || 1;
    b.top = Math.max(b.y1, b.y2);
    b.id = this.boxes.length;
    this.boxes.push(b);
    const ex = Math.abs(b.c) * b.hx + Math.abs(b.s) * b.hz, ez = Math.abs(b.s) * b.hx + Math.abs(b.c) * b.hz;
    const pad = 6;
    const i0 = Math.floor((b.x - ex - pad) / this.cell), i1 = Math.floor((b.x + ex + pad) / this.cell);
    const j0 = Math.floor((b.z - ez - pad) / this.cell), j1 = Math.floor((b.z + ez + pad) / this.cell);
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const key = i * 4096 + j;
        let list = this.grid.get(key);
        if (!list) this.grid.set(key, (list = []));
        list.push(b);
      }
    }
    return b;
  }

  near(x, z) {
    return this.grid.get(Math.floor(x / this.cell) * 4096 + Math.floor(z / this.cell));
  }

  static topAt(b, lz) {
    if (b.y1 === b.y2) return b.y1;
    let t = (lz + b.hz) / (2 * b.hz);
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return b.y1 + (b.y2 - b.y1) * (b.curve === 1 ? t : Math.pow(t, b.curve));
  }
}
