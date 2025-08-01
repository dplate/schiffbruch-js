import sprites from '../images/sprites.js';
import spriteTypes from '../images/spriteTypes.js';
import state from '../state/state.js';
import calculatePositionInTile from './tiles/calculatePositionInTile.js';
import grounds from './tiles/grounds.js';
import isSea from './tiles/isSea.js';

const getRandomTree = () => {
  const nonBigTrees = [ 
    spriteTypes.TREE_HARDWOOD, 
    spriteTypes.TREE_PALM, 
    spriteTypes.TREE_EVERGREEN, 
    spriteTypes.TREE_SMALL, 
    spriteTypes.BUSH 
  ];
  return nonBigTrees[Math.floor(Math.random() * nonBigTrees.length)];
};

const getStartFrame = (spriteType) => {
  const sprite = sprites[spriteType];
  switch (spriteType) {
    case spriteTypes.BUSH:
      return 2;
    default:
      return Math.floor(Math.random() * sprite.frameCount);
  }
};

const getRandomFractionWithBounds = () => 0.2 + Math.random() * 0.6;

const getSpriteType = (tile, bigTreePlanted) => {
  if (tile.ground === grounds.BEACH) {
    return spriteTypes.TREE_PALM;
  }
  if (!bigTreePlanted || Math.random() < 0.02) {
    return spriteTypes.BIG_TREE;
  }
  return getRandomTree();
};

const addTrees = () => {
  let bigTreePlanted = false; 

  state.terrain.forEach((terrainColumn) => {
    terrainColumn.forEach((tile) => {
      if (tile.object || 
        tile.ground === grounds.QUICKSAND || 
        isSea(tile) || 
        Math.random() > 0.3) {
        return;
      }

      const position = calculatePositionInTile(tile, getRandomFractionWithBounds(), getRandomFractionWithBounds());
      const spriteType = getSpriteType(tile, bigTreePlanted);

      tile.object = {
        sprite: spriteType,
        x: Math.round(position.x),
        y: Math.round(position.y),
        reverse: Math.random() < 0.5,
        frame: getStartFrame(spriteType)
      };
      bigTreePlanted = bigTreePlanted || (spriteType === spriteTypes.BIG_TREE);
    });
  });
};

export default addTrees;