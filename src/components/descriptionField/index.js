import React from "react";
import "./index.scss";
import store from "../../store/store.js";
import { connect } from "react-redux";

 const DescriptionField = () => {
  console.log("store", store);
  const state = store.getState();
  console.log("state", state);

  return (
    <div className="description">
      <p>description will appear here</p>
    </div>
  );
}

export connect()(DescriptionField)