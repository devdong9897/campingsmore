import React, { useRef, useState } from "react";
import { EditWrapper } from "../css/mypage-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faIdCardClip,
  faKey,
  faReplyAll,
  faSquarePen,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AccoutwithdrawalFetch } from "../api/userFatch";
import DaumPost from "../api/DaumPost";
import EditConformModal from "./modal/EditConfirmModal";
import { json } from "react-router";

const EditInformation = ({ isWithdrawal, userData }) => {
  // 디스패치!!
  const dispatch = useDispatch();
  // 유저아이디 값
  const UserInfo = useSelector(state => state.user.UserProFileArr);
  // 다음POST 불러오기 state
  const [mypageDaum, setMypageDaum] = useState(false);
  // 최종확인 모달 state
  const [EditconfirmState, seteditconfirmState] = useState(false);

  console.log(userData);

  const [fixPass, setfixPass] = useState("");
  const [fixEmail, setFixEmail] = useState("");
  const [fixName, setFixName] = useState("");
  const [fixbirth, setFixBirth] = useState("");
  const [fixPhone, setFixPhone] = useState("");
  const [fixAddress, setFixAddress] = useState("");
  const [fixData, setFixData] = useState([]);
  const [fixImg, setFixImg] = useState("");

  const [something, setSomething] = useState(false);

  // 에딧핸들러
  const editall = e => {
    e.preventDefault();
    setSomething(true);
  };

  // 수정완료 핸들러
  const editSubmit = e => {
    e.preventDefault();
    const editUser = {
      uid: userData.user_id,
      upw: fixPass,
      email: fixEmail !== "" ? fixEmail : userData.email,
      name: fixName !== "" ? fixName : userData.name,
      birth_date: fixbirth !== "" ? fixbirth : userData.birth_date,
      phone: fixPhone !== "" ? fixPhone : userData.phone,
      user_address: fixAddress !== "" ? fixAddress : userData.user_address,
      user_address_detail: "not yet",
    };
    if (!editUser.upw) {
      alert("비밀번호를 입력해주세요");
    } else {
      seteditconfirmState(true);
      setFixData(editUser);
    }
  };

  // 이미지 업로드하면 이렇게 담김
  const imageHandler = e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("pic", file);
    console.log("폼데이터가 뭔디", formData);
    setFixImg(file);
  };

  const handlewWithDrawal = () => {
    // console.log(UserInfo);
    isWithdrawal(true);
  };

  const handlEditCancle = () => {
    setSomething(false);
  };

  const handleDaumState = () => {
    setMypageDaum(true);
  };

  return (
    <EditWrapper something={something}>
      {mypageDaum ? (
        <DaumPost
          mypageDaum={mypageDaum}
          setMypageDaum={setMypageDaum}
          setFixAddress={setFixAddress}
        />
      ) : (
        ""
      )}
      {EditconfirmState ? (
        <EditConformModal
          seteditconfirmState={seteditconfirmState}
          fixData={fixData}
          setSomething={setSomething}
          fixImg={fixImg}
        />
      ) : (
        ""
      )}
      <div className="security_set">
        <div className="security_title">
          <span>기본보안설정</span>
          <div className="security_btns">
            <button className="edit_cancel" onClick={handlEditCancle}>
              <FontAwesomeIcon icon={faReplyAll} /> 취소
            </button>
            <button className="edit_submit_btn" onClick={editSubmit}>
              개인정보수정 완료
            </button>
            <button className="edit_all_btn" onClick={editall}>
              일괄수정
            </button>
          </div>
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faUnlockKeyhole} />
            </span>
            <span className="setting_name">비밀번호 설정</span>
            <input
              type="password"
              className="password_input"
              placeholder="비밀번호를 입력하세요"
              onChange={e => setfixPass(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faIdCardClip} />
            </span>
            <span className="setting_name">{userData.email}</span>
            <input
              type="text"
              className="email_input"
              placeholder={userData.email}
              onChange={e => setFixEmail(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="info_set">
        <span className="info_set_title">개인정보설정</span>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">성함</span>
            <span className="setting_name">{userData.name}</span>
            <input
              type="text"
              className="name_input"
              placeholder={userData.name}
              onChange={e => setFixName(e.target.value)}
            ></input>
          </div>
          {/* <button className="edit_button">수정</button>
          <button className="comfrom_button">완료</button> */}
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">생년월일</span>
            <span className="setting_name">{userData.birth_date}</span>
            <input
              type="text"
              className="birth_input"
              placeholder={userData.birth_date}
              maxLength="8"
              value={fixbirth}
              onChange={e => {
                const inputText = e.target.value;
                if (/^\d*$/.test(inputText) && inputText.length <= 8) {
                  setFixBirth(inputText);
                } else {
                  alert("생년월일 형식은 숫자로 예)19960805 8자로 입력하세요");
                  setFixBirth("");
                }
              }}
            ></input>
          </div>
          {/* <button className="edit_button">수정</button>
          <button className="comfrom_button">완료</button> */}
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">전화번호</span>
            <span className="setting_name">{userData.phone}</span>
            <input
              type="text"
              className="phone_input"
              placeholder={userData.phone}
              value={fixPhone}
              onChange={e => {
                const inputText = e.target.value;
                if (/^\d*$/.test(inputText) && inputText.length <= 12) {
                  setFixPhone(inputText);
                } else {
                  alert("전화번호는 숫자로 입력해주세요");
                  setFixPhone("");
                }
              }}
            ></input>
          </div>
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">주소</span>
            <span className="setting_name">{userData.user_address}</span>
            <input
              type="text"
              className="phone_input"
              placeholder={"주소를 입력하세요"}
              onClick={handleDaumState}
              value={fixAddress}
            ></input>
          </div>
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">프로필 이미지</span>
            <input type="file" onChange={imageHandler}></input>
          </div>
        </div>
      </div>
      <div className="withdrawal_account">
        <button onClick={handlewWithDrawal} className="withdrawal_btn">
          회원탈퇴
        </button>
      </div>
    </EditWrapper>
  );
};

export default EditInformation;
