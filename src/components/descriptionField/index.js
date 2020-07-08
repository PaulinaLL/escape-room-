import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

const DescriptionField = () => {
  const { answersReducer } = useSelector((state) => state);

  // console.log("store.getState:", store.getState());

  return (
    <div className="description">
      <p>{answersReducer.currentRiddleDescription.text}</p>
    </div>
  );
};

export default DescriptionField;
