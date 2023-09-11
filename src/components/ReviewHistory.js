import React, { useEffect, useState } from "react";
import { ReviewHistoryWrapper } from "../css/myPageStyle/mypage-style";
import ReviewDeleteModal from "./modal/ReviewDeleteModal";
import ReviewModal from "./ReviewModal";

const ReviewHistory = ({ review, setReview }) => {
  // 리뷰수정 state
  const [isEditReviewModal, setisEditReviewModal] = useState(false);
  // 리뷰삭제 State
  const [isReviewModal, setIsReviewModal] = useState(false);
  // 현재선택한 리뷰의 고유값
  const [thisReview, setThisReview] = useState("");
  // 리뷰수정을 누른 리뷰의 데이터 값
  const [editReviewData, setEditReviewData] = useState({});

  console.log("리뷰 잘넘어오나?", review);
  const baseUrl = "http://192.168.0.144:5005/img/";

  const handleReviewEdit = ireview => {
    const thisReviewData = review.find(item => item.ireview === ireview);
    if (thisReviewData) {
      console.log("현재 누른 리뷰의 값과 같은 데이터", thisReviewData);
      setEditReviewData(thisReviewData);
    }
    setisEditReviewModal(true);
  };

  // 리뷰삭제모달 불러태는 핸들러
  const handleReviewDelete = ireview => {
    setIsReviewModal(true);
    console.log("현재리뷰넘버", ireview);
    setThisReview(ireview);
  };

  const pagenation = Array.from(
    { length: review.starRating },
    (_, index) => index,
  );

  return (
    <ReviewHistoryWrapper>
      {isReviewModal ? (
        <ReviewDeleteModal
          setIsReviewModal={setIsReviewModal}
          thisReview={thisReview}
          setReview={setReview}
        />
      ) : (
        ""
      )}
      {isEditReviewModal ? (
        <ReviewModal
          editReviewData={editReviewData}
          setisEditReviewModal={setisEditReviewModal}
          isEditReviewModal={isEditReviewModal}
        />
      ) : (
        ""
      )}
      <h1>리뷰 내역</h1>

      <ul className="review_list">
        {review.length ? (
          <>
            {review.map((item, index) => (
              <li key={index}>
                <div className="review_img">
                  <img
                    src={item.pic ? baseUrl + item.pic : `../image/logo3.png`}
                    alt="리뷰사진"
                  ></img>
                </div>
                <div className="review_info_box">
                  <div className="review_grade">
                    <span>고객평점</span>
                    <div className="review_grade_star">
                      {Array.from(
                        { length: item.starRating },
                        (_, starIndex) => (
                          <p key={starIndex}>
                            <img src="../image/star.png"></img>
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="review_text">{item.reviewCtnt}</div>
                </div>
                <div className="review_fuc">
                  <button onClick={e => handleReviewEdit(item.ireview)}>
                    리뷰수정
                  </button>
                  <button onClick={e => handleReviewDelete(item.ireview)}>
                    리뷰삭제
                  </button>
                </div>
              </li>
            ))}
          </>
        ) : (
          <div className="review_empty_img">
            <img src="../image/review.png" alt="" />
            <p>리뷰내역이 없습니다.</p>
          </div>
        )}
      </ul>
    </ReviewHistoryWrapper>
  );
};

export default ReviewHistory;
