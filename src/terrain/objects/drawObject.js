import drawSprite from '../../images/drawSprite.js';
import isOnGround from './isOnGround.js';

const drawObject = (gameData, tile, camera, forTreasureMap, groundObjects, canvasContext) => {
  const object = forTreasureMap && tile.originalObject ? tile.originalObject : tile.object;
  if (!object) {
    return;
  }

  if (groundObjects && isOnGround(object)) {
    drawSprite(
      object.sprite, 
      object.frame, 
      tile.position.x + object.x - camera.x, 
      tile.position.y + object.y - camera.y,
      canvasContext
    );
  }
};

export default drawObject;