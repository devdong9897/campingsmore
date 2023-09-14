import React, { useState } from "react";
import { ReservationHistoryWrapper } from "../css/myPageStyle/mypage-style";
import { postCampingCancel } from "../api/userFatch";
import CampingCancelModal from "./modal/CampingCancelModal";

const MyReservation = ({ reserList, setReserList }) => {
  const [thisIday, setThisday] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [cancelData, setCancelData] = useState({});
  const handleCampingCancel = (iday, ireserve) => {
    setIsModal(true);
    setThisday(iday);
    console.log(iday);
    console.log(ireserve);
    const senddata = {
      ireserve: ireserve,
      iday: iday,
    };
    setCancelData(senddata);
  };
  const path = process.env.PUBLIC_URL;
  console.log("여잘등어오나?", reserList);
  return (
    <ReservationHistoryWrapper>
      {isModal ? (
        <CampingCancelModal
          setIsModal={setIsModal}
          cancelData={cancelData}
          setReserList={setReserList}
        />
      ) : (
        ""
      )}

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
          <div className="Wish_img">
            <img src={`${path}/image/camping_empty.com.png`} alt="" />
            <p>예약한 캠핑장이 없습니다.</p>
          </div>
        )}
      </ul>
    </ReservationHistoryWrapper>
  );
};

export default MyReservation;
