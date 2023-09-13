import React, { useEffect, useState } from "react";
import { PurchaseWrapper } from "../css/myPageStyle/mypage-style";
import {
  getPaymentDetail,
  getPurchaseData,
  getPaymentItemDetail,
  patchPayCancel,
} from "../api/mypageFatch";
import ReviewModal from "./ReviewModal";
import ReviewCompletedModal from "./modal/ReviewCompletedModal";
import PayCencelModal from "./modal/PayCencelModal";

const PurchaseHistory = ({ purchase }) => {
  console.log("잘넘어오나?", purchase);

  const [isReviewModal, setisReviewModal] = useState(false);
  const [thisiorder, setThisiorder] = useState("");
  const [thisItem, setThisItem] = useState("");
  const [isreviewConfirm, setIsReviewConfirm] = useState(false);
  const [purchaseDetail, setPurchaseDetail] = useState(false);
  const [thispurchaseIndex, setThispurchaseIndex] = useState(null);
  const [paymentDetail, setpaymentDetail] = useState({});
  const [listIndex, setListIndex] = useState("");
  // 결제취소모달 staet
  const [payCancelState, setPayCancelState] = useState(false);
  // 결제취소한 iorder 값 state
  const [thisIorderitme, setThisIorderitem] = useState("");

  const handleReviewWrite = (itemiorder, subitemiitem) => {
    setThisItem(itemiorder);
    setThisiorder(subitemiitem);
    setisReviewModal(true);
  };

  // 구매상세보기 버튼
  const handleItemDatail = async (iorder, iitem, subindex) => {
    console.log(iorder, iitem, subindex);
    setPurchaseDetail(true);
    setThispurchaseIndex(iorder);
    setListIndex(subindex);
    try {
      const data = await getPaymentItemDetail(iitem);
      setpaymentDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDetailClose = () => {
    setPurchaseDetail(false);
  };
  const handlePayCancel = async iorderitem => {
    console.log(iorderitem);
    setThisIorderitem(iorderitem);
    setPayCancelState(true);
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
      {payCancelState ? (
        <PayCencelModal
          setPayCancelState={setPayCancelState}
          thisIorderitme={thisIorderitme}
        />
      ) : (
        ""
      )}
      <h1>구매내역</h1>
      {purchase.length ? (
        <ul className="purchase_list">
          {purchase.map((item, index) => (
            <li key={index}>
              {item.itemList.map((subitem, subindex) => (
                <div className="inner" key={subindex}>
                  <div className="purchase_info">
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
                        {subitem.reviewYn === null ? (
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
                        {purchaseDetail &&
                        thispurchaseIndex === item.iorder &&
                        listIndex === subindex ? (
                          <button
                            className="purchage_datail_close"
                            onClick={handleDetailClose}
                          >
                            닫기
                          </button>
                        ) : (
                          <button
                            className="purchage_detail"
                            onClick={e =>
                              handleItemDatail(
                                item.iorder,
                                item.itemList[subindex].iorderitem,
                                subindex,
                              )
                            }
                          >
                            구매상세
                          </button>
                        )}
                        <button
                          className="purchase_cancel_btn"
                          onClick={e => handlePayCancel(subitem.iorderitem)}
                        >
                          결제취소
                        </button>
                      </div>
                    </div>
                  </div>
                  {purchaseDetail &&
                  thispurchaseIndex === item.iorder &&
                  listIndex === subindex ? (
                    <div className="purchase_detail">
                      <span className="detail_title">상세결제내역</span>
                      <div className="detail_list_info">
                        <ul className="detail_list_left">
                          <li>
                            <span>결제품명</span>
                            <span>{paymentDetail.name}</span>
                          </li>
                          <li>
                            <span>결제수량</span>
                            <span>{paymentDetail.quantity}</span>
                          </li>
                          <li>
                            <span>결제가격</span>
                            <span>{paymentDetail.price}</span>
                          </li>
                          <li>
                            <span>배송메모</span>
                            <span>{paymentDetail.shippingMemo}</span>
                          </li>
                        </ul>
                        <ul className="detail_list_right">
                          <li>
                            <span>결제일</span>
                            <span>{paymentDetail.paymentDate}</span>
                          </li>
                          <li>
                            <span>배송주소</span>
                            <span>{paymentDetail.address}</span>
                          </li>
                          <li>
                            <span>상세주소</span>
                            <span>{paymentDetail.addressDetail}</span>
                          </li>
                          <li>
                            <span>배송가격</span>
                            <span>{paymentDetail.shippingPrice}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="purchase_cancel">
                        <span>
                          결제 총 가격 :{" "}
                          {paymentDetail.totalPrice +
                            paymentDetail.shippingPrice}
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
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
