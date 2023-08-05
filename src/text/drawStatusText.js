import drawText from './drawText.js';
import textAreas from './textAreas.js';

const drawStatusText = (text) => {
  drawText(text, textAreas.STATUS);
};

export default drawStatusText;