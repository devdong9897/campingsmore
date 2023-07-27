import React from "react";
import { FindPassWordForm } from "../css/FindPassWord-style";
import { useNavigate } from "react-router";

const FindPassWord = () => {
  const navigate = useNavigate();

  const handletoChangepass = () => {
    navigate("/passchange");
  };
  return (
    <FindPassWordForm>
      <div className="password_title">
        <span className="large_title">비밀번호 찾기</span>
        <span className="desc">
          회원님의 아이디와 이름 전화번호를 입력해주세요
        </span>
      </div>
      <form className="password_find_form">
        <span>아이디</span>
        <input type="text" placeholder="아이디를 입력하세요"></input>
        <span>이름</span>
        <input type="text" placeholder="이름을 입력하세요"></input>
        <span>전화번호</span>
        <input type="number" placeholder="전화번호를 입력하세요"></input>
      </form>
      <button className="find_password_comfirm" onClick={handletoChangepass}>
        비밀번호 찾기
      </button>
      <div className="to_back">
        <button className="to_back_btn">뒤로가기</button>
      </div>
    </FindPassWordForm>
  );
};

export default FindPassWord;
