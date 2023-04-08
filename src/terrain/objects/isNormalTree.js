import spriteTypes from '../../images/spriteTypes.js';

const normalTreeSprites = [
  spriteTypes.TREE_HARDWOOD,
  spriteTypes.TREE_PALM,
  spriteTypes.TREE_EVERGREEN,
  spriteTypes.TREE_SMALL,
];

const isNormalTree = (object) => {
  if (normalTreeSprites.includes(object?.sprite)) {
    return true;
  }
  return false;
}

export default isNormalTree;