import React from "react";
import { UniteMocalWapper } from "../../css/modalStyle/modal-stylies";

const ReviewCompletedModal = ({ setIsReviewConfirm }) => {
  const handleCheck = () => {
    setIsReviewConfirm(false);
  };
  return (
    <UniteMocalWapper>
      <div className="inner">
        <div className="warning_text">리뷰가 성공적으로 작성되었습니다.</div>
        <button className="modal_button">
          <button className="check_btn" onClick={handleCheck}>
            확인
          </button>
        </button>
      </div>
    </UniteMocalWapper>
  );
};

export default ReviewCompletedModal;
