import React, { useState } from "react";
import { ReservationWrapper } from "../css/reservation-style";
import { useSelector } from "react-redux";
import { getMapData } from "../api/mapDataFetch";
import KakaoMap from "../components/KakaoMap";

const Reservation = () => {
  const kakoMapdata = useSelector(state => state.KakaoData.kakaoDataArr);
  console.log("어이!", kakoMapdata);

  // const getMapdata = async () => {
  //   try {
  //     const data = getMapData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <ReservationWrapper>
      <div className="reservation_inner">
        <div className="reser_frame">
          <div className="camping_list_area">
            <span className="capming_list_title">캠핑장 목록</span>
            <ul className="camping_list">
              {kakoMapdata.documents?.map((item, index) => (
                <li key={index}>
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
                </li>
              ))}
            </ul>
          </div>
          <div className="kakaoMap">
            <KakaoMap />
          </div>
        </div>
      </div>
    </ReservationWrapper>
  );
};

export default Reservation;
