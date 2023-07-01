import spriteTypes from '../../images/spriteTypes.js';

const riverDamSprites = [
  spriteTypes.RIVER_DAM_NORTH_EAST,
  spriteTypes.RIVER_DAM_NORTH_SOUTH,
  spriteTypes.RIVER_DAM_WEST_NORTH,
  spriteTypes.RIVER_DAM_SOUTH_EAST,
  spriteTypes.RIVER_DAM_WEST_EAST,
  spriteTypes.RIVER_DAM_WEST_SOUTH,
];

const isRiverDam = (object) => {
  if (riverDamSprites.includes(object?.sprite)) {
    return true;
  }
  return false;
}

export default isRiverDam;