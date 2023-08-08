import axios from "axios";
const postCommunity = async () => {
  try {
    const res = await axios.post("/api/community/comunity");
    const data = res.data;
    return res.data;
  } catch (error) {
    console.log(error);
    // return null;
  }
};

const getCommunityList = async () => {
  try {
    const res = await axios.get("/api/community/comunity");
    const result = res.data;
    console.log("커뮤니티 게시글 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

const getCommunityPage = async _index => {
  try {
    const res = await axios.get(
      `/api/community/comunity?page=${_index + 1}&row=15`,
    );
    const result = res.data;
    console.log("커뮤니티 게시글 페이지 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};
const searchCommunityData = async (searchKeyword) => {
  try {
    const encodedSearchKeyword = encodeURIComponent(searchKeyword)
    const res = await axios.get(
      `/api/community/title?title=${encodedSearchKeyword}&page=1&row=15`,
    );
    const result = res.data;
    console.log("제목으로 검색 기능 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export {
  postCommunity,
  getCommunityList,
  getCommunityPage,
  searchCommunityData,
};
