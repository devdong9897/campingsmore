import { createSlice } from "@reduxjs/toolkit";

const initialState = { UserProFileArr: [] };
const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    UserAdd: (state, action) => {
      state.UserProFileArr = action.payload;
    },
    UserLogout: (state, action) => {
      state.UserProFileArr = action.payload;
    },
  },
});

export default UserSlice;
export const { UserAdd, UserLogout } = UserSlice.actions;
