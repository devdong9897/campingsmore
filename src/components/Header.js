import React from "react";
import { HeaderContainer } from "../css/header-style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner">
        <div className="logo"></div>
        <div className="gnb_area">
          <ul className="gnb_list">
            <li>
              <Link to="/main">메인페이지</Link>
            </li>
            <li>
              <Link to="/main/orderlist">주문하기</Link>
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
          <ul>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
