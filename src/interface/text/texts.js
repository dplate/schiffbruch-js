import de from './languages/de.js';
import en from './languages/en.js';

const texts = {};

texts.init = (language) => {
  switch(language) {
    case 'de': 
      Object.assign(texts, de);
      break;
    default: 
      Object.assign(texts, en);
  };
};

export default texts;