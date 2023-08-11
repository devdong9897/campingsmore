import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import postPaymentList from "../api/paymentFetch";
import { PaymentWrapper } from "../css/payment-style";
import axios from "axios";

const Payment = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPostNumber, setPostNumber] = useState("");
  const [userMemo, setUserMemo] = useState("");
  const [pointMoney, setPointMoney] = useState("");
  const [pointMoneyBox2, setPointMoneyBox2] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const requestData = {};
      const data = await postPaymentList(requestData);
      setPaymentData(data);
    } catch (error) {
      console.error("데이터 실패", error);
    }
  };

  
  const handleToGoPamentModal = () => {
    navigate("/main/paymentmodal");
  };

  return (
    <PaymentWrapper>
      <div className="top_payment_contents">
        <div className="payment_contents_inner">
          <div className="top_line">
            <h1>주문/결제</h1>
          </div>

          <div className="payment_order_list">
            <div className="information">
              <div className="img"></div>
              <div className="title">
                <h1>황금올리브</h1>
                <p>[BBQ 서울점]</p>
                <p className="date">등록일</p>
              </div>
              <p className="판매자">판매자: 또치</p>
              <p className="수량">수량: 1</p>
              <p className="price">금액: 2000원</p>
            </div>
          </div>

          <div className="payment_order_del">
            <h1>배송지 정보</h1>
            <p>주문자</p>
            <input
              type="text"
              placeholder="주문자를 입력해주세요"
              className="payment_username"
            /> 
            <p>연락처</p>
            <input
              type="text"
              className="payment_first_usernumber"
              value={userPhoneNumber}
              readOnly
            />
            -
            <input
              type="text"
              className="payment_usernumber"
              value={userPhoneNumber}
              readOnly
            />
            -
            <input
              type="text"
              className="payment_usernumber"
              value={userPhoneNumber}
              readOnly
            />
            <p>배송지 주소</p>
            <input
              type="text"
              className="payment_postnumber"
              value={userPostNumber}
              readOnly
            />
            <button className="payment_postnumber_btn" onClick={fetchData}>
              우편번호
            </button>
            <input
              type="text"
              className="payment_address"
              value={userAddress}
              readOnly
            />
            <input
              type="text"
              className="payment_address"
              value={userAddress}
              readOnly
            />
            <p>배송 메모</p>
            <input
              type="text"
              placeholder="경비실에 맡겨주세요"
              className="payment_memo"
              value={userMemo}
              onChange={e => setUserMemo(e.target.value)}
            />
            <p className="plus">
              *도서산간 지역의 경우 추후 수령 시 추가 배송비가 과금될 수
              있습니다.
            </p>
            <hr />
            <h1>포인트</h1>
            <span className="payment_point_money">포인트 머니</span>
            <input
              type="text"
              className="payment_point_money_box"
              value={pointMoney}
              onChange={e => setPointMoney(e.target.value)}
            />
            <input
              type="text"
              className="payment_point_money_box2"
              value={pointMoneyBox2}
              onChange={e => setPointMoneyBox2(e.target.value)}
            />
            <button className="payment_all_point">전액사용</button>
            <button className="payment_box" onClick={handleToGoPamentModal}>
              결제하기
            </button>
          </div>
        </div>
      </div>
    </PaymentWrapper>
  );
};

export default Payment;
