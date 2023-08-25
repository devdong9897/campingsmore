import React from "react";
import { ReviewModalComWrapper } from "../../css/modalStyle/modal-stylies";

const ReviewCompletedModal = ({ setIsReviewConfirm }) => {
  const handleCheck = () => {
    setIsReviewConfirm(false);
  };
  return (
    <ReviewModalComWrapper>
      <div className="reviewcom_inner">
        <div className="warning_text">리뷰가 성공적으로 작성되었습니다.</div>
        <button className="modal_button">
          <button className="check_btn" onClick={handleCheck}>
            확인
          </button>
        </button>
      </div>
    </ReviewModalComWrapper>
  );
};

export default ReviewCompletedModal;
