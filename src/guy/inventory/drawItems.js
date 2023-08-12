import canvases from '../../images/canvases.js';
import images from '../../images/images.js';
import drawItem from './drawItem.js';
import inventoryOffsets from './inventoryOffsets.js';
import itemSprites from './itemSprites.js';
import state from '../../state/state.js';

const romanOneWidth = 3;
const romanOneHeight = 13;
const romanFiveWidth = 15;
const romanFiveHeight = 10;
const romanNumberDistance = romanOneWidth + 1;

const drawRomanOne = (position) => {
  canvases.PRIMARY.drawImage(
    images.INVENTORY.instance, 
    0, 
    0, 
    romanOneWidth, 
    romanOneHeight, 
    position.x, 
    position.y, 
    romanOneWidth, 
    romanOneHeight
  );
};

const drawRomanFive = (position) => {
  canvases.PRIMARY.drawImage(
    images.INVENTORY.instance, 
    3, 
    0, 
    romanFiveWidth, 
    romanFiveHeight, 
    position.x, 
    position.y, 
    romanFiveWidth, 
    romanFiveHeight
  );
};

const drawRomanNumber = (amountPosition, number) => {
  if (number % 5 === 0) {
    drawRomanFive({
      x: amountPosition.x + 3 + ((number / 5 - 1) * 20),
      y: amountPosition.y
    });
  } else {
    drawRomanOne({
      x: amountPosition.x + number * romanNumberDistance,
      y: amountPosition.y
    });
  };
};

const drawItems = () => {
  Object.entries(state.guy.inventory).forEach(([item, amount]) => {
    if (amount > 0) {
      const sprite = itemSprites[item];
      const position = {
        x: inventoryOffsets.items.x + sprite.inventoryPosition.x, 
        y: inventoryOffsets.items.y + sprite.inventoryPosition.y
      };
      drawItem(item, position);
      
      const amountPosition = {
        x: position.x + sprite.width + 4,
        y: position.y
      };
      for (let number = 1; number <= amount; number++) {
        drawRomanNumber(amountPosition, number);
      }
    }
  });
};

export default drawItems;