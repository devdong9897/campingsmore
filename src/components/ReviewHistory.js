import React, { useEffect, useState } from "react";
import { ReviewHistoryWrapper } from "../css/mypage-style";

const ReviewHistory = ({ review }) => {
  console.log("리뷰 잘넘어오나?", review);

  const pagenation = Array.from({ length: review.starRating }, (_, index) => index);


  return (
    <ReviewHistoryWrapper>
      <h1>리뷰 내역</h1>

      <ul className="review_list">
        {review.length ? (
          <>
            {review.map((item, index) => (
              <li key={index}>
                <div className="review_img">
                  <img src={item.pic ? (item.pic ):(`/image/logo3.png`)} alt="리뷰사진"></img>
                </div>
                <div className="review_info_box">
                  <div className="review_grade">
                    <span>고객평점</span>
                    <div className="review_grade_star">
                    {Array.from(
                          { length: item.starRating },
                          (_, starIndex) => (
                            <p key={starIndex}>
                            <img src="/image/star.png"></img>
                          </p>
                          ),
                        )}
                    </div>
                  </div>
                  <div className="review_text">{item.reviewCtnt}</div>
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
