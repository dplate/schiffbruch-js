import cursor from '../control/mouse/cursor.js';
import getButtonAtPosition from './getButtonAtPosition.js';

const handleButtonHovers = (position = cursor) => {
  const button = getButtonAtPosition(position);
  if (!button) {
    return;
  }
  if (button.onHover) {
    button.onHover();
  }
};

export default handleButtonHovers;