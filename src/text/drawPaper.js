import images from '../images/images.js';
import blitText from './blitText.js';
import textAreas from './textAreas.js';

const rollHeight = 77;
const width = 464;
const paperColor = `rgba(236, 215, 179, 1)`
const middleOffsetX = 34;

const drawPaper = (paper, textCanvasContext, canvasContext) => {
  const paperHeight = Math.max(paper.height - 90, 0);

  const x = textAreas.PAPER.x - 60;
  const y = textAreas.PAPER.y - 30;

  canvasContext.drawImage(
    images.PAPER.instance, 
    0, 
    0, 
    width, 
    rollHeight, 
    x, 
    y, 
    width, 
    rollHeight, 
  );

  canvasContext.fillStyle = paperColor;
  canvasContext.fillRect(
    x + middleOffsetX, 
    y + rollHeight, 
    width - middleOffsetX, 
    paperHeight
  );

  canvasContext.drawImage(
    images.PAPER.instance, 
    0, 
    rollHeight, 
    width, 
    rollHeight, 
    x, 
    y + rollHeight + paperHeight, 
    width, 
    rollHeight, 
  );

  blitText(textAreas.PAPER, textCanvasContext, canvasContext);
};

export default drawPaper;