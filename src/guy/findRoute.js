import directions from '../terrain/directions.js';
import tileTypes from '../terrain/tiles/tileTypes.js';

const estimateCosts = (start, destination) => {
  return Math.sqrt(Math.pow(destination.x - start.x, 2) + Math.pow(destination.y - start.y, 2));
};

const createRoute = (lastTile) => {
  let tile = lastTile;
  const route = [];
  while (tile) {
    route.unshift(tile);
    tile = tile.previousTile;
  }
  return route;
};

const findRoute = (gameData, start, destination) => {
  const startTile = { 
    ...start,
    estimatedCosts: estimateCosts(start, destination),
    costs: 0,
    previousTile: null,
  };
  const tilesToCheck = [ startTile ];
  const visitedTiles = [ startTile ];
  let bestAlternateDestination = startTile;

  while (tilesToCheck.length > 0) {
    const nearest = tilesToCheck.shift();
    visitedTiles.push(nearest);
    if (bestAlternateDestination.estimatedCosts > nearest.estimatedCosts) {
      bestAlternateDestination = nearest;
    }

    if (nearest.x === destination.x && nearest.y === destination.y) {
      return createRoute(nearest);
    }    
    
    directions.list.forEach(direction => {
      const neighborX = nearest.x + directions.xDiff[direction];
      const neighborY = nearest.y + directions.yDiff[direction];
      const neighborTile = gameData.terrain[neighborX][neighborY];
      const visitedTile = visitedTiles.find(tile => tile.x === neighborX && tile.y === neighborY);
      if (!visitedTile && neighborTile.Begehbar) {
        const tileCosts = neighborTile.type === tileTypes.FLAT ? 1 : 2;
        const costs = nearest.costs + tileCosts;
        const tileToCheck = tilesToCheck.find(tile => tile.x === neighborX && tile.y === neighborY);
        if (tileToCheck) {
          if (tileToCheck.costs > costs) {
            tileToCheck.estimatedCosts = estimateCosts(tileToCheck, destination);
            tileToCheck.costs = costs;
            tileToCheck.previousTile = nearest;
          }
        } else {
          tilesToCheck.push({
            x: neighborX,
            y: neighborY,
            estimatedCosts: estimateCosts({ x: neighborX, y: neighborY }, destination),
            costs,
            previousTile: nearest
          });
        }
      }
    });

    tilesToCheck.sort((tile1, tile2) => (tile1.costs + tile1.estimatedCosts) - (tile2.costs + tile2.estimatedCosts));
  }
  return createRoute(bestAlternateDestination);
}

export default findRoute;