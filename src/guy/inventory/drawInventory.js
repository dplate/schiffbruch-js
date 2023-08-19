import canvases from '../../images/canvases.js';
import images from '../../images/images.js';
import interfaces from '../../interface/interfaces.js';
import interfaceTypes from '../../interface/interfaceTypes.js';
import drawItems from './drawItems.js';

const width = 178;
const height = 114;

const drawInventory = () => {
  const panelPosition = interfaces[interfaceTypes.INTERFACE_PANEL].position;

  canvases.PRIMARY.drawImage(
    images.INVENTORY.instance,
    0, 
    15, 
    width, 
    height,
    panelPosition.x + 15, 
    panelPosition.y + 220, 
    width, 
    height
  );

  drawItems();
};

export default drawInventory;