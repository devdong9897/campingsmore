import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../reducers/basketSlice";
import UserSlice from "../reducers/userSlice";

export default configureStore({
  reducer: {
    basket: basketSlice.reducer,
    user: UserSlice.reducer,
  },
});
