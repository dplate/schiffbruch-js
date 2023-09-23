import canvases from '../images/canvases.js';
import images from '../images/images.js';
import interfaceTypes from './interfaceTypes.js';
import interfaces from './interfaces.js';
import drawMinimap from './minimap/drawMinimap.js';
import drawButtons from './menu/drawButtons.js';
import drawInventory from '../guy/inventory/drawInventory.js';
import drawCondition from './drawCondition.js';
import drawSundial from './drawSundial.js';
import drawChance from './drawChance.js';
import state from '../state/state.js';
import menuTypes from './menu/menuTypes.js';

const drawPanel = () => {
  drawMinimap();

  const panelArea = interfaces[interfaceTypes.PANEL]().area;
  canvases.PRIMARY.drawImage(
    images.PANEL.instance,
    0, 
    0, 
    panelArea.width, 
    panelArea.height,
    panelArea.x, 
    panelArea.y, 
    panelArea.width, 
    panelArea.height
  );

  drawButtons();
  if (state.options.openedMenu === menuTypes.INVENTORY) {
    drawInventory();    
  }

  drawCondition();
  drawSundial();
  drawChance();
};

export default drawPanel;