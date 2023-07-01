import spriteTypes from '../../images/spriteTypes.js';
import isRiverDam from './isRiverDam.js';

const correspondingDamSprite = {
  [spriteTypes.RIVER_NORTH_EAST]: spriteTypes.RIVER_DAM_NORTH_EAST,
  [spriteTypes.RIVER_NORTH_SOUTH]: spriteTypes.RIVER_DAM_NORTH_SOUTH,
  [spriteTypes.RIVER_SOUTH_EAST]: spriteTypes.RIVER_DAM_SOUTH_EAST,
  [spriteTypes.RIVER_WEST_NORTH]: spriteTypes.RIVER_DAM_WEST_NORTH,
  [spriteTypes.RIVER_WEST_EAST]: spriteTypes.RIVER_DAM_WEST_EAST,
  [spriteTypes.RIVER_WEST_SOUTH]: spriteTypes.RIVER_DAM_WEST_SOUTH,
};

const tryCreateRiverDam = (tile) => {
  if (isRiverDam(tile.object)) {
    return true;
  }

  const damSprite = correspondingDamSprite[tile.object?.sprite];
  if (!damSprite) {
    return false;
  }
  tile.originalObject = tile.object;
  tile.object = {
    ...tile.originalObject,
    sprite: damSprite
  };
  return true;
};

export default tryCreateRiverDam;