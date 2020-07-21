import React, { useState, useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import getRiddle from "../../helper/riddles.js";
import RiddleEditor from "./editor";

export default function UserInput() {
  let userAnswer, setUserAnswer;

  const dispatch = useDispatch();
  const { userName, currentRiddleDescription } = useSelector(
    (state) => state.answersReducer
  );

  const addUserAnswer = (riddleNumber) => {
    dispatch({
      type: "ADD_USER_ANSWER",
      payload: {
        id: currentRiddleDescription.id,
        answer: userAnswer,
      },
    });

    // dispatch({
    //   type: `SOLVED_RIDDLE_${currentRiddleDescription.id}`,
    // });

    switch (riddleNumber) {
      case 1:
        dispatch({
          type: "SOLVED_RIDDLE_1",
        });
        break;
      case 2:
        dispatch({
          type: "SOLVED_RIDDLE_2",
        });
        break;
      case 3:
        dispatch({
          type: "SOLVED_RIDDLE_3",
        });
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
