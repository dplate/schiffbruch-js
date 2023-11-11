import isOnSea from '../../guy/isOnSea.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import canvases from '../../images/canvases.js';
import spriteTypes from '../../images/spriteTypes.js';
import drawText from './drawText.js';
import textAreas from './textAreas.js';
import state from '../../state/state.js';
import fade from '../../images/fade.js';
import control from '../control/control.js';

const openPaper = (text, question) => {
  textAreas.PAPER.text = text;
  const textHeight = drawText(textAreas.PAPER, true);
  
  state.paper = {
    height: textHeight
  };
  
  if (question) {
    state.paper.question = {
      answer: null
    };
    state.paper.height += 115;
  }

  startGuyAnimation(isOnSea() ? spriteTypes.GUY_WAITING_BOAT : spriteTypes.GUY_WAITING);
  
  const filter = canvases.PRIMARY.canvas.style.filter;
  state.paper.darkMode = filter && !filter.includes('100%') && state.paper;

  fade(100, 0);
};

export default openPaper;