import sprites from '../../images/sprites.js';
import getButtonAtPosition from './getButtonAtPosition.js';

const animateButtons = (elapsedTime, mousePosition) => {
  const button = getButtonAtPosition(mousePosition);
  if (!button) {
    return;
  }
  const sprite = sprites[button.sprite];
  if (!sprite.speed) {
    return;
  }

  button.frame += elapsedTime * sprite.speed / 1000;
  if (button.frame >= sprite.frameCount) {
    button.frame = 0;
  }
};

export default animateButtons;