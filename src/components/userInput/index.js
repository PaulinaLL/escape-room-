import React, { useState, useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import EvalInput from "../evalInput";

import RiddleEditor from "./editor";

const riddles = (userCTX) => (id) => {
  const defaultRiddle = { setup: { startCode: "" }, check: {} };
  const allRiddle = {
    "1": {
      setup: {
        arg: { name: `${userCTX.userName}` },
        fnName: "greet",
        startCode: `
function greet(person) {
  if (person.name == { name: "${userCTX.userName}" } ) {
    return "hey ${userCTX.userName}";
  } else {
    return "hey stranger";
  }
}    
      `,
      },
      check: {
        testFn: (log, error) =>
          function (result) {
            if (result === `hey ${userCTX.userName}`) {
              log("Yes");
            } else {
              error("No");
            }
          },
      },
    },
  };

  return allRiddle[id] || defaultRiddle;
};

export default function UserInput() {
  const dispatch = useDispatch();
  const { userName, currentRiddleDescription } = useSelector(
    (state) => state.answersReducer
  );

  // user context that is passed in to your riddle code
  // if you want to dispatch from within testFn you can
  // make it a prop of userCTX
  const userCTX = { userName };
  const riddleWithContext = riddles(userCTX);
  const currentRiddle = riddleWithContext(currentRiddleDescription.id);

  const [userAnswer, setUserAnswer] = useState(currentRiddle.setup.startCode);

  useEffect(() => {
    // userAnswers needs to persist between render but
    // when we change the riddle we need to reset our answer
    // lucky us we have useEffect:
    // when the startCode changes set userAnswer to new startCode
    setUserAnswer(currentRiddle.setup.startCode);
  }, [currentRiddle.setup.startCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER_ANSWER",
      payload: {
        id: currentRiddleDescription.id,
        answer: userAnswer,
      },
    });
  };

  return (
    <div className="userInput">
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="userInput">Write your code here:</label>
        <RiddleEditor
          currentRiddle={currentRiddle}
          userCode={userAnswer}
          setUserCode={setUserAnswer}
        />
        {/* <textarea
          type="text"
          id="userInput"
          name="userInput"
          rows="15"
          cols="70"
          value={
            userAnswer[currentRiddleDescription.id] ||
            preInputs(currentRiddleDescription.id)
          }
          onChange={handleOnChange}
        />
          defaultValue={preInputs(currentRiddleDescription.id)}
          value={userAnswer[currentRiddleDescription.id]}
          onChange={(e) =>
            setUserAnswer({ [currentRiddleDescription.id]: e.target.value })
          }
        /> */}
        <input type="submit" value="Submit" onSubmit={handleSubmit}></input>
      </form>
    </div>
  );
}
