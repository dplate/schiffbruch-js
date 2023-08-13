import sounds from '../../sounds/sounds.js';
import getButtonAtPosition from './getButtonAtPosition.js';

const handleButtonTaps = (mousePosition) => {
  const button = getButtonAtPosition(mousePosition);
  if (!button) {
    return;
  }
  if (button.onTap) {
    sounds.CLICK2.instance.play();
    button.onTap();
  }
};

export default handleButtonTaps;