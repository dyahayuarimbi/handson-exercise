import { configureStore } from "@reduxjs/toolkit";
import QueryReducer from "./slice/query-slice";
// import queryReducer from "./query/reducer";

export default configureStore({
  reducer: {
    query: QueryReducer
  }
  // devTools: true
});