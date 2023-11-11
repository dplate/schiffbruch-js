import state from '../../state/state.js';
import interfaceTypes from '../interfaceTypes.js';
import interfaces from '../interfaces.js';
import fonts from './fonts.js';

const textAreas = {
  STATUS: {
    font: fonts.DIGITAL,
    text: '',
    getArea: () => {
      const statusBarArea = interfaces[interfaceTypes.STATUS_BAR]().area;
      return {
        x: statusBarArea.x + 9,
        y: statusBarArea.y + 3,
        width: 60 * fonts.DIGITAL.distance,
        height: fonts.DIGITAL.height
      }
    }
  },
  TIME: {
    font: fonts.DIGITAL,
    text: '',
    getArea: () => {
      const panelArea = interfaces[interfaceTypes.PANEL]().area;
      return {
        x: panelArea.x + 95,
        y: panelArea.y + panelArea.height - 20,
        width: 5 * fonts.DIGITAL.distance,
        height: fonts.DIGITAL.height
      }
    }
  },
  PAPER: {
    font: fonts.HAND,
    text: '',
    getArea: () => {
      const panel = interfaces[interfaceTypes.PANEL]();
      const panelArea = panel.area;
      const statusBarArea = interfaces[interfaceTypes.STATUS_BAR]().area;
      const width = 415;
      const height = state.paper?.height || 400;
      return {
        x: Math.max(15, Math.round((panelArea.x - width) / 2)),
        y: Math.max(15, Math.round((statusBarArea.y - height) / 2)),
        width,
        height
      };
    }
  },
  CHANCE: {
    font: fonts.DIGITAL,
    text: '',
    offsetY: 0,
    getArea: null
  }
};

textAreas.CHANCE.getArea = () => {
  const panelArea = interfaces[interfaceTypes.PANEL]().area;
  return {
    x: panelArea.x + 13,
    y: panelArea.y + textAreas.CHANCE.offsetY,
    width: 5 * fonts.DIGITAL.distance,
    height: fonts.DIGITAL.height
  }
};

export default textAreas;