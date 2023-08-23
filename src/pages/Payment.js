import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DaumPost from "../api/DaumPost";
import { PostPayMent, getPayMent } from "../api/paymentFetch";
import PaymentModal from "../components/PaymentModal";
import { PaymentWrapper } from "../css/payment-style";
import { useSearchParams } from "react-router-dom";
import { basketItemEmpty } from "../reducers/basketSlice";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const basket = searchParams.get("basket");
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
  // 장바구니 데이터 슷테이트에 담기!
  const [payBasketData, setPayBasketData] = useState([]);
  // 다음 주소 state
  const [daumModal, isDaumModal] = useState(false);
  // 페이먼트 모달창 state
  const [paymentModalState, setpaymentModalState] = useState(false);
  // 장바구니 데이터
  const BasketData = useSelector(state => state.basket.basketArr);

  const userData = useSelector(state => state.user.UserProFileArr);
  const ItemData = useSelector(state => state.order.orderItemArr);
  const BasketPayData = useSelector(state => state.basketpay.basketpayArr);
  console.log("장바구니에서 결제한 데이터 들어옴?", BasketPayData);
  console.log(userAddress);
  console.log("장바구니데이터", BasketData);
  console.log("장바구니에서 들어왔냐", basket);

  const getPayMentData = async () => {
    try {
      const data = await getPayMent(ItemData);
      setSelectedItem(data);
      console.log("요청데이터 받았니?", data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDaumModal = () => {
    isDaumModal(true);
  };
  useEffect(() => {
    if (!BasketPayData) {
      getPayMentData();
    }
  }, []);

  // 단일 결제 핸들러
  const handleToPayment = () => {
    // 검증데이터
    const inputtrue = {
      name: userName,
      phone: userPhoneNumber,
      address: userAddress,
      detail: userAddressDeatil,
      memo: userMemo,
    };
    // 전송데이터
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
    if (!inputtrue.name) {
      alert("이름을 입력하세요");
    } else if (!inputtrue.phone) {
      alert("전화번호를 입력하세요");
    } else if (!inputtrue.address) {
      alert("주소를 입력하세요");
    } else if (!inputtrue.detail) {
      alert("상세주소를 입력하세요");
    } else if (!inputtrue.memo) {
      alert("작성하신 메모가 없습니다.");
    } else {
      setpaymentModalState(true);
      PostPayMent(newPaymentData);
    }
  };

  // 장바구니에서 담은 데이터 결제올리기!!!!
  const handleBasketPay = () => {
    const basketEmpty = [];
    const basketTotal = BasketData.map(item => item.price);
    const totalSum = basketTotal.reduce((total, price) => total + price, 0);
    const extractedData = BasketPayData.map(item => {
      return {
        iitem: item.iitem,
        quantity: item.quantity,
        totalPrice: item.price,
      };
    });
    console.log("추출데이터", extractedData);
    console.log("총가격? ", totalSum);
    const basketpaydata = {
      address: userAddress,
      addressDetail: userAddressDeatil,
      totalPrice: totalSum,
      shippingPrice: 4000,
      shippingMemo: userMemo,
      purchaseList: extractedData,
    };

    // 검증데이터;
    const inputtrue = {
      name: userName,
      phone: userPhoneNumber,
      address: userAddress,
      detail: userAddressDeatil,
      memo: userMemo,
    };
    if (!inputtrue.name) {
      alert("이름을 입력하세요");
    } else if (!inputtrue.phone) {
      alert("전화번호를 입력하세요");
    } else if (!inputtrue.address) {
      alert("주소를 입력하세요");
    } else if (!inputtrue.detail) {
      alert("상세주소를 입력하세요");
    } else if (!inputtrue.memo) {
      alert("작성하신 메모가 없습니다.");
    } else {
      setpaymentModalState(true);
      PostPayMent(basketpaydata);
      dispatch(basketItemEmpty(basketEmpty));
    }
  };

  const emptyPayment = () => {
    navigate("/main/orderlist");
  };

  useEffect(() => {
    getPayMentData();

    const handleBeforeUnload = event => {
      event.preventDefault();
      event.returnValue = ""; // Some browsers require a return value here

      const confirmMessage =
        "변경 사항이 저장되지 않을 수 있습니다. 계속하시겠습니까?";
      event.returnValue = confirmMessage;

      // 다른 페이지로 이동하려는 경우 경고 메시지를 띄움
      return confirmMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
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

      {paymentModalState ? (
        <PaymentModal
          userPhoneNumber={userPhoneNumber}
          userAddress={userAddress}
          userName={userName}
          setpaymentModalState={setpaymentModalState}
          paymentModalState={paymentModalState}
        />
      ) : (
        ""
      )}
      <div className="top_payment_contents">
        <div className="payment_contents_inner">
          <div className="top_line">
            <h1>주문/결제</h1>
          </div>
          {basket ? (
            <>
              {BasketPayData ? (
                <ul className="payment_order_list">
                  {BasketPayData.map((item, index) => (
                    <li key={index}>
                      <div className="information">
                        <div className="img">
                          <img src={item.pic}></img>
                        </div>
                        <div className="item_info">
                          <h1>{item.name}</h1>
                          <p className="quantity">수량: {item.quantity}</p>
                          <p>가격: {item.price}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                emptyPayment()
              )}
            </>
          ) : (
            <ul className="payment_order_list">
              <li>
                <div className="information">
                  <div className="img">
                    <img src={selectedItem.pic}></img>
                  </div>
                  <div className="item_info">
                    <h1>{selectedItem.name}</h1>
                    <p className="quantity">수량: {selectedItem.quantity}</p>
                    <p className="price">총 금액: {selectedItem.totalPrice}</p>
                  </div>
                </div>
              </li>
            </ul>
          )}
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
              value={userPhoneNumber}
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
            {basket ? (
              <button className="payment_box" onClick={handleBasketPay}>
                장바구니 결제하기
              </button>
            ) : (
              <>
                <button className="payment_box" onClick={handleToPayment}>
                  결제하기
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </PaymentWrapper>
  );
};

export default Payment;
