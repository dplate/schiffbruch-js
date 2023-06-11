import spriteTypes from '../../images/spriteTypes.js';

const isDryPipe = (object) => object?.sprite === spriteTypes.PIPE && object?.frame === 0;

export default isDryPipe;