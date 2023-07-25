import { OrderHistorysWrapper } from "../css/orderhistory-style";

const OrderHistory = () => {
  return (
    <OrderHistorysWrapper>
      <div className="inner">
        <div className="topline">
          <ul className="topline_list">
            <li className="product">상품명</li>
            <li>옵션</li>
            <li>상품금액</li>
          </ul>
          <div className="list">
            <ul className="list_items">
              {/* 수량 */}
              <li>
                <p className="item_number">1</p>
              </li>
              <li>
                <div className="img"></div>
              </li>
              <li>
                <span className="first_title">교촌 서울점</span>
              </li>
              <div className="options">
                <p className="quantity_title">교촌 후라이드치킨</p>
                <p className="sub_title">수량: 1</p>
              </div>
              <div className="options">
                <p className="price">1000원</p>
              </div>
              <li>
                <div className="btn">
                  <button className="write">리뷰작성</button>
                  <button className="cancel">주문취소</button>
                </div>
              </li>
            </ul>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </OrderHistorysWrapper>
  );
};

export default OrderHistory;
