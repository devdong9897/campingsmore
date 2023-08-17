import React, { useRef, useState } from "react";
import { SignUpForm } from "../css/signup-style";
import { SignupFetch } from "../api/userFatch";
import DaumPost from "../api/DaumPost";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
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


  const [daumPost, setDaumPost] = useState(false);
  const [fullAddress, setFullAddress] = useState("");

  const navigate = useNavigate();

  const handleAddressCall = () => {
    setDaumPost(true);
  };

  const handleGenderChange = e => {
    setSelectedGender(e.target.value);
    console.log(e.target.value);
  };

  const handleRoleChange = e => {
    setSelectedRole(e.target.value);
    console.log(e.target.value);
  };

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

  const handleSignup = async e => {
    e.preventDefault();
    passCheck();
    const newUser = {
      uid: userid,
      upw: password,
      email: email,
      name: username,
      birth_date: birth,
      phone: phonenum,
      gender: selectedGender,
      user_address: fullAddress,
      role: selectedRole,
    };
    if (Object.values(newUser).some(value => !value)) {
      alert("모든 필드를 입력하세요");
    } else {
      const result = await SignupFetch(newUser);
      navigate("/");
    }
  };

  return (
    <SignUpForm>
            {daumPost ? (
        <DaumPost setFullAddress={setFullAddress} setDaumPost={setDaumPost} daumPost={daumPost} />
      ) : (
        ""
      )}
      <div className="signup_title">회원가입</div>
      <form className="signup_form">
        <div className="select_gender">
          <span>성별</span>
          <div className="gender_box">
            <label
              htmlFor="gender_male"
              className={`gender_label ${
                selectedGender === "0" ? "selected" : ""
              }`}
            >
              남자
              <input
                type="radio"
                value="0"
                name="gender"
                id="gender_male"
                checked={selectedGender === "0"}
                onChange={handleGenderChange}
              />
            </label>
            <label
              htmlFor="gender_female"
              className={`gender_label ${
                selectedGender === "1" ? "selected" : ""
              }`}
            >
              여자
              <input
                type="radio"
                value="1"
                name="gender"
                id="gender_female"
                checked={selectedGender === "1"} // 선택된 성별과 일치할 때 체크
                onChange={handleGenderChange}
              />
            </label>
          </div>
        </div>
        <div className="input_info_area">
          <div className="input_left">
            <div className="input_id">
              <span>아이디</span>
              <input
                type="text"
                placeholder="이메일을 입력하세요"
                onChange={e => setUserId(e.target.value)}
              ></input>
            </div>
            <div className="input_password">
              <span>비밀번호</span>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="password"
                onChange={e => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="input_password_check">
              <span>비밀번호 확인</span>
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
          </div>
          <div className="input_right">
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
                type="text"
                placeholder="생년월일을 입력하세요"
                className="phone_number"
                maxLength="8"
                value={birth}
                onChange={e => {
                  const inputText = e.target.value;
                  if (/^\d*$/.test(inputText) && inputText.length <= 8) {
                    setBirth(inputText);
                  } else {
                    alert("숫자만 입력해주세요");
                    setBirth("");
                  }
                }}
              ></input>
            </div>
            <div className="input_address">
              <span>주소입력</span>
              <input
                type="text"
                placeholder="주소를 입력하세요"
                className="phone_number"
                onClick={handleAddressCall}
                value={fullAddress}
              ></input>
            </div>
            <div className="input_phone">
              <span>전화번호</span>
              <input
                type="text"
                placeholder="전화번호를 입력하세요"
                className="phone_number"
                maxLength="12"
                value={phonenum}
                onChange={e => {
                  const inputText = e.target.value;
                  if (/^\d*$/.test(inputText) && inputText.length <= 12) {
                    setPhonenum(inputText);
                  } else {
                    alert("숫자만 입력해주세요");
                    setPhonenum("");
                  }
                }}
              ></input>
            </div>
          </div>
        </div>
        <div className="input_role">
          <span>사용자 유형</span>
          <div className="role_box">
            <label
              htmlFor="role_user"
              className={`role_label ${
                selectedRole === "USER" ? "selected" : ""
              }`}
            >
              유저
              <input
                type="radio"
                value="USER"
                name="role"
                id="role_user"
                checked={selectedRole === "USER"} // 선택된 성별과 일치할 때 체크
                onChange={handleRoleChange}
              />
            </label>
            <label
              htmlFor="role_admin"
              className={`role_label ${
                selectedRole === "ADMIN" ? "selected" : ""
              }`}
            >
              관리자
              <input
                type="radio"
                value="ADMIN"
                name="gender"
                id="role_admin"
                checked={selectedRole === "ADMIN"} // 선택된 성별과 일치할 때 체크
                onChange={handleRoleChange}
              />
            </label>
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
