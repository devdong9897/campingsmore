import React from "react";
import { OrderDetailWrapper } from "../css/orderdetail-style";

const OrderDetail = () => {
  return (
    <OrderDetailWrapper>
      <div className="orderdetail_inner">
        <div className="main">
          <div className="first_box">
            <div className="main_img"></div>
            <div className="sub_img">
              <div className="subfir_img"></div>
              <div className="middle_img"></div>
              <div className="last_img"></div>
            </div>
          </div>
          <div className="second_box">
            <div className="title">
              <h1>교촌 허니 후라이드 치킨</h1>
              <p className="meddle_title">
                양심없는 가격 노양심 허니 후라이드 치킨!
              </p>
              <p className="price">23000원</p>
            </div>

            <div className="points">
              <div className="way">
                <p className="point_earned">포인트 적립방법</p>
                <p className="review">리뷰 작성시</p>
                <p className="img">이미지 업로드시</p>
              </div>
              <div className="earned">
                <p className="max_point">
                  최대 <span>1000포인트</span>적립
                </p>
                <p className="min_point">최대 500포인트 적립</p>
              </div>
            </div>

            <div className="qantity">
              <div className="free">[배송무료] / 기본배송</div>
              <div className="num">
                <button>-</button>
                <p className="one">1</p>
                <button>+</button>
                <div className="number">
                  <p>23000원</p>
                </div>
              </div>
            </div>
          <div className="total">
            <p className="total_price">총 상품 금액</p>
            <p className="orderdetail_price">23000원</p>
          </div>
    
          <button className="left">장바구니담기</button>
          <button className="right">구매하기</button>

          </div>
        </div>
      </div>
    </OrderDetailWrapper>
  );
};

export default OrderDetail;
