import React, { useEffect, useState } from "react";
import { HeaderContainer } from "../css/header-style";
import { Link } from "react-router-dom";
import { cookies, getCookie } from "../api/cookie";
import { Cookies } from "react-cookie";
import { deleteCookie } from "../api/client";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { getBasketList } from "../api/basketFetch";

const Header = () => {
  const accessToken = getCookie("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);
  // 장바구니 아이템 갯수 state
  const [basketCount, setBasketCount] = useState();

  const [scrollOver, setScrollOver] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const basketCountData = async () => {
    try {
      const data = await getBasketList();
      setBasketCount(data);
      console.log("장바구니데이터", data);
    } catch (err) {
      console.log(err);
    }
  };

  // 스크롤이벤트 핸들러
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollOver(scrollY);
  };

  // 쿠키 로그아웃
  const handleLogout = () => {
    deleteCookie();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    basketCountData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setScrolled(scrollOver > 300);
  }, [scrollOver]);

  useEffect(() => {}, [accessToken]);

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
                <button onClick={handleLogout} className="logout_btn">
                  로그아웃
                </button>
              ) : (
                <Link to="/">로그인</Link>
              )}
            </li>
            <li>
              {isLoggedIn ? (
                <Link to="/main/mypage">마이페이지</Link>
              ) : (
                <Link to="/signup">회원가입</Link>
              )}
            </li>
            <li>
              {isLoggedIn ? (
                <Link to="/main/basket">
                  장바구니
                  <span className="basket_img">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="cart_icon"
                    />
                    <p className="basket_count">SHIT</p>
                  </span>
                </Link>
              ) : (
                ""
              )}
            </li>
          </ul>
        </div>
        <div className="basket_function">
          <div className="basket_count"></div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
