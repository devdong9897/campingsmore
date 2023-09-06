import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { ReserPayWapper } from "../css/reserPay-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import ReserPayModal from "../components/modal/ReserPayModal";
import { useSearchParams } from "react-router-dom";

const ReservationPayment = () => {
  const [payModal, setPayModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const iitem = searchParams.get("icamp");
  const [value, onChange] = useState(new Date());
  const path = process.env.PUBLIC_URL;
  console.log(moment(value).format("YYYY-MM-DD"));

  const handleModal = () => {
    setPayModal(true);
  };

  const campingDetailData = () => {
    try {
      console.log("뭠마");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ReserPayWapper>
      {payModal ? <ReserPayModal setPayModal={setPayModal} /> : ""}
      <div className="camping_info">
        <div className="main_thumbnail">
          <img src={path + "/image/bg3.jpg"}></img>
        </div>
        <div className="detail_info">
          <div className="thumbnail_list">
            <img src={`${path}/image/bg3.jpg`}></img>
          </div>
          <div className="detail_info_desc">
            <span className="title">풍차국화 캠핑장</span>
            <ul className="detail_info_list">
              <li>
                <span>주소</span>
                <span>서울 마포구 상암동 495-81</span>
              </li>
              <li>
                <span>도로명주소</span>
                <span>서울 마포구 한강난지로 22</span>
              </li>
              <li>
                <span>전화번호</span>
                <span>02-373-2021</span>
              </li>
              <li>
                <span>사이트주소</span>
                <span>yeyak.seoul.go.kr</span>
              </li>
              <li>
                <span>예약자리</span>
                <span>10</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="calendar_area">
        <span className="calender_title">예약일자를 선택하세요</span>
        {/* <MyCalendar /> */}
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="payment_area">
        <span className="title">캠핑예약정보</span>
        <ul className="payment_list_form">
          <li>
            <div className="input_box">
              <span>예약자 성함</span>
              <input type="text" placeholder="주문자를 입력해주세요"></input>
            </div>
            <div className="input_box">
              <span>예약인원</span>
              <input type="number" placeholder="예약인원을 입력하세요"></input>
            </div>
          </li>
          <li>
            <div className="input_box">
              <span>전화번호</span>
              <input type="number" placeholder="전화번호를 입력하세요"></input>
            </div>
            <div className="input_box">
              <span>예약날짜</span>
              <input type="number" placeholder="예약인원을 입력하세요"></input>
            </div>
          </li>
          <li>
            <div className="input_box">
              <span>캠핑방식</span>
              <select className="camping_way">
                <option>캠핑방식1</option>
                <option>캠핑방식2</option>
                <option>캠핑방식3</option>
              </select>
            </div>
            <div className="input_box">
              <span>총 사용료</span>
              <input type="text" placeholder="총 사용료" value={57000}></input>
            </div>
          </li>
        </ul>
        <span className="title">결제방식</span>
        <ul className="payment_way_list">
          <li>
            <div className="payment_way">
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <span>카드</span>
          </li>
          <li>
            <div className="payment_way">결제방식이미지</div>
            <span>카카오페이</span>
          </li>
          <li>
            <div className="payment_way">결제방식이미지</div>
            <span>무통장입금</span>
          </li>
          <li>
            <div className="payment_way">결제방식이미지</div>
            <span>네이버페이</span>
          </li>
        </ul>
        <div className="payment_check">
          <button className="pay_btn" onClick={handleModal}>
            결제하기
          </button>
        </div>
      </div>
    </ReserPayWapper>
  );
};

export default ReservationPayment;
