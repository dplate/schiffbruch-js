import constructions from '../../construction/constructions.js';
import createNeededItemsText from '../../construction/createNeededItemsText.js';
import drawStatusText from '../../text/drawStatusText.js';
import texts from '../../text/texts.js';
import getTextIdForObject from '../objects/getTextIdForObject.js';
import groundTextIds from './groundTextIds.js';

const createTileText = (tile) => {
  const groundText = texts[groundTextIds[tile.ground]];
  const objectText =  texts[getTextIdForObject(tile.object)];
  if (!objectText) {
    return groundText;
  }

  if (!tile.construction) {
    return `${groundText} ${texts.WITH} ${objectText}`;
  }

  const progress = Math.floor(tile.construction.actionStep * 100 / constructions[tile.construction.type].actionSteps);
  const needItemsText = createNeededItemsText(tile.construction.neededItems);
  return `${groundText} ${texts.WITH} ${objectText} (${progress}%)${needItemsText}`;
};

const drawTileText = (tile) => drawStatusText(createTileText(tile));

export default drawTileText;