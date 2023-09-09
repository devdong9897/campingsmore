import axios from "axios";
import React from "react";
import { UniteMocalWapper } from "../../css/modalStyle/modal-stylies";
import { useNavigate } from "react-router";

const KpayModal = ({ kakaoPayResult, setKakaoModal }) => {
  const navigate = useNavigate();
  console.log(kakaoPayResult);
  const handleCencel = () => {
    setKakaoModal(false);
  };
  const handleCallaxios = () => {
    navigate();
  };
  // const handleCallaxios = async () => {
  //   try {
  //     const res = await axios.get("/api/payment/kakao/success");
  //     const result = res;
  //     console.log("너는작동해야된다", result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <UniteMocalWapper>
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
              onClick={handleCallaxios}
            >
              카카오 페이로 결제하기
            </a>
          </button>
          <button onClick={handleCencel}>취소</button>
        </div>
      </div>
    </UniteMocalWapper>
  );
};

export default KpayModal;
