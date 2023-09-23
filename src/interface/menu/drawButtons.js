import drawSprite from '../../images/drawSprite.js';
import interfaceTypes from '../interfaceTypes.js';
import interfaces from '../interfaces.js';
import buttons from './buttons.js';

const drawButtons = () => {
  buttons.forEach(button => {
    if (button.isVisible()) {
      const panelArea = interfaces[interfaceTypes.PANEL]().area;
      drawSprite(
        button.sprite, 
        button.frame, 
        panelArea.x + button.position.x, 
        panelArea.y + button.position.y
      );
    }
  });
};

export default drawButtons;