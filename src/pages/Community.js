import React from "react";
import { useNavigate } from "react-router";
import { CommunityWrapper } from "../css/community-style";

const Community = () => {
  const navigate = useNavigate();

  const handleGoToCommunityWrite = () => {
    navigate("/main/communitywrite");
  };

  return (
    <CommunityWrapper>
      <div className="top_community_contents">
        <div className="community_contents_inner">
          <h1>커뮤니티</h1>
          <hr className="community_line" />
          <button
            className="community_board_regi"
            onClick={handleGoToCommunityWrite}
          >
            게시글 작성
          </button>

          <div className="community_board_list_head">
            <span className="community_board_list_notice">공지</span>
            <span>우리 서비스에 대한 소개</span>
            <span>관리자</span>
          </div>

          <div className="community_board_list_head">
            <span className="community_board_list_notice">공지</span>
            <span>알립니다 어쩌고</span>
            <span>관리자</span>
          </div>

          <div className="community_board_list_head">
            <span className="community_board_list_notice">공지</span>
            <span>이 많은걸 관리해야 하다니</span>
            <span>관리자</span>
          </div>

          <div className="community_board_list_head">
            <span className="community_board_list_notice">공지</span>
            <span>사이트에 대해 피드백을...</span>
            <span>관리자</span>
          </div>

          <div className="community_board_list_head">
            <span className="community_board_list_notice">자유</span>
            <span>이런 웹서비스가 개발되다니 정말 편리해요!</span>
            <span>이대룡</span>
          </div>

          <div className="community_board_list_head">
            <span className="community_board_list_notice">정보</span>
            <span>아무데나 캠핑장 시설이 정말 좋아요</span>
            <span>신형만</span>
          </div>

          <div className="community_board_list_head">
            <span className="community_board_list_notice">잡담</span>
            <span>
              모린다인지 모른다인지 모리인다인지 모를 캠핑장 시설 관리인이...
            </span>
            <span>싱업</span>
          </div>

          <div className="community_board_list_head">
            <span className="community_board_list_notice">문의</span>
            <span>사이트에 대해 피드백을...</span>
            <span>오소</span>
          </div>
        </div>
      </div>
    </CommunityWrapper>
  );
};

export default Community;
