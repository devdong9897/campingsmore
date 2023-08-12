import { createSlice } from "@reduxjs/toolkit";

const initialState = { orderItemArr: [] };
const OrderSlice = createSlice({
  name: "OrderSlice",
  initialState,
  reducers: {
    OrderItemAdd: (state, action) => {
      state.orderItemArr = action.payload;
    },
  },
});

export default OrderSlice;
export const { OrderItemAdd } = OrderSlice.actions;
