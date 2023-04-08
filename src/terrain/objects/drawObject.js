import drawSprite from '../../images/drawSprite.js';
import isOnGround from './isOnGround.js';

const drawObject = (gameData, area, tile, forTreasureMap, groundObjects, canvasContext) => {
  const object = forTreasureMap && tile.originalObject ? tile.originalObject : tile.object;
  if (!object) {
    return;
  }

  if (groundObjects && isOnGround(object)) {
    drawSprite(
      object.sprite, 
      object.frame, 
      tile.position.x + object.x - area.x, 
      tile.position.y + object.y - area.y,
      canvasContext
    );
  }
};

export default drawObject;