import tileEdges from '../terrain/tiles/tileEdges.js';
import goToOnTile from './goToOnTile.js';

const goToEastOfTile = (gameData) => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  goToOnTile(gameData, tileEdges[tile.type].east);
};

export default goToEastOfTile;