import React from "react";
import { WritingWrapper } from "../css/mypage-style";

const WritingHistory = ({ comulist }) => {
  console.log(comulist[1]);
  return (
    <WritingWrapper>
      <ul className="writing_list">
        <h1>작성글</h1>
        {comulist.map((item, index) => (
          <li key={index}>
            <div className="writing_title">{item.title}</div>
            <div className="writing_text">{item.createdat}</div>
          </li>
        ))}
      </ul>
    </WritingWrapper>
  );
};

export default WritingHistory;
