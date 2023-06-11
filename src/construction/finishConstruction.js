const finishConstruction = (tile) => {
  tile.object.frame = 0;
  tile.construction = null;
};

export default finishConstruction;