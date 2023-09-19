import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { ReserPayWapper } from "../css/reserPay-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import ReserPayModal from "../components/modal/ReserPayModal";
import { useSearchParams } from "react-router-dom";
import {
  getcampDetail,
  geticampDay,
  postCampReserve,
} from "../api/campingFetch";
import SwiperMapDetail from "../components/swiper/SwiperMapDetail";
import { useSelector } from "react-redux";

const ReservationPayment = () => {
  const [payModal, setPayModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [campDetail, setCampDetail] = useState([]);
  const [campPicList, setCampPicList] = useState([]);
  const [campiday, setCampiday] = useState([]);
  const icampParams = searchParams.get("icamp");
  const [dateValue, setDateValue] = useState("");
  const [success, setSuccess] = useState({});
  // 전역사용자 정보
  const userInfo = useSelector(state => state.user.UserProFileArr);

  // 인풋 state
  const [username, setUserName] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [thisiday, setThisiday] = useState("");
  // public 폴더경로 가져오기
  const path = process.env.PUBLIC_URL;
  // 오늘날짜 가져오기
  // const today = new Date();
  // const tileDisabled = ({ date }) => {
  //   return date < today;
  // };

  const availableDates = new Set(campiday.map(item => item.date));

  const tileDisabled = ({ date }) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    return !availableDates.has(formattedDate);
  };

  const handleChange = e => {
    const chnagemoment = moment(e).format("YYYY-MM-DD");
    const matchiday = campiday.find(item => item.date === chnagemoment);
    setDateValue(chnagemoment);
    setThisiday(matchiday.iday);
    console.log(chnagemoment, matchiday.iday);
  };

  // 캠핑 결제 올리기
  const handleModal = () => {
    const senddata = {
      reservation: dateValue,
      name: username ? username : userInfo.name,
      phone: phoneNumber ? phoneNumber : userInfo.phone,
      payType: "KAKAO",
      iday: thisiday,
    };
    console.log("마음을 모아 fly", senddata);
    setSuccess(senddata);
    setPayModal(true);
  };

  const campingDetailData = async () => {
    try {
      const data = await getcampDetail(icampParams);
      console.log("디테일 캠핑?", data);
      console.log("픽리스트", data.pic);
      setCampDetail(data);
      setCampPicList(data.pic);
    } catch (err) {
      console.log(err);
    }
  };

  const icampdayData = async () => {
    try {
      const data = await geticampDay(icampParams);
      console.log("icamp의 day찾기", data);
      setCampiday(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    campingDetailData();
    icampdayData();
  }, []);
  return (
    <ReserPayWapper>
      {payModal ? (
        <ReserPayModal
          setPayModal={setPayModal}
          success={success}
          campDetail={campDetail}
        />
      ) : (
        ""
      )}
      <div className="camping_info">
        {campDetail ? (
          <>
            <div className="main_thumbnail">
              <SwiperMapDetail campPicList={campPicList} />
            </div>
            <div className="detail_info">
              <div className="detail_info_desc">
                <span className="title">{campDetail.name}</span>
                <ul className="detail_info_list">
                  <li>
                    <span>주소</span>
                    <span>{campDetail.address}</span>
                  </li>
                  <li>
                    <span>전화번호</span>
                    <span>{campDetail.campPhone}</span>
                  </li>
                  <li>
                    <span>예약자리</span>
                    <span>{campDetail.quantity}</span>
                  </li>
                  <li className="price">
                    <span>예약가격</span>
                    <span>{campDetail.price}원</span>
                  </li>
                </ul>
              </div>
              <div className="note">
                <span className="title">캠핑장 안내사항</span>
                {campDetail.note}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="calendar_area">
        <span className="calender_title">예약일자를 선택하세요</span>
        <Calendar
          onChange={e => handleChange(e)}
          defaultValue={dateValue}
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
                defaultValue={userInfo.name}
                placeholder="주문자를 입력해주세요"
                onChange={e => setUserName(e.target.value)}
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
              </select>
            </div>
          </li>
          <li>
            <div className="input_box">
              <span>전화번호</span>
              <input
                type="text"
                placeholder="전화번호를 입력하세요"
                defaultValue={userInfo.phone}
                onChange={e => setPhoneNumber(e.target.value)}
              ></input>
            </div>
            <div className="input_box">
              <span>예약날짜</span>
              <input
                type="text"
                readOnly
                placeholder="예약날짜를 선택하세요"
                value={moment(dateValue).format("YYYY-MM-DD")}
              ></input>
            </div>
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
