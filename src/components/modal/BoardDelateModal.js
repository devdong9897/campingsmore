import React from "react";
import { getCommunityData, updateCommunityData } from "../../api/mypageFatch";
import { UniteMocalWapper } from "../../css/modalStyle/modal-stylies";

const BoardDelateModal = ({
  setUpdateData,
  setIsModal,
  thisBoard,
  setComuList,
}) => {
  const handleDeleteBaord = async () => {
    try {
      const result = await updateCommunityData(thisBoard);
      const renewal = await getCommunityData();
      console.log("여긴 뭐오노", renewal);
      setComuList(renewal);
      console.log("게시글 삭제 성공");
      setUpdateData("뭘 담나?", result);
      setIsModal(false);
    } catch (err) {
      console.log("게시글 삭제 실패", err);
    }
  };
  const handleBoardCencal = () => {
    setIsModal(false);
  };
  return (
    <UniteMocalWapper>
      <div className="inner">
        <div className="warning_text">해당 게시글을 삭제하시겠습니까?</div>
        <div className="modal_button">
          <button onClick={handleDeleteBaord}>삭제</button>
          <button onClick={handleBoardCencal}>취소</button>
        </div>
      </div>
    </UniteMocalWapper>
  );
};

export default BoardDelateModal;
