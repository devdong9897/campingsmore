import axios from "axios";

// iboard 값 받기
export const getIBoard = async getIBoardData => {
  const res = await axios.get(`/api/community/iboard`);
  console.log("iboard 값 받기 요청 : ", res.data);
  return res.data;
};

// 게시글 작성 post 요청
const createPost = async postData => {
  const res = await axios.post(`/api/community/board`, postData);
  console.log("게시글 작성 요청 성공");
  return res.data;
};
export default createPost;

// 게시글 작성 취소 delete 요청
export const deleteBoard = async _iboard => {
  try {
    const res = await axios.put(`/api/community/${_iboard}`);
    console.log("게시글 삭제 요청 성공");
    return res.data;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 이미지 1장 업로드하기
export const postOnePice = async (_iboard, postData) => {
  try {
    const res = await axios.post(
      `/api/community/photo?iboard=${_iboard}`,
      postData,
    );
    console.log("이미지 업로드 요청 성공", res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
