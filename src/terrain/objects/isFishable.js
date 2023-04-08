import grounds from '../tiles/grounds.js';
import isRiver from './isRiver.js';

const isFishable = (tile) => {
  if (isRiver(tile.object) || tile.ground === grounds.SEA) {
    return true;
  }
  return false;
}

export default isFishable;