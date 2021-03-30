import { getKey, keyCodes } from "./input.js";
import { moveCollideX, moveCollideY } from "./physics.js";
import { platforms } from './platforms.js';

const gravity = 0.5;

let color = '#0066ff';

const rect = {
  x: 0,
  y: 0,
  width: 40,
  height: 40
};

let vy = 0;
let grounded = false;

export function updatePlayer() {

  if(grounded && getKey(keyCodes.arrowUp)) {
    vy = -10;
    grounded = false;
  }

  vy += gravity;

  let vx = 0;
  vx += getKey(keyCodes.arrowLeft) ? -5 : 0;
  vx += getKey(keyCodes.arrowRight) ? 5 : 0;

  moveCollideX(vx, rect, platforms);
  moveCollideY(vy, rect, platforms, onCollideY);

  if(rect.y > 450 - rect.height) {
    rect.y = 450 - rect.height;
    vy = 0;
    grounded = true;
  }
}

/**
 * @param {CanvasRenderingContext2D} context 
 */
export function drawPlayer(context) {
  context.fillStyle = color;
  context.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function onCollideY(pawn, collisionObject) {
  grounded = true;
  vy = 0;
}