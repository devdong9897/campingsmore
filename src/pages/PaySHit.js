import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DaumPost from "../api/DaumPost";
import { PostPayMent, getPayMent } from "../api/paymentFetch";
import { PaymentWrapper } from "../css/payment-style";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState({});
  const [paymentData, setPaymentData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userAddressDeatil, setUserAddressDeatil] = useState("");
  const [userPostNumber, setPostNumber] = useState("");
  const [userMemo, setUserMemo] = useState("");
  const [pointMoney, setPointMoney] = useState("");
  const [pointMoneyBox2, setPointMoneyBox2] = useState("");
  // 다음 주소 state
  const [daumModal, isDaumModal] = useState(false);

  const userData = useSelector(state => state.user.UserProFileArr);
  const ItemData = useSelector(state => state.order.orderItemArr);
  console.log(userAddress);

  const getPayMentData = async () => {
    try {
      const data = await getPayMent(ItemData);
      setSelectedItem(data);
      console.log("요청데이터 받았니?", data);
    } catch (err) {
      console.log(err);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const requestData = {};
  //     const data = await postPaymentList(requestData);
  //     setPaymentData(data);
  //   } catch (error) {
  //     console.error("데이터 실패", error);
  //   }
  // };

  const handleDaumModal = () => {
    isDaumModal(true);
  };
  useEffect(() => {
    getPayMentData();
  }, []);

  const handleToPayment = () => {
    const newPaymentData = {
      address: userAddress,
      addressDetail: userAddressDeatil,
      totalPrice: selectedItem.totalPrice,
      shippingPrice: 4000,
      shippingMemo: userMemo,
      purchaseList: [
        {
          iitem: selectedItem.iitem,
          quantity: selectedItem.quantity,
          totalPrice: selectedItem.totalPrice,
        },
      ],
    };
    console.log(newPaymentData);
    PostPayMent(newPaymentData);
  };

  useEffect(() => {
    getPayMentData();
  }, []);

  return (
    <PaymentWrapper>
      {daumModal ? (
        <DaumPost
          setUserAddress={setUserAddress}
          isDaumModal={isDaumModal}
          daumModal={daumModal}
        />
      ) : (
        ""
      )}
      <div className="top_payment_contents">
        <div className="payment_contents_inner">
          <div className="top_line">
            <h1>주문/결제</h1>
          </div>

          <div className="payment_order_list">
            <div className="information">
              <div className="img">
                <img src={selectedItem.pic}></img>
              </div>
              <div className="title">
                <h1>{selectedItem.name}</h1>
              </div>
              <p className="quantity">수량: {selectedItem.quantity}</p>
              <p className="price">총 금액: {selectedItem.totalPrice}</p>
              <p>{selectedItem.selectedItem}</p>
            </div>
          </div>

          <div className="payment_order_del">
            <h1>배송지 정보</h1>
            <p>주문자</p>
            <input
              type="text"
              placeholder={userData.name}
              className="payment_username"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <p>연락처</p>
            <input
              type="text"
              className="payment_first_usernumber"
              placeholder={userData.phone}
              onChange={e => setUserPhoneNumber(e.target.value)}
            />
            <p>배송지 주소</p>
            <button
              className="payment_postnumber_btn"
              onClick={handleDaumModal}
            >
              주소검색
            </button>
            <input
              type="text"
              className="payment_address"
              placeholder={userData.user_address}
              value={userAddress}
              onChange={e => setUserAddress(e.target.value)}
            />
            <input
              type="text"
              className="payment_address_detail"
              placeholder="상세주소를 입력해주세요"
              value={userAddressDeatil}
              onChange={e => setUserAddressDeatil(e.target.value)}
            ></input>
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
            {/* <h1>포인트</h1>
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
            <button className="payment_all_point">전액사용</button> */}
            <button className="payment_box" onClick={handleToPayment}>
              결제하기
            </button>
          </div>
        </div>
      </div>
    </PaymentWrapper>
  );
};

export default Payment;
