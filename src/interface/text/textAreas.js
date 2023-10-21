import canvases from '../../images/canvases.js';
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
      return {
        x: canvases.PRIMARY.canvas.width < 800 ? 15 : Math.round((panelArea.x - 360) / 2),
        y: canvases.PRIMARY.canvas.height < 600 ? 15 : Math.round((statusBarArea.y - 400) / 2),
        width: 380,
        height: 400
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