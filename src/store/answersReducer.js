import data from "./exitGame.json";

const initialState = {
  wantsToPlay: false,
  userName: null,
  userAnswers: {},
  currentRiddleDescription: {
    id: "",
    text:
      "WELCOME DESCRIPTION - GAME INTRODUCTION. Use your JavaScript skills to escape the room, you will have to find and collect objects to use them in right moment and solve 10 riddles in less then 1 hour. Lets get started!",
  },
};

if (process.env.NODE_ENV === "development") {
  //TODO: Remove
  console.error("OW: Convenience State in place");
  Object.assign(initialState, {
    userName: "Oliver",
    wantsToPlay: true,
    currentRiddleDescription: {
      ...initialState.currentRiddleDescription,
      id: 1,
    },
  });
}

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
        userAnswers: {
          ...state.userAnswers,
          [action.payload.id]: action.payload.answer,
        },
      };
    case "SELECT_PC":
      // console.log("SELECT PC", state.currentRiddleDescription.id);
      return {
        ...state,
        currentRiddleDescription: {
          id: 1,
          text: data.riddleDescription[1].text,
        },
      };
    case "SELECT_SWITCHER":
      return {
        ...state,
        currentRiddleDescription: {
          id: 2,
          text: data.riddleDescription[2].text,
        },
      };
    case "SELECT_DRAWER":
      return {
        ...state,
        currentRiddleDescription: {
          id: 3,
          text: data.riddleDescription[3].text,
        },
      };
    case "OPEN_DOOR":
      return {
        ...state,
        currentRiddleDescription: {
          id: 8,
          text: data.riddleDescription.third.text,
          img: null,
        },
      };
    case "NO_KEY":
      return {
        ...state,
        currentRiddleDescription: {
          id: 10,
          text: data.riddleDescription.fourth.text,
          img: null,
        },
      };

    default:
      return state;
  }
}

export default answersReducer;
