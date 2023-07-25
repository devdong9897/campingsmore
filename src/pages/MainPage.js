import React from "react";
import { MainWarp } from "../css/main-style";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderList from "./OrderList";
import Community from "./Community";
import OrderHistory from "./OrderHistory";

import { Route, Routes } from "react-router-dom";
import MainContents from "./MainContents";

const MainPage = () => {
  return (
    <MainWarp>
      <Header />
      <Routes>
        <Route path="/" element={<MainContents />} />
        <Route path="/orderlist" element={<OrderList />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/orderhistory" element={<OrderHistory />}></Route>
      </Routes>
      <Footer />
    </MainWarp>
  );
};

export default MainPage;
