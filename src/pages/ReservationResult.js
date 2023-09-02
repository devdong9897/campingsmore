import React from "react";
import { ReservationResultWrapper } from "../css/reservationResult-style";
import { useNavigate } from "react-router";

const ReservationResult = () => {
  const navigate = useNavigate();
  const handleToMain = () => {
    navigate("/main");
  };
  return (
    <ReservationResultWrapper>
      <div className="payment_camping">
        <div className="camping_info">
          <span className="title">풍차국화 캠핑장</span>
          <ul className="detail_info_list">
            <li>
              <span>서울 마포구 상암동 495-81</span>
            </li>
            <li>
              <span>서울 마포구 한강난지로 22</span>
            </li>
            <li>
              <span>02-373-2021</span>
            </li>
            <li>
              <span>yeyak.seoul.go.kr</span>
            </li>
          </ul>
        </div>
        <div className="payment_area">
          <span className="title">캠핑예약이 성공적으로 완료되었습니다.</span>
          <ul className="payment_list_form">
            <li>
              <div className="input_box">
                <span>예약자 성함</span>
                <input type="text" placeholder="주문자를 입력해주세요"></input>
              </div>
              <div className="input_box">
                <span>예약인원</span>
                <input
                  type="number"
                  placeholder="예약인원을 입력하세요"
                ></input>
              </div>
            </li>
            <li>
              <div className="input_box">
                <span>전화번호</span>
                <input
                  type="number"
                  placeholder="전화번호를 입력하세요"
                ></input>
              </div>
              <div className="input_box">
                <span>예약날짜</span>
                <input
                  type="number"
                  placeholder="예약인원을 입력하세요"
                ></input>
              </div>
            </li>
            <li>
              <div className="input_box">
                <span>캠핑방식</span>
                <input
                  type="number"
                  placeholder="예약인원을 입력하세요"
                ></input>
              </div>
              <div className="input_box">
                <span>총 사용료</span>
                <input
                  type="text"
                  placeholder="총 사용료"
                  value={57000}
                ></input>
              </div>
            </li>
          </ul>
          <span className="sub_title">
            예약된 캠핑장에 직접 주문한 음식도 배달가능합니다.
          </span>
          <div className="payment_check">
            <button className="pay_btn">음식주문하기</button>
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
