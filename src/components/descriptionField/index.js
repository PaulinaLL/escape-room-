import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

const DescriptionField = () => {
  const { currentRiddleDescription, userName, wantsToPlay } = useSelector(
    ({ answersReducer }) => ({
      currentRiddleDescription: answersReducer.currentRiddleDescription,
      userName: answersReducer.userName,
      wantsToPlay: answersReducer.wantsToPlay,
    })
  );
  console.log(currentRiddleDescription, userName, wantsToPlay);
  return (
    <div className="description">
      {wantsToPlay && currentRiddleDescription.id === "" ? (
        <h3> Welcome {userName} </h3>
      ) : null}

      <p>{wantsToPlay ? currentRiddleDescription.text : null}</p>
      {/* {storeState.answersReducer.wantsToPlay ? (
        <button className="buttonHint">get a hint</button>
      ) : null} */}
    </div>
  );
};

export default DescriptionField;
