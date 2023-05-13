import tileEdges from '../../terrain/tiles/tileEdges.js';
import goToOnTile from './goToOnTile.js';

const goToCenterOfTile = (gameData) => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  goToOnTile(gameData, tileEdges[tile.type].center);
};

export default goToCenterOfTile;