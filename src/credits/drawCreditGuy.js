import canvases from '../images/canvases.js';
import drawSprite from '../images/drawSprite.js';
import sprites from '../images/sprites.js';
import creditGuySprites from './creditGuySprites.js';
import creditState from './creditState.js';

const drawCreditGuy = (frame, framesPerSecond) => {
  const spriteType = creditGuySprites[creditState.itemId];
  const sprite = sprites[spriteType];
  const spriteFrame = Math.max(1, Math.round(framesPerSecond / sprite.speed));

  drawSprite(
    spriteType, 
    creditState.offset, 
    canvases.PRIMARY.canvas.width / 2, 
    canvases.PRIMARY.canvas.height / 2 + 50, 
    10
  );
  
  if (frame % spriteFrame === 0) {
    creditState.offset++;
    if (creditState.offset >= sprite.frameCount) {
      creditState.itemId++;
      creditState.offset = 0;
      if (creditState.itemId >= creditGuySprites.length) {
        creditState.itemId = 0;
      }
    }
  }
};

export default drawCreditGuy;