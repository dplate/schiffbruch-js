import goToOnTile from './goToOnTile.js';

const goToObject = (gameData, offsetX = 0, offsetY = 0) => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  goToOnTile(gameData, {
    x: tile.object.x + offsetX,
    y: tile.object.y + offsetY
  });
};

export default goToObject;