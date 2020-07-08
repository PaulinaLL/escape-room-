import data from "./exitGame.json";

const initialState = {
  userName: null,
  userAnswers: [],
  currentRiddleDescription: {
    id: null,
    text:
      "it seems like the computer is on... check if there is some info to find",
    img: null,
  },
};

function answersReducer(state = initialState, action) {
  switch (action.type) {
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
