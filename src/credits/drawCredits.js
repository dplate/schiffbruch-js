import creditState from './creditState.js';
import canvases from '../images/canvases.js';
import sounds from '../sounds/sounds.js';
import drawCreditTexts from './drawCreditTexts.js';
import drawCreditGuy from './drawCreditGuy.js';

const drawCredits = (elapsedTime) => {
  sounds.OUTRO.instance.play(true);

  canvases.PRIMARY.fillStyle = 'rgba(0, 0, 0, 1)';
  canvases.PRIMARY.fillRect(
    0, 
    0, 
    canvases.PRIMARY.canvas.width, 
    canvases.PRIMARY.canvas.height
  );

  if (creditState.phase === 'TEXTS') {
    drawCreditTexts(elapsedTime);
  } else {
    drawCreditGuy(elapsedTime);
  }
};

export default drawCredits;