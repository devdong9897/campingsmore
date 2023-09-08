import React from "react";
import { KakaoPayModalWrapper } from "../../css/modalStyle/modal-stylies";

const KpayModal = ({ kakaoPayResult, setKakaoModal }) => {
  console.log(kakaoPayResult);
  const handleCencel = () => {
    setKakaoModal(false);
  };
  return (
    <KakaoPayModalWrapper>
      <div className="inner">
        <div className="warning_text">
          카카오 결제를 하실려면 아래 버튼을 눌러주세요
        </div>
        <div className="modal_button">
          <button>
            <a
              href={kakaoPayResult.next_redirect_pc_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              카카오 페이로 결제하기
            </a>
          </button>
          <button onClick={handleCencel}>취소</button>
        </div>
      </div>
    </KakaoPayModalWrapper>
  );
};

export default KpayModal;
