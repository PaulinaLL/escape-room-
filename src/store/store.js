import { configureStore } from '@reduxjs/toolkit';
import assetReducer from './appreducer';

export default configureStore({
  reducer: {
    assetReducer
  },
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
