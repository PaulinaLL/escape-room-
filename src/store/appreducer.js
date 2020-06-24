const initialState = {
    
   assets:{ 
    items: {    
    },
    events:  {
    },
    characters: {
        1: {name: "catrine"}
    }
  },
  inventory: {

  },
  selectedCharacter: {
 
  }
};

function appReducer(state = initialState, action){
    switch (action.type) { 
            case "SELECT":
            return state;
            default: 
            return state;
    } 
}
export default appReducer;