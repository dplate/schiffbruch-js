import spriteTypes from '../../images/spriteTypes.js';

const isEatable = (object) => {
  if (object?.sprite === spriteTypes.BUSH && [2, 3].includes(object.frame)) {
    return true;
  }
  if (object?.sprite === spriteTypes.FIELD && [2, 3].includes(object.frame)) {
    return true;
  }
  return false;
}

export default isEatable;