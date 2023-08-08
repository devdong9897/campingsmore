import axios from "axios";

const getBasketList = async () => {
  try {
    const res = await axios.get("/api/cart");
    const result = res.data;
    console.log(result);
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
