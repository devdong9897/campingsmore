import axios from "axios";

// 리뷰리스트 요청
const getMypageReviewData = async () => {
  try {
    const res = await axios.get("/api/mypage/review-list");
    const result = res.data;
    console.log("getmypagereview 요청완료");
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// 구매리스트 요청
const getPurchaseData = async () => {
  try {
    const res = await axios.get("/api/payment/paymentList");
    const result = res.data;
    console.log("getPurchaseData 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 작성 게시글 요청

const getCommunityData = async () => {
  try {
    const res = await axios.get("/api/community");
    const result = res.data;
    console.log("getCommunityData 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export { getMypageReviewData, getPurchaseData, getCommunityData };
