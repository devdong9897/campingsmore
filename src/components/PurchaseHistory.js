import React, { useEffect, useState } from "react";
import { PurchaseWrapper } from "../css/mypage-style";
import { getPurchaseData } from "../api/mypageFatch";

const PurchaseHistory = ({ purchase }) => {
  console.log("잘넘어오나?", purchase);
  return (
    <PurchaseWrapper>
      {purchase.length ? (
        <>
          <h1>구매내역</h1>
          <ul className="purchase_list">
            {purchase.map((item, index) => (
              <li key={index}>
                {item.itemList.map((subitem, subindex) => (
                  <div className="inner" key={subindex}>
                    <div className="purchase_img">
                      <img src={subitem.pic}></img>
                    </div>
                    <div className="purchase_info_box">
                      <span className="purchase_date">
                        {subitem.paymentDate}
                      </span>
                      <span className="purchase_info">
                        <p>{subitem.name}</p>
                      </span>
                      <span>{subitem.totalPrice} 원</span>
                    </div>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="empty_img_box"></div>
      )}
    </PurchaseWrapper>
  );
};

export default PurchaseHistory;
