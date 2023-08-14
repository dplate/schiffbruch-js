import actionTypes from '../actionTypes.js';
import startAction from '../startAction.js';
import state from '../../state/state.js';
import isDrinkable from '../../terrain/objects/isDrinkable.js';
import isEatable from '../../terrain/objects/isEatable.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';

const startEatingAndDrinking = () => {
  const object = state.terrain[state.guy.tile.x][state.guy.tile.y].object;
  if (isEatable(object) || isDrinkable(object)) {
    startAction(actionTypes.EATING_AND_DRINKING);
  } else {
    openPaper(texts.IMPOSSIBLE_NO_FOOD_OR_WATER, false);
  }
};

export default startEatingAndDrinking;