import { OrderHistorysWrapper } from "../css/orderhistory-style";

const OrderHistory = () => {
  return (
    <OrderHistorysWrapper>
      <div className="inner">
        <div className="topline">
          <ul className="topline_list">
            <li></li>
            <li>사진</li>
            <li>상품명</li>
            <li>옵션/수량</li>
            <li>금액</li>
            <li></li>
          </ul>
        </div>
        <div className="history_list">
          <ul className="list_items">
            <li>
              <div className="item_number">1</div>
              <div className="product_img">
                <img src="#"></img>
              </div>
              <div className="first_title">
                <span className="product_name">교촌 서울점</span>
                <span className="quantity_title">교촌 후라이드치킨</span>
                <span className="product_desc">
                  양심없는 교촌의 양심없는 가격! 에이 이걸 누가 먹어~ 하면서도
                  계속 사는 호갱님들 덕분에 교촌이 살고 있습니다 많이 사고 많이
                  드세요양심없는 교촌의 양심없는 가격! 에이 이걸 누가 먹어~
                  하면서도 계속 사는 호갱님들 덕분에 교촌이 살고 있습니다 많이
                  사고 많이 드세요.
                </span>
              </div>
              <div className="option">
                <span className="sub_title">수량: 1</span>
              </div>
              <div className="price">10000원</div>
              <div className="product_btn">
                <button className="write">리뷰작성</button>
                <button className="cancel">주문취소</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </OrderHistorysWrapper>
  );
};

export default OrderHistory;
