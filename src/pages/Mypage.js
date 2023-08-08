import React, { useState } from "react";
import { MypageWrapper } from "../css/mypage-style";
import EditInformation from "../components/EditInformation";
import PurchaseHistory from "../components/PurchaseHistory";
import ReviewHistory from "../components/ReviewHistory";
import WritingHistory from "../components/WritingHistory";
import DibsList from "../components/DibsList";
import { cookies } from "../api/cookie";
import { useEffect } from "react";
import { getMypageReviewData, getPurchaseData } from "../api/mypageFatch";

const Mypage = () => {
  const [menuindex, setMenuIndex] = useState(0);

  //마이페이지 정보 state
  // 구매내역 state
  const [purchase, setPurchase] = useState([]);
  // 리뷰목록 state
  const [review, setReview] = useState([]);

  const handleMenuChange = index => {
    setMenuIndex(index);
    if (index == 1) {
      getPurchase();
    }
    if (index == 2) {
      getReview();
    }
    if (index == 1) {
      getPurchase();
    }
    if (index == 1) {
      getPurchase();
    }
    if (index == 1) {
      getPurchase();
    }
  };

  // 구매내역 실행
  const getPurchase = async () => {
    try {
      const data = await getPurchaseData();
      setPurchase(data);
      console.log(data);
      console.log("여기에는 어캐 받나", purchase);
    } catch (err) {
      console.log(err);
    }
  };

  const getReview = async () => {
    try {
      const data = await getMypageReviewData();
      setReview(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const menuComponents = [
    () => <EditInformation />,
    () => <PurchaseHistory purchase={purchase} />,
    () => <ReviewHistory review={review} />,
    () => <WritingHistory />,
    () => <DibsList />,
  ];

  useEffect(() => {
    getPurchase();
  }, []);
  return (
    <MypageWrapper menuindex={menuindex}>
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
                <li key={index} onClick={() => handleMenuChange(index)}>
                  {menu}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="my_contents">
          {menuComponents[menuindex]()}
          {/* {purchase.map((item, index) => (
            <li key={index}>
              {item.itemList.map((subitem, subindex) => (
                <div className="inner" key={subindex}>
                  <div className="purchase_img">
                    <img src={subitem.pic}></img>
                  </div>
                  <div className="purchase_info_box">
                    <span className="purchase_date">2020-07-22</span>
                    <span className="purchase_info">
                      <p>BBQ 황금올리브</p>
                      <p>여기게 뭐지?</p>
                    </span>
                    <span>12000원</span>
                  </div>
                </div>
              ))}
            </li>
          ))} */}
        </div>
      </div>
    </MypageWrapper>
  );
};

export default Mypage;
