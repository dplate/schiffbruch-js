import canvases from '../images/canvases.js';
import images from '../images/images.js';
import state from '../state/state.js';
import interfaces from './interfaces.js';
import interfaceTypes from './interfaceTypes.js';
import drawText from './text/drawText.js';
import formatTime from './text/formatTime.js';
import textAreas from './text/textAreas.js';

const width = 51;
const height = 50;
const radius = {
  x: 51,
  y: 43
};
const center = {
  x: 107,
  y: 573
};

const drawSun = () => {
  const panelArea = interfaces[interfaceTypes.PANEL]().area;
  const angle = Math.PI - Math.PI * state.calendar.minutes / 720;

  const position = {
    x: Math.floor(panelArea.x + center.x + radius.x * Math.cos(angle) - width / 2),
    y: Math.floor(panelArea.y + center.y - radius.y * Math.sin(angle) - height / 2)
  };
  const limitedHeight = Math.min(center.y - position.y, height);
  
  canvases.PRIMARY.drawImage(
    images.PANEL.instance,
    205, 
    65, 
    width, 
    limitedHeight,
    position.x, 
    position.y, 
    width, 
    limitedHeight
  );
};

const drawTime = () => {
  textAreas.TIME.text = formatTime();
  drawText(textAreas.TIME);
}

const drawSundial = () => {
  if (interfaces[interfaceTypes.PANEL]().compact) {
    return;
  }

  drawSun();
  drawTime();
}

export default drawSundial;