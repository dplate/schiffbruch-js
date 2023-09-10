import actionTypes from './actionTypes.js';
import chopping from './actions/chopping.js';
import constructingBoat from './actions/constructingBoat.js';
import constructingField from './actions/constructingField.js';
import constructingFireplace from './actions/constructingFireplace.js';
import constructingLadder from './actions/constructingLadder.js';
import constructingPipe from './actions/constructingPipe.js';
import constructingPlatform from './actions/constructingPlatform.js';
import constructingSos from './actions/constructingSos.js';
import constructingTent from './actions/constructingTent.js';
import constructingTreeHouse from './actions/constructingTreeHouse.js';
import destroying from './actions/destroying.js';
import consuming from './actions/consuming.js';
import fishing from './actions/fishing.js';
import lightning from './actions/lightning.js';
import looking from './actions/looking.js';
import searching from './actions/searching.js';
import shoveling from './actions/shoveling.js';
import sleeping from './actions/sleeping.js';
import slinging from './actions/slinging.js';
import stopping from './actions/stopping.js';
import undocking from './actions/undocking.js';
import docking from './actions/docking.js';
import endingDay from './actions/endingDay.js';

const actions = {
  [actionTypes.STOPPING_GAME]: {},
  [actionTypes.RESTARTING_GAME]: {},
  [actionTypes.DYING]: {},
  [actionTypes.ENDING_DAY]: endingDay,
  [actionTypes.RESTARTING_DAY]: {},
  [actionTypes.ARRIVING]: {},
  [actionTypes.LEAVING]: {},
  [actionTypes.STOPPING]: stopping,
  [actionTypes.DOCKING]: docking,
  [actionTypes.UNDOCKING]: undocking,
  [actionTypes.SEARCHING]: searching,
  [actionTypes.CONSUMING]: consuming,
  [actionTypes.SLEEPING]: sleeping,
  [actionTypes.CHOPPING]: chopping,
  [actionTypes.FISHING]: fishing,
  [actionTypes.LIGHTNING]: lightning,
  [actionTypes.LOOKING]: looking,
  [actionTypes.SHOVELING]: shoveling,
  [actionTypes.SLINGING]: slinging,
  [actionTypes.CONSTRUCTING_TENT]: constructingTent,
  [actionTypes.CONSTRUCTING_FIELD]: constructingField,
  [actionTypes.CONSTRUCTING_BOAT]: constructingBoat,
  [actionTypes.CONSTRUCTING_PIPE]: constructingPipe,
  [actionTypes.CONSTRUCTING_SOS]: constructingSos,
  [actionTypes.CONSTRUCTING_LADDER]: constructingLadder,
  [actionTypes.CONSTRUCTING_PLATFORM]: constructingPlatform,
  [actionTypes.CONSTRUCTING_TREE_HOUSE]: constructingTreeHouse,
  [actionTypes.CONSTRUCTING_FIREPLACE]: constructingFireplace,
  [actionTypes.DESTROYING]: destroying
};

export default actions;