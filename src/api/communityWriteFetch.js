import axios from "axios";

// 게시글 작성 post 요청
const createPost = async postData => {
  const res = await axios.post(`/api/community/board`, postData);
  console.log("게시글 작성 요청 성공");
  return res.data;
};
export default createPost;

// 이미지 1장 업로드하기
export const postOnePice = async (_iboard, postData) => {
  try {
    const res = await axios.post(
      `/api/community/onepice?iboard=${_iboard}`,
      postData,
    );
    console.log("이미지 업로드 요청 성공", res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};