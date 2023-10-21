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

  const panel = interfaces[interfaceTypes.PANEL]();
  canvases.PRIMARY.drawImage(
    images.PANEL.instance,
    0, 
    panel.compact ? 150 : 0, 
    panel.area.width, 
    panel.area.height,
    panel.area.x, 
    panel.area.y, 
    panel.area.width, 
    panel.area.height
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