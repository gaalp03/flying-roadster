import { clamp } from './util.js';

export const ACTIONS = [
  ['forward', 'Accelerate'], ['back', 'Brake / Reverse'], ['left', 'Steer left'], ['right', 'Steer right'],
  ['boost', 'Boost / Climb'], ['shift', 'Drift / Descend'], ['fly', 'Flight on / off'], ['rollL', 'Roll left'], ['rollR', 'Roll right'],
  ['reset', 'Reset car'], ['look', 'Look back'], ['photo', 'Photo mode'], ['pause', 'Pause'],
];
export const DEFAULT_KEYS = {
  forward: ['KeyW', 'ArrowUp'], back: ['KeyS', 'ArrowDown'], left: ['KeyA', 'ArrowLeft'], right: ['KeyD', 'ArrowRight'],
  boost: ['Space'], shift: ['ShiftLeft', 'ShiftRight'], fly: ['KeyF'], rollL: ['KeyQ'], rollR: ['KeyE'],
  reset: ['KeyR'], look: ['KeyC'], photo: ['KeyP'], pause: ['Escape'],
};

export function keyLabel(code) {
  if (!code) return '—';
  const map = { Space: 'Space', ShiftLeft: 'Shift', ShiftRight: 'R Shift', ControlLeft: 'Ctrl', ControlRight: 'R Ctrl', AltLeft: 'Alt', AltRight: 'R Alt',
    ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Escape: 'Esc', Enter: 'Enter', Backspace: 'Backspace', Tab: 'Tab' };
  if (map[code]) return map[code];
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num ' + code.slice(6);
  return code;
}

