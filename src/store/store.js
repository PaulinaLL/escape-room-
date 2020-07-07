import { configureStore } from "@reduxjs/toolkit";
import assetReducer from "./appreducer";
import answersReducer from "./answersReducer";

export default configureStore(
  {
    reducer: {
      assetReducer,
      answersReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
