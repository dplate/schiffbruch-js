import items from './items.js';
import state from '../../state/state.js';

const getMaxAmount = (item) => {
  return [items.BRANCH, items.LOG, items.STONE, items.LEAF, items.LIANA].includes(item) ? 10 : 1;
}

const changeItem = (item, difference) => {
  const maxAmount = getMaxAmount(item);
  state.guy.inventory[item] = Math.max(0, Math.min(maxAmount, state.guy.inventory[item] + difference));
};

export default changeItem;