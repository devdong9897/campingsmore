import React from 'react'

const CommentDeleteModal = ({onCancel, onConfirm}) => {
  return (
    <div className='modal'>
        <div className='modal_inner'>
            <p>댓글을 삭제하시겠습니까?</p>
            <button onClick={onConfirm}>확인</button>
            <button onClick={onCancel}>취소</button>
        </div>
    </div>
  )
}

export default CommentDeleteModal