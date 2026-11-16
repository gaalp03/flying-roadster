// Packs the files CrazyGames needs into flying-roadster.zip (index.html at the archive root).
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const out = 'flying-roadster.zip';
if (fs.existsSync(out)) fs.rmSync(out);
execFileSync('zip', ['-r', '-9', out, 'index.html', 'css', 'js', 'assets'], { stdio: 'inherit' });
console.log(`\n${out}: ${(fs.statSync(out).size / 1048576).toFixed(2)} MB`);
