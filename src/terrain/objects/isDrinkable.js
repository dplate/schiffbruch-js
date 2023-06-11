import isRiver from './isRiver.js';
import isWateredPipe from './isWateredPipe.js';

const isDrinkable = (object) => {
  if (isRiver(object)) {
    return true;
  }
  if (isWateredPipe(object)) {
    return true;
  }
  return false;
}

export default isDrinkable;