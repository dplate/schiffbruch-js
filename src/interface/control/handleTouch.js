import control from './control.js';
import state from '../../state/state.js';
import spriteTypes from '../../images/spriteTypes.js';
import interfaces from '../interfaces.js';
import interfaceTypes from '../interfaceTypes.js';
import moveCameraFromMinimap from '../minimap/moveCameraFromMinimap.js';
import cursor from './mouse/cursor.js';
import isPositionInInterface from '../isPositionInInterface.js';

const handleMinimapTouch = () => {
  if (isPositionInInterface(control.touch.position, interfaceTypes.MINIMAP)) {
    const area = interfaces[interfaceTypes.MINIMAP]().area;
    moveCameraFromMinimap({ 
      x: control.touch.position.x - area.x, 
      y: control.touch.position.y - area.y 
    });
  }
};

const handleMapTouch = () => {
  if (control.touch.drag &&
    !isPositionInInterface(control.touch.position, interfaceTypes.STATUS_BAR) && 
    !isPositionInInterface(control.touch.position, interfaceTypes.PANEL)) {
    state.camera.x -= control.touch.drag.x;
    state.camera.y -= control.touch.drag.y;
    cursor.sprite = spriteTypes.CURSOR_MOVE;
  }
};

const handleTouch = () => {
  if (!control.touch) {
    return;
  }

  handleMinimapTouch();
  handleMapTouch();

  if (control.touch.released) {
    control.touch = null;
  } else if (control.touch.drag) {
    control.touch.drag.x = 0;
    control.touch.drag.y = 0;
  }
};

export default handleTouch;