import data from "./exitGame.json";
import produce from "immer";

let inventory = {
  idCard: {collected: false, pictureID: "idCard"},
  key: {collected: false, pictureID: "key"},
  loaded: false
};  

let wholeData = Object.assign(data,inventory);

// const appReducer = (state = wholeData, action) => {
//   let partNumber = 0;    
//   switch (action.type) {
//     case "SELECT":
//       return state;
//     case "SWITCH_LEFT":
//       console.log(state); 
//   partNumber = 
//         state.numberOfParts === state.partNumber +1 ? 0 : state.partNumber +1;
//         return {...state,
//                 partNumber};
//     case "SWITCH_RIGHT": 
//       partNumber = state.partNumber - 1 === -1 ? 2 : state.partNumber - 1;
//       return {...state,
//               partNumber};
//     case "TAKE_IDCARD1":
//       console.log(state);
//       return {...state,
//             idCard: {collected : true,
//                   pictureID: "idCard"},
//           };
//     case "TAKE_KEY":
//       return {...state,
//         key: {collected : true,
//               pictureID: "keys"},
//       };
//     case "LOADED":
//       return {...state,
//        loaded: true,
//       };
//     default:
//       return state;
//   }
// };

// export default appReducer;

const appReducer = produce((draft = wholeData, action) => {
  switch (action.type) {
    case "SELECT":
      return draft;
    case "SWITCH_LEFT": 
      draft.partNumber =
        draft.numberOfParts === draft.partNumber + 1 ? 0 : draft.partNumber + 1;
      return draft;
    case "SWITCH_RIGHT": 
      draft.partNumber = draft.partNumber - 1 === -1 ? 2 : draft.partNumber - 1;
      return draft;
    case "TAKE_IDCARD1":
      draft.idCard.collected = true;
      return draft;
    case "TAKE_KEY":
      draft.key.collected = true; 
    return draft;
    case "LOADED":
      draft.loaded = true;
      break;     
    default:
      return draft;
  }
});

export default appReducer;
