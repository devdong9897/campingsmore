import React from "react";
import { WritingWrapper } from "../css/mypage-style";

const WritingHistory = () => {
  return (
    <WritingWrapper>
      <ul className="writing_list">
        <li>
          <div className="writing_title">
            아무데나 캠핑장 시설이 정말 좋아요
          </div>
          <div className="writing_text">산은 산이오 물은 물인데</div>
        </li>
      </ul>
    </WritingWrapper>
  );
};

export default WritingHistory;
