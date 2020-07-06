const initialState = {
  userAnswers: [],
};

function newReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER_ANSWER":
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.payload.answer],
      };
    default:
      return state;
  }
}
//   case "GETS_CURRENT_RIDDLE_DESCRIPTION":
//     return draft;

export default newReducer;
