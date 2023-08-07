import React, { useState } from "react";
import { PaymentWrapper } from "../css/payment-style";
import { useNavigate } from "react-router";

const Payment = () => {

  const paymentData = [
    {
      imgSrc: "/image/food.jpg",
      title: "BOQ 황금올리브",
      seller: "오소한 사람",
      quantity: 1,
      amount: "25,000원",
      orderDate: "1992-01-10",
    },
    
    // 다른 주문 항목들 추가
  ];
  
  const navigate = useNavigate()
  const handleToGoPamentModal = () => {
    navigate("/main/paymentmodal")
  }

  return (
    <PaymentWrapper>
      <div className="top_payment_contents">
        <div className="payment_contents_inner">
          <div className="top_line">
            <h1>주문/결제</h1>
          </div>
          <div className="payment_order_cate_box">
            <ul className="payment_order_cate">
              <li></li>
              <li>상세정보</li>
              <li>판매자</li>
              <li>수량</li>
              <li>금액</li>
              <li></li>
            </ul>
          </div>
          {/* 이 영역을 map 돌려서 반복시킵니다 */}

          <ul className="payment_order_list">
            {paymentData.map((item, index) => (
              <li key={index}>
                <div className="product_img">
                  <img src={item.imgSrc} alt="Product" />
                </div>
                <div className="payment_moreinfo">
                  <span className="item_title">
                    <p>{item.title}</p>
                    <p>{item.seller}</p>
                  </span>
                  <span className="item_order_date">주문일:{item.orderDate}</span>
                </div>
                <div className="payment_quantity">{item.quantity}</div>
                <div className="payment_amount">{item.amount}</div>
                <div className="payment_cancel">
                  <button>주문취소</button>
                </div>
              </li>
            ))}
        </ul>

          {/* <ul className="payment_order_list">
            <li>
              <div className="product_img">
                <img src="/image/food.jpg" />
              </div>
              <div className="payment_moreinfo">
                <span className="item_title">
                  <p>BOQ 황금올리브</p>
                  <p>Bachelors Quarters</p>
                </span>
                <span className="item_order_date">주문일:1992-01-10</span>
              </div>
              <div className="payment_seller">오소한 사람</div>
              <div className="payment_quantity">1</div>
              <div className="payment_amount">25,000원</div>
              <div className="payment_cancel">
                <button>주문취소</button>
              </div>
            </li>
          </ul> */}
          {/* 이 영역을 map 돌려서 반복시킵니다 */}

          <div className="payment_order_del">
            <h1>배송지 정보</h1>
            <p>주문자</p>
            <input
              type="text"
              placeholder="주문자를 입력해주세요"
              className="payment_username"
            />
            <p>연락처</p>
            <input type="text" className="payment_first_usernumber" />
            -
            <input type="text" className="payment_usernumber" />
            -
            <input type="text" className="payment_usernumber" />
            <p>배송지 주소</p>
            <input type="text" className="payment_postnumber" />
            <button className="payment_postnumber_btn">우편번호</button>
            <input type="text" className="payment_address" />
            <input type="text" className="payment_address" />
            <p>배송 메모</p>
            <input
              type="text"
              placeholder="경비실에 맡겨주세요"
              className="payment_memo"
            />
            <p className="plus">
              *도서산간 지역의 경우 추후 수령 시 추가 배송비가 과금될 수
              있습니다.
            </p>
            <hr />
            <h1>포인트</h1>
            <span className="payment_point_money">포인트 머니</span>
            <input type="text" className="payment_point_money_box" />
            <input type="text" className="payment_point_money_box2" />
            <button className="payment_all_point">전액사용</button>
            <button className="payment_box" onClick={handleToGoPamentModal}>결제하기</button>
          </div>
        </div>
      </div>
    </PaymentWrapper>
  );
};

export default Payment;
 