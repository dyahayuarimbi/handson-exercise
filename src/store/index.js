import { configureStore } from "@reduxjs/toolkit";

import queryReducer from "./queryReducer";

export default configureStore({
  reducer: {
    query: queryReducer
    // results:resultreducer
  }
  // devTools: true
});