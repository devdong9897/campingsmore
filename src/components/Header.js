import React, { useEffect, useState } from "react";
import { HeaderContainer } from "../css/header-style";
import { Link } from "react-router-dom";
import { cookies, getCookie } from "../api/cookie";
import { Cookies } from "react-cookie";
import { deleteCookie } from "../api/client";

const Header = () => {
  const accessToken = getCookie("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);

  useEffect(() => {}, [accessToken]);
  const [scrollOver, setScrollOver] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollOver(scrollY);
  };

  const handleLogout = () => {
    deleteCookie();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setScrolled(scrollOver > 300);
  }, [scrollOver]);

  return (
    <HeaderContainer scrollOver={scrollOver}>
      <div className="inner">
        <div className="logo"></div>
        <div className="gnb_area">
          <ul className="gnb_list">
            <li>
              <Link to="/main">메인페이지</Link>
            </li>
            <li>
              <Link to="/main/orderlist">장터보기</Link>
            </li>
            <li>
              <Link to="/main/reservation">캠핑예약</Link>
            </li>
            <li>
              <Link to="/main/community">커뮤니티</Link>
            </li>
          </ul>
        </div>
        <div className="account">
          <ul className="account_list">
            <li>
              {isLoggedIn ? (
                <button onClick={handleLogout}>로그아웃</button>
              ) : (
                <Link to="/">로그인</Link>
              )}
            </li>
            <li>{cookies ? <Link to="/main/mypage">마이페이지</Link> : ""}</li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
