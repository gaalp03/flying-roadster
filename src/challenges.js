import { save } from './save.js';

// Long-term goals. Each one pays out stunt points once, which also counts toward paint unlocks.
// `v` reads the current progress from the saved stats, `n` is the target.
export const CHALLENGES = [
  { id: 'liftoff', name: 'Wheels Up', desc: 'Take the big launch ramp and fly', n: 1, v: (s) => s.launches, reward: 300 },
  { id: 'flyer', name: 'Frequent Flyer', desc: 'Launch off big ramps 10 times', n: 10, v: (s) => s.launches, reward: 900 },
  { id: 'flip', name: 'Head Over Wheels', desc: 'Land a flip off any jump', n: 1, v: (s) => s.flips, reward: 300 },
  { id: 'acro', name: 'Acrobat', desc: 'Land 25 flips, spins or rolls', n: 25, v: (s) => s.flips + s.spins + s.rolls, reward: 1500 },
  { id: 'rings', name: 'Ring Runner', desc: 'Fly through 25 rings', n: 25, v: (s) => s.rings, reward: 600 },
  { id: 'chain3', name: 'Chain Gang', desc: 'Complete 3 different ring chains', n: 3, v: (s) => s.chains.length, reward: 1200 },
  { id: 'chainAll', name: 'Thread Them All', desc: 'Complete every ring chain', n: 8, v: (s) => s.chains.length, reward: 4000 },
  { id: 'pad', name: 'Bullseye', desc: 'Fly in and land on a landing pad', n: 1, v: (s) => s.pads.length, reward: 400 },
  { id: 'padAll', name: 'Pad Hopper', desc: 'Land on all 11 landing pads', n: 11, v: (s) => s.pads.length, reward: 3500 },
  { id: 'near', name: 'Close Call', desc: 'Pull off 10 near misses', n: 10, v: (s) => s.near, reward: 600 },
  { id: 'under', name: 'Bridge Dweller', desc: 'Fly under the bay bridge', n: 1, v: (s) => s.under, reward: 500 },
  { id: 'drift', name: 'Sideways', desc: 'Hold a 3 second drift', n: 3, v: (s) => s.driftBest, reward: 500, dec: 1, unit: 's' },
  { id: 'skim', name: 'Wave Skimmer', desc: 'Skim the ground or water 5 times', n: 5, v: (s) => s.skim, reward: 500 },
  { id: 'air', name: 'Hang Time', desc: 'Stay airborne for 6 seconds on wheels', n: 6, v: (s) => s.longestAir, reward: 700, dec: 1, unit: 's' },
  { id: 'speed', name: 'Light Speed', desc: 'Hit 340 km/h', n: 340, v: (s) => s.topSpeed * 3.6, reward: 800, unit: 'km/h' },
  { id: 'alt', name: 'Cloud Nine', desc: 'Climb to 400 m altitude', n: 400, v: (s) => s.maxAlt, reward: 800, unit: 'm' },
  { id: 'combo', name: 'Showtime', desc: 'Bank a single 5,000 point combo', n: 5000, v: (s) => s.bestCombo, reward: 1500 },
];

export function progress(c) {
  const s = save.data.stats;
  return Math.min(c.n, c.v(s) || 0);
}

export function isDone(c) { return save.data.done.includes(c.id); }

// Returns the challenges completed since the last call (and records them).
export function checkChallenges() {
  const d = save.data, out = [];
  for (const c of CHALLENGES) {
    if (d.done.includes(c.id)) continue;
    if ((c.v(d.stats) || 0) >= c.n) { d.done.push(c.id); out.push(c); }
  }
  return out;
}
