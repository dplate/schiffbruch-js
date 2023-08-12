import canvases from '../images/canvases.js';
import images from '../images/images.js';
import positionTransformer from '../terrain/positionTransformer.js';
import minimapScaling from './minimapScaling.js';
import state from '../state/state.js';

const drawMinimap = (position) => {
  const minimapWidth = minimapScaling * state.terrain.length;
  const minimapHeight = minimapScaling * state.terrain[0].length;
  canvases.PRIMARY.drawImage(
    canvases.MINIMAP.canvas,
    0, 0, minimapWidth, minimapHeight,
    position.x, position.y, minimapWidth, minimapHeight
  );

  canvases.PRIMARY.fillStyle = `rgba(255, 0, 0, 1)`;
  canvases.PRIMARY.fillRect(
    position.x + minimapScaling * state.guy.tile.x, 
    position.y + minimapScaling * state.guy.tile.y, 
    minimapScaling, 
    minimapScaling
  );

  const viewRectangleWith = 65;
  const viewRectangleHeight = 65;
  const tileIndex = positionTransformer.fromPixel(state.camera.x, state.camera.y);
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