import React from 'react'
import { PaymentWrapper } from '../css/payment-style'

const Payment = () => {
  return (
    <PaymentWrapper>
      <div className='top_payment_contents'>
      <div className='payment_contents_inner'>
      <div className='top_line'>
        <h1>주문/결제</h1>
      </div>

      <div className='payment_order_cate'>
        <span>상세정보</span>
        <span>판매자</span>
        <sapn>수량</sapn>
        <sapn>금액</sapn>
      </div>
      <div className='payment_order_list'>
        <img src="/image/food.jpg" alt="Food" width="200px" height="200px" className='payment_img'/>
        <div className='payment_moreinfo'>
          <p>[BBQ 어딘가점]</p>
          <p>BBQ황금올리브</p>
          <p>옵션:국물 떡볶이</p>
        </div>
        <span className='payment_seller'>또치</span>
        <span className='payment_quantity'>1</span>
        <span className='payment_amount'>25000원</span>
      </div>

      <div className='payment_order_del'>
        <h1>배송지 정보</h1>

        <p>주문자</p>
        <input type="text" placeholder='주문자를 입력해주세요' />
        
        <p>연락처</p>
        <input type="text" />

        <p>배송지 주소</p>
        <input type="text" />
        <button>우편번호</button>
        <input type="text" className='payment_address'/>
        <input type="text" className='payment_address'/>

        <p>배송 메모</p>
        <input type="text" placeholder='경비실에 맡겨주세요'/>
        
        <p>*도서산간 지역의 경우 추후 수령 시 추가 배송비가 과금될 수 있습니다.</p>

        <hr />

        <h1>포인트</h1>
        <span className='payment_point_money'>포인트 머니</span>
        
        <input type="text" className='payment_point_money_box'/>
        <input type="text" className='payment_point_money_box2'/>
        <button className='payment_all_point'>전액사용</button>

        <button className='payment_box'>결제하기</button>
      </div>

      </div>
      </div>
      </PaymentWrapper>
  )
}

export default Payment