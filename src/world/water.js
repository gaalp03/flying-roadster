import * as THREE from 'three';
import { SIZE } from './layout.js';

const vert = /* glsl */ `
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}`;

const frag = /* glsl */ `
uniform float uTime, uFogDensity, uSize;
uniform vec3 uSunDir, uSunColor, uDeep, uShallow, uHorizon, uZenith, uFogColor, uFoam;
uniform sampler2D uHeight;
varying vec3 vWorld;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x), mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
}
float waveH(vec2 p) {
  float t = uTime;
  float h = sin(dot(p, vec2(0.08, 0.05)) + t * 0.9) * 0.5;
  h += sin(dot(p, vec2(-0.045, 0.11)) + t * 1.2) * 0.35;
  h += sin(dot(p, vec2(0.21, -0.17)) + t * 1.9) * 0.14;
  h += (noise(p * 0.33 + vec2(t * 0.3, -t * 0.2)) - 0.5) * 0.4;
  return h;
}
void main() {
  vec2 p = vWorld.xz;
  vec3 toCam = cameraPosition - vWorld;
  float dist = length(toCam);
  vec3 V = toCam / dist;
  float e = 0.4 + dist * 0.004;
  float h0 = waveH(p), hx = waveH(p + vec2(e, 0.)), hz = waveH(p + vec2(0., e));
  float bump = mix(0.16, 0.7, smoothstep(2600., 120., dist));
  vec3 n = normalize(vec3((h0 - hx) * bump / e, 1.0, (h0 - hz) * bump / e));
  float fres = 0.03 + 0.97 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 R = reflect(-V, n);
  R.y = abs(R.y);
  vec3 sky = mix(uHorizon, uZenith, pow(clamp(R.y, 0., 1.), 0.5));
  float sd = max(dot(R, uSunDir), 0.);
  sky += uSunColor * pow(sd, 10.) * 0.28;

  vec2 uv = p / uSize + 0.5;
  float inside = step(0., uv.x) * step(uv.x, 1.) * step(0., uv.y) * step(uv.y, 1.);
  float th = texture2D(uHeight, uv).r * 32.0 - 16.0;
  float depth = mix(16.0, max(-th, 0.0), inside);
  vec3 body = mix(uShallow, uDeep, smoothstep(0.0, 8.0, depth));
  vec3 col = mix(body, sky, fres);
  col += uSunColor * (pow(sd, 420.) * 7.0 + pow(sd, 60.) * 0.35);

  float fl = depth + sin(uTime * 1.25 + p.x * 0.11 + p.y * 0.09) * 0.32 - noise(p * 0.55 + uTime * 0.2) * 0.55;
  float foam = smoothstep(1.25, 0.15, fl) * inside;
  col = mix(col, uFoam, foam * 0.85);

  float f = 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
  col = mix(col, uFogColor, f);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export function createWater(heightTex) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
      uTime: { value: 0 }, uSize: { value: SIZE }, uHeight: { value: heightTex }, uFogDensity: { value: 0.0002 },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) }, uSunColor: { value: new THREE.Color() },
      uDeep: { value: new THREE.Color() }, uShallow: { value: new THREE.Color() }, uFoam: { value: new THREE.Color() },
      uHorizon: { value: new THREE.Color() }, uZenith: { value: new THREE.Color() }, uFogColor: { value: new THREE.Color() },
    },
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(24000, 24000, 1, 1).rotateX(-Math.PI / 2), mat);
  mesh.frustumCulled = false;
  mesh.matrixAutoUpdate = false;
  return mesh;
}
