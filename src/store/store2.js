import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../reducers/basketSlice";

export default configureStore({
  reducer: {
    basket: basketSlice.reducer,
  },
});
