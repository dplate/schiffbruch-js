import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import constructionTypes from '../../construction/constructionTypes.js';
import continueConstruction from '../../construction/continueConstruction.js';
import grounds from '../../terrain/tiles/grounds.js';
import findNeighbor from '../../guy/findNeighbor.js';

const startConstructingBoat = () => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  const nextToSea = findNeighbor(tile => tile.ground === grounds.SEA);
  if (!tile.object && nextToSea) {
    startAction(actionTypes.CONSTRUCTING_BOAT);
  } else if (tile.construction?.type === constructionTypes.BOAT) {
    continueConstruction()
    startAction(actionTypes.CONSTRUCTING_BOAT);
  } else {
    openPaper(texts.IMPOSSIBLE_CONSTRUCTING_BOAT, false);
  }
};

export default startConstructingBoat;