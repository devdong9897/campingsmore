import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { ReserPayWapper } from "../css/reserPay-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import ReserPayModal from "../components/modal/ReserPayModal";
import { useSearchParams } from "react-router-dom";
import { getcampDetail } from "../api/campingFetch";
import SwiperMapDetail from "../components/swiper/SwiperMapDetail";

const ReservationPayment = () => {
  const [payModal, setPayModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [campDetail, setCampDetail] = useState([]);
  const icampParams = searchParams.get("icamp");
  const [dateValue, onChange] = useState(new Date());
  const [name, setName] = useState("");
  const path = process.env.PUBLIC_URL;
  console.log(moment(dateValue).format("YYYY-MM-DD"));

  const handleModal = () => {
    setPayModal(true);
  };

  const campingDetailData = async () => {
    try {
      const data = await getcampDetail(icampParams);
      console.log("디테일 캠핑?", data);
      setCampDetail(data);
      console.log("뭠마");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    campingDetailData();
  }, []);
  return (
    <ReserPayWapper>
      {payModal ? <ReserPayModal setPayModal={setPayModal} /> : ""}
      <div className="camping_info">
        {campDetail.length ? (
          <>
            <div className="main_thumbnail">
              <SwiperMapDetail campDetail={campDetail} />
            </div>
            <div className="detail_info">
              <div className="detail_info_desc">
                <span className="title">{campDetail[0].name}</span>
                <ul className="detail_info_list">
                  <li>
                    <span>주소</span>
                    <span>{campDetail[0].address}</span>
                  </li>
                  <li>
                    <span>전화번호</span>
                    <span>{campDetail[0].campPhone}</span>
                  </li>
                  <li>
                    <span>예약자리</span>
                    <span>{campDetail[0].quantity}</span>
                  </li>
                  <li className="price">
                    <span>예약가격</span>
                    <span>{campDetail[0].price}원</span>
                  </li>
                </ul>
              </div>
              <div className="note">
                <span className="title">캠핑장 안내사항</span>
                {campDetail[0].note}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="calendar_area">
        <span className="calender_title">예약일자를 선택하세요</span>
        {/* <MyCalendar /> */}
        <Calendar onChange={onChange} value={dateValue} />
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
              <input
                type="text"
                placeholder="예약날짜를 선택하세요"
                value={moment(dateValue).format("YYYY-MM-DD")}
              ></input>
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
