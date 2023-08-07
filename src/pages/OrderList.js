import {
  faCartShopping,
  faMagnifyingGlass,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { OrderListWrapper } from "../css/orderlist-style";

const OrderList = () => {
  const [orderlist, setOrderList] = useState([]);
  const [orderListitem, setOrderListItem] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getOrderListCategory = async () => {
    try {
      const res = await axios.get("/api/item/category");
      setOrderList(res.data);
      // 전체 리스트
      getOrderListSearch("");
    } catch (err) {
      console.log(err);
    }
  };

  const getOrderListSearch = async text => {
    try {
      const res = await axios.get(`/api/item/search?text=${text}`);
      setOrderListItem(res.data.itemList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrderListCategory();
  }, []);

  const handleSearch = () => {
    getOrderListSearch(searchText);
  };

  return (
    <OrderListWrapper>
      <div className="orderlist_inner">
        <div className="orderlist_search">
          <input
            type="text"
            placeholder="찾으시는 캠핑음식이 있으신가요?"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button className="search_submit" onClick={handleSearch}>
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
