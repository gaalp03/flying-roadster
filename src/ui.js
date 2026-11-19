import { fmt, clamp } from './util.js';
import { PAINTS } from './car/model.js';
import { save } from './save.js';
import { ACTIONS, DEFAULT_KEYS, keyLabel } from './input.js';
import { TIMES, TIME_ORDER } from './world/sky.js';
import { CHALLENGES, progress, isDone } from './challenges.js';

const $ = (id) => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };

// DOM heads-up display, menus and panels. Talks to the game through game.act(name) and game.applySettings().
export class UI {
  constructor(game) {
    this.game = game;
    this.screens = ['menu', 'pause', 'garage', 'settings', 'help', 'photo', 'challenges'];
    this.last = {};
    this.hintTimer = null;
    document.querySelectorAll('[data-act]').forEach((b) => b.addEventListener('click', () => { game.audio.play('click'); game.act(b.dataset.act); }));
    $('btn-pause').addEventListener('click', () => game.act('pause'));
    $('btn-photo').addEventListener('click', () => game.act('photo'));
    for (const id of ['p-fov', 'p-roll', 'p-pan']) $(id).addEventListener('input', () => game.photoSliders(+$('p-fov').value, +$('p-roll').value, +$('p-pan').value));
    $('p-time').addEventListener('click', () => { game.audio.play('click'); game.cycleTime(); });
    $('p-hide').addEventListener('click', () => { document.body.classList.toggle('photo-clean'); $('p-hide').textContent = document.body.classList.contains('photo-clean') ? 'SHOW UI' : 'HIDE UI'; });
    $('p-shot').addEventListener('click', () => game.takePhoto());
    $('p-exit').addEventListener('click', () => { game.audio.play('click'); game.act('back'); });
    this.buildHelp();
  }

  show(name) {
    for (const s of this.screens) $(s).classList.toggle('hidden', s !== name);
    $('hud').classList.toggle('hidden', name !== null);
    document.body.classList.remove('photo-clean');
    $('p-hide').textContent = 'HIDE UI';
    if (name === 'menu') this.menuFoot();
    if (name === 'pause') this.pauseStats();
    if (name === 'garage') this.buildGarage();
    if (name === 'settings') this.buildSettings();
    if (name === 'photo') this.photoTime();
    if (name === 'challenges') this.buildChallenges();
    const done = save.data.done.length, sum = `${done}/${CHALLENGES.length}`;
    $('ch-count-menu').textContent = sum; $('ch-count-pause').textContent = sum;
  }

  buildChallenges() {
    const done = save.data.done.length;
    $('ch-sum').textContent = `${done} / ${CHALLENGES.length}`;
    const mph = save.data.settings.units === 'mph';
    const val = (c, v) => {
      if (c.unit === 'km/h') return mph ? `${Math.round(v / 1.609)} mph` : `${Math.round(v)} km/h`;
      return (c.dec ? v.toFixed(c.dec) : fmt(Math.floor(v))) + (c.unit ? ` ${c.unit}` : '');
    };
    const items = CHALLENGES.map((c) => {
      const ok = isDone(c), p = ok ? c.n : progress(c), desc = c.unit === 'km/h' && mph ? 'Hit 211 mph' : c.desc;
      return `<div class="ch${ok ? ' done' : ''}"><b>${c.name}</b><em>${ok ? '✓ DONE' : `+${fmt(c.reward)}`}</em><p>${desc}</p>
        <div class="bar"><i style="width:${Math.round((p / c.n) * 100)}%"></i></div>${ok || c.n === 1 ? '' : `<span class="num">${val(c, p)} / ${val(c, c.n)}</span>`}</div>`;
    });
    $('ch-body').innerHTML = `<div class="ch-list">${items.join('')}</div>`;
  }

  loading(p, tip) {
    $('load-fill').style.width = `${Math.round(p * 100)}%`;
    if (tip) $('load-tip').textContent = tip;
  }

  loadingDone() {
    const l = $('loading');
    l.classList.add('out');
    setTimeout(() => l.remove(), 700);
  }

