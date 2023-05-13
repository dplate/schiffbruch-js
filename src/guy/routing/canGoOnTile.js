import grounds from '../../terrain/tiles/grounds.js';
import isOnSea from '../isOnSea.js';

const canGoOnTile = (gameData, tile) => {
  if (isOnSea(gameData)) {
    if (tile.ground === grounds.SEA) {
      return true;
    }
  } else {
    if (tile.ground === grounds.BEACH || tile.ground === grounds.GRASS || tile.ground === grounds.WETLAND) {
      return true;
    }
  }
  return false;
};

export default canGoOnTile;