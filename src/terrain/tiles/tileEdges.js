import tileTypes from './tileTypes.js';

// Attention: with overlapping borders
const tileEdges = {
  [tileTypes.FLAT]: {
    left: { x: -1, y: 29 }, 
    top: { x: 26, y: 15 }, 
    right: { x: 54, y: 30 }, 
    bottom: { x: 27, y: 44 }
  },
  [tileTypes.SLOPE_NORTH]: {
    left: { x: -1, y: 13 }, 
    top: { x: 26, y: 15 }, 
    right: { x: 54, y: 30 }, 
    bottom: { x: 27, y: 28 }
  },
  [tileTypes.SLOPE_WEST]: {
    left: { x: -1, y: 29 }, 
    top: { x: 26, y: 15 }, 
    right: { x: 54, y: 14 }, 
    bottom: { x: 27, y: 28 }
  },
  [tileTypes.SLOPE_SOUTH]: {
    left: { x: -1, y: 29 }, 
    top: { x: 26, y: -1 }, 
    right: { x: 54, y: 14 }, 
    bottom: { x: 27, y: 44 }
  },
  [tileTypes.SLOPE_EAST]: {
    left: { x: -1, y: 13 }, 
    top: { x: 26, y: -1 }, 
    right: { x: 54, y: 30 }, 
    bottom: { x: 27, y: 44 }
  },
  [tileTypes.RIDGE_NORTH_EAST]: {
    left: { x: -1, y: 13 }, 
    top: { x: 26, y: 15 }, 
    right: { x: 54, y: 30 }, 
    bottom: { x: 27, y: 44 }
  },
  [tileTypes.RIDGE_NORTH_WEST]: {
    left: { x: -1, y: 29 }, 
    top: { x: 26, y: 15 }, 
    right: { x: 54, y: 30 }, 
    bottom: { x: 27, y: 28 }
  },
  [tileTypes.RIDGE_SOUTH_WEST]: {
    left: { x: -1, y: 29 }, 
    top: { x: 26, y: 15 }, 
    right: { x: 54, y: 14 }, 
    bottom: { x: 27, y: 44 }
  },
  [tileTypes.RIDGE_SOUTH_EAST]: {
    left: { x: -1, y: 29 }, 
    top: { x: 26, y: -1 }, 
    right: { x: 54, y: 30 }, 
    bottom: { x: 27, y: 44 }
  },
  [tileTypes.CANYON_SOUTH_EAST]: {
    left: { x: -1, y: 13 }, 
    top: { x: 26, y: -1 }, 
    right: { x: 54, y: 14 }, 
    bottom: { x: 27, y: 44 }
  },
  [tileTypes.CANYON_NORTH_EAST]: {
    left: { x: -1, y: 13 }, 
    top: { x: 26, y: -1 }, 
    right: { x: 54, y: 30 }, 
    bottom: { x: 27, y: 28 }
  },
  [tileTypes.CANYON_NORTH_WEST]: {
    left: { x: -1, y: 13 }, 
    top: { x: 26, y: 15 }, 
    right: { x: 54, y: 14 }, 
    bottom: { x: 27, y: 28 }
  },
  [tileTypes.CANYON_SOUTH_WEST]: {
    left: { x: -1, y: 29 }, 
    top: { x: 26, y: -1 }, 
    right: { x: 54, y: 14 }, 
    bottom: { x: 27, y: 28 }
  },
};

const calculateCenter = (coordinate1, coordinate2) => ({
  x: Math.round((coordinate1.x + coordinate2.x) / 2), 
  y: Math.round((coordinate1.y + coordinate2.y) / 2), 
});

const topBottomTiles = [ tileTypes.RIDGE_NORTH_WEST, tileTypes.RIDGE_SOUTH_EAST, tileTypes.CANYON_SOUTH_EAST, tileTypes.CANYON_NORTH_WEST ];

Object.keys(tileEdges).forEach(type => {
  const edges = tileEdges[type];
  edges.west = calculateCenter(edges.left, edges.top);
  edges.north = calculateCenter(edges.top, edges.right);
  edges.east = calculateCenter(edges.right, edges.bottom);
  edges.south = calculateCenter(edges.bottom, edges.left);
  edges.center = topBottomTiles.includes(type) ? calculateCenter(edges.top, edges.bottom) : calculateCenter(edges.left, edges.right);
  edges.topBottomEdge = topBottomTiles.includes(type);
});

export default tileEdges;