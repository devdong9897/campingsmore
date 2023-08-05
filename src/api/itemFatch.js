import axios from "axios";

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

const getbestitem = async () => {
  try {
    const res = await axios.get("/api/item/bestitem");
    const result = res.data;
    console.log("getbestitem 요청완료");
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

// 아이템 검색결과 가져오기
// const getOrderSearch = async () => {
//   try{
//     const res = await axios.get("")
//   }
// }

const getOrderSearch = async qusearch => {
  try {
    const res = await axios.get(
      `/api/item/search?text=${qusearch}&page=1&row=15&sort=0`,
    );
    const result = res.data;
    console.log("getOrderSearch 요청완료");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 아이템 상세페이지 가져오기
const getOrderDetailPage = async () => {
  try {
    const res = await axios.get("/api/item/detail?iitem=1&page=1&row=5");
    const result = res.data;
    console.log("getOrderDetail 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { getOrderDetailPage, getOrderListSearch, getbestitem, getOrderSearch };
