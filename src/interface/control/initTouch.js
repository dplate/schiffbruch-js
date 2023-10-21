import control from './control.js';
import getPositionFromEvent from './getPositionFromEvent.js';

const initTouch = (window) => {
  window.document.addEventListener('touchmove', (event) => {
    const position = getPositionFromEvent(event.changedTouches[0]);
    if (control.touch) {
      if (!control.touch.drag) {
        control.touch.drag = {
          x: 0,
          y: 0
        };
      }
      control.touch.drag.x += position.x - control.touch.position.x;
      control.touch.drag.y += position.y - control.touch.position.y;
      control.touch.position = position;
    }
    event.preventDefault();
  }, { passive:false });

  window.document.addEventListener('touchstart', (event) => {
    control.touch = {
      position: getPositionFromEvent(event.changedTouches[0]),
      drag: null,
      released: false
    };
    event.preventDefault();
  }, { passive:false });

  window.document.addEventListener('touchend', (event) => {
    if (!control.touch?.drag) {
      control.tap = getPositionFromEvent(event.changedTouches[0]);   
    }
    if (control.touch) {
      control.touch.drag = null
      control.touch.released = true;
    }
    event.preventDefault();
  }, { passive:false });
};

export default initTouch;