import grounds from './grounds.js';
import tileTypes from './tileTypes.js';
import images from '../../images/images.js';

const width = 54;
const height = 44;

const defaultTile = {
  image: images.TILES,
  width,
  height
};

const tileSprites = {
  [tileTypes.FLAT]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 0,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 0,
          y: 0
        },
        [grounds.SEA]: {
          x: 0,
          y: 3 * height
        },
        [grounds.BEACH]: {
          x: width,
          y: 3 * height
        },
        [grounds.QUICKSAND]: {
          x: 2 * width,
          y: 3 * height
        },
      },
      grid: {
        x: 0,
        y: height
      },
      route: {
        x: 0,
        y: 2 * height
      }
    }
  },
  [tileTypes.SLOPE_NORTH]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: width,
          y: 0
        }
      },
      grid: {
        x: width,
        y: height
      },
      route: {
        x: width,
        y: 2 * height
      }
    }
  },
  [tileTypes.SLOPE_WEST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 2 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 2 * width,
          y: 0
        }
      },
      grid: {
        x: 2 * width,
        y: height
      },
      route: {
        x: 2 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.SLOPE_SOUTH]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 3 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 3 * width,
          y: 0
        }
      },
      grid: {
        x: 3 * width,
        y: height
      },
      route: {
        x: 3 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.SLOPE_EAST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 4 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 4 * width,
          y: 0
        }
      },
      grid: {
        x: 4 * width,
        y: height
      },
      route: {
        x: 4 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.RIDGE_NORTH_EAST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 5 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 5 * width,
          y: 0
        }
      },
      grid: {
        x: 5 * width,
        y: height
      },
      route: {
        x: 5 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.RIDGE_NORTH_WEST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 6 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 6 * width,
          y: 0
        }
      },
      grid: {
        x: 6 * width,
        y: height
      },
      route: {
        x: 6 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.RIDGE_SOUTH_WEST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 7 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 7 * width,
          y: 0
        }
      },
      grid: {
        x: 7 * width,
        y: height
      },
      route: {
        x: 7 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.RIDGE_SOUTH_EAST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 8 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 8 * width,
          y: 0
        }
      },
      grid: {
        x: 8 * width,
        y: height
      },
      route: {
        x: 8 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.CANYON_SOUTH_EAST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 9 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 9 * width,
          y: 0
        }
      },
      grid: {
        x: 9 * width,
        y: height
      },
      route: {
        x: 9 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.CANYON_NORTH_EAST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 10 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 10 * width,
          y: 0
        }
      },
      grid: {
        x: 10 * width,
        y: height
      },
      route: {
        x: 10 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.CANYON_NORTH_WEST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 11 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 11 * width,
          y: 0
        }
      },
      grid: {
        x: 11 * width,
        y: height
      },
      route: {
        x: 11 * width,
        y: 2 * height
      }
    }
  },
  [tileTypes.CANYON_SOUTH_WEST]: {
    ...defaultTile,
    variants: {
      grounds: {
        [grounds.GRASS]: {
          x: 12 * width,
          y: 4 * height
        },
        [grounds.WETLAND]: {
          x: 12 * width,
          y: 0
        }
      },
      grid: {
        x: 12 * width,
        y: height
      },
      route: {
        x: 12 * width,
        y: 2 * height
      }
    }
  },
};

export default tileSprites;