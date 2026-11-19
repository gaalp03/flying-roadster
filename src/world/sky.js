import * as THREE from 'three';
import { lerp, mulberry32 } from '../util.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { SUN_AZIMUTH } from './layout.js';

// Time-of-day presets. Colours are sRGB hex, converted to linear when applied.
export const TIMES = {
  sunset: {
    label: 'Golden hour', elev: 0.2, az: SUN_AZIMUTH,
    sun: '#ffae6b', sunI: 2.9, hemiSky: '#b4c0ee', hemiGround: '#c79a78', hemiI: 1.7,
    zenith: '#25427f', mid: '#e88f78', horizon: '#ffcf96', glow: '#ff9a4d', disc: 9,
    fog: '#eeb48e', fogD: 0.000205, deep: '#144a63', shallow: '#3fa7a3', foam: '#ffe9d6',
    cloud: '#ffd9c2', cloudDark: '#c97f86', exposure: 1.0, windows: 0.85, stars: 0, bloom: 0.5, bloomT: 2.3, lamps: 1,
  },
  day: {
    label: 'Clear day', elev: 0.86, az: SUN_AZIMUTH - 0.5,
    sun: '#fff3de', sunI: 2.7, hemiSky: '#bcd4ff', hemiGround: '#a39d84', hemiI: 1.2,
    zenith: '#2a66c4', mid: '#78b1ea', horizon: '#d3e9f7', glow: '#fff1cf', disc: 9,
    fog: '#cfe3f3', fogD: 0.00015, deep: '#0f5c8a', shallow: '#3fc2bb', foam: '#ffffff',
    cloud: '#ffffff', cloudDark: '#b9c8de', exposure: 0.95, windows: 0.12, stars: 0, bloom: 0.32, bloomT: 2.8, lamps: 0,
  },
  night: {
    label: 'Night flight', elev: 0.62, az: SUN_AZIMUTH + 2.1,
    sun: '#9fb6ff', sunI: 0.8, hemiSky: '#4a5c9c', hemiGround: '#232838', hemiI: 0.95,
    zenith: '#040817', mid: '#0c1736', horizon: '#263763', glow: '#5a6fb5', disc: 3.5,
    fog: '#141d3a', fogD: 0.00019, deep: '#050f24', shallow: '#123a55', foam: '#b7c8ee',
    cloud: '#3a4672', cloudDark: '#1a2140', exposure: 1.15, windows: 2.3, stars: 1, bloom: 0.75, bloomT: 1.0, lamps: 1.6,
  },
};
export const TIME_ORDER = ['sunset', 'day', 'night'];

const COLOR_KEYS = ['sun', 'hemiSky', 'hemiGround', 'zenith', 'mid', 'horizon', 'glow', 'fog', 'deep', 'shallow', 'foam', 'cloud', 'cloudDark'];
const NUM_KEYS = ['elev', 'az', 'sunI', 'hemiI', 'disc', 'fogD', 'exposure', 'windows', 'stars', 'bloom', 'bloomT', 'lamps'];

const skyVert = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;

