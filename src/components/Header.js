import React from "react";
import { HeaderContainer } from "../css/headerSt";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="inner">
        <div className="logo">로고</div>
        <div className="account">
          <ul className="account_list">
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>
        <div className="nav_box">
          <span className="gnb">
            <p>내 주변 최고의 맛집에서 주문하세요</p>
          </span>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
