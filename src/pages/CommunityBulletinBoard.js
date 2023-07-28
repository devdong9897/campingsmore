import React from "react";
import {CommunityBulletinBoardWrapper} from '../css/communutiy-bulletin-board-style'

const CommunityBulletinBoard = () => {
    return (
        <CommunityBulletinBoardWrapper>
            <div className="top_community_bulletin_board_contents">
                <div className="community_bulletin_board_contents_inner">
                    <h1>커뮤니티 게시글</h1>
                    <hr className="community_bulletin_board_line" />
                </div>
            </div>
        </CommunityBulletinBoardWrapper>
    )
};

export default CommunityBulletinBoard;
