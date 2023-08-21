import { createSlice } from "@reduxjs/toolkit";

const initialState = { kakaoMapData: [] };
const KakaoMapSlice = createSlice({
  name: "KakaoMapSlice",
  initialState,
  reducers: {
    kakaoMapDataAdd: (state, action) => {
      state.kakaoMapData = action.payload;
    },
  },
});

export default KakaoMapSlice;
export const { kakaoMapDataAdd } = KakaoMapSlice.actions;
