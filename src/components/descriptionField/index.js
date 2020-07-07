import React from "react";
import "./index.scss";
// import store from "../../store/store.js";
// import { connect } from "react-redux";
import { useSelector } from "react-redux";

const DescriptionField = () => {
  const { assetReducer } = useSelector((state) => state);

  // console.log("store.getState:", store.getState());

  return (
    <div className="description">
      <p>{assetReducer.currentRiddle.text}</p>
    </div>
  );
};

// function mapStateToProps(state) {
//   const { description } = state;
//   console.log(store.getState())
//   return {};
// }
// export default connect(mapStateToProps)(DescriptionField)

export default DescriptionField;
