import itemsOffset from './itemsOffset.js';
import itemSprites from './itemSprites.js';
import items from './items.js';
import state from '../../state/state.js';
import interfaces from '../../interface/interfaces.js';
import interfaceTypes from '../../interface/interfaceTypes.js';

const findItemAtPosition = (position) => {
  const area = interfaces[interfaceTypes.INVENTORY]().area;
  return items.list.find(item => {
    if (state.guy.inventory[item] > 0) {
      const sprite = itemSprites[item];
      const inventoryPosition = sprite.inventoryPosition;
      const rectangle = {
        left: area.x + itemsOffset.x + inventoryPosition.x,
        top: area.y + itemsOffset.y + inventoryPosition.y,
        right: area.x + itemsOffset.x + inventoryPosition.x + sprite.width,
        bottom: area.y + itemsOffset.y + inventoryPosition.y + sprite.height
      };
      if (position.x >= rectangle.left && position.y >= rectangle.top &&
        position.x < rectangle.right && position.y < rectangle.bottom) {
        return true;
      }
    };
    return false;
  });
};

export default findItemAtPosition;