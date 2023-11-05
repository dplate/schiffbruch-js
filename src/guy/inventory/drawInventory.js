import canvases from '../../images/canvases.js';
import images from '../../images/images.js';
import interfaces from '../../interface/interfaces.js';
import interfaceTypes from '../../interface/interfaceTypes.js';
import drawItem from './drawItem.js';
import drawItems from './drawItems.js';
import workbench from './workbench.js';

const drawInventory = () => {
  const inventoryArea = interfaces[interfaceTypes.INVENTORY]().area;

  canvases.PRIMARY.drawImage(
    images.INVENTORY.instance,
    0, 
    15, 
    inventoryArea.width, 
    inventoryArea.height,
    inventoryArea.x, 
    inventoryArea.y, 
    inventoryArea.width, 
    inventoryArea.height
  );

  drawItems();

  if (workbench.selectedItem) {
    const buttonsArea = interfaces[interfaceTypes.CONTROL_BUTTONS]().area;
    drawItem(workbench.selectedItem, { x: buttonsArea.x + 84, y: buttonsArea.y + 3 }, 2);
  }
};

export default drawInventory;