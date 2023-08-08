import React, { useEffect, useState } from "react";
import { ReviewHistoryWrapper } from "../css/mypage-style";

const ReviewHistory = ({ review }) => {
  console.log("리뷰 잘넘어오나?", review);

  return (
    <ReviewHistoryWrapper>
      <h1>리뷰 내역</h1>

      <ul className="review_list">
        {review.map((item, index) => (
          <li key={index}>
            <div className="review_img">
              <img src={item.pic} alt="리뷰사진"></img>
            </div>
            <div className="review_info_box">
              <div className="review_grade">
                <span>고객평점</span>
                <div className="review_grade_star">
                  <p>
                    <img src="/image/star.png"></img>
                  </p>
                  <p>
                    <img src="/image/star.png"></img>
                  </p>
                  <p>
                    <img src="/image/star.png"></img>
                  </p>
                  <p>
                    <img src="/image/star.png"></img>
                  </p>
                  <p>
                    <img src="/image/star.png"></img>
                  </p>
                </div>
              </div>
              <div className="review_text">{item.reviewCtnt}</div>
            </div>
          </li>
        ))}
        {/* {review((item, index) => (
          <li key={index}>
        
          </li>
        ))} */}
      </ul>
    </ReviewHistoryWrapper>
  );
};

export default ReviewHistory;
