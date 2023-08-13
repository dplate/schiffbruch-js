import drawStatusText from '../text/drawStatusText.js';
import texts from '../text/texts.js';
import getButtonAtPosition from './getButtonAtPosition.js';

const handleButtonHovers = (mousePosition) => {
  const button = getButtonAtPosition(mousePosition);
  if (!button) {
    return;
  }
  if (button.onHover) {
    button.onHover();
  }
};

export default handleButtonHovers;