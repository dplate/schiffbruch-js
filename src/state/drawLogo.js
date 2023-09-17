import canvases from '../images/canvases.js';
import images from '../images/images.js';
import sounds from '../sounds/sounds.js';

const width = 500;
const height = 500;

const drawLogo = () => {
  canvases.PRIMARY.fillStyle = `rgba(0, 0, 0, 1)`;
  canvases.PRIMARY.fillRect(0, 0, canvases.PRIMARY.canvas.width, canvases.PRIMARY.canvas.height);

  canvases.PRIMARY.drawImage(
    images.LOGO.instance,
    0, 
    0, 
    width, 
    height,
    Math.round((canvases.PRIMARY.canvas.width - width) / 2), 
    Math.round((canvases.PRIMARY.canvas.height - height) / 2), 
    width, 
    height
  );

  sounds.LOGO.instance.play(true);
}

export default drawLogo;