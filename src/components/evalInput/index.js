import React from "react";
import store from "../../store/store";
import { useSelector } from "react-redux";
import data from "../../store/exitGame.json";

export default function EvalInput() {
  console.log(store);
  const { userAnswers, currentRiddleDescription } = useSelector(
    (state) => state.answersReducer
  );
  console.log(
    typeof Object.values(userAnswers[currentRiddleDescription.id]).toString()
  );
  let answer = Object.values(userAnswers[currentRiddleDescription.id]);

  console.log(answer[0]);
  console.log(typeof answer[0]);
  console.log(answer);
  console.log(typeof answer);

  const firstIndexOfOpenBracets = answer[0].indexOf("{");
  const lastIndexOfOpenBracets = answer[0].lastIndexOf("}");
  const answerBody = answer[0].slice(
    firstIndexOfOpenBracets + 1,
    lastIndexOfOpenBracets - 1
  );

  const userFunc = () => {
    answerBody;
  };

  console.log(userFunc());

  // console.log(eval(answer));
  // const evaluation = new Function("a", "b", "return a === b");

  return Object.values(userAnswers[currentRiddleDescription.id]).toString() ===
    data.riddleDescription[currentRiddleDescription.id].correctAnswer ? (
    <p>success</p>
  ) : (
    <p>failure</p>
  );

  // return evaluation(
  //   Object.values(userAnswers[currentRiddleDescription.id]).toString(),
  //   data.riddleDescription[currentRiddleDescription.id].correctAnswer
  // ) ? (
  //   <p>success</p>
  // ) : (
  //   <p>failure</p>
  // );
}
