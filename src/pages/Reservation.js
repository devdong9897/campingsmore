import React, { useState } from "react";
import { ReservationWrapper } from "../css/reservation-style";
import { useSelector } from "react-redux";
import { getMapData } from "../api/mapDataFetch";
import KakaoMap from "../components/KakaoMap";
import { useRef } from "react";

const Reservation = () => {
  const kakaoSearchRef = useRef();
  const [searchAddress, setSearchAddress] = useState("");
  const kakoMapdata = useSelector(state => state.KakaoData.kakaoDataArr);
  console.log("어이!", kakoMapdata);
  const handleFindPlace = address => {
    setSearchAddress(address);
  };

  return (
    <ReservationWrapper>
      <div className="reservation_inner">
        <div className="reser_frame">
          <div className="camping_list_area">
            <span className="capming_list_title">캠핑장 목록</span>
            <ul className="camping_list">
              {kakoMapdata.documents?.map((item, index) => (
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
                    <button>캠핑예약하기</button>
                  </div>
                </li>
              ))}
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
