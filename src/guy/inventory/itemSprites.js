import images from '../../images/images.js';
import items from './items.js';

const width = 16;
const height = 15;

const itemSprites = {};
items.list.forEach((item, index) => {
  itemSprites[item] = {
    image: images.INVENTORY,
    x: 18 + index * width,
    y: 0,
    width,
    height
  }
});

[ items.BRANCH, items.STONE, items.LEAF, items.LIANA, items.LOG ].forEach((item, index) => {
  itemSprites[item].inventoryPosition = {
    x: 0,
    y: index * 20
  };
});

[ items.MATCHES, items.SHOVEL, items.MAP, items.SLING ].forEach((item, index) => {
  itemSprites[item].inventoryPosition = {
    x: 71,
    y: index * 20
  };
});

[ items.AXE, items.HARROW, items.FISHING_ROD, items.HAMMER, items.SPYGLASS ].forEach((item, index) => {
  itemSprites[item].inventoryPosition = {
    x: 116,
    y: index * 20
  };
});

export default itemSprites;