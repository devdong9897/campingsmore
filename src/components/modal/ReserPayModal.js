import React from "react";
import { ReserModalWapper } from "../../css/modalStyle/modal-stylies";
import { useNavigate } from "react-router";

const ReserPayModal = ({ setPayModal }) => {
  const navigate = useNavigate();
  const handlePay = () => {
    navigate("/main/reserresult");
  };
  const handlecencel = () => {
    setPayModal(false);
  };
  return (
    <ReserModalWapper>
      <div className="reserModal_inner">
        <div className="warning_text">
          <span>입력한 결제 정보</span>
          <div className="pay_check_head">
            <span className="camp_name">캠핑장이름</span>
            <span className="price">최종결제금액</span>
          </div>
          <ul className="pay_info_list">
            <li>
              <span>예약자 성함</span>
              <span>성함데이터</span>
            </li>
            <li>
              <span>예약자 전화번호</span>
              <span>예약자 전화번호 데이터</span>
            </li>
            <li>
              <span>캠핑방식</span>
              <span>캠핑방식데이터</span>
            </li>
            <li>
              <span>예약인원</span>
              <span>예약인원데이터</span>
            </li>
            <li>
              <span>결제방식</span>
              <span>결에방식데이터</span>
            </li>
          </ul>
        </div>
        <div className="warning_confrim_text">
          입력하신 내용으로 결제를 진행하시겠습니까?
        </div>
        <div className="modal_button">
          <button onClick={handlePay}>결제</button>
          <button onClick={handlecencel}>취소</button>
        </div>
      </div>
    </ReserModalWapper>
  );
};

export default ReserPayModal;
