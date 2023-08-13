import sprites from '../../images/sprites.js';
import getButtonAtPosition from './getButtonAtPosition.js';

const animateButtons = (frame, framesPerSecond, mousePosition) => {
  const button = getButtonAtPosition(mousePosition);
  if (!button) {
    return;
  }
  const sprite = sprites[button.sprite];
  if (!sprite.speed) {
    return;
  }

  const animateEveryThisFrame = Math.round(framesPerSecond / sprite.speed) || 1;
  if (frame % animateEveryThisFrame !== 0) {
    return;
  }

  button.frame++;
  if (button.frame >= sprite.frameCount) {
    button.frame = 0;
  }
};

export default animateButtons;