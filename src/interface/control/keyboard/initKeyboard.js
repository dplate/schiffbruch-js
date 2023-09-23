import control from '../control.js';

const initKeyboard = (window) => {
  window.document.addEventListener("keydown", (event) => {
    control.pressedKeyCodes[event.code] = true;
  });

  window.document.addEventListener("keyup", (event) => {
    control.pressedKeyCodes[event.code] = false;
  });
};

export default initKeyboard;