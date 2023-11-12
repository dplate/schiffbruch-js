import canvases from './canvases.js';
import sprites from './sprites.js'

const drawSprite = (type, frame, x, y, scaling = 1, mirror = false, canvasContext = canvases.PRIMARY) => {
  if (mirror) {
    canvasContext.scale(-1, 1);
  }
  const sprite = sprites[type];
  const targetX = Math.round(x) + (sprite.offsetX || 0) * scaling;
  canvasContext.drawImage(
    sprite.image.instance, 
    sprite.x, 
    sprite.y + Math.floor(frame) * sprite.height, 
    sprite.width, 
    sprite.height, 
    mirror ? -(targetX + sprite.width * scaling) : targetX, 
    Math.round(y) + (sprite.offsetY || 0) * scaling, 
    sprite.width * scaling, 
    sprite.height * scaling
  );
  if (mirror) {
    canvasContext.scale(-1, 1);
  }
};

export default drawSprite;