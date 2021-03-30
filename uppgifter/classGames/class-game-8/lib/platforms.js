export const platforms = [];

export function createPlatform(x, y, width, height) {
  const platform = {
    x,
    y,
    width,
    height,
    color: 'white'
  };
  platforms.push(platform);
}

/**
 * @param {CanvasRenderingContext2D} context 
 */
export function drawPlatforms(context) {
  for(let i = 0; i < platforms.length; i++) {
    context.fillStyle = platforms[i].color;
    context.fillRect(
      platforms[i].x,
      platforms[i].y,
      platforms[i].width,
      platforms[i].height
    );
  }
}