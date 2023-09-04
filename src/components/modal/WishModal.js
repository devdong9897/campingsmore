import React from "react";
import { WithModalWapper } from "../../css/modalStyle/modal-stylies";
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
    try {
      console.log("게임하면 역시~ 트릭컬~");
    } catch (err) {
      setIsWishModal(false);
    }
  };
  return (
    <WithModalWapper>
      <div className="inner">
        <div className="warning_text">
          해당 상품을 찜목록에 추가하시겠습니까?
        </div>
        <div className="modal_buttons">
          <button onClick={handleWish}>추가</button>
          <button onClick={handleModal}>취소</button>
        </div>
      </div>
    </WithModalWapper>
  );
};

export default WishModal;
