import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../reducers/basketSlice";
import UserSlice from "../reducers/userSlice";
import BasketPaySlice from "../reducers/basketPaySlice";

export default configureStore({
  reducer: {
    basket: basketSlice.reducer,
    user: UserSlice.reducer,
    basketPay: BasketPaySlice.reducer,
  },
});
