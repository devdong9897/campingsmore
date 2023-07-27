import React from "react";
import { FindidForm } from "../css/FindID-style";
import { useNavigate } from "react-router-dom";

const FindID = () => {
  const navigate = useNavigate();

  const handleidResult = () => {
    navigate("/idresult");
  };

  return (
    <FindidForm>
      <div className="findid_title">
        <span className="large_title">아이디 찾기</span>
        <span className="desc">회원님의 이름과 전화번호를 입력해주세요</span>
      </div>
      <form className="id_find_form">
        <span>이름</span>
        <input type="text" placeholder="이름을 입력하세요"></input>
        <span>전화번호</span>
        <input type="number" placeholder="전화번호를 입력하세요"></input>
      </form>
      <button className="find_id_comfirm" onClick={handleidResult}>
        아이디 찾기
      </button>
      <div className="to_back">
        <button className="to_back_btn">뒤로가기</button>
      </div>
    </FindidForm>
  );
};

export default FindID;
