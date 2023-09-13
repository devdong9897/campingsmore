import React from "react";
import { ReservationResultWrapper } from "../css/reservationResult-style";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const ReservationResult = () => {
  const navigate = useNavigate();
  const baseUrl = "http://192.168.0.144:5005/img/";
  const ReserData = useSelector(state => state.Reservation.reservationArr);
  const handleToMain = () => {
    navigate("/main");
  };
  const handleToOrder = () => {
    navigate("/main/orderlist");
  };
  return (
    <ReservationResultWrapper>
      <div className="payment_camping">
        <div className="camping_img">
          <img src={"/img/" + ReserData.campEntity.mainPic}></img>
        </div>
        <div className="camping_info">
          <span className="title">{ReserData.campEntity.name}</span>
          <ul className="detail_info_list">
            <li>
              <span>{ReserData.campEntity.address}</span>
            </li>
            <li>
              <span>{ReserData.campEntity.campPhone}</span>
            </li>
          </ul>
        </div>
        <div className="payment_area">
          <span className="title">캠핑예약이 성공적으로 완료되었습니다.</span>
          <ul className="payment_list_form">
            <li>
              <div className="input_box">
                <span>예약자 성함</span>
                <input
                  type="text"
                  readOnly
                  placeholder="주문자를 입력해주세요"
                  value={ReserData.name}
                ></input>
              </div>
            </li>
            <li>
              <div className="input_box">
                <span>전화번호</span>
                <input
                  type="number"
                  readOnly
                  placeholder="전화번호를 입력하세요"
                  value={ReserData.phone}
                ></input>
              </div>
              <div className="input_box">
                <span>결제방식</span>
                <input type="text" value={ReserData.payType}></input>
              </div>
            </li>
            <li>
              <div className="input_box">
                <span>총 사용료</span>
                <input
                  type="text"
                  readOnly
                  placeholder="총 사용료"
                  value={ReserData.price}
                ></input>
              </div>
            </li>
          </ul>
          <span className="sub_title">
            예약된 캠핑장에 직접 주문한 음식도 배달가능합니다.
          </span>
          <div className="payment_check">
            <button className="pay_btn" onClick={handleToOrder}>
              음식주문하기
            </button>
            <button className="pay_btn" onClick={handleToMain}>
              예약끝내기
            </button>
          </div>
        </div>
      </div>
    </ReservationResultWrapper>
  );
};

export default ReservationResult;
