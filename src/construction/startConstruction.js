import state from '../state/state.js';
import constructions from './constructions.js';

const startConstruction = (constructionType, position) => {
  const tile = state.terrain[state.guy.tile.x][state.guy.tile.y];
  const construction = constructions[constructionType];

  tile.originalObject = tile.object;
  tile.object = {
    sprite: construction.sprite,
    x: position.x,
    y: position.y,
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
};

export default startConstruction;