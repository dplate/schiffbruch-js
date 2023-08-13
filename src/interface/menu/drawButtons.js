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
        interfaces[interfaceTypes.INTERFACE_PANEL].position.x + button.position.x, 
        interfaces[interfaceTypes.INTERFACE_PANEL].position.y + button.position.y
      );
    }
  });
};

export default drawButtons;