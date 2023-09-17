import isOnSea from '../../guy/isOnSea.js';
import startGuyAnimation from '../../guy/startGuyAnimation.js';
import canvases from '../../images/canvases.js';
import images from '../../images/images.js';
import spriteTypes from '../../images/spriteTypes.js';
import drawText from './drawText.js';
import textAreas from './textAreas.js';
import state from '../../state/state.js';
import fade from '../../images/fade.js';

const drawYes = (yes) => {
  canvases.TEXT.drawImage(
    images.PAPER.instance, 
    0, 
    154, 
    yes.width, 
    yes.height, 
    yes.x, 
    yes.y, 
    yes.width, 
    yes.height
  );
};

const drawNo = (no) => {
  canvases.TEXT.drawImage(
    images.PAPER.instance, 
    41, 
    154, 
    no.width, 
    no.height, 
    no.x, 
    no.y, 
    no.width, 
    no.height
  );
};

const openPaper = (text, question) => {
  const textHeight = drawText(text, textAreas.PAPER)

  state.paper = {
    height: textHeight
  };
  
  if (question) {
    state.paper.question = {
      answer: null
    };
    state.paper.question.yes = {
      x: textAreas.PAPER.x + 50,
      y: textAreas.PAPER.y + textHeight + 25,
      width: 41,
      height: 42
    }
    drawYes(state.paper.question.yes);

    state.paper.question.no = {
      x: textAreas.PAPER.x + 220,
      y: textAreas.PAPER.y + textHeight + 25,
      width: 100,
      height: 39
    }
    drawNo(state.paper.question.no);
    
    state.paper.height += 115;
  }

  startGuyAnimation(isOnSea() ? spriteTypes.GUY_WAITING_BOAT : spriteTypes.GUY_WAITING);
  
  const filter = canvases.PRIMARY.canvas.style.filter;
  state.paper.darkMode = filter && !filter.includes('100%') && state.paper;

  fade(100, 0);
};

export default openPaper;