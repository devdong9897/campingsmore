import React, { useEffect, useState } from "react";
import { MainWarp } from "../css/main-style";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderList from "./OrderList";
import Community from "./Community";
import CommunityWrite from "./CommunityWrite";
import Payment from "./Payment";
import OrderHistory from "./OrderHistory";
import OrderDetail from "./OrderDetail";
import Reservation from "./Reservation";
import MainContents from "./MainContents";
import ReservationPayment from "./ReservationPayment";
import NotFound from "./NotFound";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";
import ReviewModal from "../components/ReviewModal";
import Basket from "./Basket";
import Mypage from "./Mypage";
import CommunityBulletinBoard from "./CommunityBulletinBoard";
import { getUserData } from "../api/userFatch";
import { useDispatch } from "react-redux";
import { getBasketList } from "../api/basketFetch";
import { getMapData } from "../api/mapDataFetch";
import "../css/kakao-style.css";
import ReservationResult from "./ReservationResult";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserData(dispatch);
    getBasketList(dispatch);
    getMapData(dispatch);
  }, []);
  return (
    <MainWarp>
      <Header />
      <Routes>
        <Route path="/" element={<MainContents />} />
        <Route path="/orderlist" element={<OrderList />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/communitywrite" element={<CommunityWrite />}></Route>
        <Route
          path="/communitybulletinboard"
          element={<CommunityBulletinBoard />}
        ></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/orderhistory" element={<OrderHistory />}></Route>
        <Route path="/reviewmodal" element={<ReviewModal />}></Route>
        <Route path="/paymentmodal" element={<PaymentModal />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/orderdetail" element={<OrderDetail />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/reserresult" element={<ReservationResult />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/reservationpayment"
          element={<ReservationPayment />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </MainWarp>
  );
};

export default MainPage;
