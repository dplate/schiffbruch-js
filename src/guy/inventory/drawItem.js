import itemSprites from './itemSprites.js';

const drawItem = (item, position, canvasContext) => {
  const sprite = itemSprites[item];
  canvasContext.drawImage(
    sprite.image.instance, 
    sprite.x, 
    sprite.y, 
    sprite.width, 
    sprite.height, 
    position.x, 
    position.y, 
    sprite.width, 
    sprite.height
  );
};

export default drawItem;