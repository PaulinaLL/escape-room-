import data from "./exitGame.json";

const initialState = data;

function appReducer(state = initialState, action){
    switch (action.type) { 
            case "SELECT":

            
            return state;
            default: 
            return state;
    } 
}
export default appReducer;