import React from "react";
import { DibsWrapper } from "../css/mypage-style";

const DibsList = () => {
  return (
    <DibsWrapper>
      <ul className="dibslist_box">
        
      </ul>
      <div className="dibs_img">
        <img src="../image/zzim.png" alt="" />
        <p>찜한 내역이 없습니다.</p>
      </div>
    </DibsWrapper>
  );
};

export default DibsList;
