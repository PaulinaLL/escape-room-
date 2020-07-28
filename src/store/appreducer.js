const initialState = {
  partNumber: 0,
  numberOfParts: 3,
  idCard: {
    collected: false,
    pictureID: "idCard",
  },
  idCard2: {
    collected: false,
    pictureID: "idCard2",
  },
  idCard3: {
    collected: false,
    pictureID: "idCard3",
  },
  key: {
    collected: false,
    pictureID: "key",
  },
  flashLight: {
    collected: false,
    pictureID: "flashLight",
  },
  finger: {
    collected: false,
    pictureID: "finger",
  },
  box: {
    opened: false,
  },
  cellScreen: {
    on: false,
  },
  loaded: false,
  solved: {
    riddle1: false,
    riddle2: false,
    riddle2Voucher: false,
    riddle3: false,
    riddle4: false,
    riddle5: false,
    riddle6: false,
  },
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT":
      return state;
    case "ESCAPE":
      return {
        ...state,
        partNumber: 10,
      };
    case "SWITCH_LEFT":
      return {
        ...state,
        partNumber:
          state.numberOfParts === state.partNumber + 1
            ? 0
            : state.partNumber + 1,
      };
    case "SWITCH_RIGHT":
      console.log(state.numberOfParts);
      return {
        ...state,
        partNumber: state.partNumber - 1 === -1 ? 2 : state.partNumber - 1,
      };
    case "GO_IN_CELLDOOR":
      return {
        ...state,
        partNumber: 3,
      };
    case "TAKE_IDCARD1":
      return {
        ...state,
        idCard: { collected: true, pictureID: "idCard" },
        solved: {
          ...state.solved,
          riddle4: false,
        },
      };

    case "TAKE_IDCARD2":
      return {
        ...state,
        idCard2: { collected: true, pictureID: "idCard2" },
      };
    case "SELECT_BLUE_SLOT":
      return {
        ...state,
        idCard2: { collected: false, pictureID: "idCard2" },
      };
    case "TAKE_IDCARD3":
      return {
        ...state,
        idCard3: { collected: true, pictureID: "idCard3" },
      };
    case "TAKE_KEY":
      return {
        ...state,
        key: { collected: true, pictureID: "key" },
        solved: {
          ...state.solved,
          riddle3: false,
        },
      };
    case "TAKE_FLASHLIGHT":
      return {
        ...state,
        flashLight: {
          collected: true,
          pictureID: "flashLight",
        },
      };
    case "TAKE_FINGER":
      return {
        ...state,
        finger: { collected: true, pictureID: "finger" },
      };
    case "OPEN_EXTRA_DRAWER":
      return {
        ...state,
        finger: { collected: false, pictureID: "finger" },
      };
    case "OPEN_DOOR":
      return {
        ...state,
        key: { collected: false, pictureID: "key" },
      };
    case "OPEN_BOX":
      return {
        ...state,
        idCard: {
          collected: false,
          pictureID: "idCard",
        },
        box: { opened: true },
      };
    case "TURN_ON_CELL_SCREEN":
      return {
        ...state,
        idCard3: {
          collected: false,
          pictureID: "idCard3",
        },
        cellScreen: { on: true },
      };
    case "SOLVED_RIDDLE_1":
      return {
        ...state,
        solved: {
          ...state.solved,
          riddle1: true,
        },
      };
    case "SOLVED_RIDDLE_2":
      return {
        ...state,
        solved: {
          ...state.solved,
          riddle2: true,
          riddle2Voucher: true,
        },
      };
    case "SOLVED_RIDDLE_3":
      return {
        ...state,
        solved: {
          ...state.solved,
          riddle3: true,
        },
      };
    case "SOLVED_RIDDLE_4":
      return {
        ...state,
        solved: {
          ...state.solved,
          riddle4: true,
        },
      };
    case "SOLVED_RIDDLE_5":
      return {
        ...state,
        solved: {
          ...state.solved,
          riddle5: true,
        },
      };
    case "SOLVED_RIDDLE_6":
      return {
        ...state,
        solved: {
          ...state.solved,
          riddle6: true,
        },
      };
    case "USE_VOUCHER2":
      return {
        ...state,
        solved: {
          ...state.solved,
          riddle2Voucher: false,
        },
      };
    case "LOADED":
      return {
        ...state,
        loaded: true,
      };

    default:
      return state;
  }
}

export default appReducer;
