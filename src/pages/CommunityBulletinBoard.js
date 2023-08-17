import React, { useEffect } from "react";
import { CommunityBulletinBoardWrapper } from "../css/community-bulletin-board-style";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { postComment, getFetchData } from "../api/communityBulletinBoardFetch";
import DOMPurify from "dompurify";

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
  const [commentList, setcommentList] = useState([]);
  // 댓글 쓰는 state
  const [commentText, setCommentText] = useState("");

  const ComuBoardData = async () => {
    try {
      const data = await getFetchData(iboard);
      console.log("데이터는 받아오나", data);
      console.log("게시글 내용", data.boardDeVo);
      console.log("게시글 댓글", data.commentList);
      setBoardDevo(data.boardDevo);
      setBoardDevoName(data.boardDeVo.name)
      setBoardDevoCategory(data.boardDeVo.category)
      setBoardDevoTitle(data.boardDeVo.title)
      setBoardDevoCreatedat(data.boardDeVo.createdat)
      setBoardDevoCtnt(data.boardDeVo.ctnt)
      setcommentList(data.commentList);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostComment = async () => {
    try {
      await postComment(commentText);
      setCommentText("");
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
          <h1>{boardDevoTitle}</h1>
          <div>
              <div className="board_info">
                <p className="board_category">[{boardDevoCategory}]</p>
                <div className="board_create_info">
                  <p className="board_date">{boardDevoCreatedat}</p>
                  <p className="board_user">{boardDevoName}</p>
                </div>
              </div>
            </div>
              <div className="board_ctnt">
                  <div
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(boardDevoCtnt) }}
                />
              </div>
              <hr className="community_bulletin_board_line" />
          </div>

          <div className="comment-list"></div>
          <h1>댓글 작성</h1>
          <hr className="community_bulletin_board_line" />
          <div className="community_bulletin_board_comment_box">
            <div className="community_bulletin_board_comment">
              <ul>
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
