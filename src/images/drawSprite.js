import sprites from './sprites.js'

const drawSprite = (type, frame, x, y, canvasContext) => {
  const sprite = sprites[type];
  canvasContext.drawImage(
    sprite.image.instance, 
    sprite.x, 
    sprite.y + Math.floor(frame) * sprite.height, 
    sprite.width, 
    sprite.height, 
    x, 
    y, 
    sprite.width, 
    sprite.height
  );
};

export default drawSprite;