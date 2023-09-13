import React from "react";
import { UniteMocalWapper } from "../../css/modalStyle/modal-stylies";
import { postCampingCancel } from "../../api/userFatch";
import { getreservationData } from "../../api/mypageFatch";

const CampingCancelModal = ({ setIsModal, cancelData, setReserList }) => {
  const handleDelete = async () => {
    try {
      const data = await postCampingCancel(cancelData);
      const renewl = await getreservationData();
      setReserList(renewl);
      console.log("성공?", data);
      setIsModal(false);
    } catch (err) {
      console.log(err);
    }
  };
  const handleModal = () => {
    setIsModal(false);
  };
  return (
    <UniteMocalWapper>
      <div className="inner">
        <div className="warning_text">
          선택한 캠핑장의 예약을 취소하시겠습니까?
        </div>
        <div className="modal_button">
          <button onClick={handleDelete}>예약취소</button>
          <button onClick={handleModal}>닫기</button>
        </div>
      </div>
    </UniteMocalWapper>
  );
};

export default CampingCancelModal;
