import drawSprite from '../../images/drawSprite.js';
import buttons from './buttons.js';

const drawButtons = () => {
  buttons.forEach(button => {
    if (button.isVisible()) {
      const area = button.getInterface().area;
      drawSprite(
        button.sprite, 
        button.frame, 
        area.x + button.position.x, 
        area.y + button.position.y
      );
    }
  });
};

export default drawButtons;