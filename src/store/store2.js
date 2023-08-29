import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../reducers/basketSlice";
import orderItemSlice from "../reducers/orderItemSlice";
import UserSlice from "../reducers/userSlice";
import KakaoMapSlice from "../reducers/KakaoMapSlice";
import BasketPaySlice from "../reducers/basketPaySlice";
import KakaoDataSlice from "../reducers/KakaoDataSlice";

export default configureStore({
  reducer: {
    basket: basketSlice.reducer,
    user: UserSlice.reducer,
    order: orderItemSlice.reducer,
    KakaoMap: KakaoMapSlice.reducer,
    KakaoData: KakaoDataSlice.reducer,
    basketpay: BasketPaySlice.reducer,
  },
});
