import canvases from '../images/canvases.js';
import images from '../images/images.js';
import state from '../state/state.js';
import interfaces from './interfaces.js';
import interfaceTypes from './interfaceTypes.js';

const drawFluid = (percentage, sourceX, destinationX) => {
  const panelArea = interfaces[interfaceTypes.PANEL]().area;
  const width = 11;
  const height = 95;
  const missingPixels = Math.round(height - percentage * height / 100)

  canvases.PRIMARY.drawImage(
    images.PANEL.instance,
    sourceX, 
    115 + missingPixels, 
    width, 
    height - missingPixels,
    panelArea.x + destinationX, 
    panelArea.y + 393 + missingPixels, 
    width, 
    height - missingPixels
  );
}

const drawCondition = () => {
  drawFluid(state.guy.water, 205, 52);
  drawFluid(state.guy.food, 216, 114);
  drawFluid(state.guy.health, 227, 175);
};

export default drawCondition;