import { getKey, keyCodes } from "./input.js";

let color = "#0066ff";

const gravity = 0.5;

let x = 0;
let y = 0;
let width = 40;
let height = 40;

let vy = 0;
let grounded = false;


export function updatePlayer() {

    if(grounded && getKey(keyCodes.arrowUp)) {
        vy = -10;
        grounded = false;
    }

    vy += gravity;
    y += vy;

    if (y > 450 - height) {
        y = 450 - height;
        vy = 0;
        grounded = true;
    }
        
}

/**
 * @param {CanvasRenderingContext2D} context
 */

export function drawPlayer(context) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}