import React from "react";
import { CommunityWriteWrapper } from "../css/community-write-style";
import { useNavigate } from "react-router";

const CommunityWrite = () => {

  const navigate = useNavigate()

  const handleGoToCommunityWrite = () => {
    navigate("/main/community");
  }

  return (
    <CommunityWriteWrapper>
      <div className="top_communityWrite_contents">
        <div className="communityWrite_contents_inner">
          <h1 className="top_communityWrite_title">커뮤니티 게시글 작성</h1>
          <hr className="communityWrite_line" />
          <form action="">
            <select className="communityWrite_board_menu">
              <option value="">말머리 선택</option>
              <option value="">말머리</option>
              <option value="">개머리</option>
              <option value="">돼지머리</option>
              <option value="">소머리</option>
            </select>
            
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
          </form>
          <button className="communityWrite_board_cancel" onClick={handleGoToCommunityWrite}>취소</button>
          <button className="communityWrite_board_regi">등록</button>
        </div>
      </div>
    </CommunityWriteWrapper>
  );
};

export default CommunityWrite;
