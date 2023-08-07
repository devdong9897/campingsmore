import axios from "axios";

// 장바구니 목록보기
const getBasketList = async () => {
  try {
    const res = await axios.get("/api/cart/1");
    const result = res.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { getBasketList };
