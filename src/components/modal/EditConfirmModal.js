import React from "react";
import { EditconfirmWrapper } from "../../css/EditconfirmModal-style";
import { postMyProfileData } from "../../api/mypageFatch";

const EditConfirmModal = ({
  seteditconfirmState,
  fixData,
  fixImg,
  setSomething,
}) => {
  const editconfirm = async () => {
    setSomething(false);
    seteditconfirmState(false);
    try {
      const formData = new FormData();
      formData.append("updateUserInfoDto", JSON.stringify(fixData));
      if (fixImg) {
        formData.append("pic", fixImg);
      }
      console.log("보내주는 것들", formData);
      const result = await postMyProfileData(formData);
      console.log("성공시 백앤드 보여주는 데이터", result);
    } catch (err) {
      console.log(err);
    }

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
