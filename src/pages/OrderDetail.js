import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom/dist";
import { getOrderDetailPage } from "../api/itemFatch";
import { OrderDetailWrapper } from "../css/orderdetail-style";

const OrderDetail = () => {
  const [searchParams, setSerchParams] = useSearchParams();
  const iitem = searchParams.get("iitem");

  const [goodImg, setGoodImg] = useState(null);
  const [goodName, setGoodName] = useState(null);
  const [goodPrice, setGoodPrice] = useState(0);
  const [goodPicListImg, setGoodPicListImg] = useState(null);
  const [orderdetail, setOrderDetail] = useState([]);
  const [detailListItem, setDetailListItem] = useState([]);
  const [reviewItem, setReviewItem] = useState([]);

  const getOrderDetail = async () => {
    try {
      const data = await getOrderDetailPage(iitem);
      setGoodImg(data.item.pic);
      setGoodName(data.item.name);
      setGoodPrice(data.item.price);
      setGoodPicListImg(data.item.picList);

      setOrderDetail(data);
      console.log("이거나옵니까?", data);
    } catch (err) {
      console.log("오더디테일 에러", err);
    }
  };

  useEffect(() => {
    getOrderDetail();
  }, []);

  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <OrderDetailWrapper>
      <div className="orderdetail_inner">
        <div className="main">
          <div className="first_box">
            <div className="main_img">
              <img src={goodImg} alt={goodName} />
            </div>
          </div>
          <div className="second_box">
            <div className="title">
              <h1>{goodName}</h1>
              <p className="meddle_title"></p>
              <p className="price">{goodPrice}원</p>
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
                <button onClick={handleDecreaseQuantity}>-</button>
                <p className="one">{quantity}</p>
                <button onClick={handleIncreaseQuantity}>+</button>
                <div className="number">
                  <p>{goodPrice * quantity}원</p>
                </div>
              </div>
            </div>
            <div className="total">
              <p className="total_price">총 상품 금액</p>
              <p className="orderdetail_price">{goodPrice * quantity}원</p>
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
        <div className="detailed_image">
          {goodPicListImg &&
            goodPicListImg.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt={`Detail ${index}`} />
            ))}
        </div>
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
            <p className="content">{/* 내용 */}</p>
          </div>
        </div>
      </div>
    </OrderDetailWrapper>
  );
};

export default OrderDetail;
