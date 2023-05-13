import tileTypes from '../terrain/tiles/tileTypes.js';

const getCostsOfTile = (tile) => tile.type === tileTypes.FLAT ? 1 : 2;

export default getCostsOfTile;