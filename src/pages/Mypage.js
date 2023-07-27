import React, { useState } from "react";
import { MypageWrapper } from "../css/mypage-style";
import EditInformation from "../components/EditInformation";
import PurchaseHistory from "../components/PurchaseHistory";
import ReviewHistory from "../components/ReviewHistory";
import WritingHistory from "../components/WritingHistory";

const Mypage = () => {
  const [menuindex, SetMenuIndex] = useState(0);
  return (
    <MypageWrapper>
      <div className="mypage_inner">
        <div className="my_menu">
          <span className="my_menu_title">마이페이지</span>
          <div className="profile_img_box"></div>
          <div className="profile_info">
            <span className="profile_name">신형만</span>
            <span className="profile_email">sin1990@naver.com</span>
          </div>
          <ul className="my_menu_list">
            <li>개인정보수정</li>
            <li>구매내역</li>
            <li>리뷰내역</li>
            <li>작성글</li>
            <li>찜하기</li>
          </ul>
        </div>
        <div className="my_contents">
          {/* <EditInformation /> */}
          {/* <PurchaseHistory /> */}
          {/* <ReviewHistory /> */}
          {/* <WritingHistory /> */}
        </div>
      </div>
    </MypageWrapper>
  );
};

export default Mypage;
