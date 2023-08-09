import axios from "axios";
import { basketItem } from "../reducers/basketSlice";

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

const postBasket = async iitem => {
  try {
    const res = await axios.post(`/api/cart`, {
      iitem: iitem,
      quantity: 1,
    });
    console.log("postbasket 실행완료");
  } catch (error) {
    console.log(error);
  }
};

export { getBasketList, postBasket };
