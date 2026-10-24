import control from './control.js';
import getPositionFromEvent from './getPositionFromEvent.js';
import getButtonAtPosition from '../menu/getButtonAtPosition.js';

const TOUCH_BUTTON_CANCEL_DELAY = 3000;

const initTouch = (window) => {
  window.document.addEventListener('touchmove', (event) => {
    const position = getPositionFromEvent(event.changedTouches[0]);
    if (control.touch) {
      const movement = {
        x: position.x - control.touch.position.x,
        y: position.y - control.touch.position.y
      };
      if (Math.abs(movement.x) > 20 || Math.abs(movement.y) > 20 || control.touch.drag) {
        if (!control.touch.drag) {
          control.touch.drag = {
            x: 0,
            y: 0
          };
        }
        control.touch.drag.x += movement.x;
        control.touch.drag.y += movement.y;
        control.touch.position = position;
      }
    }
    event.preventDefault();
  }, { passive:false });

  window.document.addEventListener('touchstart', (event) => {
    control.touch = {
      position: getPositionFromEvent(event.changedTouches[0]),
      drag: null,
      released: false,
      startedAt: Date.now()
    };
    event.preventDefault();
  }, { passive:false });

  window.document.addEventListener('touchend', (event) => {
    const isLongPressOnButton =
      control.touch &&
      !control.touch.drag &&
      Date.now() - control.touch.startedAt >= TOUCH_BUTTON_CANCEL_DELAY &&
      getButtonAtPosition(control.touch.position);

    if (isLongPressOnButton) {
      control.tap = null;
    } else if (!control.touch?.drag) {
      control.tap = getPositionFromEvent(event.changedTouches[0]);
    }
    if (control.touch) {
      control.touch.drag = null
      control.touch.released = true;
    }
    event.preventDefault();
  }, { passive:false });

  window.document.addEventListener('touchcancel', (event) => {
    if (control.touch) {
      control.touch.drag = null;
      control.touch.released = true;
    }
    event.preventDefault();
  }, { passive:false });
};

export default initTouch;