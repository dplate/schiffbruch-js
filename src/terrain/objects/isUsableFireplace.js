import spriteTypes from '../../images/spriteTypes.js';

const isUsableFireplace = (tile) => tile.object?.sprite === spriteTypes.FIREPLACE && !tile.construction;

export default isUsableFireplace;