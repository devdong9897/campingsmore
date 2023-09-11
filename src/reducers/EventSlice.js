import { createSlice } from "@reduxjs/toolkit";

const initialState = { eventObject: {} };
const eventSlice = createSlice({
  name: "eventSlice",
  initialState,
  reducers: {
    eventTrigger: (state, action) => {
      console.log("실행이벤트 트리거");
      state.eventObject = action.payload;
    },
  },
});

export default eventSlice;
export const { eventTrigger } = eventSlice.actions;
