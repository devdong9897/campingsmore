import { createSlice } from "@reduxjs/toolkit";

const initialState = { basketpayArr: [] };
const BasketPaySlice = createSlice({
  name: "BasketPaySlice",
  initialState,
  reducers: {
    basketpayData: (state, action) => {
      state.basketpayArr = action.payload;
    },
  },
});

export default BasketPaySlice;
export const { basketpayData } = BasketPaySlice.actions;
