import React, { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { ReserPayWapper } from "../css/reserPay-style";
import MyCalendar from "../components/MyfullCalender";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const ReservationPayment = () => {
  const [value, onChange] = useState(new Date());
  console.log(moment(value).format("YYYY-MM-DD"));
  return (
    <ReserPayWapper>
      <div className="camping_info">
        <div className="main_thumbnail">
          <img src="/image/bg3.jpg"></img>
        </div>
        <div className="detail_info">
          <div className="thumbnail_list">
            <img src="/image/bg3.jpg"></img>
          </div>
          <div className="detail_info_desc">
            <span className="title">캠핑시설 제목</span>
            <ul>
              <li>캠핑장 주소</li>
              <li>캠핑장 도로명 주소</li>
              <li>캠핑장 전화번호</li>
              <li>웹사이트 주소</li>
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
              <input type="text" placeholder="총 사용료"></input>
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
        <div className="payment_click">
          <button>결제하기</button>
        </div>
      </div>
    </ReserPayWapper>
  );
};

export default ReservationPayment;
