import React from "react";
import "./index.scss";
import store from "../../store/store.js";
import { connect } from "react-redux";

const DescriptionField = () => {
  // console.log("store", store);
  // const state = store.getState();
  // console.log("state", state);
  console.log("store.getState:", store.getState());
  return (
    <div className="description">
      <p>description will appear here</p>
    </div>
  );
};

function mapStateToProps(state) {
  // const state = store.getState();
  // console.log("state", state);
  const { description } = state;
  return { assetReducer };
}

export default connect(mapStateToProps)(DescriptionField);
