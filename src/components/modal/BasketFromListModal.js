import React from "react";
import { BasketConfirmWrapper } from "../../css/BasketConfirm-style";
import { getBasketList, postBasket } from "../../api/basketFetch";
import { basketAdd, basketItem } from "../../reducers/basketSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const BasketFromListModal = ({
  setIsBasketModal,
  selcetItem,
  sendDataToModal,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBasket = async () => {
    try {
      const data = await postBasket(selcetItem, dispatch);
      const renewal = await getBasketList(dispatch);
      navigate("/main/orderlist");
      setIsBasketModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setIsBasketModal(false);
  };
  return (
    <BasketConfirmWrapper>
      <div className="basket_modal_inner">
        <div className="warning_text">
          해당 품목을 장바구니에 추가하시겠습니까?
        </div>
        <div className="modal_buttons">
          <button onClick={handleBasket}>담기</button>
          <button onClick={handleCancel}>취소</button>
        </div>
      </div>
    </BasketConfirmWrapper>
  );
};

export default BasketFromListModal;
