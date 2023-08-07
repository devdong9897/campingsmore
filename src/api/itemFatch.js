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

// 아이템 검색리스트 get
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

export { getOrderDetailPage, getOrderListSearch, getbestitem ,  };
