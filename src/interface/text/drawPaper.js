import canvases from '../../images/canvases.js';
import images from '../../images/images.js';
import state from '../../state/state.js';
import blitText from './blitText.js';
import textAreas from './textAreas.js';

const rollHeight = 77;
const width = 464;
const paperColor = `rgba(236, 215, 179, 1)`
const middleOffsetX = 34;

const drawPaper = () => {
  if (!state.paper) {
    return;
  }

  const paperHeight = Math.max(state.paper.height - 90, 0);

  const area = textAreas.PAPER.getArea();
  const x = area.x - 60;
  const y = area.y - 30;

  canvases.PRIMARY.drawImage(
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

  canvases.PRIMARY.fillStyle = paperColor;
  canvases.PRIMARY.fillRect(
    x + middleOffsetX, 
    y + rollHeight, 
    width - middleOffsetX, 
    paperHeight
  );

  canvases.PRIMARY.drawImage(
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

  blitText(textAreas.PAPER);
};

export default drawPaper;