import axios from "axios";
// 게시글 post
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

// 게시글 디테일 보기

// 제목으로 검색
const getCommunityListSearch = async () => {
  try {
    const res = await axios.get("")
    const result = res.data;
    console.log(result)
  }catch(err) {
    console.log(err)
    return []
  }
}

// 게시글 리스트 보기
const getCommunityList = async () => {
  try {
    const res = await axios.get("/api/community/comunity");
    const result = res.data;
    console.log("getCommunityList 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export default { postCommunity, getCommunityList, getCommunityListSearch };
