import tileEdges from './tileEdges.js';

const calculatePositionInTriangle = (edge00, edge10, edge01, fractionX, fractionY) => ({
  x: Math.round(edge00.x + (edge10.x - edge00.x) * fractionX + (edge01.x - edge00.x) * fractionY),
  y: Math.round(edge00.y + (edge10.y - edge00.y) * fractionX + (edge01.y - edge00.y) * fractionY)
});

const calculatePositionInTile = (tile, fractionX, fractionY) => {
  const mirroredFractionX = 1.0 - fractionX;
  const mirroredFractionY = 1.0 - fractionY;
  const edges = tileEdges[tile.type];
  if (edges.topBottomEdge) {
    if (fractionX + mirroredFractionY < 1.0) {
      return calculatePositionInTriangle(edges.left, edges.bottom, edges.top, fractionX, mirroredFractionY);
    } else {
      return calculatePositionInTriangle(edges.right, edges.top, edges.bottom, mirroredFractionX, fractionY);
    }
  } else {
    if (fractionX + fractionY < 1.0) {
      return calculatePositionInTriangle(edges.top, edges.right, edges.left, fractionX, fractionY);
    } else {
      return calculatePositionInTriangle(edges.bottom, edges.left, edges.right, mirroredFractionX, mirroredFractionY);
    }
  }
};

export default calculatePositionInTile;