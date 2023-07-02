import drawObject from '../objects/drawObject.js';
import tileSprites from './tileSprites.js';

const drawTile = (gameData, area, x, y, forTreasureMap, canvasContext) => {
  const tile = gameData.terrain[x][y];
  if (!forTreasureMap && !tile.discovered) {
    return false;
  }
  
  const sprite = tileSprites[tile.type];

  const destinationX = tile.position.x - area.x;
  const destinationY = tile.position.y - area.y;

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
    if (gameData.options.grid) {
      drawTileSprite(sprite.variants.grid);
    }

    if (!gameData.guy.active && gameData.guy.route.some((routeStep) => x === routeStep.x && y === routeStep.y)) {
      drawTileSprite(sprite.variants.route);
    }
  }

  drawObject(gameData, area, tile, forTreasureMap, true, false, canvasContext);
};

export default drawTile;