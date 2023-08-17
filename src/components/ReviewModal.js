import React, { useEffect, useState } from "react";
import { ReviewModalWrapper } from "../css/review-modal-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { postReview } from "../api/mypageFatch";
import axios from "axios";

const ReviewModal = ({ thisiorder, thisItem, setisReviewModal, purchase }) => {
  const [thispurchase, setthispurchase] = useState("");
  const [thisData, setThisdata] = useState([]);
  const [thisitem, setThisItem] = useState([]);
  const [reviewTitle, setreviewTitle] = useState("");
  const [reviewCtnt, setReviewCtnt] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);

  console.log(thisiorder);
  console.log(thisItem);

  const doit = () => {
    const itemmatch = purchase.filter(item => item.iorder === thisItem);
    setThisdata(itemmatch);
    setThisItem(itemmatch[0].itemList);
    console.log("아이템매치", itemmatch);
    console.log("야아아!", itemmatch[0].itemList);
  };

  const starRatingShow = Array.from({ length: 5 }, (_, index) => index);

  const handleSubmit = async () => {
    const data = {
      dto:{
        iorder:thisItem,
        iitem:thisiorder,
        reviewCtnt:reviewCtnt,
        starRating:selectedStars
      }
    }
    const formData = new FormData();
    formData.append('dto', JSON.stringify(data.dto));

    try {
      const res = await axios.post("/api/review", formData);
      console.log(res);
      console.log("리뷰등록 전송완료?", res);
    } catch (err) {
      console.log(err);
    }
  };

  const handelRevieCancel = () => {
    setisReviewModal(false);
  };

  const handleRating = index => {
    setSelectedStars(index + 1);
  };

  useEffect(() => {
    doit();
  }, []);
  return (
    <ReviewModalWrapper>
      <div className="review_modal_contents_inner">
        <div className="select_item">
          {thisitem.map((item, index) => (
            <li key={index}>
              <div className="thisitem_img">
                <img src={item.pic} alt="사진" />
              </div>
              <div className="item_name">
                <span>상품명</span>
                <span>{item.name}</span>
              </div>
            </li>
          ))}
        </div>
        {/* <input
          className="review_modal_title"
          placeholder="제목을 입력하세요"
          value={reviewTitle}
          onChange={e => setreviewTitle(e.target.value)}
        ></input> */}
        <textarea
          rows="20"
          className="review_modal_detail"
          placeholder="리뷰 내용을 입력해주세요"
          value={reviewCtnt}
          onChange={e => setReviewCtnt(e.target.value)}
        ></textarea>
        <p className="review_modal_eval">이 상품에 대한 평가를 해주세요</p>
        <div className="review_modal_star">
          {starRatingShow.map((item, index) => (
            <li key={index} onClick={e => handleRating(index)}>
              {index < selectedStars ? (
                <img src="../image/star.png" alt="" />
              ) : (
                <img src="../image/star_gray.png" alt="" />
              )}
            </li>
          ))}
        </div>
        <button className="review_modal_complete" onClick={handleSubmit}>
          작성완료
        </button>
        <button className="review_cancel" onClick={handelRevieCancel}>
          취소
        </button>
      </div>
    </ReviewModalWrapper>
  );
};

export default ReviewModal;
