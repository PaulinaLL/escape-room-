const initialState = {
  partNumber: 0,
  numberOfParts: 3,
  idCard: {
    collected: false,
    pictureID: "idCard",
  },
  key: {
    collected: false,
    pictureID: "key",
  },
  flashLight: {
    collected: false,
    pictureID: "idCard"
  },
  loaded: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "SELECT":
      return state;
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

    case "TAKE_IDCARD1":
      return {
        ...state,
        idCard: { collected: true,
                  pictureID: "idCard"
        },
      };

    case "TAKE_KEY":
      return {
        ...state,
        key: { collected: true,
               pictureID: "key"
        },
      };
    case "TAKE_FLASHLIGHT":
      return{
        ...state,
        flashLight: {
          collected: true,
          pictureID: "idCard"
        }
      }
      case "OPEN_DOOR":
      return {
        ...state,
        key: { collected: false,
               pictureID: "key"
        },
      };
      case "GO_IN_CELLDOOR":
        return {
          ...state,
          partNumber: 3
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
