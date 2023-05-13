import directions from '../../terrain/directions.js';
import tileEdges from '../../terrain/tiles/tileEdges.js';
import canGoOnTile from './canGoOnTile.js';
import getCostsOfTile from './getCostsOfTile.js';

const estimateCosts = (start, destination) => {
  return Math.sqrt(Math.pow(destination.x - start.x, 2) + Math.pow(destination.y - start.y, 2));
};

const createWaypoint = (terrainTile, tileEdge, direction) => ({
  x: terrainTile.position.x + tileEdge.x,
  y: terrainTile.position.y + tileEdge.y,
  direction
});

const getDirection = (tile, nextTile) => {
  if (nextTile.x > tile.x) {
    return directions.EAST;
  } else if (nextTile.x < tile.x) {
    return directions.WEST;
  } else if (nextTile.y > tile.y) {
    return directions.SOUTH;
  }
  return directions.NORTH;
}

const createRoute = (gameData, lastTile) => {
  let tile = lastTile;
  const route = [];
  while (tile) {
    const terrainTile = gameData.terrain[tile.x][tile.y];
    const currentTileEdges = tileEdges[terrainTile.type];
    const routeTile = {
      x: tile.x,
      y: tile.y,
      wayPoints: []
    };
    const nextTile = route[0];
    if (nextTile) {
      const direction = getDirection(tile, nextTile);
      const nextTerrainTile = gameData.terrain[nextTile.x][nextTile.y];
      nextTile.wayPoints.unshift(createWaypoint(nextTerrainTile, tileEdges[nextTerrainTile.type].center, direction));
      routeTile.wayPoints.push(createWaypoint(terrainTile, currentTileEdges[direction], direction));
    }
   
    route.unshift(routeTile);
    tile = tile.previousTile;
  }
  return route;
};

const findRoute = (gameData, destination) => {
  const start = gameData.guy.tile;
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
      return createRoute(gameData, nearest);
    }    
    
    directions.list.forEach(direction => {
      const neighborX = nearest.x + directions.xDiff[direction];
      const neighborY = nearest.y + directions.yDiff[direction];
      const neighborTile = gameData.terrain[neighborX]?.[neighborY];
      const visitedTile = visitedTiles.find(tile => tile.x === neighborX && tile.y === neighborY);
      if (!visitedTile && neighborTile && canGoOnTile(gameData, neighborTile)) {
        const tileCosts = getCostsOfTile(neighborTile);
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
  return createRoute(gameData, bestAlternateDestination);
}

export default findRoute;