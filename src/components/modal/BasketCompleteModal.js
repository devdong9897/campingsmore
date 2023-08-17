import React from 'react'
import { BasketCheckWrapper } from '../../css/BasketConfirm-style'
import { useNavigate } from 'react-router'

const BasketCompleteModal = ({setIsModal}) => {
    const navigate = useNavigate();
    const handleBasket = () => {
        navigate("/main/basket");
    }
    const handleCancel = () => {
        setIsModal(false);
    }
  return (
    <BasketCheckWrapper>
    <div className="basket_modal_inner">
      <div className="warning_text">해당 품목을 장바구니에 담았습니다.</div>
      <div className="modal_buttons">
        <button onClick={handleBasket}>장바구니 확인</button>
        <button onClick={handleCancel}>닫기</button>
      </div>
    </div>
  </BasketCheckWrapper>
  )
}

export default BasketCompleteModal