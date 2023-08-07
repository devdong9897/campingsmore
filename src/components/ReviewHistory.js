import React, { useEffect, useState } from "react";
import { ReviewHistoryWrapper } from "../css/mypage-style";
import { getMypageReviewData } from "../api/mypageFatch";

const ReviewHistory = () => {
  const [mypagereview, setMypageReview] = useState([]);
  const getMypageReview = async () => {
    try {
      const data = await getMypageReviewData();
      setMypageReview(data);
      console.log(data);
    } catch (err) {
      console.log("마이페이지리뷰 에러", err);
    } 
  };

  useEffect(() => {
    getMypageReview();
  }, []);

  return (
    <ReviewHistoryWrapper>
      <h1>리뷰 내역</h1>
      <ul className="review_list">
        <li>
          <div className="review_img">
            <img src="/image/food.jpg"></img>
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
            <div className="review_text">
              닭소리 집어치워! 무슨 치느님을 만나겠다는거야?!
            </div>
          </div>
        </li>
        <li>
          <div className="review_img">
            <img src="/image/food.jpg"></img>
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
            <div className="review_text">
              닭소리 집어치워! 무슨 치느님을 만나겠다는거야?!
            </div>
          </div>
        </li>
        <li>
          <div className="review_img">
            <img src="/image/food.jpg"></img>
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
            <div className="review_text">
              닭소리 집어치워! 무슨 치느님을 만나겠다는거야?!
            </div>
          </div>
        </li>
      </ul>
    </ReviewHistoryWrapper>
  );
};

export default ReviewHistory;
