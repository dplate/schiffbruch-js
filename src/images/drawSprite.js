import sprites from './sprites.js'

const drawSprite = (type, frame, x, y, canvasContext) => {
  const sprite = sprites[type];
  let sourceX = sprite.x;
  let sourceY = sprite.y + frame * sprite.height;
  let destinationX = x;
  let destinationY = y;
  let width = sprite.width;
  let height = sprite.height;

  if (destinationX < 0) {
    width += destinationX;
    sourceX -= destinationX;
    destinationX = 0;
  }
  if (destinationY < 0) {
    height += destinationY;
    sourceY -= destinationY;
    destinationY = 0;
  }
  if (destinationX + width >= canvasContext.canvas.width) {
    width -= canvasContext.canvas.width - (destinationX + width);
  }
  if (destinationY + height >= canvasContext.canvas.height) {
    height -= canvasContext.canvas.height - (destinationY + height);
  }

  canvasContext.drawImage(
    sprite.image.instance, 
    sourceX, sourceY, width, height, 
    destinationX, destinationY, width, height
  );
};

export default drawSprite;