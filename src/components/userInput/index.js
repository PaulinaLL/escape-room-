import React, { useState, useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";

import RiddleEditor from "./editor";

const getRiddle = (userCTX, { id, addUserAnswer }) => {
  const defaultRiddle = {
    setup: { startCode: "" },
    check: { testFn: () => () => null },
  };

  // This is where the magic happens
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
        testFn: (log, error) => (result) => {
          if (result === `hey ${userCTX.userName}`) {
            log("Yes");
            addUserAnswer(1);
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
  let userAnswer, setUserAnswer;

  const dispatch = useDispatch();
  const { userName, currentRiddleDescription } = useSelector(
    (state) => state.answersReducer
  );

  const addUserAnswer = (riddleNumber) =>
    {dispatch({
      type: "ADD_USER_ANSWER",
      payload: {
        id: currentRiddleDescription.id,
        answer: userAnswer,
      },
    })
  
    switch (riddleNumber){
      case 1:
        dispatch({
          type: "SOLVED_RIDDLE_1"
        }) 
      break;
      default:
    }

  };


  // user context that is passed in to your riddle code
  // if you want to dispatch from within testFn you can
  // make it a prop of userCTX
  const userCTX = { userName };
  const currentRiddle = getRiddle(userCTX, {
    id: currentRiddleDescription.id,
    addUserAnswer,
  });
  const { startCode } = currentRiddle.setup;

  [userAnswer, setUserAnswer] = useState(startCode);

  useEffect(() => {
    // userAnswers needs to persist between render but
    // when we change the riddle we need to reset our answer
    // lucky us we have useEffect:
    // when the startCode changes set userAnswer to new startCode
    setUserAnswer(startCode);
  }, [startCode, setUserAnswer]);

  return (
    <div className="userInput">
      <label htmlFor="userInput">Write your code here:</label>
      <RiddleEditor
        currentRiddle={currentRiddle}
        userCode={userAnswer}
        setUserCode={setUserAnswer}
      />
    </div>
  );
}
