import React from "react";
import { BasketWrapper } from "../css/basket-style";

const Basket = () => {
  return (
    <BasketWrapper>
      <div className="basket_inner">
        <h1>장바구니</h1>
        <div className="basket_topline">
          <ul className="basket_topline_list">
            <li></li>
            <li>사진</li>
            <li>상품명</li>
            <li>수량</li>
            <li>상품금액</li>
          </ul>
        </div>
        <div className="basket_list">
          <ul className="basket_goods_list">
            <li>
              <div className="basket_choice_box">
                <input type="checkbox" />
              </div>
              <div className="basket_product_img">
                <img src="#" alt="" />
              </div>
              <div>
                <p>교촌 서울점</p>
                <p>허니 머시기 후라이드 치킨</p>
              </div>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div>10000원</div>
              <div>
                <button>x</button>
              </div>
            </li>
          </ul>
        <span className="basket_all_price">100원</span>
        <button className="basket_box">결제</button>
        </div>
      </div>
    </BasketWrapper>
  );
};

export default Basket;
