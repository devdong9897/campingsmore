import { createSlice } from "@reduxjs/toolkit";

const initialState = { kakaoDataArr: [] };
const KakaoDataSlice = createSlice({
  name: "KakaoDataSlice",
  initialState,
  reducers: {
    KakaoDataAdd: (state, action) => {
      state.kakaoDataArr = action.payload;
    },
  },
});

export default KakaoDataSlice;
export const { KakaoDataAdd } = KakaoDataSlice.actions;
