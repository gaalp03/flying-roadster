// Prepares the downloaded CC0 audio for the game: trims, makes seamless loops, normalises and encodes to MP3.
// No sound is generated here, every output is an edit of a CC0 recording listed in CREDITS.md.
//
//   node tools/build-audio.mjs <folder with the downloaded packs>
//
// Expected layout of the source folder (see CREDITS.md for the download pages):
//   sci-fi-sounds/Audio, impact-sounds/Audio, interface-sounds/Audio, music-jingles/Audio   (Kenney packs, unzipped)
//   swishes/swishes/*.wav                                                                   (OpenGameArt "Swishes Sound Pack")
//   oga/wind.ogg, oga/thruster.ogg, oga/photo.ogg, oga/splashes.mp3, oga/kart.mp3           (OpenGameArt singles)
//   music/space_city_bpm115_0.ogg                                                           (OpenGameArt "Space City")
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const SRC = process.argv[2];
if (!SRC || !fs.existsSync(SRC)) { console.error('usage: node tools/build-audio.mjs <source folder>'); process.exit(1); }
const OUT = 'assets/audio', SR = 44100;
fs.mkdirSync(OUT, { recursive: true });

function decode(file, channels, start = 0, dur = 0) {
  const args = ['-v', 'error'];
  if (start) args.push('-ss', String(start));
  if (dur) args.push('-t', String(dur));
  args.push('-i', path.join(SRC, file), '-f', 'f32le', '-ac', String(channels), '-ar', String(SR), 'pipe:1');
  const raw = execFileSync('ffmpeg', args, { maxBuffer: 1 << 30 });
  return new Float32Array(raw.buffer, raw.byteOffset, raw.byteLength / 4);
}
function encode(samples, channels, name, kbps) {
  const buf = Buffer.from(samples.buffer, samples.byteOffset, samples.byteLength);
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-f', 'f32le', '-ac', String(channels), '-ar', String(SR), '-i', 'pipe:0', '-codec:a', 'libmp3lame', '-b:a', `${kbps}k`, path.join(OUT, `${name}.mp3`)], { input: buf });
  return fs.statSync(path.join(OUT, `${name}.mp3`)).size;
}
function normalise(x, peakDb) {
  let peak = 0;
  for (let i = 0; i < x.length; i++) peak = Math.max(peak, Math.abs(x[i]));
  const g = peak > 0 ? Math.pow(10, peakDb / 20) / peak : 1;
  for (let i = 0; i < x.length; i++) x[i] *= g;
  return x;
}

const manifest = {};
let total = 0;

// --- music: the track loops as delivered; pad it with a copy of its own end/start so players can loop inside the file
{
  const x = decode('music/space_city_bpm115_0.ogg', 2);
  const L = Math.min(Math.round(((224 * 60) / 115) * SR), x.length / 2), pre = SR, post = Math.round(SR * 1.2);
  const out = new Float32Array((pre + L + post) * 2);
  for (let i = 0; i < pre + L + post; i++) {
    const s = (((i - pre) % L) + L) % L;
    out[i * 2] = x[s * 2]; out[i * 2 + 1] = x[s * 2 + 1];
  }
  total += encode(out, 2, 'music', 128);
  manifest.music = { loop: [pre / SR, L / SR] };
}

// --- continuous layers: cut a stretch, crossfade its tail into its head so it loops without a click
const LOOPS = {
  motor: ['sci-fi-sounds/Audio/engineCircular_000.ogg', 0.3, 4.0, 0.5],
  jet: ['sci-fi-sounds/Audio/thrusterFire_000.ogg', 0.3, 4.0, 0.5],
  lift: ['oga/thruster.ogg', 0.4, 4.6, 0.6],
  wind: ['oga/wind.ogg', 0.2, 5.0, 0.6],
  skid: ['oga/kart.mp3', 4.35, 1.7, 0.4],
};
for (const [name, [file, start, len, fade]] of Object.entries(LOOPS)) {
  const x = decode(file, 1, Math.max(0, start - fade), len + fade + 0.05);
  const off = Math.round(Math.min(start, fade) * SR), L = Math.round(len * SR), F = Math.min(off, Math.round(fade * SR));
  const loop = new Float32Array(L);
  for (let i = 0; i < L; i++) {
    let v = x[off + i] || 0;
    if (i >= L - F) {
      const k = (i - (L - F)) / F; // equal-power blend into the audio that precedes the loop start
      v = v * Math.cos((k * Math.PI) / 2) + (x[off + i - L] || 0) * Math.sin((k * Math.PI) / 2);
    }
    loop[i] = v;
  }
  normalise(loop, -4);
  const pad = Math.round(0.25 * SR), out = new Float32Array(L + pad * 2);
  for (let i = 0; i < out.length; i++) out[i] = loop[(((i - pad) % L) + L) % L];
  total += encode(out, 1, name, 96);
  manifest[name] = { loop: [0.25, len] };
}

// --- one-shots: [file, start, duration (0 = whole file)]
const SHOTS = {
  click: ['interface-sounds/Audio/click_002.ogg'],
  tick: ['interface-sounds/Audio/select_003.ogg'],
  ring: ['interface-sounds/Audio/confirmation_002.ogg'],
  bank: ['interface-sounds/Audio/confirmation_004.ogg'],
  bankBig: ['music-jingles/Audio/Steel jingles/jingles_STEEL10.ogg'],
  unlock: ['music-jingles/Audio/Steel jingles/jingles_STEEL03.ogg'],
  thud: ['impact-sounds/Audio/impactSoft_medium_001.ogg'],
  land: ['impact-sounds/Audio/impactSoft_heavy_002.ogg'],
  crash: ['impact-sounds/Audio/impactMetal_heavy_001.ogg'],
  crash2: ['impact-sounds/Audio/impactPlate_heavy_000.ogg'],
  scrape: ['impact-sounds/Audio/impactMetal_light_002.ogg'],
  ignite: ['sci-fi-sounds/Audio/lowFrequency_explosion_000.ogg'],
  fold: ['sci-fi-sounds/Audio/doorClose_000.ogg'],
  unfold: ['sci-fi-sounds/Audio/doorOpen_000.ogg'],
  whoosh: ['swishes/swishes/swish-9.wav'],
  whoosh2: ['swishes/swishes/swish-2.wav'],
  splash: ['oga/splashes.mp3', 0, 1.14],
  shutter: ['oga/photo.ogg'],
};
for (const [name, [file, start = 0, dur = 0]] of Object.entries(SHOTS)) {
  const x = Float32Array.from(decode(file, 1, start, dur));
  const f = Math.min(x.length, Math.round(0.012 * SR));
  for (let i = 0; i < f; i++) x[x.length - 1 - i] *= i / f;
  normalise(x, -1.5);
  total += encode(x, 1, name, 96);
  manifest[name] = {};
}

fs.writeFileSync('src/audio-manifest.js', `// Generated by tools/build-audio.mjs. loop: [start, length] in seconds inside the file.\nexport const AUDIO = ${JSON.stringify(manifest, null, 2)};\n`);
console.log(`${Object.keys(manifest).length} files, ${(total / 1024).toFixed(0)} kB -> ${OUT}`);
