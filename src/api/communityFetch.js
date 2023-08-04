import axios from "axios";
import  axiosInstance  from "../api/communityFetch";
// const axiosInstance = axios.create({
//     baseURL: "http://localhost:5000",
//     timeout: 1000,
//     headers: {
//     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     Accept: "*/*",
//     },
// })

// 게시글 post
const postCommunity = async () => {
  try {
    const res = await axiosInstance.post("/api/community/comunity");
    const data = res.data;
    return res.data;
  } catch (error) {
    console.log(error);
    // return null;
  }
};

// 게시글 디테일 보기

// 게시글 리스트 보기
export const getCommunityList = async (page, row) => {
    try {
        const res = await axiosInstance.get(`/api/community/comunity?page=${page}&row=${row}`);
        return res.data;
    }catch(err) {
        console.log(err)
        return null;
    }
}
export default { postCommunity, getCommunityList };
