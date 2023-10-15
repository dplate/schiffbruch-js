import drawObject from '../objects/drawObject.js';
import tileSprites from './tileSprites.js';
import state from '../../state/state.js';

const drawTile = (area, x, y, forTreasureMap, canvasContext) => {
  const tile = state.terrain[x][y];
  if (!forTreasureMap && !tile.discovered) {
    return false;
  }
  
  const sprite = tileSprites[tile.type];

  const destinationX = Math.round(tile.position.x - area.x);
  const destinationY = Math.round(tile.position.y - area.y);

  if (
    destinationX + sprite.width < 0 || destinationY + sprite.height < 0 || 
    destinationX >= area.width || destinationY >= area.height
  ) {
    return false;
  }

  const drawTileSprite = (variant) => {
    canvasContext.drawImage(
      sprite.image.instance, 
      variant.x, 
      variant.y, 
      sprite.width, 
      sprite.height, 
      destinationX, 
      destinationY, 
      sprite.width, 
      sprite.height
    );
  };

  drawTileSprite(sprite.variants.grounds[tile.ground]);
  
  if (!forTreasureMap) {
    if (state.options.grid) {
      drawTileSprite(sprite.variants.grid);
    }

    if (!state.guy.active && state.guy.route.some((routeStep) => x === routeStep.x && y === routeStep.y)) {
      drawTileSprite(sprite.variants.route);
    }
  }

  drawObject(area, tile, forTreasureMap, true, false, canvasContext);
};

export default drawTile;