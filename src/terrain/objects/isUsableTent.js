import spriteTypes from '../../images/spriteTypes.js';

const isUsableTent = (tile) => tile.object?.sprite === spriteTypes.TENT && !tile.construction;

export default isUsableTent;