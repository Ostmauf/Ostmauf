import { createPlatform, drawPlatforms } from "./lib/platforms.js";
import { drawPlayer, updatePlayer, playerRect } from "./lib/player.js";

const canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 450;

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

const camera = {
  x: 0,
  y: 0
};

// Skapa spelets level
createPlatform(200, canvas.height - 40, 500, 40);
createPlatform(400, canvas.height - 130, 200, 40);

requestAnimationFrame(gameLoop);

function gameLoop() {
  requestAnimationFrame(gameLoop);

  //
  // Uppdatera alla game objects.
  //

  updatePlayer();
  
  camera.x = -canvas.width / 2 + playerRect.x;

  //
  // Rit ut alla game objects
  //

  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPlatforms(context, camera);
  drawPlayer(context, camera);
}