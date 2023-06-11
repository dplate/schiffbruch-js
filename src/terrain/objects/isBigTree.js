import spriteTypes from '../../images/spriteTypes.js';

const bigTreeSprites = [
  spriteTypes.BIG_TREE,
  spriteTypes.BIG_TREE_WITH_LADDER,
  spriteTypes.BIG_TREE_WITH_PLATFORM,
  spriteTypes.BIG_TREE_WITH_TREE_HOUSE,
];

const isBigTree = (object) => {
  if (bigTreeSprites.includes(object?.sprite)) {
    return true;
  }
  return false;
}

export default isBigTree;