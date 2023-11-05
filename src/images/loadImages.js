import images from './images.js';

const loadImages = (language) => {
  const promises = Object.keys(images).map((imageType) => {
    return new Promise((resolve) => {
      const image = new Image();
      const file = images[imageType].file.replace('{language}', language);
      image.addEventListener('load', () => {
        images[imageType].instance = image;
        resolve(image);
      }, false);
      image.src = `./images/${file}`;
    });
  })
  return Promise.all(promises);
};

export default loadImages;