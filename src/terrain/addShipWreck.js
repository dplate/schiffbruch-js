import spriteTypes from '../images/spriteTypes.js';
import objectTypes from './objects/objectTypes.js';

const addShipWreck = (tile) => {
  tile.object = {
    type: objectTypes.SHIP_WRECK,
    sprite: spriteTypes.SHIP_WRECK,
    x: 15,
    y: 20,
    frame: 0
  };
};

export default addShipWreck;