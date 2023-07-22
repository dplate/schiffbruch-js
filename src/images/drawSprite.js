import canvases from './canvases.js';
import sprites from './sprites.js'

const drawSprite = (type, frame, x, y, scaling = 1, canvasContext = canvases.PRIMARY) => {
  const sprite = sprites[type];
  canvasContext.drawImage(
    sprite.image.instance, 
    sprite.x, 
    sprite.y + Math.floor(frame) * sprite.height, 
    sprite.width, 
    sprite.height, 
    Math.round(x) + (sprite.offsetX || 0) * scaling, 
    Math.round(y) + (sprite.offsetY || 0) * scaling, 
    sprite.width * scaling, 
    sprite.height * scaling
  );
};

export default drawSprite;