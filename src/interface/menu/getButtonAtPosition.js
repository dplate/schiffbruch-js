import sprites from '../../images/sprites.js';
import interfaceTypes from '../interfaceTypes.js';
import interfaces from '../interfaces.js';
import buttons from './buttons.js';

const getButtonAtPosition = (position) => {
  return buttons.find(button => {
    if (!button.isVisible()) {
      return false;
    }
    const absoluteButtonPosition = {
      x: interfaces[interfaceTypes.PANEL].position.x + button.position.x,
      y: interfaces[interfaceTypes.PANEL].position.y + button.position.y
    };
    const buttonSprite = sprites[button.sprite];

    return position.x >= absoluteButtonPosition.x &&
      position.x < absoluteButtonPosition.x + buttonSprite.width &&
      position.y >= absoluteButtonPosition.y &&
      position.y < absoluteButtonPosition.y + buttonSprite.height;
  });
};

export default getButtonAtPosition;