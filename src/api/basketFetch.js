import axios from "axios";
import { basketDelete, basketItem } from "../reducers/basketSlice";
import { useDispatch } from "react-redux";
import { eventTrigger } from "../reducers/EventSlice";

const getBasketList = async dispatch => {
  try {
    const res = await axios.get("/api/cart");
    const result = res.data;
    console.log("로그인된 사용자 장바구니 불러오자!", result);
    dispatch(basketItem(result));
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const postBasket = async (iitem, dispatch) => {
  try {
    const res = await axios.post(`/api/cart`, {
      iitem: iitem,
      quantity: 1,
    });
    dispatch(eventTrigger({ event: "postBasket" }));
    console.log("postbasket 실행완료", res.data);
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 아이템 결제 올리기(체크같은거 없다 뺸다)
const postBasketPay = async basketData => {
  try {
    const res = await axios.post("/api/payment/order/cart", basketData);
    const result = res.data;
    console.log("장바구니 데이터 결제 포스트 완료!", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};
// 장바구니 목록을 선택하여 삭제
const deleteBasketItemList = async icartArr => {
  let str = "";
  icartArr.forEach(item => {
    let tt = `icart=${item}&`;
    str += tt;
  });
  console.log(str);
  try {
    const res = await axios.delete(`/api/cart?${str}`);
  } catch (err) {
    console.log(err);
  }
};

// 장바구니 목록 삭제
const deleteBasketItem = async icart => {
  try {
    const res = await axios.delete(`/api/cart/${icart}`);
    console.log("삭제요청 성공");
  } catch (err) {
    console.log(err);
  }
};

const postBasketCount = async (iitem, quantity, dispatch) => {
  try {
    const res = await axios.post(`/api/cart`, {
      iitem: iitem,
      quantity: quantity,
    });
    console.log("postbasket 실행완료");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getBasketList,
  postBasket,
  deleteBasketItemList,
  deleteBasketItem,
  postBasketCount,
  postBasketPay,
};
