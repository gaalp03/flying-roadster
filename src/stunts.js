import { fmt } from './util.js';
import { PAINTS } from './car/model.js';
import { save } from './save.js';

const TAU = Math.PI * 2;

// Combo-based stunt scoring. Tricks fill a pot with a multiplier; staying in control banks it, crashing loses it.
export class Stunts {
  constructor(game) {
    this.game = game;
    this.pot = 0; this.mult = 1; this.timer = 0; this.lines = [];
    this.rot = { x: 0, y: 0, z: 0 };
    this.drift = { t: 0, pts: 0, gap: 0 };
    this.skimT = 0;
    this.chain = new Map();
    this.time = 0;
    this.lastTouchdown = -99;
  }

  add(name, pts, quiet) {
    pts = Math.round(pts);
    this.pot += pts;
    this.mult = Math.min(10, this.mult + (this.lines.length ? 1 : 0));
    this.timer = 4.2;
    this.lines.push({ name, pts });
    if (this.lines.length > 4) this.lines.shift();
    this.game.car.boost = Math.min(1, this.game.car.boost + 0.06 + pts / 4000);
    this.game.ui.combo(this, true);
    if (!quiet) this.game.audio.play('tick', { rate: 1 + Math.min(this.mult, 10) * 0.06 });
  }

  bank() {
    if (this.pot <= 0) return;
    const gain = this.pot * this.mult, d = save.data;
    const before = d.points;
    d.points += gain;
    if (gain > d.stats.bestCombo) d.stats.bestCombo = gain;
    this.game.ui.banked(gain, this.mult);
    this.game.audio.play(gain >= 2000 ? 'bankBig' : 'bank');
    this.pot = 0; this.mult = 1; this.lines = []; this.timer = 0;
    this.game.ui.combo(this, false);
    for (const p of PAINTS) {
      if (p.cost > before && p.cost <= d.points && !d.unlocked.includes(p.id)) {
        d.unlocked.push(p.id);
        this.game.onUnlock(p);
      }
    }
    save.touch();
  }

  fail() {
    if (this.pot > 0) {
      this.game.ui.toast('Combo lost', 'bad');
      this.pot = 0; this.mult = 1; this.lines = []; this.timer = 0;
      this.game.ui.combo(this, false);
    }
    this.rot.x = this.rot.y = this.rot.z = 0;
    this.drift.t = this.drift.pts = 0;
  }

  onEvent(e) {
    const car = this.game.car, st = save.data.stats;
    switch (e.type) {
      case 'jump':
        this.rot.x = this.rot.y = this.rot.z = 0;
        break;
      case 'launch':
        this.add('Lift-off', 250);
        st.launches++;
        break;
      case 'barrel':
        this.add('Barrel roll', 120);
        break;
      case 'near':
        if (e.gap < 1.1) this.add('Paint-thin miss', 160);
        else this.add('Near miss', 80);
        break;
      case 'under':
        this.add('Under the bridge', 300);
        break;
      case 'crash':
        this.fail();
        break;
      case 'land': {
        if (e.fromFlight) {
          const pad = this.padAt(e);
          if (pad) {
            const first = !st.pads.includes(pad.name);
            if (first) st.pads.push(pad.name);
            this.add(`Bullseye · ${pad.name}`, (first ? 900 : 350) * (pad.bonus || 1));
            this.game.fx.burst('confetti', e.x, e.y, e.z, 0, 0, 0, 26);
          } else if (this.time - this.lastTouchdown > 12 && e.airTime > 3) {
            this.add(e.impact < 5 ? 'Butter touchdown' : 'Touchdown', e.impact < 5 ? 150 : 80);
          }
          this.lastTouchdown = this.time;
          break;
        }
        const r = this.rot;
        const flips = Math.floor((Math.abs(r.x) + 0.9) / TAU), spins = Math.floor((Math.abs(r.y) + 0.9) / TAU), rolls = Math.floor((Math.abs(r.z) + 0.9) / TAU);
        if (e.airTime > st.longestAir) st.longestAir = e.airTime;
        if (!e.clean && (flips || spins || rolls)) { this.game.ui.toast('Sketchy landing', 'bad'); r.x = r.y = r.z = 0; break; }
        if (e.airTime > 0.75) this.add(`Air time ${e.airTime.toFixed(1)}s`, e.airTime * 70, true);
        const n = (k) => (k > 1 ? ['', '', 'Double ', 'Triple ', 'Quad '][Math.min(k, 4)] : '');
        if (flips) this.add(n(flips) + (r.x > 0 ? 'Front flip' : 'Backflip'), 320 * flips * (flips > 1 ? 1.3 : 1));
        if (spins) this.add(`${spins * 360} Spin`, 220 * spins);
        if (rolls) this.add(n(rolls) + 'Barrel roll', 260 * rolls);
        if (e.clean && e.airTime > 1.2 && e.impact < 12) this.add('Clean landing', 60, true);
        const pad = this.padAt(e);
        if (pad && e.airTime > 1) this.add(`Bullseye · ${pad.name}`, 300);
        r.x = r.y = r.z = 0;
        break;
      }
      default:
    }
  }

