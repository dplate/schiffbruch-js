import items from './items.js';

const getMaxAmount = (item) => {
  return [items.BRANCH, items.LOG, items.STONE, items.LEAF, items.LIANA].includes(item) ? 10 : 1;
}

const changeItem = (gameData, item, difference) => {
  const maxAmount = getMaxAmount(item);
  gameData.guy.inventory[item] = Math.max(0, Math.min(maxAmount, gameData.guy.inventory[item] + difference));
};

export default changeItem;