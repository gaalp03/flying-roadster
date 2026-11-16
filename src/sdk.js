// Thin wrapper around the CrazyGames SDK v3. Every call is safe off-platform (GitHub Pages, local files).
const SDK_URL = 'https://sdk.crazygames.com/crazygames-sdk-v3.js';

export const sdk = {
  api: null,
  active: false,
  playing: false,
  loading: false,
  muted: false,
  onMute: null,

  async init() {
    try {
      await new Promise((resolve, reject) => {
        if (window.CrazyGames && window.CrazyGames.SDK) return resolve();
        const s = document.createElement('script');
        s.src = SDK_URL;
        s.onload = resolve;
        s.onerror = () => reject(new Error('sdk blocked'));
        document.head.appendChild(s);
        setTimeout(() => reject(new Error('sdk timeout')), 3500);
      });
      const api = window.CrazyGames.SDK;
      await Promise.race([api.init(), new Promise((_, rej) => setTimeout(() => rej(new Error('init timeout')), 3500))]);
      this.api = api;
      this.active = api.environment === 'crazygames' || api.environment === 'local';
      if (this.active) {
        try {
          this.muted = !!api.game.settings.muteAudio;
          api.game.addSettingsChangeListener((s) => { this.muted = !!s.muteAudio; if (this.onMute) this.onMute(this.muted); });
        } catch (e) { /* older SDK builds */ }
      }
    } catch (e) {
      this.api = null;
      this.active = false;
    }
    return this.active;
  },

  call(fn) {
    if (!this.active) return;
    try { fn(this.api); } catch (e) { /* never let the SDK break the game */ }
  },

  loadingStart() { if (!this.loading) { this.loading = true; this.call((a) => a.game.loadingStart()); } },
  loadingStop() { if (this.loading) { this.loading = false; this.call((a) => a.game.loadingStop()); } },
  gameplayStart() { if (!this.playing) { this.playing = true; this.call((a) => a.game.gameplayStart()); } },
  gameplayStop() { if (this.playing) { this.playing = false; this.call((a) => a.game.gameplayStop()); } },
  happytime() { this.call((a) => a.game.happytime()); },

  getItem(key) {
    if (this.active) {
      try { const v = this.api.data.getItem(key); if (v !== undefined) return v; } catch (e) { /* fall through */ }
    }
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  setItem(key, value) {
    if (this.active) {
      try { this.api.data.setItem(key, value); return; } catch (e) { /* fall through */ }
    }
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ }
  },
};
