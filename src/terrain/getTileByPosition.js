import state from '../state/state.js';
import tileEdges from './tiles/tileEdges.js';

const isInTriangle = (position, edge1, edge2, edge3) => {
  const c = (position.x - edge2.x) / (edge1.x - edge2.x);
  if (c < 0) {
    return false;
  }
  const d = (
    (position.y - edge3.y) * (edge1.x - edge2.x) - 
    (position.x - edge2.x) * (edge1.y - edge3.y)
  ) / ((edge2.y - edge3.y) * (edge1.x - edge2.x));
  if (d < 0) {
    return false;
  }
  const b = (
    (position.y - edge1.y) * (edge2.x - edge1.x) - 
    (position.x - edge1.x) * (edge2.y - edge1.y)
  ) / ((edge2.x - edge1.x) * (edge3.y - edge2.y));
  if (b < 0) {
    return false;
  }
  const a = (position.x - edge1.x) / (edge2.x - edge1.x) - b;
  return a >= 0;
};

const getTileByPosition = (position) => {
  const terrain = state.terrain;
  for (let x = 0; x < terrain.length; x++) {
    for (let y = 0; y < terrain[x].length; y++) {
      const tile = terrain[x][y];
      if (position.x > tile.position.x && position.y > tile.position.y) {
        const tileEdge = tileEdges[tile.type];
        const relativePosition = {
          x: position.x - tile.position.x,
          y: position.y - tile.position.y
        };
        if (isInTriangle(relativePosition, tileEdge.left, tileEdge.top, tileEdge.bottom) ||
          isInTriangle(relativePosition, tileEdge.right, tileEdge.top, tileEdge.bottom)) {
            return { x, y };
          }
      }
    };
  };

  return null;
};

export default getTileByPosition;