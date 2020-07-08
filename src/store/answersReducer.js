import data from "./exitGame.json";

const initialState = {
  wantsToPlay: false,
  userName: null,
  userAnswers: [],
  currentRiddleDescription: {
    id: null,
    text:
      "WELCOME DESCRIPTION - GAME INTRODUCTION. Use your JavaScript skills to escape the room, you will have to find and collect objects to use them in write moment and solve 10 riddles in less then 1 hour. Lets get started!",
  },
};

function answersReducer(state = initialState, action) {
  switch (action.type) {
    case "WANTS_TO_PLAY":
      return {
        ...state,
        wantsToPlay: true,
      };
    case "ADD_USER_NAME":
      return {
        ...state,
        userName: action.payload.name,
      };
    case "ADD_USER_ANSWER":
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.payload.answer],
      };
    case "SELECT_PC":
      // console.log("SELECT PC", state.currentRiddleDescription.id);
      return {
        ...state,
        currentRiddleDescription: {
          id: 1,
          text: data.riddleDescription.first.text,
          img: data.riddleDescription.first.img,
        },
      };
    case "SELECT_DRAWER":
      return {
        ...state,
        currentRiddleDescription: {
          id: 2,
          text: data.riddleDescription.second.text,
          img: null,
        },
      };

    default:
      return state;
  }
}

export default answersReducer;
