import spriteTypes from '../../images/spriteTypes.js';

const isUsableTreeHouse = (tile) => tile.object?.sprite === spriteTypes.BIG_TREE_WITH_TREE_HOUSE && !tile.construction;

export default isUsableTreeHouse;