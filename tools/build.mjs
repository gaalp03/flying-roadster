// Bundles src/main.js into js/game.js (committed so GitHub Pages can serve the repo root as-is).
import * as esbuild from 'esbuild';

const watch = process.argv.includes('--watch');
const options = {
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: !watch,
  format: 'iife',
  target: 'es2020',
  outfile: 'js/game.js',
  legalComments: 'none',
  logLevel: 'info',
};

if (watch) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
} else {
  await esbuild.build(options);
}
