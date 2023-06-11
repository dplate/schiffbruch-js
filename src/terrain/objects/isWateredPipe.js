import spriteTypes from '../../images/spriteTypes.js';

const isWateredPipe = (object) => object?.sprite === spriteTypes.PIPE && object?.frame === 1;

export default isWateredPipe;