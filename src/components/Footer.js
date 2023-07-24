import React from "react";
import { FooterWrapper } from "../css/footer-style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="inner">
        <div className="footer_right">
          <div className="customer service">
            <span>고객센터</span>
            <span>
              1577-00700<p>09:00 ~ 18:00</p>
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
              <p>(주) 팀명</p>
              <p>대표이사:한경원</p>
            </span>
          </div>
        </div>
        <div className="footer_left"></div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
