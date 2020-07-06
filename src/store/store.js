import { configureStore } from "@reduxjs/toolkit";
import assetReducer from "./appreducer";
import newReducer from "./newReducer";

export default configureStore(
  {
    reducer: {
      assetReducer,
      newReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
