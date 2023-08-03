import axios from "axios";

// 아이템 카테고리 가져오기
const getOrderListCategory = async () => {
  try {
    const res = await axios.get("/api/item/category");
    const result = res.data;
    console.log("getOrderListItem 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { getOrderListCategory };

// 아이템 검색리스트 가져오기
const getOrderListSearch = async () => {
  try {
    const res = await axios.get("/api/item/search");
    const result = res.data;
    console.log("getOrderListSearch 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { getOrderListSearch };
