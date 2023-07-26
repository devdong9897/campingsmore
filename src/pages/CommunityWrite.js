import React from "react";
import { CommunityWriteWrapper } from "../css/community-write-style";

const CommunityWrite = () => {
  return (
    <CommunityWriteWrapper>
      <div className="top_communityWrite_contents">
        <div className="communityWrite_contents_inner">
          <h1 className="top_communityWrite_title">커뮤니티 게시글 작성</h1>
          <hr className="communityWrite_line" />
          <form action="">
            <select name="" id="" className="communityWrite_board_menu">
              <option value="">말머리 선택</option>
              <option value="">말머리</option>
              <option value="">개머리</option>
              <option value="">돼지머리</option>
              <option value="">소머리</option>
            </select>
            <button className="communityWrite_board_regi">등록</button>
            <input
              type="text"
              className="communityWrite_board_title"
              placeholder="제목을 입력해 주세요"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="communityWrite_board_detail"
              placeholder="내용을 입력해 주세요"
            ></textarea>
          </form>
        </div>
      </div>
    </CommunityWriteWrapper>
  );
};

export default CommunityWrite;
