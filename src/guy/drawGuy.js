import drawSprite from '../images/drawSprite.js';

const drawGuy = (gameData, canvasContext) => {
  const guy = gameData.guy;
  
  drawSprite(
    guy.sprite, 
    guy.frame, 
    Math.round(guy.position.x - gameData.camera.x), 
    Math.round(guy.position.y - gameData.camera.y),
    1,
    canvasContext
  );
};

export default drawGuy;