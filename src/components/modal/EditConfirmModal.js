import React from "react";
import { EditconfirmWrapper } from "../../css/EditconfirmModal-style";
import { postMyProfileData } from "../../api/mypageFatch";

const EditConfirmModal = ({ seteditconfirmState, fixData, setSomething }) => {
  const editconfirm = () => {
    setSomething(false);
    seteditconfirmState(false);
    postMyProfileData(fixData);
    window.location.reload();
  };
  const editconfirmCancel = () => {
    seteditconfirmState(false);
  };
  return (
    <EditconfirmWrapper>
      <div className="editconfirm_inner">
        <div className="warning_text">작성하신 내용으로 수정하시겠습니까?</div>
        <div className="modal_button">
          <button onClick={editconfirm}>수정</button>
          <button onClick={editconfirmCancel}>취소</button>
        </div>
      </div>
    </EditconfirmWrapper>
  );
};

export default EditConfirmModal;
