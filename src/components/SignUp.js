import React, { useRef, useState } from "react";
import DaumPostCode from "react-daum-postcode";
import { SignUpForm } from "../css/signup-style";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [gender, setGender] = useState("0");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [role, setRole] = useState("0");
  return (
    <SignUpForm>
      <div className="signup_title">회원가입</div>
      <form className="signup_form">
        <div className="select_gender">
          <span>성별</span>
          <div className="gender_box">
            <label htmlFor="gender" className="gender_male">
              남자
            </label>
            <input
              type="radio"
              value="남자"
              name="gender"
              id="gender_male"
            ></input>
            <label htmlFor="gender" className="gender_female">
              여자
            </label>
            <input type="radio" value="여자" name="gender"></input>
          </div>
        </div>
        <div className="input_email">
          <span>이메일</span>
          <input
            type="text"
            placeholder="이메일을 입력하세요"
            className="email"
            onChange={e => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="input_password">
          <span>비밀번호</span>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="password"
            onChange={setPassword}
          ></input>
        </div>
        <div className="input_password_check">
          <span>비밀번호 확인</span>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            className="password_check"
            onChange={setPassconfirm}
          ></input>
        </div>
        <div className="input_name">
          <span>이름</span>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            className="name"
          ></input>
        </div>
        <div className="input_nickname">
          <span>닉네임</span>
          <input
            type="text"
            placeholder="닉네임을 입력하세요"
            className="nickname"
          ></input>
        </div>
        <div className="input_address">
          <span>주소입력</span>
          <input
            type="text"
            placeholder="주소를 입력하세요"
            className="phone_number"
          ></input>
        </div>
        <div className="input_phone">
          <span>전화번호</span>
          <input
            type="number"
            placeholder="전화번호를 입력하세요"
            className="phone_number"
          ></input>
        </div>
        <div className="input_role">
          <span>사용자 유형</span>
          <div className="role_box">
            <label htmlFor="gender" className="gender_male">
              사용자
            </label>
            <input
              type="radio"
              value="남자"
              name="gender"
              id="gender_male"
            ></input>
            <label htmlFor="gender" className="gender_female">
              관리자
            </label>
            <input type="radio" value="여자" name="gender"></input>
          </div>
        </div>
      </form>
      <div className="confirm_box">
        <button className="signup_confirm">회원가입</button>
        <button className="back">뒤로가기</button>
      </div>
    </SignUpForm>
  );
};

export default SignUp;
