import constructions from './constructions.js';

const construct = (tile) => {
  const frames = constructions[tile.construction.type].frames;

  const constructionFrame = frames.indexOf(tile.object.frame);
  if (constructionFrame < frames.length - 1) {
    tile.object.frame = frames[constructionFrame + 1];
  }
};

export default construct;