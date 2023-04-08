import tileEdges from '../terrain/tiles/tileEdges.js';
import tileTypes from '../terrain/tiles/tileTypes.js';

const restrictCamera = (camera, terrain) => {
  camera.x = Math.max(
    camera.x, 
    terrain[0][terrain[0].length - 1].position.x + tileEdges[tileTypes.FLAT].left.x
  );
  camera.x = Math.min(
    camera.x, 
    terrain[terrain.length - 1][0].position.x + tileEdges[tileTypes.FLAT].right.x - camera.width
  );
  camera.y = Math.max(
    camera.y, 
    terrain[0][0].position.y + tileEdges[tileTypes.FLAT].top.y
  );
  camera.y = Math.min(
    camera.y, 
    terrain[terrain.length - 1][terrain[0].length - 1].position.y + tileEdges[tileTypes.FLAT].bottom.y - camera.height
  );
};

export default restrictCamera;