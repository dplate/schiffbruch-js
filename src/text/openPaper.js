import isOnSea from '../guy/isOnSea.js';
import startGuyAnimation from '../guy/startGuyAnimation.js';
import canvases from '../images/canvases.js';
import images from '../images/images.js';
import spriteTypes from '../images/spriteTypes.js';
import drawText from './drawText.js';
import textAreas from './textAreas.js';

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

const openPaper = (text, question, gameData) => {
  const textHeight = drawText(text, textAreas.PAPER)

  gameData.paper = {
    height: textHeight
  };
  
  if (question) {
    gameData.paper.question = {
      answer: null
    };
    gameData.paper.question.yes = {
      x: textAreas.PAPER.x + 50,
      y: textAreas.PAPER.y + textHeight + 25,
      width: 41,
      height: 42
    }
    drawYes(gameData.paper.question.yes);

    gameData.paper.question.no = {
      x: textAreas.PAPER.x + 220,
      y: textAreas.PAPER.y + textHeight + 25,
      width: 100,
      height: 39
    }
    drawNo(gameData.paper.question.no);
    
    gameData.paper.height += 115;
  }

  startGuyAnimation(gameData, isOnSea(gameData) ? spriteTypes.GUY_WAITING_BOAT : spriteTypes.GUY_WAITING);
};

export default openPaper;