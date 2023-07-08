import isOnSea from '../guy/isOnSea.js';
import startGuyAnimation from '../guy/startGuyAnimation.js';
import images from '../images/images.js';
import clearText from './clearText.js';
import drawText from './drawText.js';
import textAreas from './textAreas.js';

const closePaper = (gameData, textCanvasContext) => {
  clearText(textAreas.PAPER, textCanvasContext);
  gameData.paper = null;
  gameData.guy.active = false;
};

export default closePaper;