import { Terrain, designHeight } from './terrain.js';
import { Roads, ROAD_LIFT } from './roads.js';
import { Colliders, STEP } from './colliders.js';
import { Sky } from './sky.js';
import { createWater } from './water.js';
import { buildCity } from './city.js';
import { buildProps } from './props.js';
import { buildGuide } from './guide.js';
import { AIR, CITY } from './layout.js';

// Builds the whole island and answers "what is under this point?" for the vehicle.
export class World {
  constructor(scene, renderer) {
    let pierZ = 960;
    while (pierZ < 1900 && designHeight(880, pierZ) > 0.3) pierZ += 4;
    this.pierZ = pierZ;
    this.roads = new Roads(designHeight, pierZ);
    this.terrain = new Terrain(this.roads.roads);
    this.colliders = new Colliders();
    this.terrainMesh = this.terrain.buildMesh();
    scene.add(this.terrainMesh);
    scene.add(this.roads.buildMeshes(this.terrain));
    scene.add(this.roads.buildBridges(this.colliders, this.terrain));
    this.city = buildCity(this.colliders);
    scene.add(this.city.group);
    this.props = buildProps({ terrain: this.terrain, roads: this.roads, colliders: this.colliders, city: this.city, pierZ });
    scene.add(this.props.group);
    this.guide = buildGuide();
    scene.add(this.guide.group);
    this.sky = new Sky(scene, renderer);
    this.water = createWater(this.terrain.buildHeightTexture());
    scene.add(this.water);
    this.rings = this.props.rings;
    this.chains = this.props.chains;
    this.pads = this.props.pads;
    this.ramps = this.props.ramps;
    this.spheres = this.props.spheres;
    this.time = 0;
  }

  // Highest drivable surface at (x, z) that is not above y + STEP.
  // out: { h, surf: 'road' | 'grass' | 'sand', box, water }
  ground(x, y, z, out) {
    const th = this.terrain.heightAt(x, z);
    let h = th, surf;
    if ((x > CITY.x0 && x < CITY.x1 && z > CITY.z0 && z < CITY.z1) || (x > AIR.x0 + 28 && x < AIR.x1 - 20 && z > AIR.z0 + 10 && z < AIR.z1 - 10)) {
      h += ROAD_LIFT;
      surf = 'road';
    } else {
      const w = this.roads.surfaceAt(x, z);
      h += ROAD_LIFT * w;
      surf = w > 0.5 ? 'road' : th < 3.6 ? 'sand' : 'grass';
    }
    out.box = null;
    const list = this.colliders.near(x, z);
    if (list) {
      for (let k = 0; k < list.length; k++) {
        const b = list[k], dx = x - b.x, dz = z - b.z;
        const lx = dx * b.c - dz * b.s;
        if (lx < -b.hx || lx > b.hx) continue;
        const lz = dx * b.s + dz * b.c;
        if (lz < -b.hz || lz > b.hz) continue;
        const top = Colliders.topAt(b, lz);
        if (top <= y + STEP && top > h) { h = top; out.box = b; surf = 'road'; }
      }
    }
    out.h = h;
    out.surf = surf;
    out.water = h < 0;
    return out;
  }

  update(dt, camera, focus) {
    this.time += dt;
    const sky = this.sky, v = sky.v;
    sky.update(dt, camera, focus);
    const u = this.water.material.uniforms;
    u.uTime.value = this.time;
    u.uSunDir.value.copy(v.sunDir);
    u.uSunColor.value.copy(v.sun).multiplyScalar(Math.min(1.2, v.sunI / 2.6));
    u.uDeep.value.copy(v.deep);
    u.uShallow.value.copy(v.shallow);
    u.uFoam.value.copy(v.foam);
    u.uHorizon.value.copy(v.horizon);
    u.uZenith.value.copy(v.zenith);
    u.uFogColor.value.copy(v.fog);
    u.uFogDensity.value = v.fogD;
    this.city.mats.A.emissiveIntensity = v.windows;
    this.city.mats.B.emissiveIntensity = v.windows * 0.8;
    this.props.update(dt, this.time, v.lamps);
    this.guide.update(dt, this.guideFocus || null, this.guideDim || 0);
  }
}
