import * as THREE from 'three';
import { clamp, lerp, smoothstep } from './util.js';
import { sdk } from './sdk.js';
import { save } from './save.js';
import { Gfx } from './gfx.js';
import { World } from './world/world.js';
import { TIMES, TIME_ORDER } from './world/sky.js';
import { SPAWN } from './world/layout.js';
import { CarModel, PAINTS } from './car/model.js';
import { Vehicle } from './vehicle.js';
import { CameraRig } from './camera.js';
import { Effects } from './fx.js';
import { GameAudio } from './audio.js';
import { Input, keyLabel } from './input.js';
import { Stunts } from './stunts.js';
import { Minimap } from './minimap.js';
import { UI } from './ui.js';

const H = 1 / 120; // physics step
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));
const _v = new THREE.Vector3(), _d = new THREE.Vector3();

class Game {
  constructor() {
    this.state = 'loading';
    this.returnTo = 'menu';
    this.acc = 0;
    this.last = 0;
    this.launch = null;
    this.cine = null;
    this.timeScale = 1;
    this.pend = { fly: false, boostPressed: false };
    this.respawning = false;
    this.playTime = 0;
    this.hinted = {};
  }

  async boot() {
    const canvas = document.getElementById('game');
    this.audio = new GameAudio();
    this.ui = new UI(this);
    this.ui.loading(0.08, 'Charging the thrusters…');
    await nextFrame();
    await sdk.init();
    sdk.loadingStart();
    save.load();
    this.ui.buildHelp();
    try { await Promise.race([document.fonts.load('italic 700 40px "Barlow Condensed"'), new Promise((r) => setTimeout(r, 1500))]); } catch (e) { /* fonts are optional */ }
    this.ui.loading(0.2, 'Raising the island…');
    await nextFrame();

    this.gfx = new Gfx(canvas);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.6, 9000);
    this.world = new World(this.scene, this.gfx.renderer);
    this.ui.loading(0.62, 'Polishing the paint…');
    await nextFrame();

    this.model = new CarModel();
    this.scene.add(this.model.root);
    this.car = new Vehicle(this.world);
    this.rig = new CameraRig(this.camera, this.world);
    this.fx = new Effects(this.scene, this.model);
    this.input = new Input(canvas, save.data.keys);
    this.stunts = new Stunts(this);
    this.minimap = new Minimap(document.getElementById('minimap'), this.world);
    this.input.onTouchMode = (on) => this.ui.touchMode(on);
    this.input.onJoy = (o, dx, dy, a) => this.ui.joy(o, dx, dy, a);
    this.input.bindButton(document.getElementById('t-boost'), 'boost');
    this.input.bindButton(document.getElementById('t-shift'), 'shift');
    this.input.bindButton(document.getElementById('t-fly'), 'fly');
    if (matchMedia('(pointer: coarse)').matches && 'ontouchstart' in window) { this.input.isTouch = true; this.ui.touchMode(true); }

    this.gfx.init(this.scene, this.camera, this.world);
    this.applySettings(true);
    this.setPaint(save.data.paint);
    this.syncModel(0);
    this.rig.orbit.yaw = 2.5; this.rig.orbit.pitch = 0.12; this.rig.orbit.dist = 7.4;
    this.rig.updateOrbit(0, this.car, null);
    this.world.update(0.016, this.camera, this.car.pos);
    this.ui.loading(0.85, 'Warming up the shaders…');
    await nextFrame();
    try { this.gfx.renderer.compile(this.scene, this.camera); } catch (e) { /* not fatal */ }
    this.gfx.render();
    this.ui.loading(1, 'Ready for take-off');
    await nextFrame();

