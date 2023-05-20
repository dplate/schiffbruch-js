import spriteTypes from '../images/spriteTypes.js';
import tileEdges from './tiles/tileEdges.js';

const addShipWreck = (tile) => {
  const center = tileEdges[tile.type].center;
  tile.object = {
    sprite: spriteTypes.SHIP_WRECK,
    x: center.x,
    y: center.y,
    frame: 0
  };
};

export default addShipWreck;