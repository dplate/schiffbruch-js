import isRiver from './isRiver.js';

const isDrinkable = (object) => {
  if (isRiver(object)) {
    return true;
  }
  return false;
}

export default isDrinkable;