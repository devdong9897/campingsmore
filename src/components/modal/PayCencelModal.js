import React from "react";
import { UniteMocalWapper } from "../../css/modalStyle/modal-stylies";
import { patchPayCancel } from "../../api/mypageFatch";

const PayCencelModal = ({ setPayCancelState, thisIorder }) => {
  const handlePayCancel = async () => {
    try {
      const data = await patchPayCancel(thisIorder);
      setPayCancelState(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCencel = () => {
    setPayCancelState(false);
  };
  return (
    <UniteMocalWapper>
      <div className="inner">
        <div className="warning_text">
          <h3>선택하신 품목을 결제취소를 하시겠습니까?</h3>
          <br />
          <span>
            교환.반품.환불정책에 의거해 다소 어려움이 있을 수 있습니다.
          </span>
        </div>
        <div className="modal_button">
          <button onClick={handlePayCancel}>결제취소요청</button>
          <button onClick={handleCencel}>취소</button>
        </div>
      </div>
    </UniteMocalWapper>
  );
};

export default PayCencelModal;
