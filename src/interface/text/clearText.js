import canvases from '../../images/canvases.js';

const clearText = (textArea) => {
  const area = textArea.getArea();
  canvases.TEXT.clearRect(area.x, area.y, area.width, area.height);
}

export default clearText;