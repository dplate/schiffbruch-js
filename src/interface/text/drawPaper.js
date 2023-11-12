import canvases from '../../images/canvases.js';
import images from '../../images/images.js';
import state from '../../state/state.js';
import answerArea from './answerArea.js';
import drawText from './drawText.js';
import textAreas from './textAreas.js';

const rollHeight = 77;
const width = 464;
const paperColor = `rgba(236, 215, 179, 1)`
const middleOffsetX = 34;

const drawYes = (yes) => {
  canvases.PRIMARY.drawImage(
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
  canvases.PRIMARY.drawImage(
    images.PAPER.instance, 
    73, 
    154, 
    no.width, 
    no.height, 
    no.x, 
    no.y, 
    no.width, 
    no.height
  );
};

const drawPaper = () => {
  if (!state.paper) {
    return;
  }

  const paperHeight = Math.max(state.paper.height - 90, 0);

  const area = textAreas.PAPER.getArea();
  const x = area.x - 45;
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

  if (state.paper.treasureMap) {
    const treasureMapCanvas = canvases.TREASURE_MAP.canvas;
    canvases.PRIMARY.drawImage(
      treasureMapCanvas,
      0, 
      0, 
      treasureMapCanvas.width, 
      treasureMapCanvas.height,
      area.x + 30, 
      area.y, 
      treasureMapCanvas.width, 
      treasureMapCanvas.height
    );
  } else {
    drawText(textAreas.PAPER);

    if (state.paper.question) {
      drawYes(answerArea.getYes());
      drawNo(answerArea.getNo());
    }
  }
};

export default drawPaper;