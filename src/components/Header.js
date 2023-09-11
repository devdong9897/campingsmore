import React, { useEffect, useState } from "react";
import { HeaderContainer } from "../css/header-style";
import { Link, useNavigate } from "react-router-dom";
import { cookies, getCookie } from "../api/cookie";
import { Cookies } from "react-cookie";
import { deleteCookie } from "../api/client";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getBasketList } from "../api/basketFetch";
import { UserLogout } from "../reducers/userSlice";
import { basketItemEmpty } from "../reducers/basketSlice";
import { LogoutFetch, UserLogoutFetch } from "../api/userFatch";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = getCookie("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);
  // 장바구니 아이템 갯수 state
  const userBasketCount = useSelector(state => state.basket.basketArr);

  const [scrollOver, setScrollOver] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // 스크롤이벤트 핸들러
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollOver(scrollY);
  };

  // 쿠키 로그아웃
  const handleLogout = async () => {
    try {
      deleteCookie();
      setIsLoggedIn(false);
      const LogoutEmpty = [];
      const basketEmpty = [];
      dispatch(UserLogout(LogoutEmpty));
      dispatch(basketItemEmpty(basketEmpty));
      navigate("/");
      LogoutFetch();
    } catch (err) {
      console.log(err);
    }
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

  useEffect(() => {}, [accessToken]);

  return (
    <HeaderContainer scrollOver={scrollOver}>
      <div className="inner">
        <Link to="/main">
          <div className="logo"></div>
        </Link>
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
            <li>
              <Link to="/main/about">ABOUT</Link>
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
                    <p className="basket_count">{userBasketCount.length}</p>
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
