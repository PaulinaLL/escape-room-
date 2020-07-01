import data from "./exitGame.json";
import produce from "immer"


// const initialState = data;

// function appReducer(state = initialState, action){
//     switch (action.type) { 
//             case "SELECT":

//             return state;
//             case "SwitchRoom":

//             return state;
//             default: 
//             return state;
//     } 
// }

const cart = {
  "products": {},
  "sum": 0,
  "price" : 0,
}

const appReducer = produce((draft = data, action) =>{
  switch (action.type) { 
          case "SELECT":
          return draft;
          case "SwitchRoom":

          draft.partNumber = draft.partNumber +1;
          return draft;
          default: 
          return draft;
  } 
})



export default appReducer;