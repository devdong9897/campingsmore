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

// 작성 게시글 삭제
const updateCommunityData = async (iboard, updatedData) => {
  try {
    const res = await axios.put(`/api/community/${iboard}`, updatedData);
    const result = res.data;
    console.log("게시글 업데이트 요청 성공", result);
  } catch (err) {
    console.log("게시글 업데이트 요청 실패", err);
  }
};

// 작성 게시글 수정
const editCommunityData = async (iboard, updatedData) => {
  try {
    const res = await axios.put(`/api/community/${iboard}`, updatedData);
    const result = res.data;
    console.log("게시글 업데이트 요청 성공", result);
  } catch (err) {
    console.log("게시글 업데이트 요청 실패", err);
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

const postMyProfileData = async formData => {
  try {
    const res = await axios.post("/api/user/update-profile", formData);
    const result = res.data;
    console.log("postMyProfileData 전송완료", result);
  } catch (err) {
    console.error(err);
  }
};

const deleteReview = async thisReview => {
  try {
    const res = await axios.delete(`/api/review?ireview=${thisReview}`);
    const result = res.data;
    console.log("리뷰삭제요처완료?", result);
  } catch (err) {
    console.log(err);
  }
};

const postReview = async formData => {
  try {
    const res = await axios.post("/api/review", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const result = res.data;
    console.log("리뷰등록 전송완료?", result);
  } catch (err) {
    console.log(err);
  }
};

const getPaymentDetail = async iorder => {
  try {
    const res = await axios.get(`/api/payment/${iorder}`);
    const result = res.data;
    console.log("단일 결제 내역보기 성공?", result);
    return result;
  } catch (err) {
    console.log(err);
  }
  return [];
};

// const getPaymentItemDetail = async () => {
//   try {
//   } catch (err) {
//     console.log(err);
//   }
// };

export {
  getPaymentDetail,
  getMypageReviewData,
  getPurchaseData,
  getCommunityData,
  getMyProfileData,
  postMyProfileData,
  postReview,
  updateCommunityData,
  deleteReview,
};
