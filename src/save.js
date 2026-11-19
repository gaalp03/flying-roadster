import { sdk } from './sdk.js';
import { DEFAULT_KEYS } from './input.js';

const KEY = 'flying-roadster-save-v1';

const defaults = () => ({
  points: 0,
  paint: 'white',
  unlocked: ['white'],
  stats: { bestCombo: 0, topSpeed: 0, longestAir: 0, rings: 0, launches: 0, pads: [], flips: 0, spins: 0, rolls: 0, near: 0, under: 0, chains: [], driftBest: 0, skim: 0, maxAlt: 0 },
  done: [],
  hints: {},
  settings: { master: 0.8, music: 0.55, sfx: 0.9, quality: 'auto', cinematic: true, units: 'kmh', time: 'sunset', sens: 1, shake: true },
  keys: JSON.parse(JSON.stringify(DEFAULT_KEYS)),
});

// Progress and settings, stored through the CrazyGames data module (localStorage elsewhere).
export const save = {
  data: defaults(),
  timer: null,

  load() {
    const d = defaults();
    try {
      const raw = sdk.getItem(KEY);
      if (raw) {
        const s = JSON.parse(raw);
        Object.assign(d, s);
        d.stats = Object.assign(defaults().stats, s.stats);
        d.settings = Object.assign(defaults().settings, s.settings);
        d.keys = Object.assign(defaults().keys, s.keys);
        d.hints = s.hints || {};
        if (!Array.isArray(d.done)) d.done = [];
        if (!Array.isArray(d.stats.chains)) d.stats.chains = [];
        if (!Array.isArray(d.unlocked) || !d.unlocked.includes('white')) d.unlocked = ['white'];
      }
    } catch (e) { /* corrupt save: start fresh */ }
    this.data = d;
    return d;
  },

  flush() {
    clearTimeout(this.timer);
    this.timer = null;
    try { sdk.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* ignore */ }
  },

  // Debounced write.
  touch() {
    if (this.timer) return;
    this.timer = setTimeout(() => this.flush(), 1500);
  },

  reset() {
    const keep = { settings: this.data.settings, keys: this.data.keys };
    this.data = Object.assign(defaults(), keep);
    this.flush();
  },
};
