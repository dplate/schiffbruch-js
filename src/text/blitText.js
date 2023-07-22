import canvases from '../images/canvases.js';

const blitText = (textArea) => {
  canvases.PRIMARY.drawImage(
    canvases.TEXT.canvas,
    textArea.x, textArea.y, textArea.width, textArea.height,
    textArea.x, textArea.y, textArea.width, textArea.height
  );
}

export default blitText;