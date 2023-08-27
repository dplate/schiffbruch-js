import constructions from './constructions.js';
import openPaper from '../interface/text/openPaper.js';
import texts from '../interface/text/texts.js';
import startAction from '../action/startAction.js';
import actionTypes from '../action/actionTypes.js';
import state from '../state/state.js';
import changeItem from '../guy/inventory/changeItem.js';
import actions from '../action/actions.js';

const useItemsForConstruction = (tile) => {
  const construction = constructions[tile.construction.type];

  const amountLeft = Object.values(tile.construction.neededItems)
    .reduce((sum, amount) => sum + amount, 0);
  const actionSteps = Object.values(actions).find(action => action.construction === tile.construction.type).steps?.length || construction.actionSteps;
  const stepsLeft = actionSteps - tile.construction.actionStep + 1;

  const amountLeftPerStep = amountLeft / stepsLeft;

  let amountLeftForThisStep = tile.construction.actionStep === 0 ? 
    Math.ceil(amountLeftPerStep) : Math.round(amountLeftPerStep);

  if (amountLeftForThisStep <= 0) {
    return true;
  }

  for (const neededItemType of Object.keys(tile.construction.neededItems)) {
    if (tile.construction.neededItems[neededItemType] > 0 &&
      state.guy.inventory[neededItemType] > 0) {
      changeItem(neededItemType, -1);
      tile.construction.neededItems[neededItemType]--;
      amountLeftForThisStep--;
      
      if (amountLeftForThisStep <= 0) {
        return true;
      }
    }
  }

  openPaper(texts.IMPOSSIBLE_NOT_ENOUGH_ITEMS, false);
  startAction(actionTypes.STOPPING);

  return false;
};

export default useItemsForConstruction;