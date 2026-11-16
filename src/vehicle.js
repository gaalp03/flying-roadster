import * as THREE from 'three';
import { clamp, lerp, damp, dampAngle, smoothstep } from './util.js';
import { Colliders, STEP } from './world/colliders.js';
import { DIM } from './car/model.js';
import { SPAWN } from './world/layout.js';

export const TOP = 66, TOP_BOOST = 92, TOP_FLY = 100;
const G_AIR = 15, G_GROUND = 23, REVERSE = 15, CEILING = 720, EDGE = 2500;
const BODY_R = 1.0, BODY_OFF = 1.15, BODY_H = 1.15;

const _e = new THREE.Euler(0, 0, 0, 'YXZ');
const _q = new THREE.Quaternion();
const _v = new THREE.Vector3();
const _g = { h: 0, surf: 'road', box: null, water: false };
const _gw = { h: 0, surf: 'road', box: null, water: false };

// Arcade car that drives, jumps ballistically and flies. All state is in SI units.
export class Vehicle {
  constructor(world) {
    this.world = world;
    this.pos = new THREE.Vector3();
    this.prev = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.quat = new THREE.Quaternion();
    this.angVel = new THREE.Vector3();
    this.events = [];
    this.near = [];
    this.safe = { x: SPAWN.x, z: SPAWN.z, yaw: SPAWN.yaw };
    this.time = 0;
    this.reset(SPAWN.x, SPAWN.z, SPAWN.yaw);
  }

  reset(x, z, yaw) {
    this.world.ground(x, 5000, z, _g);
    this.pos.set(x, Math.max(_g.h, 0), z);
    this.prev.copy(this.pos);
    this.vel.set(0, 0, 0);
    this.angVel.set(0, 0, 0);
    this.yaw = yaw; this.pitch = 0; this.roll = 0; this.yawRate = 0;
    this.mode = 'drive';
    this.fold = 0; this.foldTarget = 0;
    this.steer = 0; this.speed = 0; this.slip = 0;
    this.boost = 1; this.boosting = false; this.braking = false; this.thrust = 0; this.lift = 0;
    this.offGround = 0; this.airTime = 0; this.flyTime = 0; this.launchAssist = 0; this.recover = 0;
    this.rollTrick = 0; this.rollDir = 0; this.pitchLock = false; this.launching = false; this.lastThrottle = 0;
    this.surf = 'road'; this.groundY = this.pos.y; this.alt = 0; this.overWater = false;
    this.lastRamp = null; this.lastRampT = -9; this.underT = -9; this.underAward = -9; this.hitT = -9; this.safeT = 0;
    this.syncQuat();
  }

  syncQuat() {
    _e.set(this.pitch, this.yaw, this.roll + this.rollTrick, 'YXZ');
    this.quat.setFromEuler(_e);
  }

  eulerFromQuat() {
    _e.setFromQuaternion(this.quat, 'YXZ');
    this.yaw = _e.y; this.pitch = _e.x; this.roll = _e.z;
  }

  emit(type, data) {
    this.events.push(Object.assign({ type }, data));
  }

  engageFlight(fromRamp = false) {
    if (this.mode === 'fly') return;
    const wasGround = this.mode === 'drive';
    if (this.mode === 'air') this.eulerFromQuat();
    this.mode = 'fly';
    this.launching = false;
    this.foldTarget = 1;
    this.flyTime = 0;
    this.rollTrick = 0;
    this.launchAssist = fromRamp ? 1.5 : 0;
    if (wasGround) { this.pos.y += 0.25; this.vel.y = Math.max(this.vel.y, 7.5); this.launchAssist = 0.45; }
    this.emit('engage', { fromRamp, wasGround });
  }

  dropFlight() {
    if (this.mode !== 'fly') return;
    this.syncQuat();
    this.mode = 'air';
    this.foldTarget = 0;
    this.airTime = 0;
    this.angVel.set(0, 0, 0);
    this.emit('disengage', {});
  }

