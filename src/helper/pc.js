// displayAlert func

// export function displayAlert() {
//   alert("Hello stranger!");
// }

import store from "../store/store";

export function pcRiddleDisplay() {
  const storeState = store.getState();

  function greet(person) {
    // if (person.name === storeState.answersReducer.userName)
    if (person === { name: storeState.answersReducer.userName }) {
      return "hey" + storeState.answersReducer.userName;
    } else {
      return "hey stranger";
    }
  }

  console.log(greet({ name: storeState.answersReducer.userName }));

  // console.log(storeState.answersReducer.userName);

  // console.log("pc riddle", storeState);
}
