import canvases from '../../images/canvases.js';
import images from '../../images/images.js';
import interfaces from '../../interface/interfaces.js';
import interfaceTypes from '../../interface/interfaceTypes.js';
import drawItems from './drawItems.js';

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
};

export default drawInventory;