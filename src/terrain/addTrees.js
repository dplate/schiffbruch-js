import sprites from '../images/sprites.js';
import spriteTypes from '../images/spriteTypes.js';
import calculatePositionInTile from './tiles/calculatePositionInTile.js';
import grounds from './tiles/grounds.js';

const getRandomTree = () => {
  const nonBigTrees = [ 
    spriteTypes.TREE_HARDWOOD, 
    spriteTypes.TREE_PALM, 
    spriteTypes.TREE_HARDWOOD, 
    spriteTypes.TREE_SMALL, 
    spriteTypes.BUSH 
  ];
  return nonBigTrees[Math.floor(Math.random() * nonBigTrees.length)];
};

const getStartFrame = (spriteType) => {
  const sprite = sprites[spriteType];
  switch (spriteType) {
    case spriteTypes.BUSH:
      return sprite.frameCount - 1;
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

const addTrees = (terrain) => {
  let bigTreePlanted = false; 

  terrain.forEach((terrainColumn) => {
    terrainColumn.forEach((tile) => {
      if (tile.object || tile.ground === grounds.QUICKSAND || Math.random() > 0.3) {
        return;
      }

      const position = calculatePositionInTile(tile, getRandomFractionWithBounds(), getRandomFractionWithBounds());
      const spriteType = getSpriteType(tile, bigTreePlanted);
      const sprite = sprites[spriteType];

      tile.object = {
        sprite: spriteType,
        x: Math.round(position.x - sprite.width / 2),
        y: Math.round(position.y - sprite.height),
        reverse: Math.random() < 0.5,
        frame: getStartFrame(spriteType)
      };
      bigTreePlanted = bigTreePlanted || (spriteType === spriteTypes.BIG_TREE);
    });
  });
};

export default addTrees;