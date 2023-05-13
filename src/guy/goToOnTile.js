import createShortRoute from './createShortRoute.js';

const goToOnTile = (gameData, onTile) => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  gameData.guy.route = createShortRoute(
    gameData.guy.tile, 
    {
      x: tile.position.x + onTile.x,
      y: tile.position.y + onTile.y
    }
  );
  gameData.guy.active = true;
};

export default goToOnTile;