// Keyboard, mouse, touch and gamepad merged into one small state object.
export class Input {
  constructor(canvas, keys) {
    this.canvas = canvas;
    this.keys = keys;
    this.down = new Set();
    this.pressed = new Set();
    this.state = { steer: 0, throttle: 0, boost: false, shift: false, roll: 0, fly: false, boostPressed: false, look: false };
    this.dragX = 0; this.dragY = 0; this.zoom = 0; this.pinch = 0;
    this.touch = { active: false, joy: null, jx: 0, jy: 0, boost: false, shift: false, fly: false, roll: false, drag: null };
    this.isTouch = false;
    this.capture = null; // callback while remapping a key
    this.enabled = true;
    this.padPrev = [];
    this.onTouchMode = null;

    addEventListener('keydown', (e) => {
      if (this.capture) { e.preventDefault(); const cb = this.capture; this.capture = null; cb(e.code); return; }
      if (e.target && /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
      if (!e.repeat) this.pressed.add(e.code);
      this.down.add(e.code);
    });
    addEventListener('keyup', (e) => this.down.delete(e.code));
    addEventListener('blur', () => { this.down.clear(); this.touch.boost = this.touch.shift = false; this.touch.joy = null; });

    // mouse look
    let dragging = false;
    canvas.addEventListener('mousedown', (e) => { if (e.button === 0 || e.button === 2) dragging = true; });
    addEventListener('mouseup', () => { dragging = false; });
    addEventListener('mousemove', (e) => { if (dragging) { this.dragX += e.movementX; this.dragY += e.movementY; } });
    canvas.addEventListener('wheel', (e) => { e.preventDefault(); this.zoom += Math.sign(e.deltaY); }, { passive: false });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    // touch: left side = floating joystick, anywhere else on the canvas = camera drag
    const T = this.touch;
    const onStart = (e) => {
      if (!this.isTouch) { this.isTouch = true; if (this.onTouchMode) this.onTouchMode(true); }
      for (const t of e.changedTouches) {
        if (this.joyEnabled && !T.joy && t.clientX < innerWidth * 0.46 && t.clientY > innerHeight * 0.25) {
          T.joy = { id: t.identifier, x: t.clientX, y: t.clientY };
          T.jx = T.jy = 0;
          if (this.onJoy) this.onJoy(T.joy, 0, 0, true);
        } else if (!T.drag) T.drag = { id: t.identifier, x: t.clientX, y: t.clientY };
        else if (!T.drag2) { T.drag2 = { id: t.identifier, x: t.clientX, y: t.clientY }; T.pinchD = Math.hypot(T.drag.x - t.clientX, T.drag.y - t.clientY); }
      }
      e.preventDefault();
    };
    const onMove = (e) => {
      for (const t of e.changedTouches) {
        if (T.joy && t.identifier === T.joy.id) {
          const R = 58;
          let dx = (t.clientX - T.joy.x) / R, dy = (t.clientY - T.joy.y) / R;
          const l = Math.hypot(dx, dy);
          if (l > 1) { dx /= l; dy /= l; }
          T.jx = dx; T.jy = -dy;
          if (this.onJoy) this.onJoy(T.joy, dx, dy, true);
        } else if (T.drag && t.identifier === T.drag.id) {
          if (!T.drag2) { this.dragX += (t.clientX - T.drag.x) * 1.4; this.dragY += (t.clientY - T.drag.y) * 1.4; }
          T.drag.x = t.clientX; T.drag.y = t.clientY;
        } else if (T.drag2 && t.identifier === T.drag2.id) { T.drag2.x = t.clientX; T.drag2.y = t.clientY; }
        if (T.drag && T.drag2) {
          const d = Math.hypot(T.drag.x - T.drag2.x, T.drag.y - T.drag2.y);
          this.pinch += (T.pinchD - d) * 0.02;
          T.pinchD = d;
        }
      }
      e.preventDefault();
    };
    const onEnd = (e) => {
      for (const t of e.changedTouches) {
        if (T.joy && t.identifier === T.joy.id) { T.joy = null; T.jx = T.jy = 0; if (this.onJoy) this.onJoy(null, 0, 0, false); }
        if (T.drag && t.identifier === T.drag.id) { T.drag = T.drag2 || null; T.drag2 = null; }
        else if (T.drag2 && t.identifier === T.drag2.id) T.drag2 = null;
      }
    };
    canvas.addEventListener('touchstart', onStart, { passive: false });
    canvas.addEventListener('touchmove', onMove, { passive: false });
    canvas.addEventListener('touchend', onEnd);
    canvas.addEventListener('touchcancel', onEnd);
    this.joyEnabled = true;
  }

  // Wire an on-screen button (element) to a touch flag: 'boost' | 'shift' | 'fly' | 'roll'.
  bindButton(el, name) {
    const T = this.touch;
    const on = (e) => { e.preventDefault(); if (!this.isTouch) { this.isTouch = true; if (this.onTouchMode) this.onTouchMode(true); } T[name] = true; if (name === 'fly' || name === 'roll') T[name + 'Edge'] = true; el.classList.add('on'); };
    const off = (e) => { e.preventDefault(); T[name] = false; el.classList.remove('on'); };
    el.addEventListener('touchstart', on, { passive: false });
    el.addEventListener('touchend', off, { passive: false });
    el.addEventListener('touchcancel', off, { passive: false });
    el.addEventListener('mousedown', on);
    el.addEventListener('mouseup', off);
    el.addEventListener('mouseleave', (e) => { if (T[name]) off(e); });
  }

  held(action) {
    const list = this.keys[action];
    if (!list) return false;
    for (const c of list) if (c && this.down.has(c)) return true;
    return false;
  }

  hit(action) {
    const list = this.keys[action];
    if (!list) return false;
    for (const c of list) if (c && this.pressed.has(c)) return true;
    return false;
  }

  // Call once per frame; edge flags are valid until the next call.
  poll(inFlight) {
    const s = this.state, T = this.touch;
    let steer = (this.held('right') ? 1 : 0) - (this.held('left') ? 1 : 0);
    let throttle = (this.held('forward') ? 1 : 0) - (this.held('back') ? 1 : 0);
    let boost = this.held('boost'), shift = this.held('shift');
    let roll = (this.held('rollR') ? 1 : 0) - (this.held('rollL') ? 1 : 0);
    let fly = this.hit('fly'), boostPressed = this.hit('boost');
    const ev = { pause: this.hit('pause'), photo: this.hit('photo'), reset: this.hit('reset') };
    s.look = this.held('look');

    if (T.joy) {
      const dz = (v, d) => (Math.abs(v) < d ? 0 : (v - Math.sign(v) * d) / (1 - d));
      steer = clamp(steer + dz(T.jx, 0.12), -1, 1);
      throttle = clamp(throttle + dz(T.jy, 0.2) * 1.25, -1, 1);
    }
    if (T.boost) { boost = true; if (!T.boostWas) boostPressed = true; }
    T.boostWas = T.boost;
    if (T.shift) shift = true;
    // the FLY button doubles as ROLL while flying, so a stray tap can never drop the car out of the sky
    if (T.flyEdge) { if (inFlight) this.rollHold = { dir: steer < -0.1 ? -1 : 1, t: 6 }; else fly = true; T.flyEdge = false; }
    if (this.rollHold) { roll = this.rollHold.dir; if (--this.rollHold.t <= 0) this.rollHold = null; }

    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const pad of pads) {
      if (!pad || !pad.connected || pad.mapping !== 'standard') continue;
      const b = (i) => pad.buttons[i] && pad.buttons[i].pressed, v = (i) => (pad.buttons[i] ? pad.buttons[i].value : 0);
      const was = this.padPrev;
      const ax = Math.abs(pad.axes[0]) > 0.15 ? pad.axes[0] : 0;
      steer = clamp(steer + ax, -1, 1);
      throttle = clamp(throttle + v(7) - v(6), -1, 1);
      if (b(0)) { boost = true; if (!was[0]) boostPressed = true; }
      if (b(1) || b(2)) shift = true;
      if (b(3) && !was[3]) fly = true;
      roll = clamp(roll + (b(5) ? 1 : 0) - (b(4) ? 1 : 0), -1, 1);
      if (b(9) && !was[9]) ev.pause = true;
      if (b(8) && !was[8]) ev.reset = true;
      if (Math.abs(pad.axes[2]) > 0.2) this.dragX += pad.axes[2] * 14;
      if (Math.abs(pad.axes[3]) > 0.2) this.dragY += pad.axes[3] * 10;
      this.padPrev = pad.buttons.map((x) => x.pressed);
      break;
    }

    s.steer = steer; s.throttle = throttle; s.boost = boost; s.shift = shift; s.roll = roll;
    s.fly = fly; s.boostPressed = boostPressed;
    this.pressed.clear();
    return ev;
  }

  takeDrag() {
    const d = { x: this.dragX, y: this.dragY, zoom: this.zoom + this.pinch };
    this.dragX = this.dragY = this.zoom = this.pinch = 0;
    return d;
  }
}
