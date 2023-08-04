import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getOrderDetailPage } from "../api/itemFatch";
import { OrderDetailWrapper } from "../css/orderdetail-style";
import { Link } from "react-router-dom";

const OrderDetail = () => {
  const [orderdetail, setOrderDetail] = useState([]);
  const [detailListItem, setDetailListItem] = useState([]);
  const [reviewItem, setReviewItem] = useState([]);
  const getOrderDetail = async () => {
    try {
      const data = await getOrderDetailPage();
      setOrderDetail(data);
      console.log(data.item);
      setDetailListItem(data.item);
      setReviewItem(data.review);
    } catch (err) {
      console.log("오더디테일 에러", err);
    }
  };

  useEffect(() => {
    getOrderDetail();
  }, []);

  return (
    <OrderDetailWrapper>
      <div className="orderdetail_inner">
        <div className="main">
          <div className="first_box">
            <div className="main_img">
              <img src={detailListItem.pic} alt="" />
            </div>
          </div>
          <div className="second_box">
            <div className="title">
              <h1>{detailListItem.name}</h1>
              <p className="meddle_title">
                
              </p>
              <p className="price">{detailListItem.price}원</p>
            </div>

            <div className="points">
              <div className="way">
                <p className="point_earned">포인트 적립방법</p>
                <p className="review">리뷰 작성시</p>
                <p className="img">이미지 업로드시</p>
              </div>
              <div className="earned">
                <p className="max_point">
                  최대 <span>1000포인트</span>적립
                </p>
                <p className="min_point">최대 500포인트 적립</p>
              </div>
            </div>

            <div className="qantity">
              <div className="free">[배송무료] / 기본배송</div>
              <div className="num">
                <button>-</button>
                <p className="one">1</p>
                <button>+</button>
                <div className="number">
                  <p>23000원</p>
                </div>
              </div>
            </div>
            <div className="total">
              <p className="total_price">총 상품 금액</p>
              <p className="orderdetail_price">23000원</p>
            </div>

            <button className="left">장바구니담기</button>
            <button className="right">
              <Link to="/main/payment" className="payrig">
                구매하기
              </Link>
            </button>
          </div>
        </div>
        <div className="top_line"></div>
        <div className="botton_line"></div>
        <div className="detailed_image"></div>

        <div className="profile_box">
          <div className="profile">
            <div className="profile_img"></div>
            <div className="profile_name">
              <p>신형만</p>
              <p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
              </p>
            </div>
          </div>
          <div className="profile_content">
            <span className="profile_title">
              아무데나 캠핑장 시설이 정말 좋아요
            </span>
            <p className="content">
              인간은 어류가 아닌 고기로는 대부분 초식동물을 먹는다. 주로 먹는
              종류는 소, 염소, 양, 토끼 등. 흔히 생각하는 맛이나 누린내의
              문제라기보다는 효율성과 안전성 문제가 크다. 초식동물은 풀만 먹여도
              되니 효율적이고 사람과 식량을 공유할 필요가 없는 반면 육식동물을
              키우면 사료로 고기를 먹여야 하는 탓에 비효율적이며, 사육 과정도
              매우 위험하기 때문이다. 또한 상위 포식자로 갈수록 생물 농축이
              심해지기 때문에 2차 포식자인 육식 동물의 고기는 건강에 그리 좋지
              않다. 그나마 사육을 하면서 식용으로도 쓰이는 육식동물로 개와
              악어가 있긴 한데, 개의 경우 육식 위주의 잡식동물이며 앞서 말한
              효율성 문제와 다른 문제들 때문에 대중적인 고기는 아니며, 악어
              사육의 주된 목적은 가죽이며 고기는 부산물이고 역시 상술한 이유와
              10년이라는 극악의 성장속도 때문에 대량으로 사육하지는 못하고 있다.
            </p>
          </div>
        </div>
      </div>
    </OrderDetailWrapper>
  );
};

export default OrderDetail;
