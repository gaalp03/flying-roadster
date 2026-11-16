import { clamp, lerp } from './util.js';
import { AUDIO } from './audio-manifest.js';

// Sample-based audio: every sound is a CC0 recording (see CREDITS.md) loaded from assets/audio.
// Continuous layers are loops whose gain and pitch follow the car. The roadster is electric, so there is no engine
// note: on the road you hear tyres and wind plus a faint inverter whine under load; only the thrusters are loud.
const BASE = 'assets/audio/';
const LOOPS = ['motor', 'jet', 'lift', 'wind', 'skid'];

export class GameAudio {
  constructor() {
    this.ctx = null;
    this.vol = { master: 0.8, music: 0.55, sfx: 0.9 };
    this.muted = false; // platform mute
    this.paused = false;
    this.buffers = {};
    this.layers = null;
    this.state = 'idle';
  }

  // Must be called from a user gesture.
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended' && !this.paused) this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -12; comp.ratio.value = 4; comp.attack.value = 0.005; comp.release.value = 0.2;
    this.master.connect(comp).connect(ctx.destination);
    this.sfx = ctx.createGain(); this.sfx.connect(this.master);
    this.music = ctx.createGain(); this.music.connect(this.master);
    this.world = ctx.createGain(); this.world.connect(this.sfx); // continuous layers, faded with gameplay
    this.world.gain.value = 0;
    this.applyVolumes();
    this.load();
  }

  async fetchBuffer(name) {
    const res = await fetch(`${BASE}${name}.mp3`);
    if (!res.ok) throw new Error(`missing ${name}`);
    const data = await res.arrayBuffer();
    return new Promise((resolve, reject) => this.ctx.decodeAudioData(data, resolve, reject));
  }

  async load() {
    if (this.state !== 'idle') return;
    this.state = 'loading';
    const names = Object.keys(AUDIO).filter((n) => n !== 'music');
    await Promise.all(names.map(async (n) => {
      try { this.buffers[n] = await this.fetchBuffer(n); } catch (e) { /* a missing sound must never break the game */ }
    }));
    this.startLayers();
    this.state = 'ready';
    try {
      const buf = await this.fetchBuffer('music');
      const g = this.ctx.createGain();
      g.gain.value = 0;
      g.gain.linearRampToValueAtTime(1, this.ctx.currentTime + 3);
      this.loopSource(buf, AUDIO.music.loop, g).connect(this.music);
    } catch (e) { /* play without music */ }
  }

  loopSource(buffer, loop, out) {
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    src.loopStart = loop[0];
    src.loopEnd = loop[0] + loop[1];
    src.connect(out);
    src.start(0, loop[0]);
    return out;
  }

  startLayers() {
    const ctx = this.ctx, L = {};
    for (const name of LOOPS) {
      const buffer = this.buffers[name];
      if (!buffer) continue;
      const src = ctx.createBufferSource();
      src.buffer = buffer; src.loop = true;
      src.loopStart = AUDIO[name].loop[0]; src.loopEnd = AUDIO[name].loop[0] + AUDIO[name].loop[1];
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass'; filter.frequency.value = 18000;
      const gain = ctx.createGain();
      gain.gain.value = 0;
      src.connect(filter).connect(gain).connect(this.world);
      src.start(0, AUDIO[name].loop[0] + Math.random() * AUDIO[name].loop[1] * 0.5);
      L[name] = { src, filter, gain };
    }
    // the motor layer is band-passed and pitched up into a thin electric whine
    if (L.motor) { L.motor.filter.type = 'bandpass'; L.motor.filter.Q.value = 1.6; L.motor.filter.frequency.value = 2400; }
    // road rumble: the wind recording again, pitched down and low-passed
    if (this.buffers.wind) {
      const src = ctx.createBufferSource();
      src.buffer = this.buffers.wind; src.loop = true;
      src.loopStart = AUDIO.wind.loop[0]; src.loopEnd = AUDIO.wind.loop[0] + AUDIO.wind.loop[1];
      src.playbackRate.value = 0.5;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass'; filter.frequency.value = 420;
      const gain = ctx.createGain();
      gain.gain.value = 0;
      src.connect(filter).connect(gain).connect(this.world);
      src.start(0, AUDIO.wind.loop[0] + 1.3);
      L.road = { src, filter, gain };
    }
    this.layers = L;
  }

  setVolumes(v) { Object.assign(this.vol, v); this.applyVolumes(); }
  setMuted(m) { this.muted = m; this.applyVolumes(); }

  applyVolumes() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(this.muted ? 0 : this.vol.master, t, 0.03);
    this.sfx.gain.setTargetAtTime(this.vol.sfx, t, 0.03);
    this.music.gain.setTargetAtTime(this.vol.music * 0.8, t, 0.05);
  }

  // Pause all audio (tab hidden).
  suspend(on) {
    this.paused = on;
    if (!this.ctx) return;
    if (on) this.ctx.suspend(); else this.ctx.resume();
  }

  play(name, opts = {}) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const b = this.buffers[name];
    if (!b) return;
    const src = this.ctx.createBufferSource();
    src.buffer = b;
    src.playbackRate.value = (opts.rate || 1) * (opts.vary ? 1 + (Math.random() - 0.5) * opts.vary : 1);
    const g = this.ctx.createGain();
    g.gain.value = opts.gain ?? 1;
    src.connect(g).connect(this.sfx);
    src.start();
  }

  // `active` fades the layers out in menus / pause; slowmo (1 = real time) drops the pitch during the cinematic.
  update(dt, car, active, slowmo = 1) {
    const L = this.layers;
    if (!this.ctx || this.ctx.state !== 'running' || !L) return;
    const t = this.ctx.currentTime, set = (p, v, tc = 0.07) => p.setTargetAtTime(v, t, tc);
    set(this.world.gain, active ? 1 : 0, 0.12);
    const sp = car.speed, k = clamp(sp / 95, 0, 1), fly = car.mode === 'fly', ground = car.mode === 'drive' && car.offGround < 0.08;
    const slow = lerp(0.6, 1, slowmo);
    if (L.motor) {
      // silent at a standstill, a faint rising whine only while the motors are working
      const work = ground ? clamp(Math.abs(car.accel || 0) / 16, 0, 1) * 0.7 + (car.boosting ? 0.3 : 0) : 0;
      set(L.motor.src.playbackRate, (1.1 + k * 1.7) * slow);
      set(L.motor.gain.gain, k > 0.01 ? (0.012 + k * 0.03) * work : 0, 0.12);
      set(L.motor.filter.frequency, 1900 + k * 3600);
    }
    if (L.road) {
      set(L.road.gain.gain, ground ? k * (car.surf === 'road' ? 0.62 : 0.95) : 0);
      set(L.road.filter.frequency, car.surf === 'road' ? 320 + k * 380 : 220 + k * 200);
    }
    if (L.wind) {
      set(L.wind.gain.gain, k * k * (fly || !ground ? 0.75 : 0.5));
      set(L.wind.src.playbackRate, 0.75 + k * 0.6);
    }
    if (L.jet) {
      set(L.jet.gain.gain, car.thrust * 0.55);
      set(L.jet.src.playbackRate, (0.8 + car.thrust * 0.45) * slow);
    }
    if (L.lift) {
      set(L.lift.gain.gain, car.fold * car.lift * 0.4);
      set(L.lift.src.playbackRate, (0.85 + car.lift * 0.35) * slow);
    }
    if (L.skid) {
      set(L.skid.gain.gain, ground && car.surf === 'road' ? clamp((car.slip - 4) / 11, 0, 1) * 0.5 : 0, 0.05);
      set(L.skid.src.playbackRate, 0.9 + clamp(car.slip, 0, 20) * 0.012);
    }
  }
}
