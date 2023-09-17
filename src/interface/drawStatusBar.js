import canvases from '../images/canvases.js';
import images from '../images/images.js';
import interfaceTypes from './interfaceTypes.js';
import interfaces from './interfaces.js';
import blitText from './text/blitText.js';
import textAreas from './text/textAreas.js';

const drawStatusBar = () => {
  const statusBarPosition = interfaces[interfaceTypes.STATUS_BAR].position;
  canvases.PRIMARY.drawImage(
    images.STATUS_BAR.instance,
    0, 
    0, 
    statusBarPosition.width, 
    statusBarPosition.height,
    statusBarPosition.x, 
    statusBarPosition.y, 
    statusBarPosition.width, 
    statusBarPosition.height
  );

  blitText(textAreas.STATUS);
};

export default drawStatusBar;