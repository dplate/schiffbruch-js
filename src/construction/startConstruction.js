import state from '../state/state.js';
import constructions from './constructions.js';

const startConstruction = (constructionType, x, y) => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
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

  state.guy.storedPosition = { ...state.guy.position };
};

export default startConstruction;