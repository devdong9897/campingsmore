import React from "react";
import { FindidForm } from "../css/FindID-style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getFindAccount } from "../api/userFatch";

const FindID = () => {
  const navigate = useNavigate();
  const [Fname, setFName] = useState();
  const [phone, setPhone] = useState();
  const [Fbirth, setFBirth] = useState();
  const [FindInfo, setFindInfo] = useState();
  const [findResult, setFindResult] = useState("");

  // // 아이디찾기할 정보를 전달하고
  // const getFindAccountData = async FindIDInfo => {
  //   try {
  //     const data = getFindAccount(FindIDInfo);
  //     setFindInfo(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // 아이디찾을 결과 값을 받아라
  const handleidResult = async e => {
    e.preventDefault();
    const FindIdInfo = {
      name: Fname,
      phone: phone,
      birth: Fbirth,
    };
    if (Object.values(FindIdInfo).some(value => !value)) {
      alert("입력란을 전부 입력하세요");
    } else {
      try {
        const data = await getFindAccount(FindIdInfo);
        setFindResult(data);
        console.log(data);
        navigate(`/idresult?findid=${data}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleToBack = () => {
    navigate("/");
  };

  return (
    <FindidForm>
      <div className="findid_title">
        <span className="large_title">아이디 찾기</span>
        <span className="desc">회원님의 이름과 전화번호를 입력해주세요</span>
      </div>
      <form className="id_find_form">
        <span>이름</span>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={e => setFName(e.target.value)}
        ></input>
        <span>전화번호</span>
        <input
          type="text"
          placeholder="전화번호를 입력하세요"
          maxLength="16"
          value={phone}
          onChange={e => {
            const inputText = e.target.value;
            if (/^\d*$/.test(inputText) && inputText.length <= 16) {
              setPhone(inputText);
            } else {
              alert("숫자만 입력해주세요");
              setPhone("");
            }
          }}
        ></input>
        <span>생년월일</span>
        <input
          type="text"
          placeholder="생년월일을 입력하세요"
          value={Fbirth}
          onChange={e => {
            const inputText = e.target.value;
            if (/^\d*$/.test(inputText) && inputText.length <= 7) {
              console.log(inputText.length);
              setFBirth(inputText);
            } else {
              const year = inputText.substring(0, 4);
              const month = inputText.substring(4, 6);
              const day = inputText.substring(6, 8);
              const formatted = `${year}-${month}-${day}`;
              // alert("숫자만 입력해주세요");
              setFBirth(formatted);
            }
          }}
        ></input>
      </form>
      <button className="find_id_comfirm" onClick={handleidResult}>
        아이디 찾기
      </button>
      <div className="to_back">
        <button className="to_back_btn" onClick={handleToBack}>
          뒤로가기
        </button>
      </div>
    </FindidForm>
  );
};

export default FindID;