    sdk.onMute = (m) => this.audio.setMuted(m);
    this.audio.setMuted(sdk.muted);
    const unlock = () => this.audio.unlock();
    addEventListener('pointerdown', unlock);
    addEventListener('keydown', unlock);
    addEventListener('touchend', unlock);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { if (this.state === 'play') this.act('pause'); this.audio.suspend(true); save.flush(); } else this.audio.suspend(false);
    });
    addEventListener('pagehide', () => save.flush());
    addEventListener('resize', () => this.gfx.resize(true));

    sdk.loadingStop();
    this.ui.loadingDone();
    this.setState('menu');
    this.last = performance.now();
    requestAnimationFrame((t) => this.frame(t));
  }

  // ------------------------------------------------------------------ state
  setState(s) {
    const prev = this.state;
    this.state = s;
    this.ui.show(s === 'play' ? null : s);
    if (s === 'play') sdk.gameplayStart(); else sdk.gameplayStop();
    if (s === 'menu' || s === 'garage') {
      const o = this.rig.orbit;
      o.roll = 0; o.panY = 0; o.fov = 40;
      if (s === 'garage') { o.dist = 6.6; o.pitch = 0.2; o.panX = 0; }
      else { o.dist = 7.6; o.pitch = 0.11; o.panX = this.camera.aspect > 1 ? -1.9 : 0; if (prev === 'loading') o.yaw = 2.45; }
    }
    if (s !== 'play') { this.ui.cinematic(false); this.ui.hint(null); }
    if (s !== 'play' && s !== 'photo') save.flush();
  }

  act(name) {
    switch (name) {
      case 'play':
        this.audio.unlock();
        if (this.car.mode !== 'drive' || this.car.overWater) this.car.reset(SPAWN.x, SPAWN.z, SPAWN.yaw);
        this.rig.snap(this.car);
        this.setState('play');
        this.firstHints();
        break;
      case 'resume': this.setState('play'); break;
      case 'pause': if (this.state === 'play') { this.endCinematic(); this.setState('pause'); } break;
      case 'garage': this.returnTo = this.state; this.setState('garage'); break;
      case 'settings': this.returnTo = this.state; this.setState('settings'); break;
      case 'help': this.returnTo = this.state; this.setState('help'); break;
      case 'photo':
        if (this.state === 'play' || this.state === 'pause') {
          this.endCinematic();
          const o = this.rig.orbit;
          o.yaw = Math.atan2(this.camera.position.x - this.car.pos.x, this.camera.position.z - this.car.pos.z) - this.car.yaw;
          o.pitch = 0.16; o.dist = 8; o.roll = 0; o.fov = 42; o.panX = 0; o.panY = 0;
          document.getElementById('p-fov').value = 42; document.getElementById('p-roll').value = 0; document.getElementById('p-pan').value = 0;
          this.setState('photo');
        }
        break;
      case 'menu':
        this.stunts.bank();
        this.car.reset(SPAWN.x, SPAWN.z, SPAWN.yaw);
        this.syncModel(0);
        this.setState('menu');
        break;
      case 'respawn':
        this.stunts.fail();
        this.car.reset(SPAWN.x, SPAWN.z, SPAWN.yaw);
        this.rig.snap(this.car);
        this.setState('play');
        break;
      case 'back':
        if (this.state === 'garage') {
          const sel = this.ui.gSel;
          if (sel && save.data.unlocked.includes(sel)) { save.data.paint = sel; save.touch(); }
          this.setPaint(save.data.paint);
          this.ui.gSel = null;
        }
        this.setState(this.state === 'photo' ? 'play' : this.returnTo === 'pause' ? 'pause' : 'menu');
        break;
      default:
    }
  }

  applySettings(first) {
    const s = save.data.settings;
    this.audio.setVolumes({ master: s.master, music: s.music, sfx: s.sfx });
    if (first || s.quality !== this.gfx.setting) this.gfx.setQuality(s.quality);
    if (s.time !== this.world.sky.name || first) this.world.sky.setTime(s.time, !!first);
    this.rig.sens = s.sens;
  }

  cycleTime() {
    const s = save.data.settings;
    s.time = TIME_ORDER[(TIME_ORDER.indexOf(s.time) + 1) % TIME_ORDER.length];
    this.world.sky.setTime(s.time, false);
    this.ui.photoTime();
    save.touch();
  }

  setPaint(id) {
    const p = PAINTS.find((x) => x.id === id) || PAINTS[0];
    this.model.setPaint(p);
  }

  previewPaint(id) { this.setPaint(id); }

  onUnlock(p) {
    this.ui.toast(`New paint · ${p.name}`, 'big', 'Open the garage to equip it', 3600);
    this.audio.play('unlock');
    this.fx.burst('confetti', this.car.pos.x, this.car.pos.y, this.car.pos.z, 0, 0, 0, 40);
    sdk.happytime();
  }

  resetProgress() {
    save.reset();
    this.setPaint(save.data.paint);
    this.ui.last = {};
  }

  photoSliders(fov, roll, pan) {
    const o = this.rig.orbit;
    o.fov = fov; o.roll = (roll * Math.PI) / 180; o.panY = pan / 10;
  }

  takePhoto() {
    document.body.classList.add('photo-clean');
    this.audio.play('shutter');
    const shot = this.gfx.snapshot();
    const g = shot.getContext('2d'), w = shot.width, h = shot.height, u = Math.max(12, h / 46);
    const grad = g.createRadialGradient(w / 2, h * 0.46, h * 0.45, w / 2, h * 0.46, Math.hypot(w, h) * 0.62);
    grad.addColorStop(0, 'rgba(10,4,8,0)'); grad.addColorStop(1, 'rgba(10,4,8,0.32)');
    g.fillStyle = grad; g.fillRect(0, 0, w, h);
    g.font = `italic 700 ${u * 1.5}px "Barlow Condensed", Arial, sans-serif`;
    g.textAlign = 'right'; g.textBaseline = 'alphabetic';
    g.fillStyle = 'rgba(255,255,255,0.92)'; g.shadowColor = 'rgba(0,0,0,0.5)'; g.shadowBlur = u * 0.5;
    g.fillText('FLYING ROADSTER', w - u * 1.2, h - u * 1.1);
    this.ui.flash();
    shot.toBlob(async (blob) => {
      document.body.classList.remove('photo-clean');
      document.getElementById('p-hide').textContent = 'HIDE UI';
      if (!blob) return;
      const file = new File([blob], 'flying-roadster.png', { type: 'image/png' });
      try {
        if (this.input.isTouch && navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Flying Roadster' }); return; }
      } catch (e) { /* fall back to a download */ }
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `flying-roadster-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      this.ui.toast('Photo saved', 'good', '', 1600);
    }, 'image/png');
  }

  firstHints() {
    if (this.hinted.start) return;
    this.hinted.start = true;
    const k = (a) => keyLabel(save.data.keys[a][0]);
    if (this.input.isTouch) this.ui.hint('<span>Push the stick <b>up</b> for gas</span><span><b>BOOST</b> down the runway</span><span>Hit the <b>ramp</b></span>', 9000);
    else this.ui.hint(`<span><kbd>${k('forward')}</kbd>Accelerate</span><span><kbd>${k('left')}</kbd><kbd>${k('right')}</kbd>Steer</span><span><kbd>${k('boost')}</kbd>Boost</span><span><b>Hit the ramp at full speed</b></span>`, 10000);
  }

  // ------------------------------------------------------------------ events from the vehicle
  handle(e) {
    const car = this.car, fx = this.fx, audio = this.audio, p = car.pos, shake = save.data.settings.shake ? 1 : 0;
    this.stunts.onEvent(e);
    switch (e.type) {
      case 'launch':
        car.foldTarget = 1;
        car.launching = true;
        audio.play('fold', { rate: 0.7 });
        this.launch = { t: 0 };
        if (save.data.settings.cinematic) {
          this.cine = { t: 0, dur: 2.8 };
          this.rig.startCinematic(car, 2.8);
          this.ui.cinematic(true);
        }
        break;
      case 'engage': {
        _d.set(-Math.sin(car.yaw), 0.15, -Math.cos(car.yaw));
        _v.set(0, 0.6, -2.3).applyQuaternion(car.quat).add(p);
        fx.shockwave(_v, _d, e.fromRamp ? 12 : 7);
        fx.burst('ignite', _v.x, _v.y, _v.z, car.vel.x * 0.5, car.vel.y * 0.5, car.vel.z * 0.5, e.fromRamp ? 34 : 18);
        audio.play('ignite', { gain: e.fromRamp ? 1 : 0.7 });
        if (!e.fromRamp) audio.play('fold');
        this.rig.addShake(0.5 * shake);
        if (e.fromRamp) { this.ui.flash(); if (this.cine) this.ui.cineTitle(); else this.ui.toast('Lift-off', 'big', 'Wheels up · thrusters on', 1800); }
        if (e.wasGround) fx.burst('dust', p.x, p.y, p.z, 0, 0, 0, 14);
        if (!this.hinted.fly) {
          this.hinted.fly = true;
          const k = (a) => keyLabel(save.data.keys[a][0]);
          setTimeout(() => {
            if (this.state !== 'play') return;
            if (this.input.isTouch) this.ui.hint('<span><b>UP</b> climb</span><span><b>DOWN</b> descend &amp; land</span><span>Fly through the <b>rings</b></span>', 9000);
            else this.ui.hint(`<span><kbd>${k('boost')}</kbd>Climb</span><span><kbd>${k('shift')}</kbd>Descend &amp; land</span><span><kbd>${k('rollL')}</kbd><kbd>${k('rollR')}</kbd>Roll</span><span>Fly through the <b>rings</b></span>`, 9000);
          }, e.fromRamp ? 2600 : 600);
        }
        break;
      }
      case 'disengage': audio.play('unfold'); break;
      case 'land':
        audio.play('land', { gain: clamp(0.4 + e.impact / 20, 0.4, 1) });
        if (e.fromFlight) audio.play('unfold', { gain: 0.6 });
        fx.burst('dust', p.x, p.y, p.z, car.vel.x, 0, car.vel.z, e.fromFlight ? 10 : clamp(Math.round(e.impact), 6, 20));
        this.rig.addShake(clamp(e.impact / 28, 0.1, 0.7) * shake);
        if (e.fromFlight && !this.hinted.land) {
          this.hinted.land = true;
          if (!this.input.isTouch) this.ui.hint(`<span><kbd>${keyLabel(save.data.keys.fly[0])}</kbd>Take off again anywhere</span>`, 6000);
          else this.ui.hint('<span>Tap <b>FLY</b> to take off anywhere</span>', 6000);
        }
        this.launch = null;
        break;
      case 'thump':
        if (e.impact > 5) { audio.play('thud', { gain: clamp(e.impact / 22, 0.25, 0.9), vary: 0.2 }); this.rig.addShake(clamp(e.impact / 50, 0, 0.4) * shake); }
        break;
      case 'crash':
        audio.play('crash', { gain: clamp(e.impact / 26, 0.5, 1), vary: 0.15 });
        audio.play('crash2', { gain: clamp(e.impact / 30, 0.4, 0.9), rate: 0.8, vary: 0.2 });
        fx.burst('spark', e.x ?? p.x, e.y ?? p.y + 0.5, e.z ?? p.z, car.vel.x, 2, car.vel.z, 22);
        this.rig.addShake(0.9 * shake);
        this.launch = null;
        car.launching = false;
        this.endCinematic();
        break;
      case 'scrape':
        audio.play('scrape', { gain: clamp(e.impact / 9, 0.3, 0.9), vary: 0.3 });
        fx.burst('spark', e.x, e.y, e.z, car.vel.x, 1, car.vel.z, 8);
        this.rig.addShake(0.25 * shake);
        break;
      case 'near': case 'under': audio.play('whoosh', { rate: 0.55, vary: 0.2 }); break;
      case 'barrel': audio.play('whoosh2', { rate: 0.5 }); break;
      case 'jump': if (e.speed > 30) audio.play('whoosh', { gain: 0.5, rate: 0.42 }); break;
      case 'edge': this.ui.toast('Turning back to the island', '', '', 1800); break;
      case 'splash':
        if (this.respawning) break;
        this.respawning = true;
        audio.play('splash');
        fx.burst('splash', p.x, 0.2, p.z, car.vel.x, 0, car.vel.z, 36);
        this.stunts.fail();
        this.endCinematic();
        this.launch = null;
        this.ui.toast('Splashdown', 'bad', 'Back to dry land', 1600);
        setTimeout(() => this.ui.fade(true), 250);
        setTimeout(() => { this.car.respawn(); this.rig.snap(this.car); this.syncModel(0); this.ui.fade(false); this.respawning = false; }, 620);
        break;
      default:
    }
  }

  // One fixed physics step plus everything that must run at physics rate.
  tick(st) {
    const car = this.car;
    car.step(H, st);
    if (this.launch) {
      this.launch.t += H;
      if (car.mode !== 'air') this.launch = null;
      else if (this.launch.t >= 0.34) { car.engageFlight(true); this.launch = null; }
    }
    if (car.events.length) { const list = car.events.splice(0); for (const e of list) this.handle(e); }
    this.stunts.update(H, car);
  }

  // Test hook: advance the simulation without rendering.
  debugAdvance(seconds, input = {}) {
    const st = Object.assign({ steer: 0, throttle: 0, boost: false, shift: false, roll: 0, fly: false, boostPressed: false, look: false }, input);
    for (let n = Math.round(seconds / H); n > 0; n--) { this.tick(st); st.fly = st.boostPressed = false; }
    this.syncModel(H);
  }

  endCinematic() {
    if (!this.cine) return;
    this.cine = null;
    this.rig.cine = null;
    this.timeScale = 1;
    this.ui.cinematic(false);
  }

  syncModel(dt) {
    const car = this.car, m = this.model;
    m.root.position.copy(car.pos);
    m.root.quaternion.copy(car.quat);
    const bob = car.mode === 'fly' ? Math.sin(this.world.time * 2.1) * 0.05 * (1 - clamp(car.speed / 30, 0, 1)) : 0;
    // visual squat / dive and cornering lean on the body only
    const lean = car.mode === 'drive' ? clamp(car.yawRate * car.speed * 0.0024, -0.06, 0.06) : 0;
    const squat = car.mode === 'drive' ? (car.boosting ? -0.022 : car.braking ? 0.02 : 0) : 0;
    m.body.rotation.z = lerp(m.body.rotation.z, lean, 1 - Math.exp(-8 * dt));
    m.body.rotation.x = lerp(m.body.rotation.x, squat, 1 - Math.exp(-8 * dt));
    m.body.position.y = bob;
    const sy = Math.sin(car.yaw), cy = Math.cos(car.yaw), vF = car.vel.x * sy + car.vel.z * cy;
    m.pose(car.fold, car.steer * lerp(0.5, 0.12, clamp(car.speed / 60, 0, 1)), (vF * dt) / 0.35, car.lift);
    m.setLights(car.braking ? 1 : 0, this.world.sky.v.lamps > 1.2 ? 1 : this.world.sky.v.lamps * 0.5);
  }

  // ------------------------------------------------------------------ main loop
  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    const real = Math.min((now - this.last) / 1000, 0.1);
    this.last = now;
    const ev = this.input.poll();
    const drag = this.input.takeDrag();
    const car = this.car, st = this.input.state;
    let simDt = 0;

    if (this.state === 'play') {
      if (ev.pause) this.act('pause');
      else if (ev.photo) this.act('photo');
      else if (ev.reset && !this.respawning) { this.stunts.fail(); car.respawn(); this.rig.snap(car); }
    } else if (ev.pause) {
      if (this.state === 'pause') this.act('resume');
      else if (this.state === 'photo' || this.state === 'garage' || this.state === 'settings' || this.state === 'help') this.act('back');
    } else if (this.state === 'photo' && ev.photo) this.act('back');

    if (this.state === 'play') {
      this.gfx.adapt(real);
      this.playTime += real;
      // cinematic slow motion runs on real time
      if (this.cine) {
        const c = this.cine;
        c.t += real;
        const k = c.t / c.dur;
        this.timeScale = k < 0.07 ? lerp(1, 0.17, k / 0.07) : k < 0.74 ? 0.17 : lerp(0.17, 1, smoothstep(0.74, 1, k));
        if (k >= 1) this.endCinematic();
      }
      simDt = real * this.timeScale;
      if (st.fly) this.pend.fly = true;
      if (st.boostPressed) this.pend.boostPressed = true;
      this.acc += simDt;
      let steps = 0;
      while (this.acc >= H && steps < 14) {
        st.fly = this.pend.fly; st.boostPressed = this.pend.boostPressed;
        this.pend.fly = this.pend.boostPressed = false;
        if (this.respawning) { st.fly = false; st.boostPressed = false; }
        this.tick(st);
        this.acc -= H;
        steps++;
      }
      if (steps === 14) this.acc = 0;
      st.fly = st.boostPressed = false;
      this.syncModel(simDt);
      this.rig.update(real, car, drag, { lookBack: st.look, realDt: real });
      this.world.update(simDt, this.camera, car.pos);
      this.fx.update(simDt, car, this.camera, this.gfx.h);
      this.ui.hud(car, this.stunts);
      this.minimap.draw(car);
      if (this.hinted.start && !this.hinted.startDone && (car.speed > 28 || car.mode !== 'drive')) { this.hinted.startDone = true; this.ui.hint(null); }
    } else if (this.state === 'menu' || this.state === 'garage') {
      this.syncModel(real);
      this.rig.updateOrbit(real, car, this.state === 'garage' ? drag : null, this.state === 'garage' ? 0.1 : 0.07);
      this.world.update(real, this.camera, car.pos);
      this.fx.update(real, car, this.camera, this.gfx.h);
    } else if (this.state === 'photo') {
      this.rig.updateOrbit(real, car, drag, 0);
      this.world.update(0, this.camera, car.pos);
      this.world.sky.update(real, this.camera, car.pos);
    } else {
      this.world.update(0, this.camera, car.pos);
    }
    this.audio.update(real, car, this.state === 'play', this.timeScale);
    this.gfx.render();
  }
}

const game = new Game();
window.__game = game;
game.boot().catch((err) => {
  console.error(err);
  const tip = document.getElementById('load-tip');
  if (tip) tip.textContent = 'Could not start: WebGL is unavailable on this device.';
});
