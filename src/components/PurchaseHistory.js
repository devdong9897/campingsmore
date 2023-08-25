import React, { useEffect, useState } from "react";
import { PurchaseWrapper } from "../css/mypage-style";
import { getPaymentDetail, getPurchaseData } from "../api/mypageFatch";
import ReviewModal from "./ReviewModal";
import ReviewCompletedModal from "./modal/ReviewCompletedModal";

const PurchaseHistory = ({ purchase }) => {
  console.log("잘넘어오나?", purchase);

  const [isReviewModal, setisReviewModal] = useState(false);
  const [thisiorder, setThisiorder] = useState("");
  const [thisItem, setThisItem] = useState("");
  const [isreviewConfirm, setIsReviewConfirm] = useState(false);
  const [purchaseDetail, setPurchaseDetail] = useState(false);
  const [thispurchaseIndex, setThispurchaseIndex] = useState(null);
  const [paymentDetail, setpaymentDetail] = useState({});

  const handleReviewWrite = (itemiorder, subitemiitem) => {
    setThisItem(itemiorder);
    setThisiorder(subitemiitem);
    setisReviewModal(true);
  };

  // 구매상세보기
  const handleItemDatail = iorder => {
    setPurchaseDetail(true);
    setThispurchaseIndex(iorder);
    console.log("아이오더값", iorder);
    getPurchaseData(iorder);
  };

  // 구매상세값요청
  const getPurchaseData = async iorder => {
    try {
      const data = await getPaymentDetail(iorder);
      setpaymentDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDetailClose = () => {
    setPurchaseDetail(false);
  };
  return (
    <PurchaseWrapper>
      {isReviewModal ? (
        <ReviewModal
          thisiorder={thisiorder}
          thisItem={thisItem}
          setisReviewModal={setisReviewModal}
          purchase={purchase}
          setIsReviewConfirm={setIsReviewConfirm}
        />
      ) : (
        ""
      )}
      {isreviewConfirm ? (
        <ReviewCompletedModal setIsReviewConfirm={setIsReviewConfirm} />
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
                      {subitem.reviewYn === 0 ? (
                        <button
                          className="write_review"
                          onClick={() =>
                            handleReviewWrite(item.iorder, subitem.iitem)
                          }
                        >
                          리뷰작성
                        </button>
                      ) : (
                        <span className="written_review">작성된 리뷰</span>
                      )}
                      {purchaseDetail && thispurchaseIndex === item.iorder ? (
                        <button
                          className="purchage_datail_close"
                          onClick={handleDetailClose}
                        >
                          닫기
                        </button>
                      ) : (
                        <button
                          className="purchage_detail"
                          onClick={e => handleItemDatail(item.iorder)}
                        >
                          구매상세
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {purchaseDetail && thispurchaseIndex === item.iorder ? (
                <div className="purchase_detail">
                  <ul className="detail_list">
                    <li>
                      <span>배송주소:</span>
                      <span>{paymentDetail.address}</span>
                    </li>
                    <li>
                      <span>배송상세주소:</span>
                      <span>{paymentDetail.addressDetail}</span>
                    </li>
                    <li>
                      <span>배송메모</span>
                      <span>{paymentDetail.shippingMemo}</span>
                    </li>
                    <li>
                      <span>총 주문가격</span>
                      <span>{paymentDetail.totalPrice}</span>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
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
