import canvases from '../../images/canvases.js';
import itemSprites from './itemSprites.js';

const drawItem = (item, position, scaling = 1) => {
  const sprite = itemSprites[item];
  canvases.PRIMARY.drawImage(
    sprite.image.instance, 
    sprite.x, 
    sprite.y, 
    sprite.width, 
    sprite.height, 
    position.x, 
    position.y, 
    sprite.width * scaling, 
    sprite.height * scaling
  );
};

export default drawItem;