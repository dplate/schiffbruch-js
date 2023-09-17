import drawSprite from '../../images/drawSprite.js';
import interfaceTypes from '../interfaceTypes.js';
import interfaces from '../interfaces.js';
import buttons from './buttons.js';

const drawButtons = () => {
  buttons.forEach(button => {
    if (button.isVisible()) {
      drawSprite(
        button.sprite, 
        button.frame, 
        interfaces[interfaceTypes.PANEL].position.x + button.position.x, 
        interfaces[interfaceTypes.PANEL].position.y + button.position.y
      );
    }
  });
};

export default drawButtons;