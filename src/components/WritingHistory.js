import React from "react";
import { WritingWrapper } from "../css/mypage-style";
import { updateCommunityData } from "../api/mypageFatch";
import { useState } from "react";
import { useEffect } from "react";

const WritingHistory = ({ comulist }) => {
  console.log(comulist[1]);
  const [updatedData, setUpdateData] = useState({})

  const handleClickDelete = async (iboard) => {
    try {
      const result = await updateCommunityData (iboard)
      console.log("게시글 삭제 성공")
      setUpdateData(result)
    }catch(err){
      console.log("게시글 삭제 실패",err)
    }
  }

  return (
    <WritingWrapper>
      <ul className="writing_list">
        <h1>작성글</h1>
        {comulist.length ? (
          <>
            {comulist.map((item, index) => (
              <li key={index}>
                <div className="writing_title">{item.title}</div>
                <div className="writing_text">{item.createdat}
                </div>
                <div className="writing_box">
                  <button className="writing_edit" onClick={() => handleClickDelete()}>수정</button>
                  <button className="writing_del" onClick={() => handleClickDelete()}>삭제</button>
                </div>
              </li>
            ))}
          </>
        ) : (
          <div className="write_img">
            <img src="../image/write.png" alt="" />
            <p>작성글 내역이없습니다.</p>
          </div>
        )}
      </ul>
    </WritingWrapper>
  );
};

export default WritingHistory;
