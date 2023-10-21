import control from '../control.js';
import getPositionFromEvent from '../getPositionFromEvent.js';
import cursor from './cursor.js';

const hasRightMouseButtonPressed = (event) => event.buttons & 2;

const initMouse = (window) => {
  window.document.onmousemove = (event) => {
    const position = getPositionFromEvent(event);
    cursor.x = position.x;
    cursor.y = position.y;
    if (control.touch) {
      if (hasRightMouseButtonPressed(event)) {
        if (!control.touch.drag) {
          control.touch.drag = {
            x: 0,
            y: 0
          };
        }
        control.touch.drag.x += position.x - control.touch.position.x;
        control.touch.drag.y += position.y - control.touch.position.y;
      }
      control.touch.position = position;
    }
    event.preventDefault();
  };

  window.document.onmousedown = (event) => {
    control.touch = {
      position: getPositionFromEvent(event),
      drag: null,
      released: false
    };
    event.preventDefault();
  };

  window.document.onmouseup = (event) => {
    if (!control.touch?.drag) {
      control.tap = getPositionFromEvent(event);   
    }
    if (control.touch) {
      control.touch.drag = null
      control.touch.released = true;
    }
    event.preventDefault();
  };
};

export default initMouse;