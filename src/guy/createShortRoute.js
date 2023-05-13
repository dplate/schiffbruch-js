const createShortRoute = (startTile, destination) => {
  return [{
    x: startTile.x,
    y: startTile.y,
    wayPoints: [ destination ]
  }];
};

export default createShortRoute;