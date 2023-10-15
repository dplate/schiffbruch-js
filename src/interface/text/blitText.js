import canvases from '../../images/canvases.js';

const blitText = (textArea) => {
  const area = textArea.getArea();
  canvases.PRIMARY.drawImage(
    canvases.TEXT.canvas,
    area.x, area.y, area.width, area.height,
    area.x, area.y, area.width, area.height
  );
}

export default blitText;