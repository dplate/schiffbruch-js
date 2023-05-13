import sprites from '../../images/sprites.js';
import goToOnTile from './goToOnTile.js';

const goToObject = (gameData, offsetX = 0, offsetY = 0) => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  goToOnTile(gameData, {
    x: tile.object.x + sprites[tile.object.sprite].width / 2 + offsetX,
    y: tile.object.y + sprites[tile.object.sprite].height + offsetY
  });
};

export default goToObject;