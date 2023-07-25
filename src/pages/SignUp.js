import React, { useRef } from "react";

import { SignUpForm } from "../css/signup-style";

// const StyledRadioButtons = () => {
//   const maleRef = useRef(null);
//   const femaleRef = useRef(null);

//   const handleRadioChange = e => {
//     if (e.target.value === "남자") {
//       maleRef.current.style.backgroundColor = "yellow";
//       femaleRef.current.style.backgroundColor = "black";
//     } else if (event.target.value === "여자") {
//       maleRef.current.style.backgroundColor = "#f3eddd";
//       femaleRef.current.style.backgroundColor = "yellow";
//     }
//   };

// };

const SignUp = () => {
  return (
    <SignUpForm>
      <div className="signup_inner">
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
            ></input>
          </div>
          <div className="input_password">
            <span>비밀번호</span>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="password"
            ></input>
          </div>
          <div className="input_password_check">
            <span>비밀번호 확인</span>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              className="password_check"
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
          <div className="input_phone">
            <span>전화번호</span>
            <input
              type="number"
              placeholder="전화번호를 입력하세요"
              className="phone_number"
            ></input>
          </div>
        </form>
        <div className="confirm_box">
          <button className="signup_confirm">회원가입</button>
          <button className="back">뒤로가기</button>
        </div>
      </div>
    </SignUpForm>
  );
};

export default SignUp;
