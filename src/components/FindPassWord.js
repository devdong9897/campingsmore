import React, { useState } from "react";
import { FindPassWordForm } from "../css/FindPassWord-style";
import { useNavigate } from "react-router";
import { FindPasswordFetch } from "../api/userFatch";

const FindPassWord = () => {
  const navigate = useNavigate();
  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [email,setemail] = useState("");

  const handletoChangepass = async() => {
    const FindPw = {
      id:id,
      name:name,
      email:email
    }
    try{
      const data = await FindPasswordFetch(FindPw);
      // navigate("/passchange");
    }catch(err){
      console.log(err);
    }
    navigate("/passwordresult")

  };
  const handleToBack = () => {
    navigate("/");
  }
  return (
    <FindPassWordForm>
      <div className="password_title">
        <span className="large_title">비밀번호 찾기</span>
        <span className="desc">
          회원님의 아이디와 이름 이메일을 입력해주세요
        </span>
      </div>
      <form className="password_find_form">
        <span>이름</span>
        <input type="text" placeholder="이름을 입력하세요" value={id} onChange={e => setId(e.target.value)}></input>
        <span>아이디</span>
        <input type="text" placeholder="아이디를 입력하세요" value={name} onChange={e => setName(e.target.value)}></input>
        <span>이메일</span>
        <input type="text" placeholder="이메일을 입력하세요" value={email} onChange ={ e => setemail(e.target.value)}></input>
      </form>
      <button className="find_password_comfirm" onClick={handletoChangepass}>
        비밀번호 찾기
      </button>
      <div className="to_back">
        <button className="to_back_btn" onClick={handleToBack}>뒤로가기</button>
      </div>
    </FindPassWordForm>
  );
};

export default FindPassWord;
