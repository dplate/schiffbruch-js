import constructions from './constructions.js';

const startConstruction = (gameData, constructionType, x, y) => {
  const tile = gameData.terrain[gameData.guy.tile.x][gameData.guy.tile.y];
  const construction = constructions[constructionType];

  tile.originalObject = tile.object;
  tile.object = {
    sprite: construction.sprite,
    x,
    y,
    frame: construction.frames[0]
  };
  
  tile.construction = {
    type: constructionType,
    neededItems: {
      ...construction.items
    },
    actionStep: 0,
    lastGuyPosition: null
  };

  gameData.guy.storedPosition = { ...gameData.guy.position };
};

export default startConstruction;