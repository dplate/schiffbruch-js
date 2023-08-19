import canvases from '../images/canvases.js';
import images from '../images/images.js';
import state from '../state/state.js';
import interfaces from './interfaces.js';
import interfaceTypes from './interfaceTypes.js';
import drawText from './text/drawText.js';
import textAreas from './text/textAreas.js';

const width = 37;
const height = 150;

const drawChance = () => {
  const panelPosition = interfaces[interfaceTypes.INTERFACE_PANEL].position;

  const positionY = panelPosition.y - 113 + Math.floor(100 * Math.sin(Math.PI / 200 * state.guy.chance));

  canvases.PRIMARY.drawImage(
    images.PANEL.instance,
    205, 
    210, 
    width, 
    height,
    panelPosition.x + 5, 
    positionY, 
    width, 
    height
  );

  textAreas.CHANCE.y = Math.floor(positionY + height - 25);
  drawText(state.guy.chance.toFixed(0), textAreas.CHANCE);
};

export default drawChance;