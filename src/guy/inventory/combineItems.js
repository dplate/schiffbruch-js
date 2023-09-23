import items from './items.js';
import workbench from './workbench.js';
import openPaper from '../../interface/text/openPaper.js';
import texts from '../../interface/text/texts.js';
import state from '../../state/state.js';
import changeItem from './changeItem.js';
import sounds from '../../sounds/sounds.js';

const combinations = [
  {
    items: [ items.STONE, items.BRANCH],
    output: [ 
      {
        item: items.AXE,
        textId: 'WORKBENCH_AXE'
      },
      {
        item: items.HARROW,
        textId: 'WORKBENCH_HARROW'
      }
    ],
    nothingLeftTextId: 'WORKBENCH_NOTHING_STONE_BRANCH'
  },
  {
    items: [ items.LIANA, items.BRANCH],
    output: [ 
      {
        item: items.FISHING_ROD,
        textId: 'WORKBENCH_FISHING_ROD'
      }
    ],
    nothingLeftTextId: 'WORKBENCH_NOTHING_LIANA_BRANCH'
  },
  {
    items: [ items.LIANA, items.STONE],
    output: [ 
      {
        item: items.SLING,
        textId: 'WORKBENCH_SLING'
      }
    ],
    nothingLeftTextId: 'WORKBENCH_NOTHING_LIANA_STONE'
  }
];

const combineItems = (items) => {
  const combination = combinations.find(combination =>
    combination.items.every(item => items.includes(item))
  );
  if (!combination) {
    openPaper(texts.WORKBENCH_NOTHING, false);
    return;
  }

  const newOutput = combination.output.find(output => 
    !state.guy.inventory[output.item]
  );
  if (!newOutput) {
    openPaper(texts[combination.nothingLeftTextId], false);
    return;
  }

  combination.items.forEach(item => changeItem(item, -1));
  changeItem(newOutput.item, 1);
  sounds.INVENTION.instance.play();
  openPaper(texts[newOutput.textId], false);
};

export default combineItems;


