import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom/dist";
import { getOrderDetailPage } from "../api/itemFatch";
import { OrderDetailWrapper } from "../css/orderdetail-style";
import { OrderItemAdd } from "../reducers/orderItemSlice";

const OrderDetail = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const iitem = searchParams.get("iitem");
  const [goodImg, setGoodImg] = useState(null);
  const [goodName, setGoodName] = useState(null);
  const [goodPrice, setGoodPrice] = useState(0);
  const [goodPicListImg, setGoodPicListImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [Allprice, setAllprice] = useState(0);
  const [reviewPage, setReviewPage] = useState("");
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const getOrderDetail = async () => {
      try {
        const data = await getOrderDetailPage(iitem);
        setGoodImg(data.item.pic);
        setGoodName(data.item.name);
        setGoodPrice(data.item.price);
        setGoodPicListImg(data.item.picList);
        setReviewPage(parseInt(data.review.maxPage, 10));
        setReviewList(data.review.list);
      } catch (err) {
        console.log("오더디테일 에러", err);
      }
    };

    getOrderDetail();
  }, [iitem]);

  const pagenation = Array.from({ length: reviewPage }, (_, index) => index);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    AllpriceGet(quantity + 1);
  };

  const AllpriceGet = newQuantity => {
    const newAllprice = newQuantity * goodPrice;
    setAllprice(newAllprice);
    console.log("전체가격", newAllprice, newQuantity);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      AllpriceGet(quantity - 1);
    }
  };

  // 장바구니 담기 하지만 아직 담아지는 로직은 없습니다.
  const handleAddToCart = () => {
    const cartItem = {
      id: iitem,
      name: goodName,
      price: goodPrice,
      quantity: quantity,
    };
    console.log("아 쫌!!!!!", cartItem);
  };

  const handelbuy = () => {
    const orderItem = {
      iitemId: iitem,
      quantitys: quantity,
    };
    dispatch(OrderItemAdd(orderItem));
  };

  const handleGoToPayment = () => {
    Navigate("/main/payment");
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
                <p className="img">이미지업로드 시</p>
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
            <button className="left" onClick={handleAddToCart}>
              장바구니담기
            </button>
            <button className="right" onClick={handelbuy}>
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
        <ul className="profile_box">
          <h1>구매자 평점</h1>
          {reviewList.length ? (
            <>
              {reviewList.map((item, index) => (
                <li key={index}>
                  <div className="profile">
                    <div className="profile_name">
                      <div>{item.name}</div>
                      <ul className="starrating">
                        {Array.from(
                          { length: item.starRating },
                          (_, starIndex) => (
                            <li key={starIndex}>
                              <FontAwesomeIcon
                                icon={faStar}
                                style={{ color: "#ffea00" }}
                              />
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="profile_content">
                    <span className="profile_title">{item.reviewCtnt}</span>
                    <span className="prifle_ctnt"></span>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <div className="empty_text">구매자 평점이 없습니다.</div>
          )}
        </ul>
      </div>
    </OrderDetailWrapper>
  );
};

export default OrderDetail;
