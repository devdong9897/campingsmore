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
            <h1>교촌 허니 후라이드 치킨</h1>
            <p>양심없는 가격 노양심 허니 후라이드 치킨</p>
            <p className="orderdetail_price">23000원</p>
            <div className="save">
            <p className="point">포인트 적립방법</p>
            <p className="review">리뷰 작성시</p>
            <p className="img_upload">이미지 업로드시</p>
            </div>

            <div className="points_earned">
            <p>최대 10000포인트 적립</p>
            </div>
          </div>
         </div>
      </div>
    </OrderDetailWrapper>
  );
};

export default OrderDetail;
