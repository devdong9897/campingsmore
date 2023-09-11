import React from "react";
import { BasketModalWrapper } from "../../css/BasketModal-style";

const BasketModal = ({ isModal, basketList, cartCount, setBasketList }) => {
  const handleDelete = () => {
    console.log(basketList, cartCount);
    const updataBasketList = basketList.filter(
      item => item.icart !== cartCount,
    );
    setBasketList(updataBasketList);
    isModal(false);
  };
  const handleModal = () => {
    isModal(false);
  };
  return (
    <BasketModalWrapper>
      <div className="basket_modal_inner">
        <div className="warning_text">장바구니의 목록을 삭제하시겠습니까?</div>
        <div className="modal_buttons">
          <button onClick={handleDelete}>삭제</button>
          <button onClick={handleModal}>취소</button>
        </div>
      </div>
    </BasketModalWrapper>
  );
};

export default BasketModal;
