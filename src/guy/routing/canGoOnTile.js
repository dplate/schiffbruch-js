import grounds from '../../terrain/tiles/grounds.js';
import isSea from '../../terrain/tiles/isSea.js';
import isOnSea from '../isOnSea.js';

const canGoOnTile = (tile) => {
  if (isOnSea()) {
    if (isSea(tile)) {
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