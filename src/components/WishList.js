import React, { useState } from "react";
import { WishListWrapper } from "../css/myPageStyle/mypage-style";
import { useNavigate } from "react-router";
import { OrderItemAdd } from "../reducers/orderItemSlice";
import { useDispatch } from "react-redux";

const WishList = ({ wishListData }) => {
  const [thisWishItem, setThisWishItem] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBuyItem = iitem => {
    setThisWishItem(iitem);
    const orderItme = {
      iitemId: iitem,
      quantitys: 1,
    };
    dispatch(OrderItemAdd(orderItme));
    navigate("/main/payment");
  };
  const path = process.env.PUBLIC_URL;
  console.log("이게뭐지?", wishListData);
  return (
    <WishListWrapper>
      {wishListData.length ? (
        <>
          <h2>찜내역</h2>
          <h4>찜내역에서 바로 구매해보세요</h4>
          <ul className="wishlist_box">
            {wishListData.map((item, index) => (
              <li key={index} onClick={e => handleBuyItem(item.iitem)}>
                {item.itemNm}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="Wish_img">
          <img src={`${path}/image/zzim.png`} alt="" />
          <p>찜한 내역이 없습니다.</p>
        </div>
      )}
    </WishListWrapper>
  );
};

export default WishList;
