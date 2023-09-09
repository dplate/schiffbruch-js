import canvases from '../images/canvases.js';
import images from '../images/images.js';
import creditState from './creditState.js';
import creditTexts from './creditTexts.js';

const drawCreditText = (creditText, positionY, alpha) => {
  const canvasContext = canvases.PRIMARY;

  canvases.PRIMARY.globalAlpha = alpha;
  canvasContext.drawImage(
    images.CREDITS.instance,
    creditText.x, 
    creditText.y, 
    creditText.width, 
    creditText.height,
    Math.round((canvasContext.canvas.width - creditText.width) / 2), 
    Math.round(positionY - creditText.height / 2), 
    creditText.width, 
    creditText.height
  );
  canvases.PRIMARY.globalAlpha = 1;
}

const drawCreditTexts = (framesPerSecond) => {
  const canvasContext = canvases.PRIMARY;
  const canvasHeight = canvasContext.canvas.height;

  creditState.offset += Math.floor(150 / framesPerSecond);

  creditTexts[creditState.itemId].forEach((creditText, index) => {
    if (index === 0) {
      drawCreditText(creditText, 100, 1)
    } else {
      const positionY = canvasHeight - creditState.offset + (index - 1) * 300;
      if (positionY > 0) {
        if (positionY < canvasHeight) {
          const alpha = Math.sin(Math.PI / canvasHeight * positionY)
          drawCreditText(creditText, positionY, alpha);
        }
      } else if (index >= creditTexts[creditState.itemId].length - 1) {
        creditState.itemId++;
        creditState.offset = 0;
        if (creditState.itemId >= creditTexts.length) {
          creditState.itemId = 0;
          creditState.phase = 'GUY';
        }
      }
    }
  });
};

export default drawCreditTexts;