import isSea from '../tiles/isSea.js';
import isRiver from './isRiver.js';

const isFishable = (tile) => {
  if (isRiver(tile.object) || isSea(tile)) {
    return true;
  }
  return false;
}

export default isFishable;