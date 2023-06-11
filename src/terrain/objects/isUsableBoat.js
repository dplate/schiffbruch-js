import spriteTypes from '../../images/spriteTypes.js';

const isUsableBoat = (tile) => tile.object?.sprite === spriteTypes.BOAT && !tile.construction;

export default isUsableBoat;