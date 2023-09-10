import phases from './phases.js';

const state = {
  terrain: Array.from(
    Array(61), () => Array.from(
      Array(61), () => ({})
    )
  ),
  camera: {
    x: 0,
    y: 0,
    width: null,
    height: null
  },
  options: {
    grid: false,
    openedMenu: null
  },
  guy: {
    active: false,
    action: null,
    route: [],
    sprite: null,
    frame: null,
    position: {
      x: null,
      y: null
    },
    prevPosition: null,
    tile: {
      x: null,
      y: null
    },
    water: null,
    food: null,
    health: null,
    inventory: null,
    chance: null
  },
  constructionHints: {},
  calendar: {
    day: null,
    minutes: null,
  },
  paper: null,
  phase: phases.LOGO,
};

export default state;