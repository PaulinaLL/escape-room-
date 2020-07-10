import React, { useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";

const preInputSetup = (userName) => (id) => {
  const inputs = {
    1: `function greet(person) {
    if (person == { name: ${userName} }) {
    return "hey " +  ${userName};
    } else {
    return "hey stranger";
    }
    }
    console.log(greet({ name: ${userName} }))`,
    2: `test for the second function`,
  };

  return inputs[id] || null;
};

export default function UserInput() {
  const { userName, currentRiddleDescription } = useSelector(
    (state) => state.answersReducer
  );

  const preInputs = preInputSetup(userName);

  const [userAnswer, setUserAnswer] = useState({});

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER_ANSWER",
      payload: {
        id: currentRiddleDescription.id,
        answer: userAnswer,
      },
    });
    // setUserAnswer({ [currentRiddleDescription.id]: "" });
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
          value={
            userAnswer[currentRiddleDescription.id] ||
            preInputs(currentRiddleDescription.id)
          }
          onChange={(e) =>
            setUserAnswer({ [currentRiddleDescription.id]: e.target.value })
          }
        />
        <input type="submit" value="Submit" onSubmit={handleSubmit}></input>
      </form>
    </div>
  );
}
