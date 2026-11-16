// Hand-authored map layout. Units are metres; +x is east, +z is south, +y is up, sea level is y = 0.
export const SIZE = 4000;

export const MOUNTAIN = { x: -200, z: -820, r: 780, h: 300, summitY: 262, summitR: 46 };
export const BAY = { x: -40, z: 840, rx: 330, rz: 640 };
export const CAPE = { x: -900, z: 1430, r: 190, h: 20 };
export const WINDHILL = { x: 1010, z: -990, r: 430, h: 62 };

// Proving ground plateau with the runway and the launch ramp.
export const AIR = { x0: -1640, x1: -510, z0: 240, z1: 520, y: 14 };
export const RUNWAY = { x0: -1604, x1: -598, z: 380, halfW: 20 };
export const LAUNCH = { x: -569, z: 380, yaw: Math.PI / 2, len: 54, halfW: 9, h: 10.5, curve: 1.85 };

// City grid: n x n cells of `pitch` metres, each cell is a block surrounded by half a street.
export const CITY = { x0: 511, z0: 101, n: 9, pitch: 82, street: 18, y: 7 };
CITY.x1 = CITY.x0 + CITY.n * CITY.pitch;
CITY.z1 = CITY.z0 + CITY.n * CITY.pitch;

export const SPAWN = { x: -1150, z: 380, yaw: Math.PI / 2 };

// Golden-hour sun sits low behind the skyline as seen from the launch ramp.
export const SUN_AZIMUTH = Math.atan2(0.5, 0.82);
