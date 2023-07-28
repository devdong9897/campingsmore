import React, { useState } from "react";
import { MypageWrapper } from "../css/mypage-style";
import EditInformation from "../components/EditInformation";
import PurchaseHistory from "../components/PurchaseHistory";
import ReviewHistory from "../components/ReviewHistory";
import WritingHistory from "../components/WritingHistory";
import DibsList from "../components/DibsList";

const Mypage = () => {
  const [menuindex, setMenuIndex] = useState(0);

  const menuComponents = [
    () => <EditInformation />,
    () => <PurchaseHistory />,
    () => <ReviewHistory />,
    () => <WritingHistory />,
    () => <DibsList />,
  ];

  console.log(menuindex);
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
            {["개인정보수정", "구매내역", "리뷰내역", "작성글", "찜하기"].map(
              (menu, index) => (
                <li key={index} onClick={() => setMenuIndex(index)}>
                  {menu}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="my_contents">{menuComponents[menuindex]()}</div>
      </div>
    </MypageWrapper>
  );
};

export default Mypage;