  // ---------------------------------------------------------------- HUD
  hud(car, stunts) {
    const L = this.last, s = save.data.settings;
    const v = Math.round(car.speed * (s.units === 'mph' ? 2.23694 : 3.6));
    if (v !== L.v) { L.v = v; $('speed').textContent = v; }
    if (s.units !== L.units) { L.units = s.units; $('unit').textContent = s.units === 'mph' ? 'MPH' : 'KM/H'; }
    const mode = car.mode === 'fly' ? 'fly' : car.mode === 'air' ? 'air' : 'drive';
    if (mode !== L.mode) {
      L.mode = mode;
      const m = $('mode');
      m.textContent = mode === 'fly' ? 'FLIGHT' : mode === 'air' ? 'AIRBORNE' : 'DRIVE';
      m.className = mode;
      $('alt').classList.toggle('on', mode !== 'drive');
      document.body.classList.toggle('flying', mode === 'fly');
      $('boost').classList.toggle('hot', mode === 'fly');
      $('t-boost').textContent = mode === 'fly' ? 'UP' : mode === 'air' ? 'FLY' : 'BOOST';
      $('t-shift').textContent = mode === 'fly' ? 'DOWN' : 'DRIFT';
      $('t-fly').textContent = mode === 'fly' ? 'ROLL' : 'FLY';
    }
    if (mode !== 'drive') {
      const a = Math.max(0, Math.round(car.alt));
      if (a !== L.alt) { L.alt = a; $('alt').textContent = `ALT ${a} M`; }
    }
    const b = mode === 'fly' ? 1 : car.boost;
    if (Math.abs(b - (L.boost ?? -1)) > 0.004) { L.boost = b; $('boost-fill').style.transform = `scaleX(${b.toFixed(3)})`; }
    const pts = save.data.points;
    if (pts !== L.pts) {
      L.pts = pts;
      $('score-val').textContent = fmt(pts);
      const next = stunts.nextUnlock();
      if (next) {
        const prev = [...PAINTS].reverse().find((p) => p.cost <= pts);
        const base = prev ? prev.cost : 0;
        $('next-fill').style.width = `${clamp(((pts - base) / (next.cost - base)) * 100, 0, 100)}%`;
        $('next-label').textContent = `${next.name} · ${fmt(next.cost)}`;
      } else {
        $('next-fill').style.width = '100%';
        $('next-label').textContent = 'All paints unlocked';
      }
    }
  }

  combo(st, pop) {
    const c = $('combo');
    if (st.pot <= 0) { c.classList.add('hidden'); return; }
    c.classList.remove('hidden');
    const lines = $('combo-lines');
    lines.innerHTML = '';
    for (const l of st.lines.slice(-3)) lines.appendChild(el('div', '', `${l.name}<span>+${fmt(l.pts)}</span>`));
    $('combo-pts').textContent = fmt(st.pot);
    $('combo-mult').textContent = `×${st.mult}`;
    if (pop) { const p = $('combo-pot'); p.classList.remove('pop'); void p.offsetWidth; p.classList.add('pop'); }
  }

  comboTimer(k) { $('combo-timer').firstElementChild.style.transform = `scaleX(${clamp(k, 0, 1).toFixed(3)})`; }

  banked(gain, mult) {
    this.toast(`+${fmt(gain)}`, 'good', mult > 1 ? `Combo ×${mult} banked` : 'Banked', 1700);
    const s = $('score');
    s.classList.remove('bump'); void s.offsetWidth; s.classList.add('bump');
  }

