import interfaceTypes from './interfaceTypes.js';
import state from '../state/state.js';
import minimapScaling from './minimap/minimapScaling.js';
import canvases from '../images/canvases.js';

const interfaces = {};

interfaces[interfaceTypes.PANEL] = () => {
  const compact = canvases.PRIMARY.canvas.height < 600;
  return {
    area: {
      x: canvases.PRIMARY.canvas.width - 205,
      y: 0,
      width: 205,
      height: compact ? (state.options.openedMenu ? 220 : 50) : 600
    },
    compact
  }
};

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
  const panel = interfaces[interfaceTypes.PANEL]();
  return {
    area: {
      x: panel.area.x + 47,
      y: panel.area.y + 23,
      width: minimapScaling * state.terrain.length,
      height: minimapScaling * state.terrain[0].length
    },
    hidden: panel.compact
  }
};

interfaces[interfaceTypes.GAME_BUTTONS] = () => {
  const panel = interfaces[interfaceTypes.PANEL]();
  return {
    area: {
      x: panel.area.x + 60,
      y: panel.area.y + (panel.compact ? 195 : 2),
      width: 100,
      height: 20
    }
  }
};

interfaces[interfaceTypes.CONTROL_BUTTONS] = () => {
  const panel = interfaces[interfaceTypes.PANEL]();
  return {
    area: {
      x: panel.area.x + 29,
      y: panel.area.y + (panel.compact ? 7 : 157),
      width: 158,
      height: 195
    }
  }
};

interfaces[interfaceTypes.INVENTORY] = () => {
  const area = interfaces[interfaceTypes.CONTROL_BUTTONS]().area;
  return {
    area: {
      x: area.x - 14,
      y: area.y + 63,
      width: 178,
      height: 114
    }
  }
};

export default interfaces;