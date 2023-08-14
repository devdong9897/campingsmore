import React, { useEffect } from "react";
import { CommunityBulletinBoardWrapper } from "../css/community-bulletin-board-style";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import getFetchData, { postComment } from "../api/communityBulletinBoardFetch";

const CommunityBulletinBoard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const iboard = searchParams.get("iboard");
  // 게시글 내용
  const [boardDevo, setBoardDevo] = useState({});
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
          <h1>{boardDevo.title !== undefined ? boardDevo.title : ""}</h1>
          <hr className="community_bulletin_board_line" />
          <div>
            <div className="community_bulletin_board_topbox">
              <div className="board_info">
                <span className="board_category">{boardDevo.category}</span>
                <div className="board_create_info">
                  <p className="board_date">{boardDevo.createdat}</p>
                  <p className="board_user">{boardDevo.name}</p>
                </div>
              </div>
              <div className="board_ctnt">{boardDevo.ctnt ? boardDevo.ctnt : ""}</div>
            </div>
          </div>

          <div className="comment-list"></div>
          <h1></h1>
          <div className="community_bulletin_board_comment_box">
            <div className="community_bulletin_board_comment">
              <ul>
                <textarea
                  cols="20"
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
