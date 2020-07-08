import React, { useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import store from "../../store/store";

export default function UserInput() {
  const [userAnswer, setUserAnswer] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER_ANSWER",
      payload: {
        answer: userAnswer,
      },
    });
  };

  const storeState = store.getState();
  console.log("here2", storeState.answersReducer.currentRiddleDescription);

  const preInput = `function greet(person) {
    if (person == { name: ${storeState.answersReducer.userName} }) {
    return "hey " +  ${storeState.answersReducer.userName};
    } else {
    return "hey stranger";
    }
    }
    console.log(greet({ name: ${storeState.answersReducer.userName} }))`;

  return (
    <div className="userInput">
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="userInput">Write your code here:</label>
        <textarea
          type="text"
          id="userInput"
          name="userInput"
          rows="15"
          cols="70"
          // value={preInput}
          dafaultValue={
            storeState.answerReducer.currentRiddleDescription ? preInput : null
          }
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <input type="submit" value="Submit" onSubmit={handleSubmit}></input>
      </form>
    </div>
  );
}
