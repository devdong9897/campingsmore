import React, { useState } from "react";
import { ReservationHistoryWrapper } from "../css/myPageStyle/mypage-style";
import { postCampingCancel } from "../api/userFatch";

const MyReservation = ({ reserList }) => {
  const [thisIday, setThisday] = useState("");
  const handleCampingCancel = async (iday, ireserve) => {
    setThisday(iday);
    console.log(iday);
    console.log(ireserve);
    const senddata = {
      ireserve: ireserve,
      iday: iday,
    };
    try {
      const data = await postCampingCancel(senddata);
      console.log("성공?", data);
    } catch (err) {
      console.log(err);
    }
  };
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
                    <span className="title">캠핑장 전화번호</span>
                    <span>{item.campPhone}</span>
                  </li>
                  <li>
                    <button
                      className="cancel_button"
                      onClick={e =>
                        handleCampingCancel(item.iday, item.ireserve)
                      }
                    >
                      캠핑예약취소
                    </button>
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
