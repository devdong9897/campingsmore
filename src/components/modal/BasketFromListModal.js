import React from 'react'
import { BasketConfirmWrapper } from '../../css/BasketConfirm-style'
import { postBasket } from '../../api/basketFetch';
import { basketAdd } from '../../reducers/basketSlice';
import { useDispatch } from 'react-redux';

const BasketFromListModal = ({setIsBasketModal ,selcetItem ,sendDataToModal}) => {
  const dispatch = useDispatch();
  const handleBasket = async() => {
    await postBasket(selcetItem ,sendDataToModal);
    setIsBasketModal(false);
    dispatch(basketAdd(sendDataToModal));
    window.location.reload();
  }

  const handleCancel = () => {
    setIsBasketModal(false);
  }
  return (
    <BasketConfirmWrapper>
    <div className="basket_modal_inner">
      <div className="warning_text">해당 품목을 장바구니에 추가하시겠습니까?</div>
      <div className="modal_buttons">
        <button onClick={handleBasket}>담기</button>
        <button onClick={handleCancel}>취소</button>
      </div>
    </div>
  </BasketConfirmWrapper>
  )
}

export default BasketFromListModal;