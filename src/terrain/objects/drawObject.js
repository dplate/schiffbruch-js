import drawSprite from '../../images/drawSprite.js';
import objectTypes from './objectTypes.js';

const drawObject = (gameData, tile, camera, forTreasureMap, groundObjects, canvasContext) => {
  const object = forTreasureMap && tile.originalObject ? tile.originalObject : tile.object;
  if (!object) {
    return;
  }

  if (groundObjects && (object.type === objectTypes.WAVES || object.type === objectTypes.RIVER)) {
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