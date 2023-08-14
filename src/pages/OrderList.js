import {
  faCartShopping,
  faMagnifyingGlass,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { postBasket } from "../api/basketFetch";
import { getCookie } from "../api/cookie";
import { getOrderCateSearch, getOrderListPage } from "../api/itemFatch";
import { OrderListWrapper } from "../css/orderlist-style";

const OrderList = () => {
  const accessToken = getCookie("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);
  const navigate = useNavigate();
  const [orderlist, setOrderList] = useState([]);
  const [orderListitem, setOrderListItem] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [orderPage, setOrderPage] = useState("");
  const [cateID, setCateId] = useState("");


  const getOrderListCategory = async () => {
    try {
      const res = await axios.get("/api/item/category");
      setOrderList(res.data);
      getOrderListSearch("");
    } catch (err) {
      console.log(err);
    }
  };

  // 검색 하는거고
  const getOrderListSearch = async text => {
    try {
      const res = await axios.get(`/api/item/search?text=${text}`);
      setOrderListItem(res.data.itemList);
      setOrderPage(parseInt(res.data.maxPage, 10));
    } catch (err) {
      console.log(err);
    }
  };

  const pagenation = Array.from({ length: orderPage }, (_, index) => index);

  const handleSearch = () => {
    getOrderListSearch(searchText);
  };

  const handleSort = sortType => {
    // orderListitem을 정렬하는 로직 추가
    let sortedItems = [...orderListitem];

    switch (sortType) {
      case "LatestOrder":
        sortedItems.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        break;
      case "OldOrder":
        sortedItems.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
        break;
      case "HighPrice":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case "LowPrice":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setOrderListItem(sortedItems);
  };

  const getOrderCateSearchData = async categoryId => {
    try {
      const data = await getOrderCateSearch(categoryId);
      setOrderListItem(data.itemList);
      setOrderPage(data.maxPage);
      console.log(data.maxPage);
      console.log("카테고리 눌럿을때 나오는 데이터", data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCategoryClick = async categoryId => {
    getOrderCateSearchData(categoryId);
    setCateId(categoryId);
  };

  const handleCart = iitem => {
    postBasket(iitem);
    if (isLoggedIn) {
      postBasket(iitem);
    } else {
      alert("마");  
    }
  };

  const something = iitem => {
    console.log("클릭한 값 인덱스", iitem);
    navigate(`/main/orderdetail?iitem=${iitem}`);
  };

  const getOrderPage = async index => {
    console.log(index, cateID);
    try {
      const data = await getOrderListPage(index, cateID);
      setOrderListItem(data.itemList);
      console.log("페이지네이션", data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePage = index => {
    getOrderPage(index + 1);
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  useEffect(() => {
    getOrderListCategory();
  }, []);

  return (
    <OrderListWrapper>
      <div className="orderlist_inner">
        <div className="orderlist_search">
          <input
            type="text"
            placeholder="찾으시는 캠핑음식이 있으신가요?"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="search_submit" onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="btn">
          <button onClick={() => handleSort("LatestOrder")}>최신순</button>
          <button onClick={() => handleSort("OldOrder")}>오래된순</button>
          <button onClick={() => handleSort("HighPrice")}>높은가격순</button>
          <button onClick={() => handleSort("LowPrice")}>낮은가격순</button>
        </div>
        <ul className="order_category">
          {orderlist.map((item, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(item.iitemCategory)}
            >
              {item.name}
            </li>
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
                  <button
                    className="shopping_basket"
                    onClick={e => handleCart(item.iitem)}
                  >
                    장바구니 담기
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                  <button
                    className="product_details"
                    onClick={e => something(item.iitem)}
                  >
                    <div
                      to={`/main/orderdetail?iitem=${item.iitem}`}
                      className="details_link"
                    >
                      상품상세보기
                      <FontAwesomeIcon icon={faTag} className="tag_icon" />
                    </div>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="order_pagenation">
          {pagenation.map((item, index) => (
            <li key={index} onClick={e => handlePage(index)}>
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </OrderListWrapper>
  );
};

export default OrderList;
