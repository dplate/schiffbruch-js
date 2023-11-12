import spriteTypes from '../../images/spriteTypes.js';
import isRiver from './isRiver.js';

const isOnGround = (object) => {
  if (!object) {
    return false;
  }

  if (object.isOnGround === undefined) {
    object.isOnGround = 
      object.sprite === spriteTypes.WAVES || 
      object.sprite === spriteTypes.FIELD || 
      object.sprite === spriteTypes.PIPE || 
      object.sprite === spriteTypes.SOS || 
      isRiver(object);
  }
  return object.isOnGround;
};

export default isOnGround;