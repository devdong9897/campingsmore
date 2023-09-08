import React, { useState } from "react";
import { MypageWrapper } from "../css/myPageStyle/mypage-style";
import EditInformation from "../components/EditInformation";
import PurchaseHistory from "../components/PurchaseHistory";
import ReviewHistory from "../components/ReviewHistory";
import WritingHistory from "../components/WritingHistory";
import DibsList from "../components/DibsList";
import { cookies, getCookie } from "../api/cookie";
import { useEffect } from "react";
import {
  getCommunityData,
  getMyProfileData,
  getMypageReviewData,
  getPurchaseData,
  getreservationData,
} from "../api/mypageFatch";
import { useDispatch, useSelector } from "react-redux";
import WithdrawalModal from "../components/modal/WithdrawalModal";
import { useSearchParams } from "react-router-dom";
import MyReservation from "../components/MyReservation";

const Mypage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const reviewCode = searchParams.get("review");
  const [menuindex, setMenuIndex] = useState(0);
  const accessToken = getCookie("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);

  // 회원탈퇴 모달 state
  const [withdrawal, isWithdrawal] = useState(false);

  // 디스패치!
  const dispatch = useDispatch();
  // 유저데이터
  const userData = useSelector(state => state.user.UserProFileArr);
  // IUSER 값
  const userIuser = useSelector(state => state.user.UserProFileArr.iuser);
  const [selected, setselected] = useState("");

  console.log("유저데이터??!?!", userData);

  // 구매내역 state
  const [purchase, setPurchase] = useState([]);
  // 리뷰목록 state
  const [review, setReview] = useState([]);
  // 게시글 목록 state
  const [comulist, setComuList] = useState([]);
  // 예약내역 state
  const [reserList, setReserList] = useState([]);
  const baseUrl = "http://192.168.0.144:5005/img/";

  const handleMenuChange = index => {
    setselected(true);
    setMenuIndex(index);
    if (index == 1) {
      getPurchase();
    }
    if (index == 2) {
      getReview();
    }
    if (index == 3) {
      getCommunity();
    }
    if (index == 4) {
      getPurchase();
    }
    if (index == 5) {
      reservationData();
    }
  };

  // 예약내역 실행
  const reservationData = async () => {
    try {
      const data = await getreservationData();
      console.log("내 예약내역", data);
      setReserList(data);
    } catch (err) {
      console.log(err);
    }
  };

  // 구매하고 들어왔을 때 실행
  const linkto = reviewCode => {
    if (reviewCode) {
      setMenuIndex(reviewCode);
    } else {
      return;
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

  // 리뷰내역 실행
  const getReview = async () => {
    try {
      const data = await getMypageReviewData();
      setReview(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // 게시글내역 실행
  const getCommunity = async () => {
    try {
      const data = await getCommunityData();
      setComuList(data);
      console.log("게시글내역", data);
    } catch (err) {
      console.log(err);
    }
  };

  const menuComponents = [
    () => <EditInformation isWithdrawal={isWithdrawal} userData={userData} />,
    () => <PurchaseHistory purchase={purchase} />,
    () => <ReviewHistory review={review} />,
    () => <WritingHistory comulist={comulist} getCommunity={getCommunity} />,
    () => <DibsList />,
    () => <MyReservation reserList={reserList} />,
  ];

  useEffect(() => {
    getPurchase();
    linkto(reviewCode);
  }, [reviewCode]);
  return (
    <MypageWrapper selected={selected}>
      {withdrawal ? (
        <WithdrawalModal userIuser={userIuser} isWithdrawal={isWithdrawal} />
      ) : (
        ""
      )}
      <div className="mypage_inner">
        <div className="my_menu">
          <span className="my_menu_title">마이페이지</span>
          <div className="profile_img_box">
            <img src={baseUrl + userData.pic}></img>
          </div>
          <div className="profile_info">
            <span className="profile_name">{userData.name}</span>
            <span className="profile_email">{userData.email}</span>
            <span className="profile_id">{userData.user_id}</span>
          </div>
          <ul className="my_menu_list">
            {[
              "개인정보수정",
              "구매내역",
              "리뷰내역",
              "작성글",
              "찜내역",
              "캠핑예약내역",
            ].map((menu, index) => (
              <li key={index} onClick={() => handleMenuChange(index)}>
                {menu}
              </li>
            ))}
          </ul>
        </div>
        <div className="my_contents">{menuComponents[menuindex]()}</div>
      </div>
    </MypageWrapper>
  );
};

export default Mypage;
