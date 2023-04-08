import spriteTypes from '../images/spriteTypes.js';

const addShipWreck = (tile) => {
  tile.object = {
    sprite: spriteTypes.SHIP_WRECK,
    x: 15,
    y: 20,
    frame: 0
  };
};

export default addShipWreck;