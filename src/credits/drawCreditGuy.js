import canvases from '../images/canvases.js';
import drawSprite from '../images/drawSprite.js';
import sprites from '../images/sprites.js';
import creditGuySprites from './creditGuySprites.js';
import creditState from './creditState.js';

const drawCreditGuy = (elapsedTime) => {
  const spriteType = creditGuySprites[creditState.itemId];
  const sprite = sprites[spriteType];

  drawSprite(
    spriteType, 
    creditState.offset, 
    canvases.PRIMARY.canvas.width / 2, 
    canvases.PRIMARY.canvas.height / 2 + 50, 
    10
  );
  
  creditState.offset += elapsedTime * sprite.speed / 1000;
  if (creditState.offset >= sprite.frameCount) {
    creditState.itemId++;
    creditState.offset = 0;
    if (creditState.itemId >= creditGuySprites.length) {
      creditState.itemId = 0;
    }
  }
};

export default drawCreditGuy;