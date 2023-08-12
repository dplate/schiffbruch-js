import canvases from '../images/canvases.js';
import state from '../state/state.js';
import grounds from '../terrain/tiles/grounds.js';
import minimapScaling from './minimapScaling.js';

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

const updateMinimap = () => {
  const terrain = state.terrain;
  canvases.MINIMAP.fillStyle = undiscoveredColor
  canvases.MINIMAP.fillRect(0, 0, terrain.length * minimapScaling, terrain[0].length * minimapScaling);

  terrain.forEach((terrainColumn, x) => {
    terrainColumn.forEach((tile, y) => {
      canvases.MINIMAP.fillStyle = getColor(tile);
      canvases.MINIMAP.fillRect(x * minimapScaling, y * minimapScaling, minimapScaling, minimapScaling);
    });
  });
};

export default updateMinimap;