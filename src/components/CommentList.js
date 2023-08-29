import React, { useEffect } from 'react'
import { useState } from 'react'
import { editComment } from '../api/communityBulletinBoardFetch'
import { CommentListWrapper } from '../css/comment-list-style';

    

const CommentList = ({item, handleEditComment, handleDeleteComment, userDataName, icomment, commentSelectID, setCommentSelectID}) => {

    // 댓글의 내용을 설정
    const [ctnt, setCtnt] = useState(null); // 편집중 임시 내용
    const [ctntSave, setCtntSave] = useState(null); // 최종 완료 내용

    // textarea 줄바꿈
    const [inputText, setInputText] = useState('')

    useEffect(() => {
        setCtnt(item.ctnt);
        setCtntSave(item.ctnt);
    }, [])
    // 댓글 수정 
    const toggleEditMode = () => {
        setCommentSelectID(item.icomment);
    }
    const handleChange = (e) => {
        // console.log(e.target.value)
        setCtnt(e.target.value);

        // 줄바꿈
        setInputText(e.target.value)
    }
    // 댓글 수정 취소
    const handleCancelComment = () => {
        setCommentSelectID(null);
    }

    // 댓글 수정 완료
    const handleCompleteComment = async () => {
        await editComment(item.icomment, ctnt)
        // console.log("댓글 수정 완료")
        setCtntSave(ctnt);
        setCommentSelectID(null);

    }
    
    const handleKeyDown = async (e) => {
        if (e.key === "Enter" && !e.shiftKey){
            e.preventDefault()
            await handleCompleteComment()
        }
    }

    

  return (
    
    <CommentListWrapper>
        <li>
            <div className="comment_user">
                <span>{item.name}</span>
                <span>{item.createdAt}</span>
            </div>
            <div className="comment_ctnt">
                {commentSelectID === item.icomment ? (
                    <textarea className='edit_comment_area' value={ctnt} onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
                    ):(
                        <span>{ctntSave}</span>
                        )}
                {/* {item.icomment === icomment ? 
                    (<textarea className="edit_comment_area">{item.ctnt}</textarea>):(<span>{item.ctnt}</span>)} */}
            </div>
            <div className='editLine'>
                {item.name === userDataName ? (
                    <>
                {commentSelectID === item.icomment ? (
                    <div >
                        <button className='completeEditBt' onClick={handleCompleteComment}>완료</button>
                        <button className='cancelDeleteBt' onClick={e => handleCancelComment(item.icomment)}>취소</button>
                    </div>
                ):(
                    <div>
                        <button className='completeEditBt' onClick={toggleEditMode}>수정</button>
                        <button className='cancelDeleteBt'onClick={e => handleDeleteComment(item.icomment)}>삭제</button>
                    </div>
                )}
                </>
                ):(
                    ''
                )}
            </div>
        </li>
    </CommentListWrapper>
  )
}

export default CommentList