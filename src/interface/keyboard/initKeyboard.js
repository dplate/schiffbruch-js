import pressedKeyCodes from './pressedKeyCodes.js';

const initKeyboard = (window) => {
  window.document.addEventListener("keydown", (event) => {
    pressedKeyCodes[event.code] = true;
  });

  window.document.addEventListener("keyup", (event) => {
    pressedKeyCodes[event.code] = false;
  });
};

export default initKeyboard;