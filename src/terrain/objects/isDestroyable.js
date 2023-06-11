import spriteTypes from '../../images/spriteTypes.js';

const destroyableSprites = [
  spriteTypes.FIELD,
  spriteTypes.TENT,
  spriteTypes.BOAT,
  spriteTypes.PIPE,
  spriteTypes.SOS,
  spriteTypes.FIREPLACE,
  spriteTypes.BIG_TREE_WITH_LADDER,
  spriteTypes.BIG_TREE_WITH_PLATFORM,
  spriteTypes.BIG_TREE_WITH_TREE_HOUSE,
];

const isDestroyable = (object) => {
  if (destroyableSprites.includes(object?.sprite)) {
    return true;
  }
  return false;
}

export default isDestroyable;