import spriteTypes from '../../images/spriteTypes.js';
import sprites from '../../images/sprites.js';

const isEatable = (object) => {
  if (object?.sprite === spriteTypes.BUSH && object.frame === sprites[object.sprite].frameCount - 1) {
    return true;
  }
  return false;
}

export default isEatable;