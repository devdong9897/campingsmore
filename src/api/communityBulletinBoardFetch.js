import axios from "axios";

const getFetchData = async iboard => {
  try {
    const res = await axios.get(`/api/community/boardDetail/${iboard}`);
    const result = res.data;
    console.log("게시글 데이터 요청완료", result);
    return result.boardDevo;
  } catch (err) {
    console.log(err);
  }
  return {};
};

// 댓글 등록 post
export const postComment = async postData => {
  try {
    const res = await axios.post(`/api/comment`, postData);
    const data = res.data;
    console.log("댓글 등록 요청 성공");
    return data;
  } catch (err) {
    console.log("댓글 등록 요청 실패!");
  }
};

const getFetchData = async () => {
    try{
        const res = await axios.get(`/api/community/boardDetail`)
        const data = res.data
        console.log(res.data)
        return data
    }catch(err){
        console.log("게시글 디테일보기 요청실패",err)
    }
}
export default getFetchData;
