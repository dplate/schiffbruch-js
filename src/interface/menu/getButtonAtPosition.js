import sprites from '../../images/sprites.js';
import buttons from './buttons.js';

const getButtonAtPosition = (position) => {
  return buttons.find(button => {
    if (!button.isVisible()) {
      return false;
    }
    const area = button.getInterface().area;
    const absoluteButtonPosition = {
      x: area.x + button.position.x,
      y: area.y + button.position.y
    };
    const buttonSprite = sprites[button.sprite];

    return position.x >= absoluteButtonPosition.x &&
      position.x < absoluteButtonPosition.x + buttonSprite.width &&
      position.y >= absoluteButtonPosition.y &&
      position.y < absoluteButtonPosition.y + buttonSprite.height;
  });
};

export default getButtonAtPosition;