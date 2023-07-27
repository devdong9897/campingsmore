import React from 'react'
import { ReviewModalWrapper } from "../css/review-modal-style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewModal = () => {
  return (
    <ReviewModalWrapper>
      <div className='top_review_modal_contents'>
        <div className='review_modal_contents_inner'>
          <input className='review_modal_title' placeholder='리뷰 제목을 입력해주세요'></input>
          <textarea rows='20' className='review_modal_detail' placeholder='리뷰 내용을 입력해주세요'></textarea>
          <p className='review_modal_eval'>이 상품에 대한 평가를 해주세요</p>
          <div className='review_modal_star'>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '1.5rem' }}/>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '1.5rem' }}/>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '1.5rem' }}/>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '1.5rem' }}/>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: '1.5rem' }}/>
          </div>
          <button className='review_modal_complete'>작성완료</button>
        </div>
      </div>
    </ReviewModalWrapper>
  )
}

export default ReviewModal