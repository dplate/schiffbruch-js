import grounds from '../terrain/tiles/grounds.js';

const isOnSea = (gameData) => {
  const currentTile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  return currentTile.ground === grounds.SEA;
};

export default isOnSea;