import inventoryOffsets from './inventoryOffsets.js';
import itemSprites from './itemSprites.js';
import items from './items.js';
import state from '../../state/state.js';

const findItemAtPosition = (position) => {
  return items.list.find(item => {
    if (state.guy.inventory[item] > 0) {
      const sprite = itemSprites[item];
      const inventoryPosition = sprite.inventoryPosition
      const rectangle = {
        left: inventoryOffsets.items.x + inventoryPosition.x,
        top: inventoryOffsets.items.y + inventoryPosition.y,
        right: inventoryOffsets.items.x + inventoryPosition.x + sprite.width,
        bottom: inventoryOffsets.items.y + inventoryPosition.y + sprite.height
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