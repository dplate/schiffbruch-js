import tileEdges from '../../terrain/tiles/tileEdges.js';
import goToOnTile from './goToOnTile.js';

const goToWestOfTile = (gameData) => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  goToOnTile(gameData, tileEdges[tile.type].west);
};

export default goToWestOfTile;