  step(dt, input) {
    this.time += dt;
    this.prev.copy(this.pos);
    if (this.mode === 'sunk') { this.vel.multiplyScalar(1 - 3 * dt); this.pos.addScaledVector(this.vel, dt); this.thrust = this.lift = 0; this.speed = 0; return; }
    if (input.fly) { if (this.mode === 'fly') this.dropFlight(); else this.engageFlight(false); }
    if (this.mode === 'drive') this.stepDrive(dt, input);
    else if (this.mode === 'air') this.stepAir(dt, input);
    else this.stepFly(dt, input);
    this.collide(dt);
    this.fold = clamp(this.fold + Math.sign(this.foldTarget - this.fold) * dt / 0.42, 0, 1);
    if (Math.abs(this.fold - this.foldTarget) < dt / 0.42) this.fold = this.foldTarget;
    // keep players near the island
    const d = Math.hypot(this.pos.x, this.pos.z);
    if (d > EDGE) {
      const home = Math.atan2(-this.pos.x, -this.pos.z);
      if (this.mode !== 'air') this.yaw = dampAngle(this.yaw, home, smoothstep(EDGE, EDGE + 500, d) * 1.6, dt);
      else { this.vel.x -= (this.pos.x / d) * 30 * dt; this.vel.z -= (this.pos.z / d) * 30 * dt; }
      if (this.time - (this.edgeT || -9) > 6) { this.edgeT = this.time; this.emit('edge', {}); }
    }
    if (this.mode !== 'air') this.syncQuat();
    this.speed = Math.hypot(this.vel.x, this.vel.z);
  }

  // ------------------------------------------------------------------ driving
  stepDrive(dt, input) {
    const W = this.world, p = this.pos;
    this.lastThrottle = input.throttle;
    this.steer = damp(this.steer, -input.steer, 8, dt);
    let sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    let vF = this.vel.x * sy + this.vel.z * cy;
    const grounded = this.offGround < 0.05;
    const surfGrip = this.surf === 'road' ? 1 : this.surf === 'grass' ? 0.82 : 0.66;
    const drift = input.shift && Math.abs(vF) > 4;

    // steering: kinematic at low speed, grip limited at high speed
    const maxSteer = lerp(0.6, 0.075, smoothstep(0, 72, Math.abs(vF)));
    let yawRate = (vF * Math.tan(this.steer * maxSteer)) / DIM.wheelbase;
    const lim = ((drift ? 31 : 25) * surfGrip) / Math.max(Math.abs(vF), 7);
    yawRate = clamp(yawRate, -lim, lim) * (drift ? 1.5 : 1);
    if (grounded) this.yaw += yawRate * dt;
    this.yawRate = yawRate;
    sy = Math.sin(this.yaw); cy = Math.cos(this.yaw);
    vF = this.vel.x * sy + this.vel.z * cy;
    let vL = this.vel.x * cy - this.vel.z * sy;

    // ground under the four wheels and the centre
    const hw = DIM.trackHalf;
    const sample = (lx, lz) => W.ground(p.x + lx * cy + lz * sy, p.y, p.z - lx * sy + lz * cy, _gw).h;
    const hFL = sample(hw, DIM.frontZ), hFR = sample(-hw, DIM.frontZ), hRL = sample(hw, DIM.rearZ), hRR = sample(-hw, DIM.rearZ);
    W.ground(p.x, p.y, p.z, _g);
    const hF = (hFL + hFR) / 2, hR = (hRL + hRR) / 2;
    const gy = Math.max(_g.h, (hF + hR) / 2);
    this.surf = _g.surf;
    this.groundY = gy;
    this.alt = p.y - gy;
    this.overWater = _g.water;
    if (_g.box && _g.box.kind === 'ramp') { this.lastRamp = _g.box; this.lastRampT = this.time; }
    let slope = 0;
    if (Math.abs(hF - hR) < 1.6) {
      slope = (hF - hR) / DIM.wheelbase;
      this.pitch = damp(this.pitch, -Math.atan(slope), grounded ? 14 : 3, dt);
    }
    if (Math.abs(hFL + hRL - hFR - hRR) < 2.4) this.roll = damp(this.roll, Math.atan((hFL + hRL - hFR - hRR) / (4 * hw)), grounded ? 12 : 3, dt);

    // engine, brakes, drag
    this.boosting = input.boost && this.boost > 0.01 && input.throttle >= 0 && vF > -1;
    const top = this.boosting ? TOP_BOOST : TOP;
    let acc = 0;
    this.braking = false;
    if (this.boosting || input.throttle > 0) {
      const th = this.boosting ? 1 : input.throttle;
      if (vF < 0) acc = 30 * th;
      else acc = (this.boosting ? 27 : 16) * th * clamp(1 - Math.pow(vF / top, 2.2), -0.4, 1);
    } else if (input.throttle < 0) {
      if (vF > 0.6) { acc = 36 * input.throttle; this.braking = true; }
      else acc = 10 * input.throttle * clamp(1 + vF / REVERSE, 0, 1);
    }
    const roll = this.surf === 'road' ? 0.35 : this.surf === 'grass' ? 2.0 : 3.4;
    acc -= Math.sign(vF) * roll * Math.min(1, Math.abs(vF) / 2) + 0.0005 * vF * Math.abs(vF);
    if (drift) acc -= Math.sign(vF) * 5;
    if (!this.boosting && input.throttle === 0 && Math.abs(vF) < 0.4) vF = 0;
    acc -= G_GROUND * 0.75 * slope / Math.sqrt(1 + slope * slope);
    if (grounded) {
      vF += acc * dt * (this.surf === 'road' ? 1 : this.boosting ? 0.9 : 0.86);
      vL *= Math.exp(-(drift ? 2.3 : 11.5) * surfGrip * dt);
    }
    this.slip = Math.abs(vL);
    this.boost = clamp(this.boost + (this.boosting ? -0.3 : 0.085) * dt, 0, 1);
    this.thrust = damp(this.thrust, this.boosting ? 1 : 0, 8, dt);
    this.lift = damp(this.lift, 0, 6, dt);
    this.vel.x = sy * vF + cy * vL;
    this.vel.z = cy * vF - sy * vL;
    p.x += this.vel.x * dt;
    p.z += this.vel.z * dt;

    // vertical: the ground can only push up
    const vyFree = this.vel.y - G_GROUND * dt, yFree = p.y + vyFree * dt;
    if (yFree > gy + 0.015) {
      p.y = yFree;
      this.vel.y = vyFree;
      this.offGround += dt;
      if (this.offGround > 0.085 && yFree - gy > 0.4) this.takeOff();
    } else {
      this.vel.y = clamp((gy - p.y) / dt, -30, 45);
      if (this.offGround > 0.2) this.emit('thump', { impact: -vyFree });
      p.y = gy;
      this.offGround = 0;
    }

    if (this.overWater && p.y < -0.55) return this.sink();
    // remember a safe place to respawn
    if (grounded && !this.overWater && gy > 1.5 && this.time - this.safeT > 1.2 && Math.abs(vF) > 2 && this.time - this.hitT > 1.5) {
      this.safeT = this.time;
      this.safe.x = p.x - sy * 4; this.safe.z = p.z - cy * 4; this.safe.yaw = this.yaw;
    }
  }

