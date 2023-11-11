import itemsOffset from './itemsOffset.js';
import itemSprites from './itemSprites.js';
import items from './items.js';
import state from '../../state/state.js';
import interfaces from '../../interface/interfaces.js';
import interfaceTypes from '../../interface/interfaceTypes.js';

const getDistanceToItem = (position, item) => {
  const area = interfaces[interfaceTypes.INVENTORY]().area;
  const sprite = itemSprites[item];
  const inventoryPosition = sprite.inventoryPosition;
  const itemCenter = {
    x: area.x + itemsOffset.x + inventoryPosition.x + sprite.width / 2,
    y: area.y + itemsOffset.y + inventoryPosition.y + sprite.height / 2
  };
  const distance = {
    x: itemCenter.x - position.x,
    y: itemCenter.y - position.y,
  }

  return Math.sqrt(distance.x * distance.x + distance.y * distance.y);
};

const findItemAtPosition = (position) => {
   const availableItems = items.list.filter(item => state.guy.inventory[item] > 0);
  return availableItems.sort((item1, item2) => getDistanceToItem(position, item1) - getDistanceToItem(position, item2))[0];
};

export default findItemAtPosition;