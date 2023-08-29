import { createSlice } from "@reduxjs/toolkit";

const initialState = { basketArr: [] };
const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    basketItem: (state, action) => {
      console.log("장바구니 로드");
      state.basketArr = action.payload;
    },
    basketItemEmpty: (state, action) => {
      console.log("로그아웃 시 장바구니 데이터 제거");
      state.basketArr = action.payload;
    },
    // 장바구니 등록하기
    basketAdd: (state, action) => {
      console.log("장바구니 추가");
      state.basketArr.push(action.payload);
    },
    basketPlus: (state, action) => {
      state.basketArr.splice(action.payload);
      console.log("장바구니 수량 추가");
    },
    basketMinus: (state, action) => {
      state.basketArr.splice(action.payload);
      console.log("장바구니 수량 빼기 성공");
    },
    // 장바구니 목록 선택 삭제하기
    basketDelete: (state, action) => {
      state.basketArr.splice(action.payload);
      console.log("장바구니 항목 한개 삭제");
    },
    // 장바구니 체크된 목록 삭제
    basketCheckDelete: (state,action) => {
      state.basketArr = action.payload;
      console.log("장바구니 체크된 목록 삭제")
    },
    // 장바구니 목록 전체 목록 삭제하기
    basketAllDelete: (state, action) => {
      console.log("장바구니 전체 비우기");
      state.basketArr = [];
    },
  },
});

export default basketSlice;
export const {
  basketAdd,
  basketDelete,
  basketCheckDelete,
  basketAllDelete,
  basketItem,
  basketItemEmpty,
  basketPlus,
  basketMinus,
} = basketSlice.actions;
