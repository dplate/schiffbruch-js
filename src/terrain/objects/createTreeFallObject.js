import spriteTypes from '../../images/spriteTypes.js';

const correspondingFallSprite = {
  [spriteTypes.TREE_HARDWOOD]: spriteTypes.TREE_FALL_HARDWOOD,
  [spriteTypes.TREE_PALM]: spriteTypes.TREE_FALL_PALM,
  [spriteTypes.TREE_EVERGREEN]: spriteTypes.TREE_FALL_EVERGREEN,
  [spriteTypes.TREE_SMALL]: spriteTypes.TREE_FALL_SMALL
};

const createTreeFallObject = (tile) => {
  const fallSprite = correspondingFallSprite[tile.object?.sprite];
  tile.object = {
    ...tile.object,
    sprite: fallSprite,
    reverse: false,
    frame: 0,
    deleteAfterLastFrame: true
  };
};

export default createTreeFallObject;