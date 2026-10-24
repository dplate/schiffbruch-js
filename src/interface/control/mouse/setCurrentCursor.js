import workbench from '../../../guy/inventory/workbench.js';
import cursor from './cursor.js';
import spriteTypes from '../../../images/spriteTypes.js';
import state from '../../../state/state.js';
import getButtonAtPosition from '../../menu/getButtonAtPosition.js';
import getPaperAnswerAtPosition from '../../text/getPaperAnswerAtPosition.js';

export const setCurrentCursor = () => {
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