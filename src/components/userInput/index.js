import React, { useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";

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

    // setUserAnswer("");
    //save  data in redux-store
  };

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
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <input type="submit" value="Submit" onSubmit={handleSubmit}></input>
      </form>
    </div>
  );
}
