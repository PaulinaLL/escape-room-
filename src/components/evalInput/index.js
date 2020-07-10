import React from "react";
import store from "../../store/store";
import { useSelector } from "react-redux";

export default function EvalInput() {
  console.log(store);
  const { userAnswers, currentRiddleDescription } = useSelector(
    (state) => state.answersReducer
  );
  console.log(
    Object.values(userAnswers[currentRiddleDescription.id]).toString()
  );

  return Object.values(userAnswers[currentRiddleDescription.id]).toString() ===
    "5" ? (
    <p>success</p>
  ) : (
    <p>failure</p>
  );
}
