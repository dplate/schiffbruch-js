import clearText from './clearText.js';
import textAreas from './textAreas.js';

const closePaper = (gameData) => {
  clearText(textAreas.PAPER);
  gameData.paper = null;
  gameData.guy.active = false;
};

export default closePaper;