  sink() {
    this.mode = 'sunk';
    this.vel.y = Math.max(this.vel.y, -3);
    this.boosting = this.braking = false;
    this.emit('splash', {});
  }

  takeOff() {
    this.mode = 'air';
    this.airTime = this.offGround;
    // holding the throttle through a take-off must not start a front flip: release and press again to flip
    this.pitchLock = this.lastThrottle > 0;
    this.angVel.set(0, this.yawRate * 0.35, 0);
    this.syncQuat();
    const ramp = this.time - this.lastRampT < 0.25 ? this.lastRamp : null;
    const speed = Math.hypot(this.vel.x, this.vel.z);
    this.emit('jump', { ramp, speed });
    if (ramp && ramp.launch && speed > 36) this.emit('launch', { ramp, speed });
  }

  // ------------------------------------------------------------------ ballistic air
  stepAir(dt, input) {
    const p = this.pos;
    this.airTime += dt;
    this.steer = damp(this.steer, 0, 6, dt);
    this.thrust = damp(this.thrust, 0, 8, dt);
    this.boosting = false;
    this.braking = false;
    if (input.boostPressed && this.airTime > 0.12 && this.recover <= 0) return this.engageFlight(false);
    this.vel.y -= G_AIR * dt;
    const drag = 1 - 0.035 * dt;
    this.vel.x *= drag; this.vel.z *= drag;
    p.addScaledVector(this.vel, dt);

    // tricks: pitch with throttle, spin with steer, barrel roll with the roll keys
    if (this.pitchLock && input.throttle <= 0) this.pitchLock = false;
    const ctl = this.launching ? 0 : 1, pitchIn = this.pitchLock ? 0 : input.throttle * ctl;
    const any = pitchIn !== 0 || input.steer * ctl !== 0 || input.roll * ctl !== 0;
    this.angVel.x = damp(this.angVel.x, pitchIn * 4.4, 7, dt);
    this.angVel.y = damp(this.angVel.y, -input.steer * 3.8 * ctl, 7, dt);
    this.angVel.z = damp(this.angVel.z, input.roll * 6 * ctl, 7, dt);
    const w = this.angVel, wl = w.length();
    if (wl > 1e-4) {
      _q.setFromAxisAngle(_v.copy(w).divideScalar(wl), wl * dt);
      this.quat.multiply(_q).normalize();
    }
    if (this.recover > 0 || (!any && this.airTime > 0.3)) {
      // ease back to wheels-down so untouched jumps land cleanly
      _e.setFromQuaternion(this.quat, 'YXZ');
      const lvl = this.recover > 0 ? 9 : 1.7;
      _e.x = damp(_e.x, clamp(-Math.atan2(this.vel.y, Math.max(8, Math.hypot(this.vel.x, this.vel.z))) * 0.35, -0.3, 0.3), lvl, dt);
      _e.z = damp(_e.z, 0, lvl, dt);
      this.quat.setFromEuler(_e);
      this.recover -= dt;
    }

    this.world.ground(p.x, p.y + 0.2, p.z, _g);
    this.groundY = _g.h;
    this.overWater = _g.water;
    this.alt = p.y - Math.max(_g.h, 0);
    if (_g.water && p.y < -0.5) return this.sink();
    if (p.y <= _g.h) {
      const impact = -this.vel.y;
      const up = _v.set(0, 1, 0).applyQuaternion(this.quat).y;
      p.y = _g.h;
      if (up > 0.5) {
        this.eulerFromQuat();
        this.mode = 'drive';
        this.launching = false;
        this.offGround = 0;
        this.vel.y = 0;
        this.surf = _g.surf;
        this.emit('land', { impact, airTime: this.airTime, clean: up > 0.9, fromFlight: false, x: p.x, y: p.y, z: p.z });
      } else {
        this.vel.y = clamp(impact * 0.35, 3.5, 7);
        this.vel.x *= 0.6; this.vel.z *= 0.6;
        this.recover = 0.5;
        this.airTime = 0;
        this.angVel.set(0, 0, 0);
        this.hitT = this.time;
        this.emit('crash', { impact: Math.max(impact, 8), flipped: true });
      }
    }
  }

