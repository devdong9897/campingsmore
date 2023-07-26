import React from "react";
import { Logininner } from "../css/login-style";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Logininner>
      <div className="login_logo"></div>
      <form className="login_form">
        <span>이메일</span>
        <input type="text" placeholder="이메일을 입력하세요"></input>
        <span>비밀번호</span>
        <input type="password" placeholder="비밀번호를 입력하세요"></input>
      </form>
      <div className="to_signup">
        <span>회원이 아니세요?</span>
        <span>
          <Link to="/signup">회원가입</Link>
        </span>
      </div>
      <div className="find_account">
        <span>로그인에 도움이 필요하세요?</span>
        <span>
          <Link to="/findid">아이디 찾기</Link>
        </span>
        <span>
          <Link to="/passwordresult">비밀번호 찾기</Link>
        </span>
      </div>
      <div className="do_login">
        <button className="login_submit_btn">로그인</button>
      </div>
      <ul className="sub_login">
        <li>
          <button>카카오 로그인</button>
        </li>
        <li>
          <button>구글 로그인</button>
        </li>
        <li>
          <button>네이버 로그인</button>
        </li>
      </ul>
      <div className="non_member">
        <Link to="/main">비회원으로 계속하기</Link>
      </div>
    </Logininner>
  );
};

export default Login;
