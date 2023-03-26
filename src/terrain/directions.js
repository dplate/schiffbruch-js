const directions = {
  WEST: 'west',
  NORTH: 'north',
  EAST: 'east',
  SOUTH: 'south'
};

directions.list = [directions.NORTH, directions.EAST, directions.SOUTH, directions.WEST];

directions.xDiff = {
  [directions.NORTH]: 0,
  [directions.EAST]: 1,
  [directions.SOUTH]: 0,
  [directions.WEST]: -1,
};

directions.yDiff = {
  [directions.NORTH]: -1,
  [directions.EAST]: 0,
  [directions.SOUTH]: 1,
  [directions.WEST]: 0,
};

directions.opposite = {
  [directions.NORTH]: directions.SOUTH,
  [directions.EAST]: directions.WEST,
  [directions.SOUTH]: directions.NORTH,
  [directions.WEST]: directions.EAST,
};

export default directions;