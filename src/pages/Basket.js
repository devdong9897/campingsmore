import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteBasketItem, postBasketPay } from "../api/basketFetch";
import BasketModal from "../components/modal/BasketModal";
import { BasketWrapper } from "../css/basket-style";
import { basketpayData } from "../reducers/basketPaySlice";

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
  // 포스트해서 돌려 받은 데이터 받는 stae
  const [payBasketResult, setPayBasketResult] = useState([]);

  const getBasketData = async () => {
    try {
      const basketWithQuantity = BasketData.map(item => ({
        ...item,
        quantity: 1,
      }));
      setBasketList(basketWithQuantity);
      setBasketList(BasketData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBasketData();
  }, []);

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
  // const handleSelectAll = () => {
  //   setSelectAll(!selectAll);
  //   const updatedBasketList = basketList.map(item => ({
  //     ...item,
  //     selected: !selectAll,
  //   }));
  //   setBasketList(updatedBasketList);
  // };

  const handleSelectItem = index => {
    const updatedBasketList = [...basketList];
    updatedBasketList[index].selected = !updatedBasketList[index].selected;
    setBasketList(updatedBasketList);
  };

  const handleRemoveItem = async icart => {
    try {
      await deleteBasketItem(icart);
      const updatedBasketList = basketList.filter(item => item.icart !== icart);
      setBasketList(updatedBasketList);
    } catch (err) {
      console.log(err);
    }
  };

  const calculateItemTotal = item => {
    return item.quantity * item.price;
  };

  const basketPay = async basketData => {
    const basketTrue = 1;
    try {
      const data = await postBasketPay(basketData);
      console.log("데이터받앗니", data);
      setPayBasketResult(data);
      dispatch(basketpayData(data));
      navigate(`/main/payment?basket=${basketTrue}`);
    } catch (err) {
      console.log(err);
    }
  };

  // 결제하기 버튼이다 이말이에요
  const handleGoToPayment = () => {
    const basketIcart = BasketData.map(item => item.icart);
    console.log(basketIcart);
    const basketData = {
      icart: BasketData.map(item => item.icart),
    };
    basketPay(basketData);
  };

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
                  {/* <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  /> */}
                </li>
                <li>사진</li>
                <li>상품명</li>
                <li>수량</li>
                <li>상품금액</li>
              </ul>
            </div>
            {BasketData.length ? (
              <>
                {basketList.map((item, index) => (
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
                            <button
                              onClick={() => handleRemoveItem(item.icart)}
                            >
                              x
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
                <button className="basket_del_box">선택 삭제</button>
                <button onClick={handleGoToPayment} className="basket_box">
                  결제하기
                </button>
              </>
            ) : (
              <>
                <div className="basket_empty">
                  <div className="basket_empty-img">
                    <img src="/image/cart.png"></img>
                    <span>장바구니에 담은 목록이 없습니다.</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </BasketWrapper>
      ) : (
        "없다"
      )}
    </>
  );
};

export default Basket;
