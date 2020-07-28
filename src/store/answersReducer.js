import data from "./exitGame.json";

const initialState = {
  wantsToPlay: false,
  userName: null,
  userAnswers: {},
  currentRiddleDescription: {
    id: "",
    text:
      "WELCOME You just woke up in a dark place... Use your JavaScript skills to escape this room, you will have to find and collect objects to use them in right moment and solve 6 code challenges. Good luck!",
  },
};

// if (process.env.NODE_ENV === "development") {
//   //TODO: Remove
//   console.error("OW: Convenience State in place");
//   Object.assign(initialState, {
//     userName: "Oliver",
//     wantsToPlay: true,
//     currentRiddleDescription: {
//       ...initialState.currentRiddleDescription,
//       id: 1,
//     },
//   });
// }

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
    case "SELECT_ORANGE_SLOT":
      return {
        ...state,
        currentRiddleDescription: {
          id: 4,
          text: data.riddleDescription[4].text,
        },
      };
    case "SELECT_SKELETONS_PC":
      return {
        ...state,
        currentRiddleDescription: {
          id: 5,
          text: data.riddleDescription[5].text,
        },
      };
    case "SELECT_ESCAPE_SCREEN":
      return {
        ...state,
        currentRiddleDescription: {
          id: 6,
          text: data.riddleDescription[6].text,
        },
      };

    case "OPEN_DOOR":
      return {
        ...state,
        currentRiddleDescription: {
          id: 8,
          text: data.riddleDescription[8].text,
          img: null,
        },
      };
    case "NO_KEY":
      return {
        ...state,
        currentRiddleDescription: {
          id: 10,
          text: data.riddleDescription[10].text,
          img: null,
        },
      };
    case "NO_ESCAPE":
      return {
        ...state,
        currentRiddleDescription: {
          id: 101,
          text: data.Descripton["escapeDoorClosed"].text,
          img: null,
        },
      };
    case "CODE":
      return {
        ...state,
        currentRiddleDescription: {
          id: 101,
          text: data.Descripton["needCode"].text,
          img: null,
        },
      };

    default:
      return state;
  }
}

export default answersReducer;
