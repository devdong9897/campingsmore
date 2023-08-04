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
                <span className="name">{item.name}</span>
                <span className="date">
                  <p className="item_price">{item.price} 원</p>
                  <p className="item_date">{item.createdAt}</p>
                </span>
              </div>
              <div className="content">
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
                      <FontAwesomeIcon icon={faTag} className="tag_icon" />
                    </Link>
                  </button>
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
