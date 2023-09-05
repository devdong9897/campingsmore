import React, { useEffect, useState } from "react";
import { ReservationWrapper } from "../css/reservation-style";
import { useSelector } from "react-redux";
import { getMapData } from "../api/mapDataFetch";
import KakaoMap from "../components/KakaoMap";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { getCamingList } from "../api/campingFetch";

const Reservation = () => {
  const navigate = useNavigate();
  const kakaoSearchRef = useRef();
  const [searchAddress, setSearchAddress] = useState("");
  const [campList, setCampList] = useState([]);
  const kakoMapdata = useSelector(state => state.KakaoData.kakaoDataArr);
  console.log("어이!", kakoMapdata);
  const handlePayment = () => {
    navigate("/main/reservationpayment");
  };
  const handleFindPlace = address => {
    setSearchAddress(address);
  };

  // 캠핑장리스트 불러오기
  const campingList = async () => {
    try {
      const data = await getCamingList();
      console.log("야인마!! 여기서 들어오는거 확인해란말이야 확인!", data);
      setCampList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    campingList();
  }, []);

  return (
    <ReservationWrapper>
      <div className="reservation_inner">
        <div className="reser_frame">
          <div className="camping_list_area">
            <div className="reservaion_info">
              <span className="capming_list_title">캠핑장 목록</span>
              <div className="camping_search">
                <span>캠핑장을 검색해보세요</span>
                <div className="search_input_box">
                  <input
                    type="text"
                    className="search_input"
                    placeholder="캠핑장 검색"
                  ></input>
                  <button className="search_btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
              </div>
              <div className="camping_location">
                <span>지역을 선택해주세요</span>
                <select className="select_location">
                  <option>전체</option>
                  <option>서울</option>
                  <option>경기도</option>
                  <option>강원도</option>
                  <option>충청북도</option>
                  <option>충청남도</option>
                  <option>경상남도</option>
                  <option>경상북도</option>
                  <option>전라북도</option>
                  <option>전라남도</option>
                </select>
              </div>
            </div>
            <ul className="camping_list">
              {campList.map((item, index) => (
                <li key={index}>
                  <div className="camping_info_box">
                    <div className="camping_img">
                      <img src="/image/bg.jpg"></img>
                    </div>
                    <div className="camping_info">
                      <span className="camping_name">{item.name}</span>
                      <span className="camping_address">{item.address}</span>
                      <span className="camping_phone">{item.campPhone}</span>
                    </div>
                  </div>
                  <div className="camping_reservation">
                    <button onClick={handlePayment}>캠핑예약하기</button>
                  </div>
                </li>
              ))}
              {/* {campingList?.map((item, index) => (
                <li key={index}>
                  <div className="camping_info_box">
                    <div className="camping_img">
                      <img src="/image/bg.jpg"></img>
                    </div>
                    <div className="camping_info">
                      <span className="camping_name">{item.name}</span>
                      <span className="camping_address">{item.address}</span>
                      <span className="camping_phone">{item.campPhone}</span>
                    </div>
                  </div>
                  <div className="camping_reservation">
                    <button onClick={handlePayment}>캠핑예약하기</button>
                  </div>
                </li>
              ))} */}
              {/* {kakoMapdata.documents?.map((item, index) => (
                <li
                  key={index}
                  onClick={e => handleFindPlace(item.road_address_name)}
                >
                  <div className="camping_info_box">
                    <div className="camping_img">
                      <img src="/image/bg.jpg"></img>
                    </div>
                    <div className="camping_info">
                      <span className="camping_name">{item.place_name}</span>
                      <span className="camping_address">
                        {item.road_address_name}
                      </span>
                      <span className="camping_phone">{item.phone}</span>
                      <span className="place_url">캠핑상세주소</span>
                    </div>
                  </div>
                  <div className="camping_reservation">
                    <button onClick={handlePayment}>캠핑예약하기</button>
                  </div>
                </li>
              ))} */}
            </ul>
          </div>
          <div className="kakaoMap">
            <KakaoMap
              searchAddress={searchAddress}
              onSearch={handleFindPlace}
            />
          </div>
        </div>
      </div>
    </ReservationWrapper>
  );
};

export default Reservation;