  // ------------------------------------------------------------------ flight
  stepFly(dt, input) {
    const p = this.pos, W = this.world;
    this.flyTime += dt;
    this.steer = damp(this.steer, -input.steer, 6, dt);
    const sp = Math.hypot(this.vel.x, this.vel.z), spk = clamp(sp / TOP_FLY, 0, 1);
    this.yawRate = damp(this.yawRate, -input.steer * lerp(1.75, 0.8, spk), 5.5, dt);
    this.yaw += this.yawRate * dt;
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    let vF = this.vel.x * sy + this.vel.z * cy, vL = this.vel.x * cy - this.vel.z * sy;
    if (input.throttle > 0) vF += 26 * input.throttle * clamp(1 - vF / TOP_FLY, 0, 1) * dt;
    else if (input.throttle < 0) vF += (vF > 0 ? 34 : 12 * clamp(1 + vF / 12, 0, 1)) * input.throttle * dt;
    else vF -= vF * 0.2 * dt;
    vL *= Math.exp(-3.4 * dt);
    this.vel.x = sy * vF + cy * vL;
    this.vel.z = cy * vF - sy * vL;
    this.braking = input.throttle < 0 && vF > 1;
    this.boosting = false;

    let vyT = input.boost ? 27 : input.shift ? -30 : 0;
    if (p.y > CEILING - 80) vyT = Math.min(vyT, (CEILING - p.y) * 0.35);
    // landing flare: slow the descent close to the surface so touchdowns are gentle
    const flare = -(2.5 + this.alt * 1.7);
    if (this.alt < 14) vyT = Math.max(vyT, flare);
    this.launchAssist -= dt;
    this.vel.y = damp(this.vel.y, vyT, this.launchAssist > 0 && !input.shift ? 0.35 : this.alt < 14 && this.vel.y < flare ? 11 : 3.3, dt);
    p.addScaledVector(this.vel, dt);

    this.thrust = damp(this.thrust, 0.35 + 0.65 * Math.max(0, input.throttle) * (1 - spk * 0.4) + (input.boost ? 0.3 : 0), 6, dt);
    this.lift = damp(this.lift, 0.55 + (input.boost ? 0.45 : 0) - (input.shift ? 0.25 : 0), 6, dt);
    this.pitch = damp(this.pitch, clamp(-Math.atan2(this.vel.y, Math.max(Math.abs(vF), 24)) * 0.9 + input.throttle * 0.035, -0.7, 0.7), 5, dt);
    this.roll = damp(this.roll, clamp(-this.yawRate * (0.3 + 0.42 * spk), -1, 1), 5, dt);
    // barrel roll trick
    if (this.rollDir === 0 && input.roll !== 0 && this.flyTime > 0.3) { this.rollDir = input.roll; this.rollT = 0; }
    if (this.rollDir !== 0) {
      this.rollT += dt / 0.72;
      const k = Math.min(this.rollT, 1), e = k * k * (3 - 2 * k);
      this.rollTrick = this.rollDir * e * Math.PI * 2;
      if (k >= 1) { this.rollTrick = 0; this.emit('barrel', {}); this.rollDir = 0; }
    }

    W.ground(p.x, p.y + 0.6, p.z, _g);
    const water = _g.water;
    const floor = water ? 0 : _g.h;
    this.groundY = floor;
    this.overWater = water;
    this.alt = p.y - floor;
    this.surf = _g.surf;
    const gearDown = !water && this.rollDir === 0 && ((this.alt < 4 && this.vel.y < -0.6) || (input.shift && this.alt < 9));
    this.foldTarget = gearDown ? 0 : 1;
    const hover = water ? 0.6 : 0.5 * this.fold;
    if (!water && this.foldTarget === 0 && this.fold < 0.4 && p.y <= floor + 0.03) {
      const impact = -this.vel.y;
      p.y = floor;
      this.mode = 'drive';
      this.offGround = 0;
      this.vel.y = 0;
      this.rollTrick = 0; this.rollDir = 0;
      this.emit('land', { impact, airTime: this.flyTime, clean: true, fromFlight: true, x: p.x, y: p.y, z: p.z, box: _g.box });
      return;
    }
    if (p.y < floor + hover) {
      const need = (floor + hover - p.y) / dt;
      if (need > 46 && sp > 20 && !water) {
        // flew into a steep slope: bounce off along the ground normal
        W.terrain.normalAt(p.x, p.z, _v);
        const vn = this.vel.dot(_v);
        if (vn < 0) this.vel.addScaledVector(_v, -1.5 * vn);
        this.vel.multiplyScalar(0.62);
        this.hitT = this.time;
        this.emit('crash', { impact: Math.max(10, -vn) });
      } else if (this.vel.y < -17 && !water) {
        this.vel.y = 5;
        this.vel.x *= 0.75; this.vel.z *= 0.75;
        this.hitT = this.time;
        this.emit('crash', { impact: 12 });
      } else if (this.vel.y < 0) this.vel.y = damp(this.vel.y, 0, 14, dt);
      p.y = Math.max(p.y, lerp(p.y, floor + hover, 1 - Math.exp(-18 * dt)));
      if (p.y < floor + 0.05) p.y = floor + 0.05;
      this.skim = water ? 'water' : 'ground';
    } else this.skim = this.alt < 3.2 ? (water ? 'water' : 'ground') : null;
  }

