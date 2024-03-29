import spriteTypes from '../../../images/spriteTypes.js';
import state from '../../../state/state.js';
import getButtonAtPosition from '../../menu/getButtonAtPosition.js';
import workbench from '../../../guy/inventory/workbench.js';
import cursor from './cursor.js';
import getPaperAnswerAtPosition from '../../text/getPaperAnswerAtPosition.js';
import findItemAtPosition from '../../../guy/inventory/findItemAtPosition.js';
import texts from '../../text/texts.js';
import setStatusText from '../../text/setStatusText.js';
import menuTypes from '../../menu/menuTypes.js';
import textAreas from '../../text/textAreas.js';
import handleButtonHovers from '../../menu/handleButtonHovers.js';
import getTileByPosition from '../../../terrain/getTileByPosition.js';
import createTileText from '../../../terrain/tiles/createTileText.js';
import interfaceTypes from '../../interfaceTypes.js';
import isPositionInInterface from '../../isPositionInInterface.js';
import setInventoryStatusText from '../../../guy/inventory/setInventoryStatusText.js';

const setCurrentCursor = () => {
  if (!workbench.selectedItem) {
    cursor.sprite = spriteTypes.CURSOR_ARROW;

    if (state.guy.active) {
      if (getButtonAtPosition(cursor)?.sprite !== spriteTypes.BUTTON_STOPPING &&
        getPaperAnswerAtPosition(cursor) === null &&
        (!state.paper || state.paper.question)) {   
        cursor.sprite = spriteTypes.CURSOR_WAIT;
      }
    }
  }
};

const isCursorOverArea = (area) => {
  return cursor.x >= area.x && 
    cursor.x < area.x + area.width &&
    cursor.y >= area.y && 
    cursor.y < area.y + area.height;
};

const setHoverStatusText = () => {
  if (isPositionInInterface(cursor, interfaceTypes.PANEL)) {
    if (state.options.openedMenu === menuTypes.INVENTORY) {
      const item = findItemAtPosition(cursor);
      if (item) {
        setInventoryStatusText(item);
        return;
      }
    }
    if (isCursorOverArea(textAreas.TIME.getArea())) {
      setStatusText(texts.STATUS_TIME);
      return;
    }

    if (isCursorOverArea(textAreas.CHANCE.getArea())) {
      setStatusText(texts.STATUS_CHANCE);
      return;
    }
    return;
  }

  if (!isPositionInInterface(cursor, interfaceTypes.STATUS_BAR)) {
    const tilePosition = getTileByPosition({ 
      x: cursor.x + state.camera.x, 
      y: cursor.y + state.camera.y 
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

const handleMouseHovers = () => {
  if (cursor.x === null || cursor.y === null) {
    return;
  }
  setCurrentCursor();
  setHoverStatusText();
  handleButtonHovers();
};

export default handleMouseHovers;