const skyFrag = /* glsl */ `
uniform vec3 uZenith, uMid, uHorizon, uGlow, uSunDir, uSunColor, uFog;
uniform float uDisc, uStars;
varying vec3 vDir;
float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
void main() {
  vec3 d = normalize(vDir);
  float y = max(d.y, 0.0);
  float t = pow(y, 0.52);
  vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.34, t));
  col = mix(col, uZenith, smoothstep(0.22, 0.95, t));
  float sd = max(dot(d, uSunDir), 0.0);
  float horizonBand = 1.0 - smoothstep(0.0, 0.38, y);
  col += uGlow * (pow(sd, 5.0) * 0.42 * (0.35 + horizonBand) + pow(sd, 40.0) * 0.5);
  col += uSunColor * (smoothstep(0.99935, 0.9997, sd) * uDisc + pow(sd, 900.0) * 1.6);
  if (uStars > 0.01) {
    vec3 sp = d * 170.0, g = floor(sp), f = fract(sp) - 0.5;
    float h = hash(g);
    float tw = step(0.9968, h) * smoothstep(0.4, 0.04, length(f)) * smoothstep(0.02, 0.25, d.y);
    col += vec3(0.85, 0.92, 1.0) * tw * uStars * (1.2 + 2.6 * hash(g + 7.0));
  }
  col = mix(col, uFog, smoothstep(0.0, -0.06, d.y));
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class Sky {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.v = { sunDir: new THREE.Vector3() };
    for (const k of COLOR_KEYS) this.v[k] = new THREE.Color();
    this.from = null;
    this.to = null;
    this.t = 1;
    this.name = 'sunset';

    this.uniforms = {
      uZenith: { value: this.v.zenith }, uMid: { value: this.v.mid }, uHorizon: { value: this.v.horizon },
      uGlow: { value: this.v.glow }, uSunDir: { value: this.v.sunDir }, uSunColor: { value: this.v.sun },
      uFog: { value: this.v.fog }, uDisc: { value: 8 }, uStars: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({ vertexShader: skyVert, fragmentShader: skyFrag, uniforms: this.uniforms, side: THREE.BackSide, depthWrite: false, depthTest: true, fog: false });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), mat);
    this.dome.frustumCulled = false;
    this.dome.renderOrder = -10;
    scene.add(this.dome);

    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = true;
    const s = this.sun.shadow;
    s.mapSize.set(2048, 2048);
    s.camera.near = 1;
    s.camera.far = 520;
    s.bias = -0.0005;
    s.normalBias = 0.06;
    this.setShadowRange(70);
    scene.add(this.sun, this.sun.target);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x888888, 1);
    scene.add(this.hemi);
    scene.fog = new THREE.FogExp2(0xffffff, 0.0002);

    this.clouds = this.buildClouds();
    scene.add(this.clouds);

    // Environment map for the car paint, rendered from a copy of the dome.
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envScene = new THREE.Scene();
    const envDome = new THREE.Mesh(this.dome.geometry, mat);
    envDome.scale.setScalar(900);
    this.envScene.add(envDome);
    this.envRT = null;
    this.setTime('sunset', true);
  }

  setShadowRange(r) {
    const c = this.sun.shadow.camera;
    c.left = -r; c.right = r; c.top = r; c.bottom = -r;
    c.updateProjectionMatrix();
    this.shadowRange = r;
  }

  buildClouds() {
    const rng = mulberry32(77);
    const geo = new THREE.IcosahedronGeometry(1, 1);
    this.cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x000000, flatShading: true, fog: false });
    const blobs = [];
    for (let i = 0; i < 46; i++) {
      const a = rng() * Math.PI * 2, d = 500 + rng() * 3600;
      const cx = Math.cos(a) * d, cz = Math.sin(a) * d, cy = 380 + rng() * 380, size = 40 + rng() * 70;
      const n = 4 + Math.floor(rng() * 4);
      for (let k = 0; k < n; k++) {
        blobs.push({ x: cx + (rng() - 0.5) * size * 3.4, y: cy + (rng() - 0.3) * size * 0.4, z: cz + (rng() - 0.5) * size * 1.6, sx: size * (0.7 + rng() * 0.8), sy: size * (0.32 + rng() * 0.25), sz: size * (0.6 + rng() * 0.6), r: rng() * 3 });
      }
    }
    const mesh = new THREE.InstancedMesh(geo, this.cloudMat, blobs.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    blobs.forEach((b, i) => {
      q.setFromEuler(e.set(0, b.r, 0));
      m.compose(new THREE.Vector3(b.x, b.y, b.z), q, new THREE.Vector3(b.sx, b.sy, b.sz));
      mesh.setMatrixAt(i, m);
    });
    mesh.frustumCulled = false;
    return mesh;
  }

  setTime(name, instant = false) {
    const target = TIMES[name];
    if (!target) return;
    this.name = name;
    this.to = {};
    this.from = {};
    for (const k of COLOR_KEYS) {
      this.to[k] = new THREE.Color(target[k]);
      this.from[k] = this.v[k].clone();
    }
    for (const k of NUM_KEYS) {
      this.to[k] = target[k];
      this.from[k] = this.v[k] ?? target[k];
    }
    this.t = instant ? 1 : 0;
    if (this.studio) { this.t = 1; for (const k of COLOR_KEYS) this.v[k].copy(this.to[k]); for (const k of NUM_KEYS) this.v[k] = this.to[k]; this.from = this.to; this.refreshEnv(); this.scene.environment = this.studioEnv.texture; return; }
    this.apply(this.t);
    if (instant) this.refreshEnv();
  }

  apply(t) {
    const v = this.v, k = t * t * (3 - 2 * t);
    for (const c of COLOR_KEYS) v[c].copy(this.from[c]).lerp(this.to[c], k);
    for (const n of NUM_KEYS) v[n] = lerp(this.from[n], this.to[n], k);
    const ce = Math.cos(v.elev);
    v.sunDir.set(ce * Math.cos(v.az), Math.sin(v.elev), ce * Math.sin(v.az)).normalize();
    this.uniforms.uDisc.value = v.disc;
    this.uniforms.uStars.value = v.stars;
    this.sun.color.copy(v.sun);
    this.sun.intensity = v.sunI;
    this.hemi.color.copy(v.hemiSky);
    this.hemi.groundColor.copy(v.hemiGround);
    this.hemi.intensity = v.hemiI;
    this.scene.fog.color.copy(v.fog);
    this.scene.fog.density = v.fogD;
    this.cloudMat.color.copy(v.cloud);
    this.cloudMat.emissive.copy(v.cloudDark).multiplyScalar(0.55);
    this.renderer.toneMappingExposure = v.exposure;
  }

  refreshEnv() {
    const old = this.envRT;
    const disc = this.uniforms.uDisc.value;
    this.uniforms.uDisc.value = Math.min(disc, 4);
    this.envRT = this.pmrem.fromScene(this.envScene, 0.02, 1, 2000);
    this.uniforms.uDisc.value = disc;
    this.scene.environment = this.envRT.texture;
    if (old) old.dispose();
  }

  // Neutral studio lighting for the reveal hall (menu / garage); off restores the time of day.
  setStudio(on) {
    if (on === this.studio) return;
    this.studio = on;
    if (on) {
      if (!this.studioEnv) this.studioEnv = this.pmrem.fromScene(new RoomEnvironment(), 0.04);
      this.scene.environment = this.studioEnv.texture;
      this.scene.environmentIntensity = 0.5;
      this.sun.color.set(0xffffff); this.sun.intensity = 0.5;
      this.hemi.color.set(0xdfe6f2); this.hemi.groundColor.set(0x16171c); this.hemi.intensity = 0.45;
      this.renderer.toneMappingExposure = 0.92;
    } else {
      this.apply(this.t);
      this.scene.environmentIntensity = 1;
      if (this.envRT) this.scene.environment = this.envRT.texture;
    }
  }

  update(dt, camera, focus) {
    if (this.t < 1 && !this.studio) {
      this.t = Math.min(1, this.t + dt / 1.6);
      this.apply(this.t);
      if (this.t >= 1) this.refreshEnv();
    }
    this.dome.position.copy(camera.position);
    this.dome.scale.setScalar(camera.far * 0.9);
    this.clouds.rotation.y += dt * 0.0012;
    // Shadow frustum follows the focus point, snapped to shadow texels to avoid shimmer.
    const r = this.shadowRange, texel = (2 * r) / this.sun.shadow.mapSize.x;
    const tx = Math.round(focus.x / texel) * texel, ty = Math.round(focus.y / texel) * texel, tz = Math.round(focus.z / texel) * texel;
    this.sun.target.position.set(tx, ty, tz);
    this.sun.position.set(tx, ty, tz).addScaledVector(this.v.sunDir, 260);
  }
}
