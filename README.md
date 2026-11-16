# Flying Roadster

A free-play 3D flying-car sandbox for the browser. Floor a sleek white electric roadster down the runway, hit the launch
ramp, watch the wheels fold and the thrusters light, then fly anywhere over a sunset island, land anywhere and drive again.

**Play:** https://gaalp03.github.io/flying-roadster/

Built with three.js for [CrazyGames](https://www.crazygames.com) (SDK v3). No levels, no traffic, no logins, no ads — just the car,
the island and a pile of stunt points.

## How to play

| | Keyboard | Touch | Gamepad |
| --- | --- | --- | --- |
| Drive | `W` `A` `S` `D` / arrows | left stick: steer, push up for gas, pull down to brake | left stick, RT / LT |
| Boost (ground) · Climb (flight) | `Space` | **BOOST / UP** | A |
| Drift (ground) · Descend and land (flight) | `Shift` | **DRIFT / DOWN** | B / X |
| Take off anywhere · cut thrusters | `F` | **FLY** | Y |
| Flips and spins off a ramp | `W`/`S` flip, `A`/`D` spin, `Q`/`E` roll | stick | stick, bumpers |
| Start flying in mid-air | `Space` | **BOOST** | A |
| Barrel roll in flight | `Q` / `E` | **ROLL** | bumpers |
| Look around · zoom | drag the mouse · wheel | drag on the right side | right stick |
| Look back · reset car | `C` · `R` | | Back |
| Photo mode · pause | `P` · `Esc` | camera and pause buttons | Start |

Keys can be remapped in **Settings**.

### Things to do

- **The launch ramp** — hit it at full speed for the slow-motion take-off (there are more on the mountain summit and the pier).
- **Rings** — seven chains: over the bay, through downtown, between the bridge towers, under the deck, up the mountain,
  along the coast, through the hangar and above the clouds. Finish a chain for a bonus.
- **Stunts** — flips, spins and rolls off the kicker ramps, drifts, near misses, flying under the bridge, skimming the water.
- **Landing pads** — eleven bullseyes, from the tower helipad to the barge in the bay.
- **Combos** — every stunt fills a pot and raises the multiplier; drive or fly cleanly for a moment to bank it, crash and it is lost.
- **Garage** — stunt points unlock 13 more paint colours (progress is saved).
- **Photo mode** — orbit, zoom, tilt, switch between golden hour, clear day and night, then save the picture.

## Development

```bash
npm install
```

```bash
npm run build
```

```bash
npm run serve
```

`npm run build` bundles `src/main.js` into `js/game.js` (committed, so the repository root can be served as-is);
`npm run dev` rebuilds on change; `npm run serve` starts a static server on http://localhost:8080.

```
index.html          page shell and HUD markup
css/style.css       UI styles
js/game.js          built bundle (three.js + game)
assets/             fonts, icon and CC0 audio
src/main.js         game loop and state machine
src/vehicle.js      driving / ballistic / flight physics and collisions
src/camera.js       chase camera, cinematic take-off shot, orbit modes
src/car/model.js    procedural roadster model and paints
src/world/          terrain, roads and bridges, city, props, sky, water
src/stunts.js       combo scoring          src/fx.js      particles, plumes, trails
src/audio.js        sample-based audio     src/gfx.js     renderer, bloom, quality scaling
src/sdk.js          CrazyGames SDK wrapper src/save.js    progress and settings
tools/              build, dev server, audio preparation, zip packaging
```

Everything visual is generated in code at start-up (no model or texture downloads), so the whole game is about 3 MB.

### CrazyGames build

```bash
npm run zip
```

creates `flying-roadster.zip` with `index.html` at the archive root, ready to upload. The SDK integration covers
`loadingStart/Stop`, `gameplayStart/Stop` (menus, pause, photo mode, hidden tab), `happytime` on unlocks, the data module for saves
(with a `localStorage` fallback off-platform) and the site-wide `muteAudio` setting.

### GitHub Pages

The repository root is the site: **Settings → Pages → Deploy from a branch → `main` / `(root)`**.

## Credits and licences

Audio, fonts and libraries are listed in [CREDITS.md](CREDITS.md). All audio is CC0.
The car is an original model; the game is not affiliated with or endorsed by any car manufacturer.
