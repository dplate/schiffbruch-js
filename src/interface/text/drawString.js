import canvases from '../../images/canvases.js';

const charCodeOffset = ' '.charCodeAt(0);
const lastCharacters = ['/', '?', 'O', '_', 'o', '~'];

const drawString = (string, position, font) => {
  for (let index = 0; index < string.length; index++) {
    const character = string[index];
    const sourceRow = lastCharacters.findIndex(lastCharacter => character <= lastCharacter);
    const sourceColumn = string.charCodeAt(index) - charCodeOffset - 16 * sourceRow;

    canvases.PRIMARY.drawImage(
      font.image.instance, 
      sourceColumn * font.width, 
      sourceRow * font.height, 
      font.width, 
      font.height, 
      position.x + index * font.distance, 
      position.y, 
      font.width, 
      font.height, 
    );
  }
};

export default drawString;