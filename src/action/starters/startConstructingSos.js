import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import constructionTypes from '../../construction/constructionTypes.js';
import continueConstruction from '../../construction/continueConstruction.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';

const startConstructingSos = () => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  if (!tile.object && tile.type === tileTypes.FLAT) {
    startAction(actionTypes.CONSTRUCTING_SOS);
  } else if (tile.construction?.type === constructionTypes.SOS) {
    continueConstruction()
    startAction(actionTypes.CONSTRUCTING_SOS);
  } else {
    openPaper(texts.IMPOSSIBLE_CONSTRUCTING_SOS, false);
  }
};

export default startConstructingSos;