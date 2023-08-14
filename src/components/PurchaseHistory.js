import React, { useEffect, useState } from "react";
import { PurchaseWrapper } from "../css/mypage-style";
import { getPurchaseData } from "../api/mypageFatch";
import ReviewModal from "./ReviewModal";

const PurchaseHistory = ({ purchase }) => {
  console.log("잘넘어오나?", purchase);

  const [isReviewModal, setisReviewModal] = useState(false);
  const [thisiorder, setThisiorder] = useState("");
  const [thisItem, setThisItem] = useState("");
  const handleReviewWrite = (itemiorder, subitemiitem) => {
    setThisItem(itemiorder);
    setThisiorder(subitemiitem);
    setisReviewModal(true);
  };
  return (
    <PurchaseWrapper>
      {isReviewModal ? (
        <ReviewModal
          thisiorder={thisiorder}
          thisItem={thisItem}
          setisReviewModal={setisReviewModal}
          purchase={purchase}
        />
      ) : (
        ""
      )}
      <h1>구매내역</h1>
      {purchase.length > 0 ? (
        <ul className="purchase_list">
          {purchase.map((item, index) => (
            <li key={index}>
              {item.itemList.map((subitem, subindex) => (
                <div className="inner" key={subindex}>
                  <div className="purchase_img">
                    <img src={subitem.pic} alt={subitem.name} />
                  </div>
                  <div className="purchase_info_box">
                    <div className="purchase_infos">
                      <span className="purchase_date">
                        {subitem.paymentDate}
                      </span>
                      <span className="purchase_info">
                        <p>{subitem.name}</p>
                      </span>
                      <span>{subitem.totalPrice} 원</span>
                    </div>
                    <div className="purchase_func">
                      <button
                        className="write_review"
                        onClick={() =>
                          handleReviewWrite(item.iorder, subitem.iitem)
                        }
                      >
                        리뷰작성
                      </button>
                      <button className="purchage_detail">구매상세</button>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty_img_box">
          <img src="../image/cart.png" alt="" />
          <p>구매내역이 없습니다.</p>
        </div>
      )}
    </PurchaseWrapper>
  );
};

export default PurchaseHistory;
