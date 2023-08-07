import React from "react";
import { ReservationWrapper } from "../css/reservation-style";

function Reservation() {
  return (
    <ReservationWrapper>
      <div className="reservation_inner">
        <div className="logo_img"></div>
        <div className="announcement">
          <h1>
            서비스 <span>준비중</span> 입니다.
          </h1>
          <p>
            빠른시일에 완료하여 정상적인 서비스를 제공하겠습니다.
            <br />
            이용에 불편을 드려 죄송합니다.
          </p>
        </div>
      </div>
    </ReservationWrapper>
  );
}

export default Reservation;
