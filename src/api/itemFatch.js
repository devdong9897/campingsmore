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

// 처음들어갔을때 나오는 것
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

// 아이템 검색리스트 get
const getDefaultOrderList = async () => {
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

const getOrderDetailPage = async iitem => {
  try {
    const res = await axios.get(`/api/item/detail/${iitem}?page=1&row=5`);
    const result = res.data;
    console.log("getOrderDetail 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getOrderListPage = async (index, cataID) => {
  try {
    const res = await axios.get(
      `/api/item/search?cate=${cataID}&page=${index}&row=15&sort=0`,
    );
    const result = res.data;
    console.log("getOrderListPage 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 검색할떄 나오는 엑시오스
const getOrderSearch = async searchText => {
  try {
    const res = await axios.get(`/api/item/search?text=${searchText}`);
    const result = res.data;
    console.log("getOrderSearch요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getOrderCateSearch = async cateID => {
  try {
    const res = await axios.get(
      `/api/item/search?cate=${cateID}&page=1&row=15&sort=0`,
    );
    const result = res.data;
    console.log("getOrderCateSearch 요쳥완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export {
  getOrderSearch,
  getOrderListCategory,
  getDefaultOrderList,
  getOrderCateSearch,
  getOrderDetailPage,
  getOrderListPage,
  getbestitem,
};
