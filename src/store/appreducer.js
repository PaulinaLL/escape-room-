import data from "./exitGame.json";
import produce from "immer";

let inventory = {
  idCard: {collected: false, pictureID: "idCard"},
  key: {collected: false, pictureID: "key"}
};  

let wholeData = Object.assign(data,inventory);

console.log(wholeData);

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
