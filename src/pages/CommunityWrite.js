import React from "react";
import { CommunityWriteWrapper } from "../css/community-write-style";
import { useNavigate } from "react-router-dom";

const CommunityWrite = () => {
  return (
    <CommunityWriteWrapper>
      <div className="top_communityWrite_contents">
        <div className="communityWrite_contents_inner">
          <h1 className="top_communityWrite_title">커뮤니티 게시글 작성</h1>
          <hr className="communityWrite_line" />
            <input
              type="text"
              className="communityWrite_board_title"
              placeholder="제목을 입력해 주세요"
            />
            <textarea
              cols="30"
              rows="10"
              className="communityWrite_board_detail"
              placeholder="내용을 입력해 주세요"
            ></textarea>
          <button className="communityWrite_board_regi">등록</button>
          
        </div>
      </div>
    </CommunityWriteWrapper>
  );
};

export default CommunityWrite;