  // ------------------------------------------------------------------ static collisions
  collide(dt) {
    const W = this.world, p = this.pos, sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    const list = W.colliders.near(p.x, p.z);
    const bottom = p.y + 0.12, topY = p.y + BODY_H, sp = this.speed;
    const stamp = (this.stamp = (this.stamp || 0) + 1);
    let under = false;
    if (list) {
      for (let pass = 0; pass < 2; pass++) {
        const ox = (pass ? -1 : 1) * BODY_OFF * sy, oz = (pass ? -1 : 1) * BODY_OFF * cy;
        for (let k = 0; k < list.length; k++) {
          const b = list[k];
          const dx = p.x + ox - b.x, dz = p.z + oz - b.z;
          const lx = dx * b.c - dz * b.s, lz = dx * b.s + dz * b.c;
          const ex = Math.abs(lx) - b.hx, ez = Math.abs(lz) - b.hz;
          if (ex > 6 || ez > 6) continue;
          const top = Colliders.topAt(b, lz);
          if (bottom >= top - STEP) continue; // on top of it or above
          const inside = ex < 0 && ez < 0;
          if (topY <= b.y0) {
            if (inside && b.kind === 'deck' && b.y0 - topY < 14) under = true;
            continue;
          }
          const gap = inside ? -1 : Math.hypot(Math.max(ex, 0), Math.max(ez, 0)) - BODY_R;
          if (gap >= 0) {
            if (gap < 4.2 && sp > 26 && !b.quiet) {
              let n = this.near.find((e) => e.box === b);
              if (!n) this.near.push((n = { box: b, gap, stamp }));
              n.gap = Math.min(n.gap, gap);
              n.stamp = stamp;
            }
            continue;
          }
          // ceiling: coming up underneath a slab
          if (inside && this.prev.y + BODY_H <= b.y0 + 0.3 && this.vel.y > 0) {
            p.y = b.y0 - BODY_H - 0.02;
            this.vel.y = -1;
            continue;
          }
          let nx, nz, depth;
          if (inside) {
            if (-ex < -ez) { nx = Math.sign(lx) || 1; nz = 0; depth = -ex + BODY_R; }
            else { nx = 0; nz = Math.sign(lz) || 1; depth = -ez + BODY_R; }
          } else {
            const qx = lx - clamp(lx, -b.hx, b.hx), qz = lz - clamp(lz, -b.hz, b.hz), d = Math.hypot(qx, qz) || 1e-6;
            nx = qx / d; nz = qz / d; depth = BODY_R - d;
          }
          const wx = nx * b.c + nz * b.s, wz = -nx * b.s + nz * b.c;
          p.x += wx * depth; p.z += wz * depth;
          const vn = this.vel.x * wx + this.vel.z * wz;
          if (vn < 0) {
            const rest = this.mode === 'fly' ? 1.4 : 1.22;
            this.vel.x -= wx * vn * rest; this.vel.z -= wz * vn * rest;
            const fr = 1 - Math.min(0.3, -vn * 0.012);
            this.vel.x *= fr; this.vel.z *= fr;
            if (-vn > 3.5 && this.time - this.hitT > 0.25) {
              this.hitT = this.time;
              this.emit(-vn > 9 ? 'crash' : 'scrape', { impact: -vn, x: p.x + ox - wx, y: p.y + 0.5, z: p.z + oz - wz });
            }
          }
          // turn the nose along the wall so the car slides (or flies) past instead of sticking to it
          const fn = sy * wx + cy * wz;
          if (fn < -0.05 && this.mode !== 'air') {
            let tx = sy - wx * fn, tz = cy - wz * fn;
            if (Math.hypot(tx, tz) < 0.25) { tx = -wz; tz = wx; }
            this.yaw = dampAngle(this.yaw, Math.atan2(tx, tz), this.mode === 'fly' ? 8 : 5, dt);
          }
          const idx = this.near.findIndex((e) => e.box === b);
          if (idx >= 0) this.near.splice(idx, 1);
        }
      }
    }
    // near misses are confirmed once the car has cleared the obstacle untouched
    for (let i = this.near.length - 1; i >= 0; i--) {
      const n = this.near[i];
      if (n.stamp !== stamp) {
        this.near.splice(i, 1);
        if (this.time - this.hitT > 0.7 && this.time - (n.box.nearT || -9) > 5) { n.box.nearT = this.time; this.emit('near', { gap: n.gap, kind: n.box.kind }); }
      }
    }
    if (under) this.underT = this.time;
    else if (this.time - this.underT < 0.1 && this.time - this.underAward > 6 && sp > 22 && this.mode !== 'drive' && this.time - this.hitT > 1) {
      this.underAward = this.time;
      this.emit('under', {});
    }
    // floating obstacles (balloons)
    for (const s of W.spheres) {
      const dx = p.x - s.x, dy = p.y + 0.6 - s.y, dz = p.z - s.z, r = s.r + 1.1, d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < r * r) {
        const d = Math.sqrt(d2) || 1, nx = dx / d, ny = dy / d, nz = dz / d;
        p.x += nx * (r - d); p.y += ny * (r - d); p.z += nz * (r - d);
        const vn = this.vel.x * nx + this.vel.y * ny + this.vel.z * nz;
        if (vn < 0) {
          this.vel.x -= nx * vn * 1.5; this.vel.y -= ny * vn * 1.5; this.vel.z -= nz * vn * 1.5;
          if (this.time - this.hitT > 0.3) { this.hitT = this.time; this.emit('crash', { impact: Math.max(9, -vn), soft: true }); }
        }
      } else if (d2 < (r + 5) * (r + 5) && sp > 26 && this.time - (s.nearT || -9) > 6 && this.time - this.hitT > 1) {
        s.pending = this.time;
      } else if (s.pending && d2 > (r + 9) * (r + 9)) {
        if (this.time - s.pending < 2 && this.time - this.hitT > 1) { s.nearT = this.time; this.emit('near', { gap: 2, kind: 'balloon' }); }
        s.pending = 0;
      }
    }
  }

  respawn() {
    const s = this.safe, boost = this.boost;
    this.reset(s.x, s.z, s.yaw);
    this.boost = boost;
  }
}
