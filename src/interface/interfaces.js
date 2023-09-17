import interfaceTypes from './interfaceTypes.js';

const interfaces = {
  [interfaceTypes.PANEL]: {
    position: {
      x: 595,
      y: 0,
      width: 205,
      height: 600
    }
  },
  [interfaceTypes.STATUS_BAR]: {
    position: {
      x: 0,
      y: 580,
      width: 605,
      height: 20
    }
  }

};

export default interfaces;