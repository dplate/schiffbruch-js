import state from '../state/state.js';
import tileEdges from './tiles/tileEdges.js';
import tileTypes from './tiles/tileTypes.js';

const flatTileEdges = tileEdges[tileTypes.FLAT];
const flatHalfWidth = flatTileEdges.top.x + 2;
const flatHalfHeight = flatTileEdges.left.y - flatTileEdges.top.y ;
const heightMultiplier = flatTileEdges.top.y + 1;

const positionTransformer = {
  toPixel: (x, y, height = 0) => {
    const offsetX = Math.floor(flatHalfWidth * (state.terrain.length - 1));
    return {
      x: offsetX + flatHalfWidth * (x - y),
      y: flatHalfHeight * (x + y) - heightMultiplier * height
    };
  },
  fromPixel: (x, y) => {
    const offsetX = Math.floor(flatHalfWidth * (state.terrain.length - 1));
    return {
      x: (x - offsetX) / (2 * flatHalfWidth) + y / (2 * flatHalfHeight),
      y: (offsetX - x) / (2 * flatHalfWidth) + y / (2 * flatHalfHeight)
    };
  }
};

export default positionTransformer;