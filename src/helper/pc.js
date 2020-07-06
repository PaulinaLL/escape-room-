// displayAlert func

// export function displayAlert() {
//   alert("Hello stranger!");
// }

import store from "../store/store";

const testVar = store.getState();

export function pcRiddleDisplay() {
  console.log(testVar);
}
