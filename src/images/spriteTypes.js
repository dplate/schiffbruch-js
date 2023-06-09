const spriteTypes = {
  WAVES: 'waves',
  RIVER_SPRING_EAST: 'riverSpringEast',
  RIVER_SPRING_SOUTH: 'riverSpringSouth',
  RIVER_SPRING_NORTH: 'riverSpringNorth',
  RIVER_SPRING_WEST: 'riverSpringWest',
  RIVER_MOUTH_WEST: 'riverMouthWest',
  RIVER_MOUTH_NORTH: 'riverMouthNorth',
  RIVER_MOUTH_EAST: 'riverMouthEast',
  RIVER_MOUTH_SOUTH: 'riverMouthSouth',
  RIVER_NORTH_EAST: 'riverNorthEast',
  RIVER_NORTH_SOUTH: 'riverNorthSouth',
  RIVER_WEST_NORTH: 'riverWestNorth',
  RIVER_SOUTH_EAST: 'riverSouthEast',
  RIVER_WEST_EAST: 'riverWestEast',
  RIVER_WEST_SOUTH: 'riverWestSouth',
  RIVER_SLOPE_NORTH: 'riverSlopeNorth',
  RIVER_SLOPE_EAST: 'riverSlopeEast',
  RIVER_SLOPE_SOUTH: 'riverSlopeSouth',
  RIVER_SLOPE_WEST: 'riverSlopeWest',
  RIVER_DAM_NORTH_EAST: 'riverDamNorthEast',
  RIVER_DAM_NORTH_SOUTH: 'riverDamNorthSouth',
  RIVER_DAM_WEST_NORTH: 'riverDamWestNorth',
  RIVER_DAM_SOUTH_EAST: 'riverDamSouthEast',
  RIVER_DAM_WEST_EAST: 'riverDamWestEast',
  RIVER_DAM_WEST_SOUTH: 'riverDamWestSouth',
  TREE_HARDWOOD: 'treeHardwood',
  TREE_PALM: 'treePalm',
  TREE_EVERGREEN: 'treeEvergreen',
  TREE_SMALL: 'treeSmall',
  TREE_FALL_HARDWOOD: 'treeFallHardwood',
  TREE_FALL_PALM: 'treeFallPalm',
  TREE_FALL_EVERGREEN: 'treeFallEvergreen',
  TREE_FALL_SMALL: 'treeFallSmall',
  BUSH: 'bush',
  BIG_TREE: 'bigTree',
  BIG_TREE_WITH_LADDER: 'bigTreeWithLadder',
  BIG_TREE_WITH_PLATFORM: 'bigTreeWithPlatform',
  BIG_TREE_WITH_TREE_HOUSE: 'bigTreeWithTreeHouse',
  PIRATE_WRECK: 'pirateWreck',
  SHIP_WRECK: 'shipWreck',
  FIELD: 'field',
  TENT: 'tent',
  BOAT: 'boat',
  PIPE: 'pipe',
  SOS: 'sos',
  FIREPLACE: 'fireplace',
  FIRE: 'fire',
  GUY_WALKING_WEST: 'guyWalkingWest',
  GUY_WALKING_NORTH: 'guyWalkingNorth',
  GUY_WALKING_EAST: 'guyWalkingEast',
  GUY_WALKING_SOUTH: 'guyWalkingSouth',
  GUY_SEARCHING: 'guySearching',
  GUY_EATING: 'guyEating',
  GUY_DRINKING: 'guyDrinking',
  GUY_CHOPPING: 'guyChopping',
  GUY_WAITING: 'guyWaiting',
  GUY_HARROWING: 'guyHarrowing',
  GUY_KNOTTING_NORTH: 'guyKnottingNorth',
  GUY_KNOTTING_SOUTH: 'guyKnottingSouth',
  GUY_SLEEPING_TENT: 'guySleepingTent',
  GUY_SLEEPING: 'guySleeping',
  GUY_LAYING_DOWN_TENT: 'guyLayingDownTent',
  GUY_LAYING_DOWN: 'guyLayingDown',
  GUY_STANDING_UP: 'guyStandingUp',
  GUY_FISHING_SWINGING_WEST: 'guyFishingSwingingWest',
  GUY_FISHING_SWINGING_NORTH: 'guyFishingSwingingNorth',
  GUY_FISHING_SWINGING_EAST: 'guyFishingSwingingEast',
  GUY_FISHING_SWINGING_SOUTH: 'guyFishingSwingingSouth',
  GUY_FISHING_WEST: 'guyFishingWest',
  GUY_FISHING_NORTH: 'guyFishingNorth',
  GUY_FISHING_EAST: 'guyFishingEast',
  GUY_FISHING_SOUTH: 'guyFishingSouth',
  GUY_FISHING_CATCHING_WEST: 'guyFishingCatchingWest',
  GUY_FISHING_CATCHING_NORTH: 'guyFishingCatchingNorth',
  GUY_FISHING_CATCHING_EAST: 'guyFishingCatchingEast',
  GUY_FISHING_CATCHING_SOUTH: 'guyFishingCatchingSouth',
  GUY_HITTING: 'guyHitting',
  GUY_PADDLING_WEST: 'guyPaddlingWest',
  GUY_PADDLING_NORTH: 'guyPaddlingNorth',
  GUY_PADDLING_EAST: 'guyPaddlingEast',
  GUY_PADDLING_SOUTH: 'guyPaddlingSouth',
  GUY_FISHING_SWINGING_BOAT: 'guyFishingSwingingBoat',
  GUY_FISHING_BOAT: 'guyFishingBoat',
  GUY_FISHING_CATCHING_BOAT: 'guyFishingCatchingBoat',
  GUY_DIVING_JUMPING: 'guyDivingJumping',
  GUY_DIVING: 'guyDiving',
  GUY_DIVING_CLIMBING: 'guyDivingClimbing',
  GUY_HAMMERING: 'guyHammering',
  GUY_CLIMBING_UP: 'guyClimbingUp',
  GUY_CLIMBING_DOWN: 'guyClimbingDown',
  GUY_HAMMERING_TOP: 'guyHammeringTop',
  GUY_LAYING_DOWN_HOUSE: 'guyLayingDownHouse',
  GUY_SLEEPING_HOUSE: 'guySleepingHouse',
  GUY_STANDING_UP_HOUSE: 'guyStandingUpHouse',
  GUY_LIGHTNING: 'guyLightning',
  GUY_LOOKING: 'guyLooking',
  GUY_SHOVELING: 'guyShoveling',
  GUY_SAILING: 'guySailing',
  GUY_TANKING: 'guyTanking',
  GUY_SWIMMING: 'guySwimming',
  GUY_DYING: 'guyDying',
  GUY_DYING_BOAT: 'guyDyingBoat',
  GUY_WAITING_BOAT: 'guyWaitingBoat',
  GUY_SLINGING: 'guySlinging',
};

export default spriteTypes;