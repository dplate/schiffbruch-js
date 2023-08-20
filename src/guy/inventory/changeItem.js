import items from './items.js';
import state from '../../state/state.js';

const getMaxAmount = (item) => {
  return [items.BRANCH, items.LOG, items.STONE, items.LEAF, items.LIANA].includes(item) ? 10 : 1;
}

const changeItem = (item, difference) => {
  const maxAmount = getMaxAmount(item);
  const newAmount = Math.max(0, Math.min(maxAmount, state.guy.inventory[item] + difference));
  if (newAmount !== state.guy.inventory[item]) {
    state.guy.inventory[item] = newAmount;
    return true;
  }
  return false;
};

export default changeItem;