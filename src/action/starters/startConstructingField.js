import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import tileTypes from '../../terrain/tiles/tileTypes.js';
import constructionTypes from '../../construction/constructionTypes.js';
import continueConstruction from '../../construction/continueConstruction.js';
import grounds from '../../terrain/tiles/grounds.js';

const startConstructingField = () => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  if (!tile.object && tile.type === tileTypes.FLAT && tile.ground === grounds.WETLAND) {
    startAction(actionTypes.CONSTRUCTING_FIELD);
  } else if (tile.construction?.type === constructionTypes.FIELD) {
    continueConstruction()
    startAction(actionTypes.CONSTRUCTING_FIELD);
  } else {
    openPaper(texts.IMPOSSIBLE_CONSTRUCTION_FIELD, false);
  }
};

export default startConstructingField;