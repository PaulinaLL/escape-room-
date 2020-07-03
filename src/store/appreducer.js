import data from "./exitGame.json";
import produce from "immer";

const appReducer = produce((draft = data, action) => {
  switch (action.type) {
    case "SELECT":
      return draft;
    case "SWITCHLEFT":
      draft.partNumber =
        draft.numberOfParts === draft.partNumber + 1 ? 0 : draft.partNumber + 1;
      return draft;
    case "SWITCHRIGHT":
      console.log(draft.numberOfParts);
      draft.partNumber = draft.partNumber - 1 === -1 ? 1 : draft.partNumber - 1;
      return draft;
    case "SELECTPC":
      draft.riddleDescription = draft.riddleDescription.first;
      return draft;
    case "SELECTDRAWER":
      // console.log(draft.riddleDescription);
      draft.riddleDescription = draft.riddleDescription.second;
      return draft;

    default:
      return draft;
  }
});

export default appReducer;
