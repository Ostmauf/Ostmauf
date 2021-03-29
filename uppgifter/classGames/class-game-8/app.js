import { drawPlayer, updatePlayer } from "./lib/player.js";

const canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 450;

/**
 * @type {CanvasRenderingContext2D}
 */
 const context = canvas.getContext("2d");

requestAnimationFrame(gameLoop);

function gameLoop() {
    requestAnimationFrame(gameLoop);

    //uppdatera alla game objekts.
    updatePlayer();

    //Rita ut alla game objekts


    context.clearRect(0, 0, canvas.width,  canvas.height);

    drawPlayer(context);
}