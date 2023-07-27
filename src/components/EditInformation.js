import React from "react";
import { EditWrapper } from "../css/mypage-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faIdCardClip,
  faSquarePen,
  faUnlockKeyhole,
} from "@fortawesome/free-solid-svg-icons";

const EditInformation = () => {
  return (
    <EditWrapper>
      <div className="security_set">
        <span className="security_title">기본보안설정</span>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faUnlockKeyhole} />
            </span>
            <span>비밀번호 설정</span>
            <input
              type="password"
              className="password_input"
              placeholder="비밀번호를 입력하세요"
            ></input>
          </div>
          <button>수정</button>
          <button>완료</button>
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faIdCardClip} />
            </span>
            <span>이메일 설정</span>
            <input
              type="text"
              className="email_input"
              placeholder="이메일을 입력하세요"
            ></input>
          </div>

          <button>수정</button>
          <button>완료</button>
        </div>
      </div>
      <div className="info_set">
        <span className="info_set_title">개인정보설정</span>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faSquarePen} />
            </span>
            <span>닉네임 설정</span>
            <input
              type="password"
              className="nickname_input"
              placeholder="닉네임을 입력하세요"
            ></input>
          </div>

          <button>수정</button>
          <button>완료</button>
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faSquarePen} />
            </span>
            <span>이름</span>
            <input
              type="text"
              className="name_input"
              placeholder="이름을 입력하세요"
            ></input>
          </div>
          <button>수정</button>
          <button>완료</button>
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faSquarePen} />
            </span>
            <span>생년월일</span>
            <input
              type="number"
              className="birth_input"
              placeholder="이름을 입력하세요"
            ></input>
          </div>
          <button>수정</button>
          <button>완료</button>
        </div>
        <div className="setting_box">
          <div className="setting">
            <span className="icon">
              <FontAwesomeIcon icon={faSquarePen} />
            </span>
            <span>전화번호</span>
            <input
              type="number"
              className="phone_input"
              placeholder="전화번호를 입력하세요"
            ></input>
          </div>

          <button>수정</button>
          <button>완료</button>
        </div>
      </div>
    </EditWrapper>
  );
};

export default EditInformation;
