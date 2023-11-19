import grounds from './grounds.js';

const isSea = (tile) => tile && (tile.ground === grounds.SEA || tile.ground === grounds.SHORE);

export default isSea;