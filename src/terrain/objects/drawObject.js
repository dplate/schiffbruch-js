import drawGuy from '../../guy/drawGuy.js';
import drawSprite from '../../images/drawSprite.js';
import isOnGround from './isOnGround.js';

const drawObject = (gameData, area, tile, forTreasureMap, groundObjects, mustDrawGuy, canvasContext) => {
  const object = forTreasureMap && tile.originalObject ? tile.originalObject : tile.object;
  if (!object || groundObjects !== isOnGround(object)) {
    if (mustDrawGuy) {
      drawGuy(gameData, canvasContext);
    }
    return;
  }

  const guyBehindObject = tile.position.y + object.y > gameData.guy.position.y;

  if (mustDrawGuy && guyBehindObject) {
    drawGuy(gameData, canvasContext);
  }
  
  drawSprite(
    object.sprite, 
    object.frame, 
    tile.position.x + object.x - area.x, 
    tile.position.y + object.y - area.y,
    1,
    canvasContext
  );

  if (mustDrawGuy && !guyBehindObject) {
    drawGuy(gameData, canvasContext);
  }
};

export default drawObject;