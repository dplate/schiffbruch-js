import calculateChance from '../guy/calculateChance.js';
import canvases from '../images/canvases.js';
import images from '../images/images.js';
import interfaces from './interfaces.js';
import interfaceTypes from './interfaceTypes.js';
import blitText from './text/blitText.js';
import drawText from './text/drawText.js';
import textAreas from './text/textAreas.js';

const width = 37;
const height = 150;

const drawChance = () => {
  const panelArea = interfaces[interfaceTypes.PANEL]().area;
  const chance = calculateChance();

  const positionY = panelArea.y - 113 + Math.floor(
    113 * Math.sin(Math.min(Math.PI * chance / 200, Math.PI / 2))
  );

  canvases.PRIMARY.drawImage(
    images.PANEL.instance,
    205, 
    210, 
    width, 
    height,
    panelArea.x + 5, 
    positionY, 
    width, 
    height
  );

  textAreas.CHANCE.offsetY = Math.floor(positionY + height - 25);
  const chanceString = chance.toFixed(0).toString();
  drawText(chanceString.length < 2 ? `${chanceString}%` : chanceString, textAreas.CHANCE);
  blitText(textAreas.CHANCE);
};

export default drawChance;