  padAt(e) {
    for (const p of this.game.world.pads) {
      if (Math.abs(e.y - p.y) < 1.2 && Math.hypot(e.x - p.x, e.z - p.z) < p.r + 0.8) return p;
    }
    return null;
  }

  update(dt, car) {
    this.time += dt;
    const st = save.data.stats;
    if (car.speed > st.topSpeed) st.topSpeed = car.speed;

    if (car.mode === 'air') {
      this.rot.x += car.angVel.x * dt; this.rot.y += car.angVel.y * dt; this.rot.z += car.angVel.z * dt;
    }
    // drifting
    const D = this.drift;
    if (car.mode === 'drive' && car.offGround < 0.05 && car.slip > 5.5 && car.speed > 13) {
      D.t += dt; D.pts += car.slip * dt * 5; D.gap = 0;
    } else if (D.t > 0) {
      D.gap += dt;
      if (D.gap > 0.35) {
        if (D.t > 0.9) this.add(`Drift ${D.t.toFixed(1)}s`, D.pts);
        D.t = D.pts = 0;
      }
    }
    // low-level skimming in flight
    if (car.mode === 'fly' && car.skim && car.alt < 3 && car.speed > 38) {
      this.skimT += dt;
      if (this.skimT > 1.1) { this.skimT = 0; this.add(car.skim === 'water' ? 'Wave skimmer' : 'Ground hugger', 60, true); }
    } else this.skimT = Math.max(0, this.skimT - dt);

    this.checkRings(car);

    // the pot banks once the car has been steady for a moment
    if (this.pot > 0) {
      const frozen = car.mode === 'air' || D.t > 0;
      if (!frozen) this.timer -= dt;
      if (this.timer <= 0) this.bank();
      else this.game.ui.comboTimer(this.timer / 4.2);
    }
  }

  checkRings(car) {
    const rings = this.game.world.rings, p0 = car.prev, p1 = car.pos;
    for (let i = 0; i < rings.length; i++) {
      const r = rings[i];
      if (r.cooldown > 0) continue;
      const dx = p1.x - r.pos.x, dy = p1.y + 0.6 - r.pos.y, dz = p1.z - r.pos.z;
      if (dx * dx + dy * dy + dz * dz > 900) continue;
      const d1 = dx * r.dir.x + dy * r.dir.y + dz * r.dir.z;
      const d0 = (p0.x - r.pos.x) * r.dir.x + (p0.y + 0.6 - r.pos.y) * r.dir.y + (p0.z - r.pos.z) * r.dir.z;
      if (d0 * d1 > 0) continue;
      const t = d0 / (d0 - d1 || 1e-6);
      const hx = p0.x + (p1.x - p0.x) * t - r.pos.x, hy = p0.y + 0.6 + (p1.y - p0.y) * t - r.pos.y, hz = p0.z + (p1.z - p0.z) * t - r.pos.z;
      if (hx * hx + hy * hy + hz * hz > r.r * r.r) continue;
      r.cooldown = 30; r.pulse = 1;
      const ch = this.game.world.chains[r.chain];
      let c = this.chain.get(r.chain);
      if (!c || this.time - c.t > 16) c = { n: 0, t: 0, seen: new Set() };
      if (!c.seen.has(r.index)) { c.seen.add(r.index); c.n++; }
      c.t = this.time;
      this.chain.set(r.chain, c);
      save.data.stats.rings++;
      this.add(`${ch.name} ${c.n}/${ch.count}`, 100 + 40 * (c.n - 1), true);
      this.game.audio.play('ring', { rate: 1 + (c.n - 1) * 0.085 });
      this.game.fx.burst('ring', r.pos.x, r.pos.y, r.pos.z, car.vel.x * 0.3, car.vel.y * 0.3, car.vel.z * 0.3, 22);
      if (c.n >= ch.count) {
        this.add(`${ch.name} complete!`, 500 + ch.count * 60);
        this.game.audio.play('unlock');
        this.chain.delete(r.chain);
      }
    }
  }

  nextUnlock() {
    const d = save.data;
    return PAINTS.find((p) => !d.unlocked.includes(p.id)) || null;
  }

  label() { return `${fmt(this.pot)}`; }
}
