import React from "react";
import { useNavigate } from "react-router";
import { Passcomplete } from "../css/passWordResult-style";
import { useSearchParams } from "react-router-dom";

const PassWordResult = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const eamil = searchParams.get("mail");
  console.log(eamil);
  const handleToLogin = () => {
    navigate("/");
  };

  return (
    <Passcomplete>
      <div className="passcom_title">
        <span className="large_title">비밀번호 변경완료</span>
      </div>
      <div className="passcom_box">
        <span>
          회원님의 임시 비밀번호가
          <br />
          {eamil} 메일로 전송되었습니다.
        </span>
      </div>
      <div className="to_login">
        <button className="to_login_btn" onClick={handleToLogin}>
          로그인
        </button>
      </div>
    </Passcomplete>
  );
};

export default PassWordResult;
