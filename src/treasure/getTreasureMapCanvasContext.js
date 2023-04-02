let treasureMapCanvasContext = null;

const getTreasureMapCanvasContext = () => {
  if (treasureMapCanvasContext === null) {
    const treasureMapCanvas = window.document.createElement('canvas');
    treasureMapCanvas.width = 370;
    treasureMapCanvas.height = 370;
    treasureMapCanvasContext = treasureMapCanvas.getContext('2d');
  }
  return treasureMapCanvasContext;
};

export default getTreasureMapCanvasContext;