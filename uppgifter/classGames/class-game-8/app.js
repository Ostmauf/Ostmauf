import { createPlatform, drawPlatforms } from "./lib/platforms.js";
import { drawPlayer, updatePlayer } from "./lib/player.js";

const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 450;

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

// Skapa spelets level
createPlatform(200, canvas.height - 40, 500, 40);

requestAnimationFrame(gameLoop);

function gameLoop() {
  requestAnimationFrame(gameLoop);

  //
  // Uppdatera alla game objects.
  //

  updatePlayer();

  //
  // Rit ut alla game objects
  //

  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPlatforms(context);
  drawPlayer(context);
}