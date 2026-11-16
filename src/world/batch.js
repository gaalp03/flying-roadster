import * as THREE from 'three';

// Collects many small coloured primitives into a single draw call.
export class Batch {
  constructor() {
    this.pos = [];
    this.nor = [];
    this.col = [];
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
    this._c = new THREE.Color();
    this._n3 = new THREE.Matrix3();
  }

  // Adds any geometry transformed by `matrix`; colour may be a hex or a function of the local vertex position.
  addGeometry(geo, matrix, color) {
    const g = geo.index ? geo.toNonIndexed() : geo;
    if (!g.attributes.normal) g.computeVertexNormals();
    const p = g.attributes.position, n = g.attributes.normal, v = this._v, c = this._c;
    this._n3.getNormalMatrix(matrix);
    const fn = typeof color === 'function' ? color : null;
    if (!fn) c.set(color);
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      if (fn) c.set(fn(v));
      v.applyMatrix4(matrix);
      this.pos.push(v.x, v.y, v.z);
      v.fromBufferAttribute(n, i).applyMatrix3(this._n3).normalize();
      this.nor.push(v.x, v.y, v.z);
      this.col.push(c.r, c.g, c.b);
    }
    return this;
  }

  matrix(x, y, z, sx = 1, sy = 1, sz = 1, yaw = 0, pitch = 0, roll = 0) {
    this._e.set(pitch, yaw, roll, 'YXZ');
    this._q.setFromEuler(this._e);
    return this._m.compose(this._v.set(x, y, z), this._q, this._s.set(sx, sy, sz)).clone();
  }

  box(x, y, z, sx, sy, sz, color, yaw = 0, pitch = 0, roll = 0) {
    return this.addGeometry(Batch.unitBox, this.matrix(x, y, z, sx, sy, sz, yaw, pitch, roll), color);
  }

  cyl(x, y, z, rTop, rBot, h, color, seg = 8, yaw = 0, pitch = 0, roll = 0) {
    const g = new THREE.CylinderGeometry(rTop, rBot, h, seg);
    return this.addGeometry(g, this.matrix(x, y, z, 1, 1, 1, yaw, pitch, roll), color);
  }

  // Quad from four [x, y, z] corners (counter-clockwise when seen from the front).
  quad(a, b, c, d, color) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1;
    nx /= l; ny /= l; nz /= l;
    const col = this._c.set(color);
    for (const p of [a, b, c, a, c, d]) {
      this.pos.push(p[0], p[1], p[2]);
      this.nor.push(nx, ny, nz);
      this.col.push(col.r, col.g, col.b);
    }
    return this;
  }

  build(material, shadows = true) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    const mesh = new THREE.Mesh(geo, material || new THREE.MeshLambertMaterial({ vertexColors: true }));
    mesh.castShadow = mesh.receiveShadow = shadows;
    mesh.matrixAutoUpdate = false;
    return mesh;
  }
}
Batch.unitBox = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
