import React from "react";
import { PassChangeFrom } from "../css/passchange.style";
import { useNavigate } from "react-router";

const PassChange = () => {
  const navigate = useNavigate();
  const handlemoveResultPage = () => {
    navigate("/passwordresult");
  };
  return (
    <PassChangeFrom>
      <div className="passchange_title">
        <span className="large_title">비밀번호 찾기</span>
        <span className="desc">회원님의 새 비밀번호를 입력해주세요</span>
      </div>
      <form className="pass_change_form">
        <span>비밀번호</span>
        <input type="password" placeholder="비밀번호를 입력하세요"></input>
        <span>비밀번호 확인</span>
        <input type="password" placeholder="비밀번호를 다시 입력하세요"></input>
      </form>
      <div className="to_back">
        <button className="to_back_btn" onClick={handlemoveResultPage}>
          비밀번호 설정
        </button>
      </div>
    </PassChangeFrom>
  );
};

export default PassChange;
