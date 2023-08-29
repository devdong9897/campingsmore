import React, { useEffect } from "react";
import { CommunityBulletinBoardWrapper } from "../css/community-bulletin-board-style";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import {
  postComment,
  getFetchData,
  deleteComment,
} from "../api/communityBulletinBoardFetch";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";

const CommunityBulletinBoard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const iboard = searchParams.get("iboard");
  // 게시글 내용
  const [boardDevo, setBoardDevo] = useState({});
  const [boardDevoName, setBoardDevoName] = useState(null);
  const [boardDevoCategory, setBoardDevoCategory] = useState(null);
  const [boardDevoTitle, setBoardDevoTitle] = useState(null);
  const [boardDevoCreatedat, setBoardDevoCreatedat] = useState(null);
  const [boardDevoCtnt, setBoardDevoCtnt] = useState(null);

  // 게시글 댓글 리스트
  const [commentListData, setCommentListData] = useState([]);

  // // 게시글 댓글 리스트
  // const [commentList, setcommentList] = useState([]);
  // 댓글 쓰는 state
  const [commentText, setCommentText] = useState("");

  // 내가 내 계정보는 데이터
  const userDataName = useSelector(state => state.user.UserProFileArr.name);
  // 내가 댓글 수정을 할때의 state
  const [commentEdit, setCommentEdit] = useState(false);
  // 내가 댓글 삭제 할때의 state
  const [commentDelete, setCommentDelete] = useState();
  const [icomment, setIcomment] = useState("");

  console.log("내 계정데이터", userDataName);

  // 댓글 관련 정보 기록
  // 수정중인 댓글의 icomment를 보관해두고, 같으면 편집중, 다르면 편집아님 표시
  const [commentSelectID, setCommentSelectID] = useState(null);

  // 게시글 상세보기
  const ComuBoardData = async () => {
    try {
      const data = await getFetchData(iboard);
      console.log("데이터는 받아오나", data);
      console.log("게시글 내용", data.boardDeVo);
      console.log("게시글 댓글", data.commentList);
      console.log("게시글 댓글 리스트", data.commentList.list);
      setCommentListData(data.commentList.list);
      setBoardDevo(data.boardDevo);
      setBoardDevoName(data.boardDeVo.name);
      setBoardDevoCategory(data.boardDeVo.category);
      setBoardDevoTitle(data.boardDeVo.title);
      setBoardDevoCreatedat(data.boardDeVo.createdat);
      setBoardDevoCtnt(data.boardDeVo.ctnt);
    } catch (err) {
      console.log(err);
    }
  };

  // 댓글 수정
  const handleEditComment = _icomment => {
    // alert(icomment);
    setIcomment(_icomment);
    setCommentEdit(true);
  };

  // 댓글 삭제
  const handleDeleteComment = async _icomment => {
    const result = await deleteComment(_icomment);
    alert("삭제완료");
    // setIcomment(_icomment)
    // setCommentDelete(true)

    // 목록 갱신
    const arr = commentListData.filter(item => item.icomment !== _icomment);
    setCommentListData(arr);
  };

  // 댓글 등록
  const handlePostComment = async () => {
    const commentPostData = {
      iboard: iboard,
      ctnt: commentText,
    };
    try {
      await postComment(commentPostData);
      const data = await getFetchData(iboard);
      setCommentListData(data.commentList.list);
      setCommentText("");
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    ComuBoardData();
  }, []);
  return (
    <CommunityBulletinBoardWrapper>
      <div className="top_community_bulletin_board_contents">
        <div className="community_bulletin_board_contents_inner">
          <h1>커뮤니티 게시글 상세보기</h1>
          <hr className="community_bulletin_board_line" />
          <div className="community_bulletin_board_topbox">
                <p className="board_category">[{boardDevoCategory}]</p>
            <p className="community_bulletin_board_title">{boardDevoTitle}</p>
            <div>
              <div className="board_info">
                <div className="board_create_info">
                  <p className="board_user">{boardDevoName}</p>
                  <p className="board_date">{boardDevoCreatedat}</p>
                </div>
              </div>
            </div>
            <div className="board_ctnt">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(boardDevoCtnt),
                }}
              />
            </div>
            <hr className="community_bulletin_board_line" />
          </div>

          <div className="comment-list"></div>
          {/* <hr className="community_bulletin_board_line" /> */}
          <ul className="community_bulletin_comment_list">
            {commentListData.map((item, index) => (
              <CommentList
                key={index}
                item={item}
                handleEditComment={handleEditComment}
                handleDeleteComment={handleDeleteComment}
                userDataName={userDataName}
                icomment={icomment}
                commentSelectID={commentSelectID}
                setCommentSelectID={setCommentSelectID}
              />
            ))}
          </ul>
          <h1>댓글 등록</h1>
          <hr className="community_bulletin_board_line"/>
          <div className="community_bulletin_board_comment_box">
            <div className="community_bulletin_board_comment">
              <ul className="community_bulletin_ul">
                <textarea
                  cols="165"
                  rows="10"
                  value={commentText}
                  onChange={event => setCommentText(event.target.value)}
                ></textarea>
              </ul>
            </div>
          </div>
          <button
            onClick={handlePostComment}
            className="community_bulletin_board_resi"
          >
            등록
          </button>
        </div>
      </div>
    </CommunityBulletinBoardWrapper>
  );
};

export default CommunityBulletinBoard;
