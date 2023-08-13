import canvases from '../../images/canvases.js';

const clearText = (textArea) => {
  canvases.TEXT.clearRect(textArea.x, textArea.y, textArea.width, textArea.height);
}

export default clearText;