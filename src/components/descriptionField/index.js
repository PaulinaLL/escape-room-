import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import store from "../../store/store";

const DescriptionField = () => {
  const { answersReducer } = useSelector((state) => state);

  const storeState = store.getState();

  return (
    <div className="description">
      {storeState.answersReducer.wantsToPlay &&
      answersReducer.currentRiddleDescription.id === "" ? (
        <h3> Welcome {answersReducer.userName} </h3>
      ) : null}

      <p>
        {storeState.answersReducer.wantsToPlay
          ? answersReducer.currentRiddleDescription.text
          : null}
      </p>
      {/* {storeState.answersReducer.wantsToPlay ? (
        <button className="buttonHint">get a hint</button>
      ) : null} */}
    </div>
  );
};

export default DescriptionField;
