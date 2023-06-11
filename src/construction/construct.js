import constructions from './constructions.js';

const construct = (tile, constructionFrame) => {
  tile.object.frame = constructions[tile.construction.type].frames[constructionFrame];
};

export default construct;