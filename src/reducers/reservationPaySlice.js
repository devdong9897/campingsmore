import { createSlice } from "@reduxjs/toolkit";

const initialState = { reservationArr: [] };
const ReservationSlice = createSlice({
  name: "ReservationSlice",
  initialState,
  reducers: {
    ReserAdd: (state, action) => {
      state.reservationArr = action.payload;
    },
  },
});

export default ReservationSlice;
export const { ReserAdd } = ReservationSlice.actions;
