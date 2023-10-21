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
  const panel = interfaces[interfaceTypes.PANEL]();
  if (panel.compact) {
    return;
  }
  const chance = state.guy.chance;

  const positionY = panel.area.y - 113 + Math.floor(
    113 * Math.sin(Math.min(Math.PI * chance / 200, Math.PI / 2))
  );

  canvases.PRIMARY.drawImage(
    images.PANEL.instance,
    205, 
    210, 
    width, 
    height,
    panel.area.x + 5, 
    positionY, 
    width, 
    height
  );

  textAreas.CHANCE.offsetY = Math.floor(positionY + height - 25);
  const chanceString = chance.toFixed(0).toString();
  textAreas.CHANCE.text = chanceString.length < 2 ? `${chanceString}%` : chanceString;
  drawText(textAreas.CHANCE);
};

export default drawChance;