import React from "react";
import { WritingWrapper } from "../css/myPageStyle/mypage-style";
import { updateCommunityData } from "../api/mypageFatch";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import BoardDelateModal from "./modal/BoardDelateModal";

const WritingHistory = ({ comulist, setComuList, getCommunity }) => {
  const navigate = useNavigate();
  console.log(comulist[1]);
  const [updatedData, setUpdateData] = useState({});
  const [updatecomuList, setUpdatecomuList] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [thisBoard, setThisBoard] = useState("");

  const handleClickDelete = iboard => {
    setIsModal(true);
    setThisBoard(iboard);
  };

  const handleDetail = iboard => {
    navigate(`/main/communitybulletinboard?iboard=${iboard}`);
  };

  const handleClickEdit = iboard => {
    navigate(`/main/communitywrite?iboard=${iboard}`);
  };

  return (
    <WritingWrapper>
      {isModal ? (
        <BoardDelateModal
          setUpdateData={setUpdateData}
          setIsModal={setIsModal}
          thisBoard={thisBoard}
          setComuList={setComuList}
        />
      ) : (
        ""
      )}

      <ul className="writing_list">
        <h1>작성글</h1>
        {comulist.length ? (
          <>
            {comulist.map((item, index) => (
              <li key={index}>
                <div className="writing_title">{item.title}</div>
                <div className="writing_text">{item.createdat}</div>
                <div className="writing_box">
                  <button
                    className="writing_edit"
                    onClick={() => handleClickEdit(item.iboard)}
                  >
                    수정
                  </button>
                  <button
                    className="writing_del"
                    onClick={() => handleClickDelete(item.iboard)}
                  >
                    삭제
                  </button>
                </div>
                <div
                  className="writing_view"
                  onClick={() => handleDetail(item.iboard)}
                >
                  게시글 상세보기
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
