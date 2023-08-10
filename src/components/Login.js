import React, { useState } from "react";
import { Logininner } from "../css/login-style";
import { Link, useNavigate } from "react-router-dom";
import { getUserData, loginFetch } from "../api/userFatch";
import { fetchLogin } from "../api/client";
import { useDispatch } from "react-redux";
import { getBasketList } from "../api/basketFetch";
import { getCookie } from "../api/cookie";

const Login = () => {
  const accessToken = getCookie("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async e => {
    if (id === "" || pass === "") {
      alert("아이디와 비밀번호를 입력해주세요");
    }
    try {
      e.preventDefault();
      await fetchLogin(id, pass);
      await getUserData(dispatch);
      await getBasketList(dispatch);
      setId("");
      setPass("");
      navigate("/main");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Logininner>
      <div className="login_logo"></div>
      <form className="login_form">
        <span>이메일</span>
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={e => setId(e.target.value)}
        ></input>
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={e => setPass(e.target.value)}
        ></input>
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
        <button className="login_submit_btn" onClick={handleLogin}>
          로그인
        </button>
      </div>
      <ul className="sub_login">
        <li>
          <button className="kakao">카카오 로그인</button>
        </li>
        <li>
          <button className="google">구글 로그인</button>
        </li>
        <li>
          <button className="naver">네이버 로그인</button>
        </li>
      </ul>
      <div className="non_member">
        <Link to="/main">비회원으로 계속하기</Link>
      </div>
    </Logininner>
  );
};

export default Login;
