import React from "react";
import { FooterWrapper } from "../css/footer-style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="inner">
        <div className="footer_right">
          <div className="customer_service">
            <span className="service_title">고객센터</span>
            <span className="service_number">
              1577-00700<p>09:00~18:00</p>
            </span>
          </div>
          <ul className="site_info_list">
            <li>
              <Link to="/">이용약관</Link>
            </li>
            <li>
              <Link to="/">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="/">고객센터</Link>
            </li>
            <li>
              <Link to="/">전체서비스</Link>
            </li>
            <li>
              <Link to="/">회사소개</Link>
            </li>
            <li>
              <Link to="/">광고문의</Link>
            </li>
          </ul>
          <div className="site_address">
            <span>
              <p>(주) 캠핑이지</p>
              <p>대표이사: 캠핑족</p>
              <p>미국 워싱턴주 벨뷰</p>
            </span>
            <span>
              <p>CampingSmore@gmail.com</p>
              <p>사업자등록번호: 00-00-000-0</p>
            </span>
            <span>
              <p>사업자정보확인</p>
              <p>통신판매업신고 제 20220 나부선주-199호</p>
            </span>
          </div>
        </div>
        <div className="footer_left">
          <ul className="footer_nav_menu">
            <li>
              <Link to="/">회원탈퇴</Link>
            </li>
            <li>
              <Link to="/">회원가입</Link>
            </li>
            <li>
              <Link to="/">커뮤니티</Link>
            </li>
            <li>
              <Link to="/">주문하기</Link>
            </li>
          </ul>
          <div className="footer_logo">
            <img src="/image/word_logo.png"></img>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
