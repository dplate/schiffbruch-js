import spriteTypes from '../../images/spriteTypes.js';
import isRiver from './isRiver.js';

const isOnGround = (object) => {
  if (object?.sprite === spriteTypes.WAVES || isRiver(object)) {
    return true;
  }
  return false;
};

export default isOnGround;