import React from "react";
import { UniteMocalWapper } from "../../css/modalStyle/modal-stylies";
import { postWishList } from "../../api/mypageFatch";

const WishModal = ({ wishitem, setIsWishModal }) => {
  const handleWish = async () => {
    try {
      const data = await postWishList(wishitem);
      setIsWishModal(false);
      console.log("엥?", data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleModal = () => {
    setIsWishModal(false);
  };
  return (
    <UniteMocalWapper>
      <div className="inner">
        <div className="warning_text">
          해당 상품을 찜목록에 추가하시겠습니까?
        </div>
        <div className="modal_button">
          <button onClick={handleWish}>추가</button>
          <button onClick={handleModal}>취소</button>
        </div>
      </div>
    </UniteMocalWapper>
  );
};

export default WishModal;
