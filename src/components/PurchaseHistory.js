import React from "react";
import { PurchaseWrapper } from "../css/mypage-style";

const PurchaseHistory = () => {
  return (
    <PurchaseWrapper>
      <ul className="purchase_list">
        <li>
          <div className="purchase_img">
            <img src="/image/food.jpg"></img>
          </div>
          <div className="purchase_info_box">
            <span className="purchase_date">2020-07-22</span>
            <span className="purchase_info">
              <p>BBQ 황금올리브</p>
              <p>허니 허니</p>
            </span>
            <span>12000원</span>
          </div>
        </li>
        <li>
          <div className="purchase_img">
            <img src="/image/food.jpg"></img>
          </div>
          <div className="purchase_info_box">
            <span className="purchase_date">2020-07-22</span>
            <span className="purchase_info">
              <p>BBQ 황금올리브</p>
              <p>허니 허니</p>
            </span>
            <span>12000원</span>
          </div>
        </li>
        <li>
          <div className="purchase_img">
            <img src="/image/food.jpg"></img>
          </div>
          <div className="purchase_info_box">
            <span className="purchase_date">2020-07-22</span>
            <span className="purchase_info">
              <p>BBQ 황금올리브</p>
              <p>허니 허니</p>
            </span>
            <span>12000원</span>
          </div>
        </li>
        <li>
          <div className="purchase_img">
            <img src="/image/food.jpg"></img>
          </div>
          <div className="purchase_info_box">
            <span className="purchase_date">2020-07-22</span>
            <span className="purchase_info">
              <p>BBQ 황금올리브</p>
              <p>허니 허니</p>
            </span>
            <span>12000원</span>
          </div>
        </li>
      </ul>
    </PurchaseWrapper>
  );
};

export default PurchaseHistory;
