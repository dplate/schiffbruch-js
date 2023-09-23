import cursor from '../control/mouse/cursor.js';
import getButtonAtPosition from './getButtonAtPosition.js';

const handleButtonHovers = () => {
  const button = getButtonAtPosition(cursor);
  if (!button) {
    return;
  }
  if (button.onHover) {
    button.onHover();
  }
};

export default handleButtonHovers;