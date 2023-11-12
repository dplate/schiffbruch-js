import drawGuy from '../../guy/drawGuy.js';
import drawSprite from '../../images/drawSprite.js';
import isOnGround from './isOnGround.js';
import state from '../../state/state.js';

const drawObject = (area, tile, forTreasureMap, groundObjects, mustDrawGuy, canvasContext) => {
  const object = forTreasureMap && tile.originalObject ? tile.originalObject : tile.object;
  if (!object || groundObjects !== isOnGround(object)) {
    if (mustDrawGuy) {
      drawGuy(canvasContext);
    }
    return;
  }

  const guyBehindObject = tile.position.y + object.y > state.guy.position.y;

  if (mustDrawGuy && guyBehindObject) {
    drawGuy(canvasContext);
  }
  
  drawSprite(
    object.sprite, 
    object.frame, 
    tile.position.x + object.x - area.x, 
    tile.position.y + object.y - area.y,
    1,
    object.mirror,
    canvasContext
  );

  if (mustDrawGuy && !guyBehindObject) {
    drawGuy(canvasContext);
  }
};

export default drawObject;