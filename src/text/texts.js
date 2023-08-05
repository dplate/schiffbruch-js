import de from './languages/de.js';

const texts = {};

texts.init = (language) => {
  switch(language) {
    default: Object.assign(texts, de);
  };
};

export default texts;