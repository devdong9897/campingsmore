import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import DaumPost from "../api/DaumPost";
import {
  PostKakaoPay,
  PostPayMent,
  getCampingData,
  getPayMent,
} from "../api/paymentFetch";
import PaymentModal from "../components/PaymentModal";
import KpayModal from "../components/modal/KpayModal";
import { PaymentWrapper } from "../css/payment-style";
import { useSearchParams } from "react-router-dom";
import { basketItemEmpty } from "../reducers/basketSlice";
const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const basket = searchParams.get("basket");
  const [selectedItem, setSelectedItem] = useState({});
  // 배송지 정보 작성하는 State
  const [userName, setUserName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userAddressDeatil, setUserAddressDeatil] = useState("");
  const [userMemo, setUserMemo] = useState("");
  // 장바구니 데이터 슷테이트에 담기!
  const [payBasketData, setPayBasketData] = useState([]);
  // 다음 주소 state
  const [daumModal, isDaumModal] = useState(false);
  // 페이먼트 모달창 state
  const [paymentModalState, setpaymentModalState] = useState(false);
  // 장바구니 데이터 Slice
  const BasketData = useSelector(state => state.basket.basketArr);
  // 단일 결제 데이터 Slice
  const singleItem = useSelector(state => state.order.orderItemArr);
  // 예약한 캠핑장 불러오기 state
  const [campingInfoCall, setCampingInfoCall] = useState(false);
  // 예약한 캠핑잘 리스트 불러오기
  const [campingInfoList, setCampingInfoList] = useState([]);
  // 카카오페이할시 돌려받은 데이터 state
  const [kakaoPayResult, setKakaoPayResult] = useState({});
  // 카카오페이결제 시 띄우는 모달창
  const [kakaoModal, setKakaoModal] = useState(false);
  // 등록한 배송지 주소 state
  const [calladdres, setCalladdress] = useState(false);
  // css에 전달할 값
  const [cssState, setCssState] = useState("");
  const baseUrl = "http://192.168.0.144:5005/img/";

  // 전역 유저데이터
  const userData = useSelector(state => state.user.UserProFileArr);
  // 전역 장바구니 데이터
  const BasketPayData = useSelector(state => state.basketpay.basketpayArr);
  // 전역 배송지 주소 데이터
  const addlistData = useSelector(state => state.addressList.AddressListArr);
  console.log("유저데이터", userData);
  console.log("전역배송지주소", addlistData);
  console.log("장바구니에서 결제한 데이터 들어옴?", BasketPayData);
  console.log(userAddress);
  console.log("장바구니데이터", BasketData);
  console.log("장바구니에서 들어왔냐", basket);

  // 싱글아이템은 장터보기에서 바로 주문하기 눌러 들어올때 받는것이다.
  const getPayMentData = async () => {
    try {
      const data = await getPayMent(singleItem);
      // 그렇게 요청한 아이템을 선택한 아이템에 담는다.
      console.log(singleItem);
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

  // 카카오 결제 핸들러
  const handleToKakaoPay = async () => {
    setKakaoModal(true);
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
      type: "KAKAO",
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
      try {
        const data = await PostKakaoPay(newPaymentData);
        setKakaoPayResult(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

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
      type: "CARD",
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

  // 캠핑 예약리스트 불러오기
  const getCampingList = async () => {
    try {
      const data = await getCampingData();
      setCampingInfoList(data);
      console.log("예약리스트 불러옴?", data);
    } catch (err) {
      console.log(err);
    }
  };

  const emptyPayment = () => {
    navigate("/main/orderlist");
  };

  // 캠핑정보 불러오는 핸들러
  const handleCallCamping = () => {
    setCampingInfoCall(true);
    setUserAddress(selectedItem.campInfo.address);
  };
  // 캠핑정보 닫는 핸들러
  const handleCampingCancel = () => {
    setCampingInfoCall(false);
  };

  // 배송지주소 켜기
  const handleAddressCall = () => {
    setCalladdress(true);
  };
  // 배종지주소 끄기
  const handleAddressOut = () => {
    setCalladdress(false);
  };
  const handleAddressUpdate = (item, index) => {
    setCssState(index);
    setUserName(item.name);
    setUserPhoneNumber(item.phone);
    setUserAddress(item.address);
    setUserAddressDeatil(item.addressDetail);
    console.log(item);
  };
  useEffect(() => {
    getPayMentData();
    getCampingList();

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
      {kakaoModal ? (
        <KpayModal
          kakaoPayResult={kakaoPayResult}
          setKakaoModal={setKakaoModal}
        />
      ) : (
        ""
      )}
      <div className="top_payment_contents">
        <div className="payment_contents_inner">
          <div className="top_line">
            <h1>주문/결제</h1>
          </div>

          {selectedItem || campingInfoList.lenght ? (
            <>
              {selectedItem.campInfo || campingInfoList.lenght ? (
                <>
                  {campingInfoCall ? (
                    ""
                  ) : (
                    <div
                      className="camping_call_btn"
                      onClick={handleCallCamping}
                    >
                      예약하신 캠핑장이 있습니다. 예약한 캠핑장으로
                      주문하시겠습니까?
                    </div>
                  )}
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}

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
            <>
              {selectedItem.campInfo || campingInfoList.lenght ? (
                <>
                  {campingInfoCall ? (
                    <div className="camping_info_box">
                      <div className="camping_img">
                        <img
                          src={`/img/${selectedItem.campInfo.mainPic} `}
                        ></img>
                      </div>
                      <ul className="camping_info_list">
                        <li>
                          <span>캠핑장명</span>
                          <span>{selectedItem.campInfo.name}</span>
                        </li>
                        <li>
                          <span>주소</span>
                          <span>{selectedItem.campInfo.address}</span>
                        </li>
                        <li>
                          <span>전화번호</span>
                          <span>{selectedItem.campInfo.campPhone}</span>
                        </li>
                        <li>
                          <span>예약날짜</span>
                          <span>{selectedItem.campInfo.reservation}</span>
                        </li>
                        <span className="note">
                          *캠핑장으로 음식 주문을 할시 예약된 캠핑주소로 음식이
                          배달됩니다.
                        </span>
                        <button
                          className="camping_order_cencel"
                          onClick={handleCampingCancel}
                        >
                          캠핑주문취소
                        </button>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}

              <ul className="payment_order_list">
                <li>
                  <div className="information">
                    <div className="img">
                      <img src={selectedItem.pic}></img>
                    </div>
                    <div className="item_info">
                      <h1>{selectedItem.name}</h1>
                      <p className="quantity">수량: {selectedItem.quantity}</p>
                      <p className="price">
                        총 금액: {selectedItem.totalPrice}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </>
          )}
          <div className="payment_order_del">
            <div className="payment_input_area">
              <div className="payment_left">
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
                {campingInfoCall ? (
                  ""
                ) : (
                  <>
                    <button
                      className="payment_postnumber_btn"
                      onClick={handleDaumModal}
                    >
                      주소검색
                    </button>
                  </>
                )}

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
              </div>
              <div className="payment_right">
                <h1>더보기</h1>
                {addlistData.length ? (
                  <div className="address_list_call">
                    {calladdres ? (
                      <button
                        className="call_address_btn"
                        onClick={handleAddressOut}
                      >
                        취소
                      </button>
                    ) : (
                      <button
                        className="call_address_btn"
                        onClick={handleAddressCall}
                      >
                        등록한 배송지 주소가 있습니다.
                        <br />
                        등록한 배송지 주소를 불러오시겠습니까?
                      </button>
                    )}
                  </div>
                ) : (
                  ""
                )}
                {calladdres ? (
                  <div className="address_list_result">
                    <ul className="address_list_data">
                      {addlistData.map((item, index) => (
                        <li
                          className={cssState === index ? "active" : ""}
                          key={index}
                          onClick={e => handleAddressUpdate(item, index)}
                        >
                          <span>{item.address}</span>
                          <span>{item.addressDetail}</span>
                          <span>{item.name}</span>
                          <span>{item.phone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <p className="plus">
              *도서산간 지역의 경우 추후 수령 시 추가 배송비가 과금될 수
              있습니다.
            </p>
            <hr />
            <span className="title">결제방식 선택</span>
            {basket ? (
              <div className="pay_type">
                <button className="card_pay" onClick={handleBasketPay}></button>
                <button
                  className="kakao_pay"
                  onClick={handleToKakaoPay}
                ></button>
              </div>
            ) : (
              <>
                <div className="pay_type">
                  <button
                    className="card_pay"
                    onClick={handleToPayment}
                  ></button>
                  <button
                    className="kakao_pay"
                    onClick={handleToKakaoPay}
                  ></button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </PaymentWrapper>
  );
};

export default Payment;
