import canvases from '../images/canvases.js';
import images from '../images/images.js';
import interfaceTypes from './interfaceTypes.js';
import interfaces from './interfaces.js';
import drawText from './text/drawText.js';
import textAreas from './text/textAreas.js';

const drawStatusBar = () => {
  const statusBarArea = interfaces[interfaceTypes.STATUS_BAR]().area;
  canvases.PRIMARY.drawImage(
    images.STATUS_BAR.instance,
    0, 
    0, 
    statusBarArea.width, 
    statusBarArea.height,
    statusBarArea.x, 
    statusBarArea.y, 
    statusBarArea.width, 
    statusBarArea.height
  );

  drawText(textAreas.STATUS);
};

export default drawStatusBar;