import canvases from '../../../images/canvases.js';
import control from '../control.js';
import cursor from './cursor.js';

const getPositionFromEvent = (event) => {
  const rect = canvases.PRIMARY.canvas.getBoundingClientRect();
  const scaling = canvases.PRIMARY.canvas.dataset.scaling;
  return {
    x: Math.min(rect.width / scaling, Math.max(0, (event.clientX / scaling) - rect.left)),
    y: Math.min(rect.height / scaling, Math.max(0, (event.clientY / scaling) - rect.top))
  };
};

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
  };

  window.document.onmousedown = (event) => {
    control.touch = {
      position: getPositionFromEvent(event),
      drag: null,
      released: false
    };
  };

  window.document.onmouseup = (event) => {

    if (!control.touch?.drag) {
      control.tap = getPositionFromEvent(event);   
    }
    if (control.touch) {
      control.touch.drag = null
      control.touch.released = true;
    }
  };
};

export default initMouse;