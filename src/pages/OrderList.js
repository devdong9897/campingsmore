import {
  faCartShopping,
  faMagnifyingGlass,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrderListCategory, getOrderListSearch } from "../api/itemFatch";
import { OrderListWrapper } from "../css/orderlist-style";

const OrderList = () => {
  // 아이템 카테고리
  const [orderlist, setOrderList] = useState([]);
  const getOrderList = async () => {
    try {
      const data = await getOrderListCategory();
      setOrderList(data);
      console.log(orderlist.itemList);
    } catch (err) {
      console.log("오더리스트 에러", err);
    }
  };

  // 아이템 검색리스트
  const [orderlistsearch, setOrderListSearch] = useState([]);
  const [orderListitem, setOrderListItem] = useState([]);
  const getSearchList = async () => {
    try {
      const data = await getOrderListSearch();
      setOrderListSearch(data);
      console.log(data.itemList);
      setOrderListItem(data.itemList);
    } catch (err) {
      console.log("서치리스트 에러", err);
    }
  };

  useEffect(() => {
    getOrderList();
    getSearchList();
  }, []);

  return (
    <OrderListWrapper>
      <div className="orderlist_inner">
        <div className="orderlist_search">
          <input
            type="text"
            placeholder="찾으시는 캠핑음식이 있으신가요?"
          ></input>
          <button className="search_submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <ul className="order_category">
          {orderlist.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <ul className="order_item_list">
          {orderListitem.map((item, index) => (

            <li key={index}>
              <div className="img">
                <img src={item.pic} alt="" />
              </div>
              <div className="product_desc">
                <span>{item.name}</span>
                <span className="option">허니 머시기 후라이드치킨</span>
                <span className="explanation">
                  양심없는 교촌의 양심없는 가격! 에이 이걸 누가 먹어~ 하면서도
                  계속 사는 호갱님들 덕분에 교촌이 살고 있습니다. 많이 사고 많이
                  드세요.
                </span>
                <span className="date">{item.createdAt}</span>
              </div>
              <div className="content">
                <span className="price">{item.price}</span>
                <div className="orderlist_btn">
                  <button className="shopping_basket">
                    장바구니 담기
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="cart_icon"
                    />
                  </button>
                  <button className="product_details">
                    <Link to="/main/orderdetail" className="details_link">
                      상품상세보기
                    </Link>
                    <div className="tagicon_won">
                      <FontAwesomeIcon icon={faTag} className="tag_icon" />
                    </div>
                  </button>
                  <div className="basket_fixed">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="fixed_icon"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </OrderListWrapper>
  );
};

export default OrderList;
