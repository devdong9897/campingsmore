import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { postBasket } from "../api/basketFetch";
import { getCookie } from "../api/cookie";
import {
  getDefaultOrderList,
  getOrderCateSearch,
  getOrderListPage,
  getOrderSearch,
} from "../api/itemFatch";
import { OrderListWrapper } from "../css/orderlist-style";
import BasketFromListModal from "../components/modal/BasketFromListModal";
import { useSearchParams } from "react-router-dom";
import WishModal from "../components/modal/WishModal";

const OrderList = () => {
  const accessToken = getCookie("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);

  // 메인 -> 파람즈
  const [searchParams, setSearchParams] = useSearchParams();

  // 모달창 state
  const [isBasketModal, setIsBasketModal] = useState(false);
  // 모달에 전달할 데이터
  const [sendDataToModal, setSendDataToModal] = useState({});

  // 찜하기 모달 state
  const [iswishModal, setIsWishModal] = useState(false);
  const [wishitem, setWishItem] = useState("");
  // 선택된 아이템 고유번호
  const [selcetItem, setselcetItem] = useState("");
  const navigate = useNavigate();
  const [orderlist, setOrderList] = useState([]);
  // 카테고리만 불러오자
  const [orderListitem, setOrderListItem] = useState([]);
  // 검색state
  const [searchText, setSearchText] = useState("");
  const [orderPage, setOrderPage] = useState("");
  const [cateID, setCateId] = useState("");

  // 현재 활성화된 카테고리 ID
  const [activeCategory, setActiveCategory] = useState("");

  // 찜하기 추가 핸들러

  const handleWish = iitem => {
    setIsWishModal(true);
    setWishItem(iitem);
  };

  // 그냥 장너보기 눌렀을때 나오는것
  const getOrderList = async () => {
    try {
      const res = await getDefaultOrderList();
      setOrderList(res.itemList);
      console.log("그냥 장터보기 눌럿을때 나오는거!", res.itemList);
    } catch (err) {
      console.log(err);
    }
  };

  // 카테고리만 불러옵시다.
  const getOrderListCategory = async () => {
    try {
      const res = await axios.get("/api/item/category");
      const allCategory = { iitemCategory: "all", name: "전체" };
      setOrderListItem([allCategory, ...res.data]);
      // setOrderListItem([allCategory, ...res.data]);
      // console.log("이게 그거냐?", res.data);
      // setOrderListItem(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 메인에서 검색하고 들어올떄
  const getFromMainSearch = async () => {
    const search = searchParams.get("search");
    try {
      const res = await axios.get(`/api/item/search?text=${search}`);
      setOrderList(res.data.itemList);
      setOrderPage(parseInt(res.data.maxPage, 10));
      console.log("메인에서 검색하고 들어올때다", search);
    } catch (err) {
      console.log(err);
    }
  };

  // 메인에서 카테고리 클릭하고 들어올떄
  const getFromMainCate = async () => {
    const catecode = searchParams.get("catecode");
    try {
      const data = await getOrderCateSearch(catecode);
      setOrderList(data.itemList);
      setOrderPage(data.maxPage);
      console.log(data.maxPage);
      console.log("메인에서 카테고리 눌럿을때 나오는 데이터", data);
    } catch (err) {
      console.log(err);
    }
  };

  // 검색을 했을때 불러오기!
  const getOrderSearchData = async searchText => {
    try {
      const data = await getOrderSearch(searchText);
      console.log("검색한결과닷!", data);
      setOrderList(data.itemList);
    } catch (err) {
      console.log(err);
    }
  };

  // 카테고리 눌럿을때 나오는것
  const getOrderCateSearchData = async categoryId => {
    try {
      const data = await getOrderCateSearch(categoryId);
      setOrderList(data.itemList);
      setOrderPage(data.maxPage);
      console.log(data.maxPage);
      console.log("카테고리 눌럿을때 나오는 데이터", data);
    } catch (err) {
      console.log(err);
    }
  };
  // 페이지네이션
  const pagenation = Array.from({ length: orderPage }, (_, index) => index);

  const handleSearch = () => {
    getOrderSearchData(searchText);
  };

  const handleSort = sortType => {
    // orderListitem을 정렬하는 로직 추가
    // let sortedItems = [...orderlist];
    switch (sortType) {
      case "SalesRanking":
        break;
      case "OldOrder":
        break;
      case "HighPrice":
        break;
      case "LowPrice":
        break;
      default:
        break;
    }
  };
  // 카테고리 클릭
  const handleCategoryClick = async (categoryId, name) => {
    console.log("클릭한것 이름", name);
    if (categoryId === "all") {
      getOrderList();
    } else {
      getOrderCateSearchData(categoryId);
      setCateId(categoryId);
    }
    setActiveCategory(name);
  };

  const handleCart = item => {
    if (isLoggedIn) {
      setIsBasketModal(true);
      setselcetItem(item.iitem);
      const cartItem = {
        icart: parseInt(item.iitem),
        pic: item.pic,
        name: item.name,
        price: item.price,
        quantity: 1,
      };
      setSendDataToModal(cartItem);
    } else {
      alert("로그인이 되지않았습니다.");
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
      setOrderList(data.itemList);
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
    const search = searchParams.get("search");
    const catecode = searchParams.get("catecode");
    if (search) {
      getFromMainSearch();
    } else if (catecode) {
      getFromMainCate();
    } else if (catecode === null && search === null) {
      getOrderList();
    }
    getOrderListCategory();
    // getOrderListCategory();
    // if (search) {
    //
    // } else if (catecode) {
    //
    // } else {
    //   getOrderListCategory();
    //   getOrderList();
    // }
  }, []);

  return (
    <OrderListWrapper>
      {isBasketModal ? (
        <BasketFromListModal
          setIsBasketModal={setIsBasketModal}
          selcetItem={selcetItem}
          sendDataToModal={sendDataToModal}
        />
      ) : (
        ""
      )}

      {iswishModal ? (
        <WishModal wishitem={wishitem} setIsWishModal={setIsWishModal} />
      ) : (
        ""
      )}
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
          <button onClick={() => handleSort("SalesRanking")}>
            판매순 랭킹
          </button>
          <button onClick={() => handleSort("Latest")}>최신순</button>
          <button onClick={() => handleSort("OldList")}>오래된순</button>
          <button onClick={() => handleSort("HighPrice")}>높은가격순</button>
          <button onClick={() => handleSort("LowPrice")}>낮은가격순</button>
        </div>
        <ul className="order_category">
          {orderListitem.map((item, index) => (
            <li
              key={index}
              className={`${item.name === activeCategory ? "active" : ""}`}
              onClick={() => handleCategoryClick(item.iitemCategory, item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ul className="order_item_list">
          {orderlist.map((item, index) => (
            <li key={index}>
              <div className="img">
                <img src={item.pic} alt="" />
                {/* <div className="wish" onClick={() => handleWish(item.iitem)}>
                  <img src="../image/wish_border.png"></img>
                </div> */}
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
                    onClick={e => handleCart(item)}
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
