const updateCamera = (camera, newCenter, primaryCanvasContext, movie) => {
  camera.width = primaryCanvasContext.canvas.width - (movie ? 0 : 195);
  camera.height = primaryCanvasContext.canvas.height - (movie ? 0 : 20);
  camera.x = Math.floor(newCenter.x - camera.width / 2);
  camera.y = Math.floor(newCenter.y - camera.height / 2);
};

export default updateCamera;