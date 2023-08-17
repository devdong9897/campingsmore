import axios from "axios";

const getFetchData = async iboard => {
  try {
    const res = await axios.get(`/api/community/boardDetail/${iboard}`);
    const result = res.data;
    console.log("게시글 데이터 요청완료 : 유병준 체크함", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return {};
};

// 댓글 등록 post
const postComment = async postData => {
  try {
    const res = await axios.post(`/api/comment`, postData);
    const data = res.data;
    console.log("댓글 등록 요청 성공");
    return data;
  } catch (err) {
    console.log("댓글 등록 요청 실패!");
  }
};

export { postComment, getFetchData };
