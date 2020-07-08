import React, { useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";

export default function UserInput() {
  const [userAnswer, setUserAnswer] = useState();
  const dispatch = useDispatch();
  const { answersReducer } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER_ANSWER",
      payload: {
        answer: userAnswer,
      },
    });
  };

  // const storeState = store.getState();
  console.log("here2", answersReducer.currentRiddleDescription.id);

  const preInput = `function greet(person) {
    if (person == { name: ${answersReducer.userName} }) {
    return "hey " +  ${answersReducer.userName};
    } else {
    return "hey stranger";
    }
    }
    console.log(greet({ name: ${answersReducer.userName} }))`;

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
          value={
            answersReducer?.currentRiddleDescription.id === 1 ? preInput : ""
          }
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <input type="submit" value="Submit" onSubmit={handleSubmit}></input>
      </form>
    </div>
  );
}
