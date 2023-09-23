import interfaceTypes from './interfaceTypes.js';
import state from '../state/state.js';
import minimapScaling from './minimap/minimapScaling.js';

const interfaces = {
  [interfaceTypes.PANEL]: () => ({
    area: {
      x: 595,
      y: 0,
      width: 205,
      height: 600
    }
  }),
  [interfaceTypes.STATUS_BAR]: () => ({
    area: {
      x: 0,
      y: 580,
      width: 605,
      height: 20
    }
  })
};

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