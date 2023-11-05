import drawItem from '../../../guy/inventory/drawItem.js';
import itemSprites from '../../../guy/inventory/itemSprites.js';
import workbench from '../../../guy/inventory/workbench.js';
import drawSprite from '../../../images/drawSprite.js';
import cursor from './cursor.js';

const drawCursor = () => {
  if (cursor.x === null || cursor.y === null) {
    return;
  }
  if (workbench.selectedItem) {
    const position = {
      x: Math.round(cursor.x - itemSprites[workbench.selectedItem].width / 2),
      y: Math.round(cursor.y - itemSprites[workbench.selectedItem].height / 2)
    };
    drawItem(workbench.selectedItem, position);
  } else {
    drawSprite(
      cursor.sprite, 
      0, 
      cursor.x, 
      cursor.y
    );
  }
};

export default drawCursor;