import canvases from '../../images/canvases.js';
import images from '../../images/images.js';
import positionTransformer from '../../terrain/positionTransformer.js';
import minimapScaling from './minimapScaling.js';
import state from '../../state/state.js';
import interfaceTypes from '../interfaceTypes.js';
import interfaces from '../interfaces.js';

const drawMinimap = () => {
  const area = interfaces[interfaceTypes.MINIMAP]().area;
  canvases.PRIMARY.drawImage(
    canvases.MINIMAP.canvas,
    0, 0, area.width, area.height,
    area.x, area.y, area.width, area.height
  );

  canvases.PRIMARY.fillStyle = `rgba(255, 0, 0, 1)`;
  canvases.PRIMARY.fillRect(
    area.x + minimapScaling * state.guy.tile.x, 
    area.y + minimapScaling * state.guy.tile.y, 
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
    Math.floor(area.x + minimapScaling * tileIndex.x), 
    Math.floor(area.y + minimapScaling * tileIndex.y - 21), 
    viewRectangleWith, 
    viewRectangleHeight
  );
};

export default drawMinimap;