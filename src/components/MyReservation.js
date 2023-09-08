import React from "react";
import { ReservationHistoryWrapper } from "../css/myPageStyle/mypage-style";

const MyReservation = ({ reserList }) => {
  console.log("여잘등어오나?", reserList);
  return (
    <ReservationHistoryWrapper>
      <h1>캠핑예약내역</h1>
      <ul className="reser_list">
        {reserList.length ? (
          <>
            {reserList.map((item, index) => (
              <li key={index}>
                <div className="camping_img">
                  <img
                    src={"http://192.168.0.144:5005/img/" + item.mainPic}
                  ></img>
                </div>
                <ul className="camping_info">
                  <li>
                    <span className="title">캠핑장 명</span>
                    <span>{item.name}</span>
                  </li>
                  <li>
                    <span className="title">캠핑장 명</span>
                    <span>{item.campPhone}</span>
                  </li>
                </ul>
              </li>
            ))}
          </>
        ) : (
          ""
        )}
      </ul>
    </ReservationHistoryWrapper>
  );
};

export default MyReservation;
