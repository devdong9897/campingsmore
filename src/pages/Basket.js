import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteBasketItem, getBasketList } from "../api/basketFetch";
import BasketModal from "../components/modal/BasketModal";
import { BasketWrapper } from "../css/basket-style";
import { basketDelete } from "../reducers/basketSlice";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const UserAdd = useSelector(state => state.user.UserProFileArr);
  const BasketData = useSelector(state => state.basket.basketArr);
  const [basketList, setBasketList] = useState([]);
  const [count, setCount] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [basketQuantity, setBasketQuantity] = useState(null);
  const [modal, isModal] = useState(false);
  const [cartCount, setCartCount] = useState("");

  const getBasketData = async () => {
    try {
      const data = await getBasketList();
      const basketWithQuantity = BasketData.map(item => ({
        ...item,
        quantity: 1,
      }));
      console.log("사용자 장바구니 데이터",data);
      setBasketList(basketWithQuantity);
      setBasketList(BasketData);
    } catch (err) {
      console.log(err);
    }
  };


  const onHandleClickPlus = index => {
    setBasketList(prevBasketList => {
      const updatedBasketList = [...prevBasketList];
      updatedBasketList[index] = {
        ...updatedBasketList[index],
        quantity: updatedBasketList[index].quantity + 1,
      };
      return updatedBasketList;
    });
  };

  const onHandleClickMinus = index => {
    setBasketList(prevBasketList => {
      const updatedBasketList = [...prevBasketList];
      if (updatedBasketList[index].quantity > 0) {
        updatedBasketList[index] = {
          ...updatedBasketList[index],
          quantity: updatedBasketList[index].quantity - 1,
        };
      }
      // dispatch(basketMinus(updatedBasketList));
      return updatedBasketList;
    });
  };
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedBasketList = basketList.map(item => ({
      ...item,
      selected: !selectAll,
    }));
    setBasketList(updatedBasketList);
  };

  const handleSelectItem = index => {

    const updatedBasketList = [...basketList];
    updatedBasketList[index].selected = !updatedBasketList[index].selected;
    setBasketList(updatedBasketList);
  };

  const handleRemoveItem = async icart => {
    try {
      await deleteBasketItem(icart);
      const updatedBasketList = BasketData.filter(item => item.icart !== icart);
      setBasketList(updatedBasketList);
      window.location.reload();
      // dispatch(basketDelete(updatedBasketList));
    } catch (err) {
      console.log(err);
    }
  };

  const calculateItemTotal = item => {
    return item.quantity * item.price;
  };

  const handleGoToPayment = () => {
    navigate("/main/payment");
  };

  useEffect(() => {
    getBasketData();
  }, []);

  return (
    <>
      {BasketData ? (
        <BasketWrapper>
          {modal ? (
            <>
              <BasketModal
                isModal={isModal}
                basketList={basketList}
                cartCount={cartCount}
                setBasketList={setBasketList}
              />
            </>
          ) : (
            ""
          )}

          <div className="basket_inner">
            <h1>장바구니</h1>
            <div className="basket_topline">
              <ul className="basket_topline_list">
                <li>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </li>
                <li>사진</li>
                <li>상품명</li>
                <li>수량</li>
                <li>상품금액</li>
              </ul>
            </div>
            {BasketData.length ? (
              <>
                          {BasketData.map((item, index) => (
              <li key={index}>
                <div className="basket_list">
                  <ul className="basket_goods_list">
                    <li>
                      <div className="basket_choice_box">
                        <input
                          type="checkbox"
                          checked={item.selected}
                          onChange={() => handleSelectItem(index)}
                        />
                      </div>
                      <div className="basket_product_img">
                        {/* <img src="#" alt="" />{item.pic} */}
                        <img src={item.pic} alt="" />
                      </div>
                      <div>
                        {/* <p>{item.name}허니 머시기 후라이드 치킨</p> */}
                        <p>{item.name}</p>
                      </div>
                      <div>
                        <button onClick={() => onHandleClickMinus(index)}>
                          -
                        </button>
                        {/* <button>-</button> */}
                        {/* <span>{item.quantity}1</span> */}
                        <span>{item.quantity}</span>
                        {/* <span>{count}</span> */}
                        <button onClick={() => onHandleClickPlus(index)}>
                          +
                        </button>
                        {/* <button>+</button> */}
                      </div>
                      {/* <div>{item.price}10000원</div> */}
                      <div>{calculateItemTotal(item)}</div>
                      {/* <div>{item.price}</div> */}
                      <div>
                        <button onClick={() => handleRemoveItem(item.icart)}>
                          x
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
            <button onClick={handleGoToPayment} className="basket_box">
              결제
            </button>
              </>
            ):(<div className="basket_empty">
              <div className="basket_empty-img">
                <img src="/image/cart.png"></img>
                <span>장바구니에 담은 목록이 없습니다.</span>
              </div>
            </div>)}

          </div>
        </BasketWrapper>
      ) : (
        "없따!"
      )}
    </>
  );
};

export default Basket;


