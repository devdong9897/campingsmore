import React, { useRef, useState } from "react";
import { EditWrapper } from "../css/mypage-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faIdCardClip,
  faSquarePen,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";

const EditInformation = () => {
  const [something, setSomething] = useState(false);
  const editall = e => {
    e.preventDefault();
    setSomething(true);
  };
  const editSubmit = e => {
    e.preventDefault();
    setSomething(false);
  };
  return (
    <EditWrapper something={something}>
      <div className="security_set">
        <div className="security_title">
          <span>기본보안설정</span>
          <button className="edit_all_btn" onClick={editall}>
            일괄수정
          </button>
          <button className="edit_submit_btn" onClick={editSubmit}>
            수정완료
          </button>
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
            ></input>
          </div>
          {/* <button className="edit_button">수정</button>
          <button className="comfrom_button">완료</button> */}
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faIdCardClip} />
            </span>
            <span className="setting_name">이메일 설정</span>
            <input
              type="text"
              className="email_input"
              placeholder="이메일을 입력하세요"
            ></input>
          </div>

          {/* <button className="edit_button">수정</button>
          <button className="comfrom_button">완료</button> */}
        </div>
      </div>
      <div className="info_set">
        <span className="info_set_title">개인정보설정</span>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faSquarePen} />
            </span>
            <span className="setting_name">닉네임 설정</span>
            <input
              type="password"
              className="nickname_input"
              placeholder="닉네임을 입력하세요"
            ></input>
          </div>

          {/* <button className="edit_button">수정</button>
          <button className="comfrom_button">완료</button> */}
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faSquarePen} />
            </span>
            <span className="setting_name">이름</span>
            <input
              type="text"
              className="name_input"
              placeholder="이름을 입력하세요"
            ></input>
          </div>
          {/* <button className="edit_button">수정</button>
          <button className="comfrom_button">완료</button> */}
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faSquarePen} />
            </span>
            <span className="setting_name">생년월일</span>
            <input
              type="number"
              className="birth_input"
              placeholder="이름을 입력하세요"
            ></input>
          </div>
          {/* <button className="edit_button">수정</button>
          <button className="comfrom_button">완료</button> */}
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faSquarePen} />
            </span>
            <span className="setting_name">전화번호</span>
            <input
              type="number"
              className="phone_input"
              placeholder="전화번호를 입력하세요"
            ></input>
          </div>
          {/* <button className="edit_button">수정</button>
          <button className="comfrom_button">완료</button> */}
        </div>
      </div>
    </EditWrapper>
  );
};

export default EditInformation;
