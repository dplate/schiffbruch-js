import sprites from '../../images/sprites.js';

const animateObject = (tile, elapsedTime) => {
  const object = tile.object;
  const sprite = sprites[object.sprite];
  const speed = sprite.speed;
  if (speed) {
    const frameChange = elapsedTime * speed / 1000;
    if (object.reverse) {
      object.frame -= frameChange;
      if (object.frame < 0) {
        object.frame = sprite.frameCount - 1;
      }
    } else {
      object.frame += frameChange;
      if (object.frame >= sprite.frameCount) {
        if (object.deleteAfterLastFrame) {
          tile.object = null;
        } else {
          object.frame = 0;
        }
      }
    }
  }
};

export default animateObject;