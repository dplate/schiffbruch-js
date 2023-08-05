import canvases from '../images/canvases.js';
import images from '../images/images.js';
import positionTransformer from '../terrain/positionTransformer.js';
import minimapScaling from './minimapScaling.js';

const drawMinimap = (position, gameData) => {
  const minimapWidth = minimapScaling * gameData.terrain.length;
  const minimapHeight = minimapScaling * gameData.terrain[0].length;
  canvases.PRIMARY.drawImage(
    canvases.MINIMAP.canvas,
    0, 0, minimapWidth, minimapHeight,
    position.x, position.y, minimapWidth, minimapHeight
  );

  canvases.PRIMARY.fillStyle = `rgba(255, 0, 0, 1)`;
  canvases.PRIMARY.fillRect(
    position.x + minimapScaling * gameData.guy.tile.x, 
    position.y + minimapScaling * gameData.guy.tile.y, 
    minimapScaling, 
    minimapScaling
  );

  const viewRectangleWith = 65;
  const viewRectangleHeight = 65;
  const tileIndex = positionTransformer.fromPixel(gameData.terrain, gameData.camera.x, gameData.camera.y);
  canvases.PRIMARY.drawImage(
    images.PANEL.instance,
    205, 
    0, 
    viewRectangleWith, 
    viewRectangleHeight,
    Math.floor(position.x + minimapScaling * tileIndex.x), 
    Math.floor(position.y + minimapScaling * tileIndex.y - 21), 
    viewRectangleWith, 
    viewRectangleHeight
  );
};

export default drawMinimap;