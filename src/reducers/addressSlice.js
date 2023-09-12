import { createSlice } from "@reduxjs/toolkit";

const initialState = { addressListArr: [] };
const AddressListSlice = createSlice({
  name: "AddressListSlice",
  initialState,
  reducers: {
    addressListSet: (state, action) => {
      state.addressListArr = action.playload;
    },
  },
});

export default AddressListSlice;
export const { addressListSet } = AddressListSlice.actions;
