import React, { useRef, useState } from "react";
import DaumPostCode from "react-daum-postcode";
import { SignUpForm } from "../css/signup-style";
import { SignupFetch } from "../api/userFatch";

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gender, setGender] = useState("0");
  const [userid, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [passMatch, setPassMatch] = useState(false);
  const [username, setUserName] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [nickname, setNickname] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [role, setRole] = useState("0");

  // 처리
  // if (password === passconfirm) {
  //   setPassMatch(true);
  // }

  const passCheck = () => {
    if (password != passconfirm) {
      alert("비밀번호를 다시 확인해주세요");
    } else {
      return;
    }
  };

  console.log("패스워드", password);
  console.log("패스워드확인", passconfirm);
  const handleSignup = e => {
    e.preventDefault();
    passCheck();
    const newUser = {
      uid: userid,
      upw: password,
      email: email,
      name: username,
      birth_date: birth,
      phone: phonenum,
      gender: 0,
      user_address: address,
      role: "USER",
    };
    SignupFetch(newUser);
  };
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
        <div className="input_id">
          <span>아이디</span>
          <input
            type="text"
            placeholder="이메일을 입력하세요"
            onChange={e => setUserId(e.target.value)}
          ></input>
        </div>
        <div className="input_password">
          <span>
            비밀번호
            <p>{password === passMatch ? "일치합니다" : "불일치"}</p>
          </span>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="password"
            onChange={e => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="input_password_check">
          <span>
            비밀번호 확인
            <p>{password === passMatch ? "일치합니다" : "불일치"}</p>
          </span>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            className="password_check"
            onChange={e => setPassconfirm(e.target.value)}
          ></input>
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
        <div className="input_name">
          <span>이름</span>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            className="name"
            onChange={e => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="input_birth">
          <span>생년월일</span>
          <input
            type="number"
            placeholder="생년월일을 입력하세요"
            className="phone_number"
            onChange={e => setBirth(e.target.value)}
          ></input>
        </div>
        <div className="input_address">
          <span>주소입력</span>
          <input
            type="text"
            placeholder="주소를 입력하세요"
            className="phone_number"
            onChange={e => setAddress(e.target.value)}
          ></input>
        </div>
        <div className="input_phone">
          <span>전화번호</span>
          <input
            type="number"
            placeholder="전화번호를 입력하세요"
            className="phone_number"
            onChange={e => setPhonenum(e.target.value)}
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
        <button className="signup_confirm" onClick={handleSignup}>
          회원가입
        </button>
        <button className="back">뒤로가기</button>
      </div>
    </SignUpForm>
  );
};

export default SignUp;
