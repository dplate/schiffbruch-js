import grounds from './tiles/grounds.js';

const scaling = 2;
const undiscoveredColor = 'rgba(247, 222, 191, 1)';
const waterColor = 'rgba(228, 207, 182, 1)';
const sandColor = 'rgba(112, 103, 93, 1)';

const getColor = (tile) => {
  if (tile.discovered) {
    if (tile.ground === grounds.SEA) {
      return waterColor;
    }
    if (tile.ground === grounds.BEACH || tile.ground === grounds.QUICKSAND) {
      return sandColor;
    }
    const heightColorShift = tile.height * 20;
    return `rgba(${139 + heightColorShift}, ${128 + heightColorShift}, ${115 + heightColorShift}, 1)`
  }
  return undiscoveredColor;
};

const updateMinimap = (terrain, canvasContext) => {
  canvasContext.fillStyle = undiscoveredColor
  canvasContext.fillRect(0, 0, terrain.length * scaling, terrain[0].length * scaling);

  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      canvasContext.fillStyle = getColor(tile);
      canvasContext.fillRect(x * scaling, y * scaling, scaling, scaling);
    });
  });
};

export default updateMinimap;