import state from '../../state/state.js';
import cursor from './mouse/cursor.js';
import findItemAtPosition from '../../guy/inventory/findItemAtPosition.js';
import texts from '../text/texts.js';
import setStatusText from '../text/setStatusText.js';
import menuTypes from '../menu/menuTypes.js';
import textAreas from '../text/textAreas.js';
import handleButtonHovers from '../menu/handleButtonHovers.js';
import getTileByPosition from '../../terrain/getTileByPosition.js';
import createTileText from '../../terrain/tiles/createTileText.js';
import interfaceTypes from '../interfaceTypes.js';
import isPositionInInterface from '../isPositionInInterface.js';
import setInventoryStatusText from '../../guy/inventory/setInventoryStatusText.js';
import {setCurrentCursor} from './mouse/setCurrentCursor.js';
import control from './control.js';

const isPositionOverArea = (position, area) => {
  return position.x >= area.x &&
    position.x < area.x + area.width &&
    position.y >= area.y &&
    position.y < area.y + area.height;
};

const setHoverStatusText = (position) => {
  if (isPositionInInterface(position, interfaceTypes.PANEL)) {
    if (state.options.openedMenu === menuTypes.INVENTORY) {
      const item = findItemAtPosition(position);
      if (item) {
        setInventoryStatusText(item);
        return;
      }
    }
    if (isPositionOverArea(position, textAreas.TIME.getArea())) {
      setStatusText(texts.STATUS_TIME);
      return;
    }

    if (isPositionOverArea(position, textAreas.CHANCE.getArea())) {
      setStatusText(texts.STATUS_CHANCE);
      return;
    }
    return;
  }

  if (!isPositionInInterface(position, interfaceTypes.STATUS_BAR)) {
    const tilePosition = getTileByPosition({ 
      x: position.x + state.camera.x,
      y: position.y + state.camera.y
    });
    if (tilePosition) {
      const tile = state.terrain[tilePosition.x][tilePosition.y];
      if (tile?.discovered) {
        setStatusText(createTileText(state.terrain[tilePosition.x][tilePosition.y]));
        return;
      }
    }
    return;
  }
}

const getPosition = () => {
  if (cursor.x !== null && cursor.y !== null) {
    return cursor;
  }
  if (control.touch) {
    return control.touch.position;
  }
  return null;
}

const handleHovers = () => {
  const position = getPosition();
  if (!position) {
    return;
  }
  if (position === cursor) {
    setCurrentCursor();
  }
  setHoverStatusText(position);
  handleButtonHovers(position);
};

export default handleHovers;