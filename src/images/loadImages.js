import images from './images.js';

const loadImages = () => {
  const promises = Object.keys(images).map((imageType) => {
    return new Promise((resolve) => {
      const image = new Image();
      image.addEventListener('load', () => {
        images[imageType].instance = image;
        resolve(image);
      }, false);
      image.src = `./images/${images[imageType].file}`;
    });
  })
  return Promise.all(promises);
};

export default loadImages;