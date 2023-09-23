import control from './control.js';
import state from '../../state/state.js';
import spriteTypes from '../../images/spriteTypes.js';
import interfaces from '../interfaces.js';
import interfaceTypes from '../interfaceTypes.js';
import moveCameraFromMinimap from '../minimap/moveCameraFromMinimap.js';
import cursor from './mouse/cursor.js';
import isPositionInInterface from '../isPositionInInterface.js';
import workbench from '../../guy/inventory/workbench.js';
import combineItems from '../../guy/inventory/combineItems.js';
import findItemAtPosition from '../../guy/inventory/findItemUnderCursor.js';

const handleMinimapTouch = () => {
  if (isPositionInInterface(control.touch.position, interfaceTypes.MINIMAP)) {
    const area = interfaces[interfaceTypes.MINIMAP]().area;
    moveCameraFromMinimap({ 
      x: control.touch.position.x - area.x, 
      y: control.touch.position.y - area.y 
    });
  }
};

const handleInventoryTouch = () => {
  if (!isPositionInInterface(control.touch.position, interfaceTypes.INVENTORY)) {
    workbench.selectedItem = null;
  }

  const item = findItemAtPosition(control.touch.position);
  if (!workbench.selectedItem && item) {
    workbench.selectedItem = item;
  } else if (control.touch.released) {
    if (item && item !== workbench.selectedItem) {
      combineItems([item, workbench.selectedItem]);
    }
    workbench.selectedItem = null;
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
  handleInventoryTouch();
  handleMapTouch();

  if (control.touch.released) {
    control.touch = null;
  } else if (control.touch.drag) {
    control.touch.drag.x = 0;
    control.touch.drag.y = 0;
  }
};

export default handleTouch;