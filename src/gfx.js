import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const TIERS = {
  low: { ratio: 1, bloom: false, shadows: 0, msaa: 0, treeShadows: false, trees: 0.4 },
  medium: { ratio: 1.5, bloom: true, shadows: 1024, msaa: 0, treeShadows: false, trees: 0.7 },
  high: { ratio: 2, bloom: true, shadows: 2048, msaa: 4, treeShadows: true, trees: 1 },
};

// Owns the WebGL renderer, post-processing chain and the quality / dynamic resolution logic.
// Radial zoom blur used for the lift-off punch.
const RADIAL = {
  uniforms: { tDiffuse: { value: null }, uStrength: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform sampler2D tDiffuse; uniform float uStrength; varying vec2 vUv;
    void main() {
      vec2 d = vUv - vec2(0.5, 0.52);
      float r = length(d);
      vec4 acc = vec4(0.0);
      float amt = uStrength * 0.11 * smoothstep(0.08, 0.6, r);
      for (int i = 0; i < 10; i++) acc += texture2D(tDiffuse, vUv - d * amt * (float(i) / 9.0));
      acc /= 10.0;
            gl_FragColor = acc;
    }`,
};

export class Gfx {
  constructor(canvas) {
    this.canvas = canvas;
    const r = (this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', stencil: false }));
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    this.mobile = matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
    this.setting = 'auto';
    this.tierName = this.mobile ? 'medium' : 'high';
    this.scale = 1;       // dynamic resolution multiplier
    this.composer = null;
    this.frameAcc = 0; this.frameN = 0; this.slowStreak = 0; this.fastStreak = 0;
    this.bloomStrength = 0.5;
    this.radial = 0;
    this.w = 1; this.h = 1;
  }

  get tier() { return TIERS[this.tierName]; }

  init(scene, camera, world) {
    this.scene = scene;
    this.camera = camera;
    this.world = world;
    this.apply();
  }

  setQuality(setting) {
    this.setting = setting;
    this.tierName = setting === 'auto' ? (this.mobile ? 'medium' : 'high') : setting;
    this.scale = 1;
    this.slowStreak = this.fastStreak = 0;
    if (this.scene) this.apply();
  }

  apply() {
    const t = this.tier, r = this.renderer, sun = this.world.sky.sun;
    r.shadowMap.enabled = t.shadows > 0;
    sun.castShadow = t.shadows > 0;
    if (t.shadows && sun.shadow.mapSize.x !== t.shadows) {
      sun.shadow.mapSize.set(t.shadows, t.shadows);
      if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
    }
    for (const m of this.world.props.group.userData.trees || []) {
      m.castShadow = t.treeShadows;
      m.count = Math.round(m.userData.full * t.trees); // thin the forests out on weaker devices
    }
    this.scene.traverse((o) => { if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; for (const m of ms) m.needsUpdate = true; } });
    if (this.composer) { this.composer.dispose(); this.composer = null; }
    if (t.bloom) {
      const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: t.msaa });
      const c = (this.composer = new EffectComposer(r, rt));
      c.addPass(new RenderPass(this.scene, this.camera));
      this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), this.bloomStrength, 0.6, 1.0);
      // clamp what feeds the blur so a single hot specular pixel cannot blow up (or NaN) the whole frame
      const hp = this.bloom.materialHighPassFilter;
      hp.fragmentShader = hp.fragmentShader.replace('gl_FragColor = mix( outputColor, texel, alpha );', 'vec4 safe = mix( outputColor, texel, alpha ); if ( any( isnan( safe ) ) || any( isinf( safe ) ) ) safe = vec4( 0.0 ); gl_FragColor = min( safe, vec4( 4.5 ) );');
      hp.needsUpdate = true;
      c.addPass(this.bloom);
      this.radialPass = new ShaderPass(RADIAL);
      this.radialPass.enabled = false;
      c.addPass(this.radialPass);
      c.addPass(new OutputPass());
    }
    this.resize(true);
  }

  resize(force) {
    const w = this.canvas.clientWidth || innerWidth, h = this.canvas.clientHeight || innerHeight;
    const ratio = Math.min(devicePixelRatio || 1, this.tier.ratio) * this.scale;
    if (!force && w === this.w && h === this.h && ratio === this.ratio) return;
    this.w = w; this.h = h; this.ratio = ratio;
    this.renderer.setPixelRatio(ratio);
    this.renderer.setSize(w, h, false);
    if (this.composer) { this.composer.setPixelRatio(ratio); this.composer.setSize(w, h); }
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // Feed real frame times; in auto mode the resolution (then the tier) adapts to hold ~60 fps.
  adapt(dtReal) {
    if (this.setting !== 'auto' || dtReal > 0.25) return;
    this.frameAcc += dtReal; this.frameN++;
    if (this.frameAcc < 1.5) return;
    const avg = this.frameAcc / this.frameN;
    this.frameAcc = 0; this.frameN = 0;
    if (avg > 1 / 48) { this.slowStreak++; this.fastStreak = 0; } else if (avg < 1 / 57) { this.fastStreak++; this.slowStreak = 0; } else { this.slowStreak = this.fastStreak = 0; }
    if (this.slowStreak >= 2) {
      this.slowStreak = 0;
      if (this.scale > 0.72) { this.scale = Math.max(0.7, this.scale - 0.15); this.resize(true); }
      else if (this.tierName === 'high') { this.tierName = 'medium'; this.scale = 1; this.apply(); }
      else if (this.tierName === 'medium') { this.tierName = 'low'; this.scale = 1; this.apply(); }
      else if (this.scale > 0.55) { this.scale = 0.55; this.resize(true); }
    } else if (this.fastStreak >= 6 && this.scale < 1) {
      this.fastStreak = 0;
      this.scale = Math.min(1, this.scale + 0.15);
      this.resize(true);
    }
  }

  render() {
    this.resize(false);
    if (this.composer) {
      const sky = this.world.sky;
      this.bloom.strength = sky.studio ? 0.38 : sky.v.bloom;
      this.bloom.threshold = sky.studio ? 1.6 : sky.v.bloomT;
      this.bloom.radius = sky.studio ? 0.35 : 0.6;
      this.radialPass.enabled = this.radial > 0.01;
      this.radialPass.uniforms.uStrength.value = this.radial;
      this.composer.render();
    } else this.renderer.render(this.scene, this.camera);
  }

  // Renders one frame and returns it as a canvas (for photo mode).
  snapshot() {
    this.render();
    const out = document.createElement('canvas');
    out.width = this.canvas.width; out.height = this.canvas.height;
    out.getContext('2d').drawImage(this.canvas, 0, 0);
    return out;
  }
}
