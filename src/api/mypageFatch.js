import axios from "axios";

const getMypageReviewData = async () => {
  try {
    const res = await axios.get("/api/mypage/review-list?iuser=1");
    const result = res.data;
    console.log("getmypagereview 요청완료");
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { getMypageReviewData };
