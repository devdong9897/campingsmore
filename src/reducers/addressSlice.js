import { createSlice } from "@reduxjs/toolkit";

const initialState = { AddressListArr: [] };
const AddressListSlice = createSlice({
  name: "AddressListSlice",
  initialState,
  reducers: {
    AddressListSet: (state, action) => {
      state.AddressListArr = action.payload;
    },
  },
});

export default AddressListSlice;
export const { AddressListSet } = AddressListSlice.actions;
