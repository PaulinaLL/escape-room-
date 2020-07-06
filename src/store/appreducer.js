import data from "./exitGame.json";
import produce from "immer"

const appReducer = produce((draft = data, action) =>{
  switch (action.type) { 
          case "SELECT":
          return draft;
          case "SWITCHLEFT":
          draft.partNumber = draft.numberOfParts === draft.partNumber + 1? 0: draft.partNumber + 1;
          return draft;
          case "SWITCHRIGHT":
          draft.partNumber = draft.partNumber - 1 === -1 ? 2: draft.partNumber - 1;
          return draft;
          case "LOADED":
            draft.loaded = true;
            break;
          default: 
          return draft;
  } 
})



export default appReducer;