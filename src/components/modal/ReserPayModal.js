import React from "react";
import { ReserModalWapper } from "../../css/modalStyle/modal-stylies";
import { useNavigate } from "react-router";
import { postCampReserve } from "../../api/campingFetch";
import { useDispatch } from "react-redux";
import { ReserAdd } from "../../reducers/reservationPaySlice";

const ReserPayModal = ({ setPayModal, success, campDetail }) => {
  console.log("이게뭐꼬", success);
  console.log("이꼐뭐단먈이냐", campDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePay = async () => {
    try {
      const data = await postCampReserve(success);
      console.log("캠핑예약성공했냐?", data);
      dispatch(ReserAdd(data));
    } catch (err) {
      console.log(err);
    }
    navigate(`/main/reserresult?data=${success}`);
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
            <span className="camp_name">{campDetail[0].name}</span>
            <span className="price">{campDetail[0].price}원</span>
          </div>
          <ul className="pay_info_list">
            <li>
              <span>예약자 성함</span>
              <span>{success.name}</span>
            </li>
            <li>
              <span>예약자 전화번호</span>
              <span>{success.phone}</span>
            </li>
            <li>
              <span>결제방식</span>
              <span>{success.payType}</span>
            </li>
            <li>
              <span>캠핑장 주소</span>
              <span>{campDetail[0].price}</span>
            </li>
          </ul>
        </div>
        <div className="warning_confrim_text">
          입력하신 내용으로 결제를 하시겠습니까?
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
