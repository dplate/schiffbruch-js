import initTouch from './initTouch.js';
import initKeyboard from './keyboard/initKeyboard.js';
import initMouse from './mouse/initMouse.js';

const initControl = (window) => {
  initTouch(window);
  initMouse(window);
  initKeyboard(window);
}

export default initControl;