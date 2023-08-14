import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { PaymentModalWrapper } from "../css/payment-modal.style";

const PaymentModal = ({
  setpaymentModalState,
  userName,
  userAddress,
  userPhoneNumber,
}) => {
  const navigate = useNavigate();

  const userData = useSelector(state => state.user.UserProFileArr);
  const handleToGoMain = () => {
    const reviewCode = 1;
    navigate(`/main/mypage?review=${reviewCode}`);
  };
  const handleToGoOrderlist = () => {
    navigate("/main/orderlist");
    setpaymentModalState(false);
  };
  return (
    <PaymentModalWrapper>
      <div className="top_payment_modal_contents">
        <div className="payment_modal_contents_inner">
          <div className="payment_modal_box">
            <div className="payment_modal_title">
              <h1>
                주문이 정상적으로 <span>완료 되었습니다.</span>
              </h1>
            </div>
            <hr />
            <div className="payment_modal_order_info">
              <div className="payment_modal_order_cate">
                <h3>주문정보</h3>
                <ul className="order_info">
                  <li>
                    <span>이름</span>
                    <span>{userName}</span>
                  </li>
                  <li>
                    <span>전화번호</span>
                    <span>{userPhoneNumber}</span>
                  </li>
                  <li>
                    <span>주소</span>
                    <span>{userAddress}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment_modal_check">
              <button onClick={handleToGoMain}>주문내역</button>
              <button onClick={handleToGoOrderlist}>더 보기</button>
            </div>
          </div>
        </div>
      </div>
    </PaymentModalWrapper>
  );
};

export default PaymentModal;
