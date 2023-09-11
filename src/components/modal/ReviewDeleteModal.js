import React from "react";
import { ReviewModalWrapper } from "../../css/modalStyle/modal-stylies";
import { deleteReview, getMypageReviewData } from "../../api/mypageFatch";

const ReviewDeleteModal = ({ setIsReviewModal, thisReview, setReview }) => {
  //   alert(thisReview);
  const handleReviewDelete = async () => {
    try {
      const date = await deleteReview(thisReview);
      const renewal = await getMypageReviewData();
      setReview(renewal);
      setIsReviewModal(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = () => {
    setIsReviewModal(false);
  };
  return (
    <ReviewModalWrapper>
      <div className="reviewModal_inner">
        <div className="warning_text">선택하신 리뷰를 삭제하시겠습니까?</div>
        <div className="modal_button">
          <button onClick={handleReviewDelete}>삭제</button>
          <button onClick={handleCancel}>취소</button>
        </div>
      </div>
    </ReviewModalWrapper>
  );
};

export default ReviewDeleteModal;
