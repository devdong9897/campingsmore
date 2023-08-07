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

export { getBasketList };
