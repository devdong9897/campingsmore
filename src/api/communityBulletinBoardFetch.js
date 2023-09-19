import axios from "axios";

const getFetchData = async iboard => {
  try {
    const res = await axios.get(`/api/community/board/${iboard}`);
    const result = res.data;
    console.log("게시글 데이터 요청완료", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return {};
};

// 댓글 등록 post
const postComment = async commentPostData => {
  try {
    const res = await axios.post("/api/comment/comment", commentPostData);
    const data = res.data;
    console.log("댓글 등록 요청 성공");
    return data;
  } catch (err) {
    console.log("댓글 등록 요청 실패!");
  }
};
// 댓글 수정
const editComment = async (_icomment, _ctnt) => {
  try {
    const res = await axios.put(`/api/comment/comment`, {
      icomment: _icomment,
      ctnt: _ctnt,
      // ctnt:commentData = res.data
    });
    console.log("put요청 성공", res.data);
    return res.data;
  } catch (err) {
    console.log("put요청 실패", err);
  }
};

// 댓글 삭제
const deleteComment = async _icomment => {
  try {
    const res = await axios.put(`/api/comment/no-comment`, {
      icomment: _icomment,
    });
    console.log("put요청 성공", res.data);
    return res.data;
  } catch (err) {
    console.log("put요청 실패", err);
  }
};

export { postComment, getFetchData, deleteComment, editComment };
