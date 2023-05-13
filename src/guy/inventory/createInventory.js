import items from './items.js';

const createInventory = () => {
  const inventory = {};
  items.list.forEach(item => inventory[item] = 0);
  return inventory;
}

export default createInventory;