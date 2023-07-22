import canvases from '../../images/canvases.js';
import itemSprites from './itemSprites.js';

const drawItem = (item, position) => {
  const sprite = itemSprites[item];
  canvases.PRIMARY.drawImage(
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