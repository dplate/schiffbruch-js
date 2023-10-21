import control from './control.js';
import hasPressedCancel from './keyboard/hasPressedCancel.js';

const hasAnyInput = () => hasPressedCancel() || control.tap;

export default hasAnyInput;  