import React, { useEffect, useState } from "react";
import { ReviewModalWrapper } from "../css/review-modal-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faStar } from "@fortawesome/free-solid-svg-icons";
import { postReview } from "../api/mypageFatch";
import axios from "axios";

const ReviewModal = ({
  thisiorder,
  thisItem,
  setisReviewModal,
  purchase,
  setIsReviewConfirm,
  editReviewData,
  isEditReviewModal,
  setisEditReviewModal,
}) => {
  const [thisData, setThisdata] = useState([]);
  const [thisitem, setThisItem] = useState([]);
  const [reviewCtnt, setReviewCtnt] = useState("");
  const [selectedStars, setSelectedStars] = useState(0);
  // 업뿌로드 이미지
  const [uploadImage, setUploadImage] = useState(null);
  const baseUrl = "http://192.168.0.144:5005/img/";

  console.log(thisiorder);
  console.log(thisItem);

  const fromEditReview = () => {
    if (editReviewData) {
      setReviewCtnt(editReviewData.reviewCtnt);
      setSelectedStars(editReviewData.starRating);
    }
  };

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
      dto: {
        iorder: thisItem,
        iitem: thisiorder,
        reviewCtnt: reviewCtnt,
        starRating: selectedStars,
      },
    };

    try {
      const formData = new FormData();
      formData.append("dto", JSON.stringify(data.dto));
      if (uploadImage) {
        formData.append("pic", uploadImage);
      }
      const res = await axios.post("/api/review", formData);
      console.log(res);
      console.log("리뷰등록 전송완료?", res);
      setIsReviewConfirm(true);
    } catch (err) {
      console.log(err);
    }
  };

  // 이미지 선택 핸들러
  const handleFileChange = e => {
    const file = e.target.files[0];
    setUploadImage(file);
  };

  const handelRevieCancel = () => {
    if (isEditReviewModal) {
      setisEditReviewModal(false);
    } else {
      setisReviewModal(false);
    }
  };

  const handleRating = index => {
    setSelectedStars(index + 1);
  };

  useEffect(() => {
    if (editReviewData) {
      fromEditReview();
    } else {
      doit();
    }
  }, []);
  return (
    <ReviewModalWrapper>
      <div className="review_modal_contents_inner">
        {editReviewData ? (
          ""
        ) : (
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
        )}
        {editReviewData ? (
          <>
            <h3>리뷰내용을 수정해주세요</h3>
            <textarea
              rows="20"
              className="review_modal_detail"
              placeholder="리뷰 내용을 입력해주세요"
              value={reviewCtnt}
              onChange={e => setReviewCtnt(e.target.value)}
            ></textarea>
            <div className="isReview_img">
              <span>현재 등록된 이미지</span>
              <img src={baseUrl + editReviewData.pic}></img>
            </div>
            <div className="review_upload_box">
              <span>리뷰 이미지를 업로드 해보세요</span>
              <label
                htmlFor="review_upload"
                className="review_upload_label"
              ></label>
              <input
                type="file"
                id="review_upload"
                className="review_upload"
                onChange={handleFileChange}
              ></input>
            </div>
            <p className="review_modal_eval">이 상품에 대한 평가를 해주세요</p>
            <p className="notice_text">
              새로운 이미지를 등록하면 등록한 이미지가 갱신됩니다.
            </p>
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
          </>
        ) : (
          <>
            <textarea
              rows="20"
              className="review_modal_detail"
              placeholder="리뷰 내용을 입력해주세요"
              value={reviewCtnt}
              onChange={e => setReviewCtnt(e.target.value)}
            ></textarea>
            <div className="review_upload_box">
              <span>리뷰 이미지를 업로드 해보세요</span>
              <label
                htmlFor="review_upload"
                className="review_upload_label"
              ></label>
              <input
                type="file"
                id="review_upload"
                className="review_upload"
                onChange={handleFileChange}
              ></input>
            </div>
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
          </>
        )}
      </div>
    </ReviewModalWrapper>
  );
};

export default ReviewModal;
