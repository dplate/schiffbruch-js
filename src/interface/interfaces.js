import interfaceTypes from './interfaceTypes.js';
import state from '../state/state.js';
import minimapScaling from './minimap/minimapScaling.js';
import canvases from '../images/canvases.js';

const interfaces = {};

interfaces[interfaceTypes.PANEL] = () => ({
  area: {
    x: canvases.PRIMARY.canvas.width - 205,
    y: 0,
    width: 205,
    height: 600
  }
});

interfaces[interfaceTypes.STATUS_BAR] = () => {
  const panelArea = interfaces[interfaceTypes.PANEL]().area;
  const width = 605;
  const optimalX = Math.max(0, Math.round((panelArea.x - width) / 2));
  return {
    area: {
      x: optimalX,
      y: canvases.PRIMARY.canvas.height - 20,
      width,
      height: 20
    }
  };
}

interfaces[interfaceTypes.MINIMAP] = () => {
  const panelArea = interfaces[interfaceTypes.PANEL]().area;
  return {
    area: {
      x: panelArea.x + 47,
      y: panelArea.y + 23,
      width: minimapScaling * state.terrain.length,
      height: minimapScaling * state.terrain[0].length
    }
  }
};

interfaces[interfaceTypes.INVENTORY] = () => {
  const panelArea = interfaces[interfaceTypes.PANEL]().area;
  return {
    area: {
      x: panelArea.x + 15,
      y: panelArea.y + 220,
      width: 178,
      height: 114
    }
  }
};

export default interfaces;