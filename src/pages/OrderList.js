import {
  faCartShopping,
  faMagnifyingGlass,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OrderListWrapper } from "../css/orderlist-style";
const OrderList = () => {
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
          <li>#소고기</li>
          <li>#양고기</li>
          <li>#닭고기</li>
          <li>#생선</li>
          <li>#돼지고기</li>
        </ul>
        <ul className="order_item_list">
          <li>
            <div className="img"></div>
            <div className="product_desc">
              <span>교촌 대구점</span>
              <span className="option">허니 머시기 후라이드치킨</span>
              <span className="explanation">
                양심없는 교촌의 양심없는 가격!
                <br />
                에이 이걸 누가 먹어~ 하면서도 계속 사는 호갱님들
                <br /> 덕분에 교촌이 살고 있습니다. 많이 사고 많이 드세요.
              </span>
              <span className="date">등록일 : 1822.02.5</span>
            </div>
            <div className="content">
              <span className="price">23000원</span>
              <div className="orderlist_btn">
                <button className="shopping_basket">
                  장바구니 담기
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="cart_icon"
                  />
                </button>
                <butdton className="product_details">
                  상품상세보기
                  <div className="tagicon_won">
                    <FontAwesomeIcon icon={faTag} className="tag_icon" />
                  </div>
                </butdton>
                <div className="basket_fixed">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="fixed_icon"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </OrderListWrapper>
  );
};

export default OrderList;
