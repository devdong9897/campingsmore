import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "../css/header-style";

const Header = () => {
  return (
    <HeaderContainer>
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
              <Link to="/main/paymentmodal">장터보기</Link>
            </li>
            <li>
              <Link to="/main">캠핑예약</Link>
            </li>
            <li>
              <Link to="/main/community">커뮤니티</Link>
            </li>
          </ul>
        </div>
        <div className="account">
          <ul className="account_list">
            <li>
              <Link to="/">로그인</Link>
            </li>
            <li>
              <Link to="/main/mypage">회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
