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

  // 인풋 state
  const [name, setName] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // public 폴더경로 가져오기
  const path = process.env.PUBLIC_URL;
  // 오늘날짜 가져오기
  const today = new Date();
  const tileDisabled = ({ date }) => {
    return date < today;
  };

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
        <Calendar
          onChange={onChange}
          value={dateValue}
          tileDisabled={tileDisabled}
        />
      </div>
      <div className="payment_area">
        <span className="title">캠핑예약정보</span>
        <ul className="payment_list_form">
          <li>
            <div className="input_box">
              <span>예약자 성함</span>
              <input
                type="text"
                placeholder="주문자를 입력해주세요"
                onChange={e => setName(e.target.value)}
              ></input>
            </div>
            <div className="input_box">
              <span>예약인원</span>
              <select
                onChange={e => setPNumber(e.target.value)}
                className="person_number"
              >
                <option value={1}>1명</option>
                <option value={2}>2명</option>
                <option value={3}>3명</option>
                <option value={4}>4명</option>
                <option value={5}>5명</option>
                <option value={6}>6명</option>
                <option value={7}>7명</option>
                <option value={8}>8명</option>
                <option value={9}>9명</option>
                <option value={10}>10명</option>
              </select>
            </div>
          </li>
          <li>
            <div className="input_box">
              <span>전화번호</span>
              <input
                type="text"
                placeholder="전화번호를 입력하세요"
                onChange={e => setPhoneNumber(e.target.value)}
              ></input>
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
