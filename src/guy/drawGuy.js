import drawSprite from '../images/drawSprite.js';
import state from '../state/state.js';

const drawGuy = (canvasContext) => {
  const guy = state.guy;
  
  drawSprite(
    guy.sprite, 
    guy.frame, 
    Math.round(guy.position.x - state.camera.x), 
    Math.round(guy.position.y - state.camera.y),
    1,
    canvasContext
  );
};

export default drawGuy;