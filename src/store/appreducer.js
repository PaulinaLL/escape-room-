import data from "./exitGame.json";
import produce from "immer";

let inventory = {
  idCard: false
};  

let wholeData = Object.assign(data,inventory);

const appReducer = produce((draft = wholeData, action) => {
  switch (action.type) {
    case "SELECT":
      return draft;

    case "SWITCH_LEFT": 
      draft.partNumber =
        draft.numberOfParts === draft.partNumber + 1 ? 0 : draft.partNumber + 1;
      return draft;

    case "SWITCH_RIGHT": 
      console.log(draft.numberOfParts);
      draft.partNumber = draft.partNumber - 1 === -1 ? 2 : draft.partNumber - 1;
      return draft;

    case "SELECT_PC":
      draft.currentRiddle.text = draft.riddleDescription.first.text;
      return draft;

    case "SELECT_DRAWER":
      // console.log(draft.riddleDescription);
      draft.currentRiddle.text = draft.riddleDescription.second.text;
      return draft;
    case "TAKE_ITEM":
      draft.inventory.idCard = true;
      return draft;
    case "LOADED":
      draft.loaded = true;
      break;
    default:
      return draft;
  }
});

export default appReducer;
