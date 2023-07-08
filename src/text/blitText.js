const blitText = (textArea, textCanvasContext, canvasContext) => {
  canvasContext.drawImage(
    textCanvasContext.canvas,
    textArea.x, textArea.y, textArea.width, textArea.height,
    textArea.x, textArea.y, textArea.width, textArea.height
  );
}

export default blitText;