  toast(text, kind = '', sub = '', ms = 2200) {
    const box = $('toasts');
    while (box.children.length > 2) box.firstElementChild.remove();
    const t = el('div', `toast ${kind}`, sub ? `${text}<small>${sub}</small>` : text);
    box.appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 320); }, ms);
  }

  hint(html, ms = 7000) {
    const h = $('hint');
    clearTimeout(this.hintTimer);
    if (!html) { h.classList.add('hidden'); return; }
    h.innerHTML = html;
    h.classList.remove('hidden');
    this.hintTimer = setTimeout(() => h.classList.add('hidden'), ms);
  }

  cinematic(on) { document.body.classList.toggle('cine', on); }
  cineTitle() { const t = $('cine-title'); t.classList.remove('show'); void t.offsetWidth; t.classList.add('show'); }
  flash() { const f = $('flash'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }
  fade(on) { $('fade').classList.toggle('on', on); }

  touchMode(on) {
    document.body.classList.toggle('touch', on);
    $('touch').classList.toggle('hidden', !on);
  }

  joy(origin, dx, dy, active) {
    const j = $('joy');
    j.classList.toggle('hidden', !active);
    $('joy-ghost').classList.toggle('hidden', active);
    if (active && origin) {
      j.style.left = `${origin.x}px`; j.style.top = `${origin.y}px`;
      j.firstElementChild.style.transform = `translate(${dx * 40}px, ${dy * 40}px)`;
    }
  }

  // ---------------------------------------------------------------- menus
  menuFoot() {
    const d = save.data;
    $('menu-foot').innerHTML = `Stunt points <b>${fmt(d.points)}</b> &nbsp;·&nbsp; Paints <b>${d.unlocked.length}/${PAINTS.length}</b>`;
  }

  pauseStats() {
    const d = save.data, st = d.stats, mph = d.settings.units === 'mph';
    $('pause-stats').innerHTML = `
      <div>Stunt points<b>${fmt(d.points)}</b></div>
      <div>Best combo<b>${fmt(st.bestCombo)}</b></div>
      <div>Top speed<b>${Math.round(st.topSpeed * (mph ? 2.23694 : 3.6))} ${mph ? 'mph' : 'km/h'}</b></div>
      <div>Longest air<b>${st.longestAir.toFixed(1)} s</b></div>
      <div>Rings<b>${fmt(st.rings)}</b></div>
      <div>Landing pads<b>${st.pads.length}/${this.game.world.pads.length}</b></div>`;
  }

  buildGarage() {
    const strip = $('g-strip'), d = save.data;
    strip.innerHTML = '';
    this.gSel = this.gSel && PAINTS.some((p) => p.id === this.gSel) ? this.gSel : d.paint;
    for (const p of PAINTS) {
      const locked = !d.unlocked.includes(p.id);
      const b = el('button', `swatch${locked ? ' locked' : ''}${p.id === this.gSel ? ' on' : ''}`, '<i></i>');
      b.style.setProperty('--c', p.color);
      b.setAttribute('aria-label', p.name);
      b.addEventListener('click', () => { this.game.audio.play('click'); this.gSel = p.id; this.game.previewPaint(p.id); this.buildGarage(); });
      strip.appendChild(b);
      if (p.id === this.gSel) setTimeout(() => b.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }), 0);
    }
    const p = PAINTS.find((x) => x.id === this.gSel), locked = !d.unlocked.includes(p.id);
    $('g-name').textContent = p.name;
    const st = $('g-state');
    st.classList.toggle('locked', locked);
    st.textContent = locked ? `Locked · ${fmt(p.cost)} stunt points (${fmt(Math.max(0, p.cost - d.points))} to go)` : p.id === d.paint ? 'Equipped' : 'Unlocked · tap done to equip';
    $('g-points').innerHTML = `★ ${fmt(d.points)} stunt points`;
  }

  buildSettings() {
    const body = $('settings-body'), s = save.data.settings, game = this.game;
    body.innerHTML = '';
    const group = (title) => { const g = el('div', 'set-group', `<h3>${title}</h3>`); body.appendChild(g); return g; };
    const slider = (g, label, key, min = 0, max = 1) => {
      const row = el('div', 'set-row', `<span>${label}</span>`), i = el('input');
      i.type = 'range'; i.min = min; i.max = max; i.step = 0.01; i.value = s[key];
      i.addEventListener('input', () => { s[key] = +i.value; game.applySettings(); save.touch(); });
      row.appendChild(i); g.appendChild(row);
    };
    const seg = (g, label, key, opts) => {
      const row = el('div', 'set-row', `<span>${label}</span>`), box = el('div', 'seg');
      for (const [val, text] of opts) {
        const b = el('button', s[key] === val ? 'on' : '', text);
        b.addEventListener('click', () => { s[key] = val; game.audio.play('click'); game.applySettings(); save.touch(); this.buildSettings(); });
        box.appendChild(b);
      }
      row.appendChild(box); g.appendChild(row);
    };
    const a = group('Audio');
    slider(a, 'Master volume', 'master'); slider(a, 'Music', 'music'); slider(a, 'Sound effects', 'sfx');
    const v = group('Graphics');
    seg(v, 'Quality', 'quality', [['auto', 'Auto'], ['low', 'Low'], ['medium', 'Medium'], ['high', 'High']]);
    seg(v, 'Time of day', 'time', TIME_ORDER.map((k) => [k, TIMES[k].label]));
    const g = group('Gameplay');
    seg(g, 'Cinematic take-off', 'cinematic', [[true, 'On'], [false, 'Off']]);
    seg(g, 'Camera shake', 'shake', [[true, 'On'], [false, 'Off']]);
    seg(g, 'Speed units', 'units', [['kmh', 'km/h'], ['mph', 'mph']]);
    slider(g, 'Look sensitivity', 'sens', 0.4, 2);

    const k = group('Keyboard controls');
    const grid = el('div', 'keys');
    for (const [id, label] of ACTIONS) {
      const row = el('div', 'key-row', `<span>${label}</span>`), slots = el('div', 'slots');
      for (let slot = 0; slot < 2; slot++) {
        const b = el('button', '', keyLabel(save.data.keys[id][slot]));
        b.addEventListener('click', () => {
          b.textContent = 'Press…'; b.classList.add('listen');
          game.input.capture = (code) => {
            if (code !== 'Escape' || id === 'pause') {
              for (const other in save.data.keys) save.data.keys[other] = save.data.keys[other].map((c) => (c === code ? null : c));
              save.data.keys[id][slot] = code;
            }
            save.touch();
            this.buildSettings();
          };
        });
        slots.appendChild(b);
      }
      row.appendChild(slots); grid.appendChild(row);
    }
    k.appendChild(grid);
    const reset = el('button', 'link-btn', 'Restore default keys');
    reset.style.marginTop = '10px';
    reset.addEventListener('click', () => { for (const id in DEFAULT_KEYS) save.data.keys[id] = DEFAULT_KEYS[id].slice(); save.touch(); this.buildSettings(); });
    k.appendChild(reset);

    const dgroup = group('Progress');
    const row = el('div', 'set-row', '<span>Stunt points and unlocked paints</span>');
    const wipe = el('button', 'link-btn', 'Reset progress');
    wipe.addEventListener('click', () => {
      if (wipe.dataset.sure) { game.resetProgress(); this.buildSettings(); } else { wipe.dataset.sure = '1'; wipe.textContent = 'Tap again to confirm'; }
    });
    row.appendChild(wipe); dgroup.appendChild(row);
  }

  buildHelp() {
    const K = (a) => keyLabel(save.data.keys[a][0]);
    $('help-body').innerHTML = `<div class="help-grid">
      <div><h3>The idea</h3>
        <p><b>Free play.</b> Floor it down the runway, hit the launch ramp, and the roadster folds its wheels, lights its thrusters and takes off. Fly anywhere, land anywhere, drive again.</p>
        <p>Stunts fill a combo pot. Stay in control for a moment to <b>bank</b> it — crash and it is gone. Stunt points unlock new paint, and <b>Challenges</b> pay big bonuses for milestones.</p></div>
      <div><h3>Driving</h3><ul>
        <li><kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> or arrows — drive</li>
        <li><kbd>Space</kbd> — boost</li>
        <li><kbd>Shift</kbd> — handbrake drift</li>
        <li><kbd>F</kbd> — take off anywhere</li>
        <li><kbd>R</kbd> reset · <kbd>C</kbd> look back · drag mouse to look around</li></ul></div>
      <div><h3>In the air</h3><ul>
        <li>Off a ramp: <kbd>W</kbd>/<kbd>S</kbd> flip, <kbd>A</kbd>/<kbd>D</kbd> spin, <kbd>Q</kbd>/<kbd>E</kbd> roll</li>
        <li><kbd>Space</kbd> mid-air — thrusters on, start flying</li>
        <li>Flying: <kbd>Space</kbd> climb, <kbd>Shift</kbd> descend, <kbd>W</kbd>/<kbd>S</kbd> speed, <kbd>A</kbd>/<kbd>D</kbd> turn</li>
        <li>Hold <kbd>Shift</kbd> near the ground to drop the wheels and land</li>
        <li><kbd>Q</kbd>/<kbd>E</kbd> barrel roll · <kbd>F</kbd> cut thrusters</li></ul></div>
      <div><h3>Touch</h3><ul>
        <li>Left thumb: stick steers, push up for gas, pull down to brake</li>
        <li><b>BOOST / UP</b>, <b>DRIFT / DOWN</b> and <b>FLY</b> buttons on the right</li>
        <li>Drag anywhere else to look around</li></ul></div>
      <div><h3>Stunt points</h3><ul>
        <li><b>Rings</b> — fly a whole chain for a bonus</li>
        <li><b>Near misses</b> — thread towers, bridge cables and hangars</li>
        <li><b>Flips, spins, rolls</b> — land them on your wheels</li>
        <li><b>Landing pads</b> — touch down on the bullseye</li>
        <li><b>Drifts and skimming</b> low over the water</li></ul></div>
      <div><h3>Extras</h3><ul>
        <li><kbd>P</kbd> — photo mode: orbit, zoom, tilt, change the time of day and save the shot</li>
        <li><kbd>Esc</kbd> — pause, garage and settings</li>
        <li>Keys can be remapped in Settings; gamepads work too</li></ul></div>
    </div>`;
    void K;
  }

  slide(i, n, s) {
    const box = $('showcase');
    $('sc-num').textContent = `0${i + 1} / 0${n}`;
    $('sc-title').textContent = s.title;
    $('sc-text').textContent = s.text;
    $('sc-dots').innerHTML = Array.from({ length: n }, (_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('');
    box.classList.remove('in'); void box.offsetWidth; box.classList.add('in');
  }

  photoTime() { $('p-time').textContent = TIMES[this.game.world.sky.name].label.toUpperCase(); }
}
