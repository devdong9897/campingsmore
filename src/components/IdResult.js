import React from "react";
import { IdResultForm } from "../css/IdResult-style";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const IDResult = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const idresult = searchParams.get("findid");
  console.log(idresult);

  const handleToLogin = () => {
    navigate("/");
  };

  const handleToFps = () => {
    navigate("/findpassword");
  };

  return (
    <IdResultForm>
      <div className="findid_title">
        <span className="large_title">아이디 찾기 결과</span>
      </div>
      <div className="id_result_box">
        <span>
          회원님의 아이디찾기 결과 입니다.
          <br />
          <p className="id_result">{idresult}</p>
        </span>
      </div>
      <button className="find_password" onClick={handleToFps}>
        비밀번호 찾기
      </button>
      <div className="to_login">
        <button className="to_login_btn" onClick={handleToLogin}>
          로그인
        </button>
      </div>
    </IdResultForm>
  );
};

export default IDResult;
