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
      console.log("이12321", orderlistsearch);
      console.log("이젠장", orderListitem);
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
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </OrderListWrapper>
  );
};

export default OrderList;
