import control from '../control.js';

const hasPressedCancel = () => 
  control.pressedKeyCodes['Escape'] || 
  control.pressedKeyCodes['Enter'] || 
  control.pressedKeyCodes['Space']

export default hasPressedCancel;  