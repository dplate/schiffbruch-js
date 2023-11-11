import canvases from '../images/canvases.js';
import images from '../images/images.js';
import sounds from '../sounds/sounds.js';

const drawLogo = () => {
  canvases.PRIMARY.fillStyle = `rgba(0, 0, 0, 1)`;
  canvases.PRIMARY.fillRect(0, 0, canvases.PRIMARY.canvas.width, canvases.PRIMARY.canvas.height);

  const size = Math.min(500, canvases.PRIMARY.canvas.width - 50, canvases.PRIMARY.canvas.height - 50);
 
  canvases.PRIMARY.imageSmoothingEnabled = true;

  canvases.PRIMARY.drawImage(
    images.LOGO.instance,
    0, 
    0, 
    500, 
    500,
    Math.round((canvases.PRIMARY.canvas.width - size) / 2), 
    Math.round((canvases.PRIMARY.canvas.height - size) / 2), 
    size, 
    size
  );

  canvases.PRIMARY.imageSmoothingEnabled = false;

  sounds.LOGO.instance.play(true);
}

export default drawLogo;