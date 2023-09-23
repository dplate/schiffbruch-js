import fonts from './fonts.js';

const textAreas = {
  STATUS: {
    font: fonts.DIGITAL,
    x: 9,
    y: 600 - 17,
    width: 60 * fonts.DIGITAL.distance,
    height: fonts.DIGITAL.height
  },
  TIME: {
    font: fonts.DIGITAL,
    x: 800 - 110,
    y: 600 - 20,
    width: 5 * fonts.DIGITAL.distance,
    height: fonts.DIGITAL.height
  },
  PAPER: {
    font: fonts.HAND,
    x: 150,
    y: 100,
    width: 380,
    height: 400
  },
  CHANCE: {
    font: fonts.DIGITAL,
    x: 800 - 192,
    y: 370,
    width: 5 * fonts.DIGITAL.distance,
    height: fonts.DIGITAL.height
  }
};

export default textAreas;