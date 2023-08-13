import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import grounds from '../../terrain/tiles/grounds.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';

const startShoveling = () => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  if (tile.ground !== grounds.SEA &&
    tile.type === tileTypes.FLAT &&
    !tile.object) {
    startAction(actionTypes.SHOVELING);
  } else {
    openPaper(texts.IMPOSSIBLE_NO_SHOVELING, false);
  }
};

export default startShoveling;