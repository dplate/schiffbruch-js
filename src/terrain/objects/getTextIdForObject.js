import spriteTypes from '../../images/spriteTypes.js';
import isNormalTree from './isNormalTree.js';
import isRiver from './isRiver.js';

const getTextIdForObject = (object) => {
  if (!object) {
    return null;
  }
  switch (object.sprite) {
    case spriteTypes.BUSH:
      return 'OBJECT_BUSH';
    case spriteTypes.TENT:
      return 'OBJECT_TENT';
    case spriteTypes.FIELD:
      return 'OBJECT_FIELD';  
    case spriteTypes.BOAT:
      return 'OBJECT_BOAT';
    case spriteTypes.PIPE:
      return 'OBJECT_PIPE';
    case spriteTypes.SOS:
      return 'OBJECT_SOS';
    case spriteTypes.BIG_TREE:
      return 'OBJECT_BIG_TREE';
    case spriteTypes.BIG_TREE_WITH_LADDER:
      return 'OBJECT_BIG_TREE_WITH_LADDER';
    case spriteTypes.BIG_TREE_WITH_PLATFORM:
      return 'OBJECT_BIG_TREE_WITH_PLATFORM';
    case spriteTypes.BIG_TREE_WITH_TREE_HOUSE:
      return 'OBJECT_BIG_TREE_WITH_TREE_HOUSE';
    case spriteTypes.FIREPLACE:
      return 'OBJECT_FIREPLACE';
    case spriteTypes.FIRE:
      return 'OBJECT_FIRE';
    case spriteTypes.SHIP_WRECK:
    case spriteTypes.PIRATE_WRECK:  
      return 'OBJECT_SHIP_WRECK';
    default:
      if (isNormalTree(object)) {
        return 'OBJECT_TREE'
      }
      if (isRiver(object)) {
        return 'OBJECT_RIVER';
      }
      return null;
  }
};

export default getTextIdForObject;