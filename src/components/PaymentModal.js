import React from "react";
import { PaymentModalWrapper } from "../css/payment-modal.style";
import { useNavigate } from "react-router";

const PaymentModal = () => {

  const navigate = useNavigate();
  const handleToGoMain = () => {
    navigate("/main")
  }

  return (
    <PaymentModalWrapper>
        <div className="top_payment_modal_contents">
          <div className="payment_modal_contents_inner">
            <div className="payment_modal_box">
              <div className="payment_modal_title">
                <h1>주문이 정상적으로 <span>완료 되었습니다.</span></h1>
              </div>  

              <hr />

              <div className="payment_modal_order_info">
              <div className="payment_modal_order_cate">
                <p>배송지 정보</p>
                <p>결제 금액</p>
              </div>
              
              <div className="payment_modal_indi_info">
                <p>신형만</p>
                <p>000-0000-0000</p>
                <p>경기도 짱구시 짱구군</p>
                <p>짱구 공원로 123-1 짱구아파트 101동 101호</p>
                <p>2500원</p>
                </div>
              </div>

              <div className="payment_modal_check">
                <button onClick={handleToGoMain}>메인</button>
                <button >뒤로가기</button>
                
              </div>
            </div>
          </div>
        </div>
    </PaymentModalWrapper>
  )
};

export default PaymentModal;
