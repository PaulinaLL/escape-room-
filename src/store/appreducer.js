// import data from "./exitGame.json";
// import produce from "immer";

// let inventory = {
//   idCard: false,
// };

// let wholeData = Object.assign(data, inventory);

// const appReducer = produce((draft = wholeData, action) => {
//   switch (action.type) {
//     case "SELECT":
//       return draft;

//     case "SWITCH_LEFT":
//       draft.partNumber =
//         draft.numberOfParts === draft.partNumber + 1 ? 0 : draft.partNumber + 1;
//       return draft;

//     case "SWITCH_RIGHT":
//       console.log(draft.numberOfParts);
//       draft.partNumber = draft.partNumber - 1 === -1 ? 2 : draft.partNumber - 1;
//       return draft;

//     case "TAKE_ITEM":
//       draft.inventory.idCard = true;
//       return draft;

//     case "LOADED":
//       draft.loaded = true;
//       break;
//     default:
//       return draft;
//   }
// });

// export default appReducer;

const initialState = {
  partNumber: 0,
  numberOfParts: 3,
  inventory: {
    idCard: false,
  },
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

    case "TAKE_ITEM":
      return {
        ...state,
        inventory: { idCard: true },
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
