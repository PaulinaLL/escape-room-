import React from "react";
import store from "../../store/store";
import { useSelector } from "react-redux";
import data from "../../store/exitGame.json";

export default function EvalInput() {
  console.log(store);
  const { userAnswers, currentRiddleDescription } = useSelector(
    (state) => state.answersReducer
  );
  // console.log(
  //   Object.values(userAnswers[currentRiddleDescription.id]).toString()
  // );

  // const evaluation = new Function()

  return Object.values(userAnswers[currentRiddleDescription.id]).toString() ===
    data.riddleDescription[currentRiddleDescription.id].correctAnswer ? (
    <p>success</p>
  ) : (
    <p>failure</p>
  );
}

// new Function('a', 'b', 'return a + b'); // basic syntax
// new Function('a,b', 'return a + b'); // comma-separated
// new Function('a , b', 'return a + b'); // comma-separated with spaces
