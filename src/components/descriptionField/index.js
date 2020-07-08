import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import store from "../../store/store";

const DescriptionField = () => {
  const { answersReducer } = useSelector((state) => state);

  const storeState = store.getState();

  return (
    <div className="description">
      <p>
        {storeState.answersReducer.wantsToPlay
          ? answersReducer.currentRiddleDescription.text
          : null}
      </p>
    </div>
  );
};

export default DescriptionField;
