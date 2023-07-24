import React from "react";
import { MainWarp } from "../css/main-style";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import MainContents from "./MainContents";

const MainPage = () => {
  return (
    <MainWarp>
      <Header />
      <Routes>
        <Route path="/" element={<MainContents />} />
      </Routes>
      <Footer />
    </MainWarp>
  );
};

export default MainPage;
