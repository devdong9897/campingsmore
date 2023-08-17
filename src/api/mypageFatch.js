import axios from "axios";

// 리뷰리스트 요청
const getMypageReviewData = async () => {
  try {
    const res = await axios.get("/api/mypage/reviewlist");
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

// 프로필데이터 요청
const getMyProfileData = async () => {
  try {
    const res = await axios.get("/sign-api/myinfo");
    const result = res.data;
    console.log("getMyProfile 요청완료");
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 프로필데이터 수정하기 전송
const postMyProfileData = async fixData => {
  try {
    const res = await axios.post("/api/user/update-profile", {
      uid: fixData.uid,
      upw: fixData.upw,
      email: fixData.email,
      name: fixData.name,
      birth_date: fixData.birth_date,
      phone: fixData.phone,
      user_address: fixData.user_address,
      user_address_detail: "not_yet",
    });
    const result = res.data;
    console.log("postMyProfileData 전송완료", result);
  } catch (err) {
    console.error(err);
  }
};

// 리뷰작성
const postReview = async dto => {
  console.log(dto);
  try {
    const res = await axios.post("/api/review", dto, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    console.log("리뷰등록 전송완료?", res);
  } catch (err) {
    console.log(err);
  }
};

export {
  getMypageReviewData,
  getPurchaseData,
  getCommunityData,
  getMyProfileData,
  postMyProfileData,
  postReview,
};
