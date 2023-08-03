import React from "react";
import {CommunityBulletinBoardWrapper} from '../css/community-bulletin-board-style'
import { useNavigate } from "react-router";

const CommunityBulletinBoard = () => {

    const navigate = useNavigate();

    const handleGoToCommunityBulletinBoard = () => {
        navigate("/main/communitywrite")
    }

    return (
        <CommunityBulletinBoardWrapper>
            <div className="top_community_bulletin_board_contents">
                <div className="community_bulletin_board_contents_inner">
                    <h1>커뮤니티 게시글</h1>
                    <hr className="community_bulletin_board_line" />
                    <button className="community_bulletin_board_regi" onClick={handleGoToCommunityBulletinBoard}>게시글 등록</button>
                    <button className="community_bulletin_board_del">삭제</button>
                    <button className="community_bulletin_board_edit">수정</button>
                    
                    <input
              type="text"
              className="community_bulletin_board_title"
              placeholder="제목을 입력해 주세요"
            />
            <textarea
              cols="30"
              rows="10"
              className="community_bulletin_board_detail"
              placeholder="내용을 입력해 주세요"
            ></textarea>
            <div className="community_bulletin_board_comment_box">
                    <h1>리뷰작성</h1>
                <div className="community_bulletin_board_comment">
                    <p>hyeongman1990</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                <hr />
                <button>등록</button>
                </div>
            </div>
                </div>
            </div>
        </CommunityBulletinBoardWrapper>
    )
};

export default CommunityBulletinBoard;
