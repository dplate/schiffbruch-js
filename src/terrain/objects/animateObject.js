import sprites from '../../images/sprites.js';

const animateObject = (tile, frame, framesPerSecond) => {
  const object = tile.object;
  const sprite = sprites[object.sprite];
  const speed = sprite.speed;
  if (speed) {
    const animateEveryThisFrame = Math.round(framesPerSecond / speed) || 1;
    if (frame % animateEveryThisFrame === 0) {
      if (object.reverse) {
        if (object.frame > 0) {
          tile-object.frame--;
        } else {
          object.frame = sprite.frameCount - 1;
        }
      } else {
        if (object.frame < sprite.frameCount - 1) {
          object.frame++;
        } else if (object.deleteAfterLastFrame) {
          tile.object = null;
        } else {
          object.frame = 0;
        }
      }
    }
  }
};

export default animateObject;