import React from 'react'
import { useEffect } from 'react'
import { CommentDeleteModalWrapper } from '../../css/modalStyle/comment-delete-style'

const CommentDeleteModal = ({handleCancel, handleConfirm}) => {
  useEffect(() => {

  },[])
  return (
    <CommentDeleteModalWrapper>
      <div className='modal'>
          <div className='modal_inner'>
              <p className='modal_title'>댓글을 삭제하시겠습니까?</p>
              <div className='modal_button'>
                <button className="modal_confirm" onClick={handleConfirm}>확인</button>
                <button className="modal_cancel" onClick={handleCancel}>취소</button>
              </div>
          </div>
      </div>
    </CommentDeleteModalWrapper>
  )
}

export default CommentDeleteModal