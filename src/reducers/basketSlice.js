import { createSlice } from "@reduxjs/toolkit";

const initialState = { basketArr: [] };
const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    // 장바구니 등록하기
    basketAdd: (state, action) => {
      console.log("장바구니 추가");
      state.basketArr.push(action.payload);
    },
    // 장바구니 목록 선택 삭제하기
    basketDelete: (state, action) => {
      console.log("장바구니 항목 한개 삭제");
    },
    // 장바구니 목록 전체 목록 삭제하기
    basketAllDelete: (state, action) => {
      console.log("장바구니 전체 비우기");
      state.basketArr = [];
    },
  },
});

export default basketSlice;
export const { basketAdd, basketDelete, basketAllDelete } = basketSlice.actions;
