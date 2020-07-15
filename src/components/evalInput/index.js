import React from "react";
import store from "../../store/store";
import { useSelector } from "react-redux";
import data from "../../store/exitGame.json";

export default function EvalInput() {
  console.log(store);
  const { userAnswers, currentRiddleDescription, userName } = useSelector(
    (state) => state.answersReducer
  );
  console.log(typeof userName);
  console.log(
    typeof Object.values(userAnswers[currentRiddleDescription.id]).toString()
  );
  let answer = Object.values(userAnswers[currentRiddleDescription.id]);

  const rightFunction = function greet(person) {
    if (person.name === userName) {
      return "hey " + userName;
    } else {
      return "hey stranger";
    }
  };
  console.log("right answer", rightFunction({ name: userName }));

  // console.log(answer[0]);
  // console.log(typeof answer[0]);
  // console.log(answer);
  // console.log(typeof answer);

  const firstIndexOfOpenBracets = answer[0].indexOf("{");
  const lastIndexOfOpenBracets = answer[0].lastIndexOf("}");
  const answerBody = answer[0].slice(
    firstIndexOfOpenBracets + 1,
    lastIndexOfOpenBracets - 1
  );

  // const functionFromUser = Object.values(
  //   userAnswers[currentRiddleDescription.id]
  // ).toString();

  const userFunc = new Function(userName, answerBody);
  console.log(userFunc({ name: userName }));
  // const evaluation = new Function("a", "b", "return a === b");

  // userNewFunction(userName);
  // console.log("user function:", functionFromUser);
  // let comparision = new Function("a", "b", "return a === b");

  // console.log("HERE", comparision(rightFunction, functionFromUser));

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
