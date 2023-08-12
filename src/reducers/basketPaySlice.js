import { createSlice } from "@reduxjs/toolkit";

const initialState = { basketpayArr: [] };
const BasketPaySlice = createSlice({
  name: "BasketPay",
  initialState,
  reducers: {
    basketpay: (state, action) => {
      state.basketpayArr = action.payload;
    },
  },
});

export default BasketPaySlice;
export const { basketpay } = BasketPaySlice.actions;
