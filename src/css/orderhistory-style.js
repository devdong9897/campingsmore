import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const OrderHistorysWrapper = styled.div`
  width: 100%;
  height: 3000px;
  background: white;
  color: #eee;
  padding-top: 120px;

  .inner {
    margin: 0 auto;
    width: 1300px;
    height: 100%;
  }

  .topline {
    width: 100%;
    height: 65px;
    background: rgba(246, 241, 188, 1);
    margin-top: 67px;
  }

  .topline_list {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    vertical-align: middle;
    color: black;
    font-size: 25px;
  }
  .topline_list > .product {
    margin-right: 60px;
  }
  .topline_list > li {
    margin-top: 15px;
  }

  .list_items {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 15px;
    list-style: none;
    padding: 0;
  }

  .list_items li {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .item_number {
    font-size: 24px;
    color: black;
    margin-right: 10px;
  }

  .img {
    width: 150px;
    height: 150px;
    border-radius: 30px;
    background-image: url("${path}/image/food.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  span.first_title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 160px;
    color: black;
  }

  span.secend-title {
    font-size: 18px;
    color: black;
  }
  .options {
    margin-left: 40px;
  }
  p.sub_title {
    font-size: 16px;
    color: black;
  }

  p.quantity_title {
    font-size: 14px;
    color: black;
  }
  .price {
    font-size: 30px;
    font-weight: 700;
    margin-left: 260px;
    color: black;
  }
  .btn {
    margin-left: 30px;
  }
  .write {
    padding: 5px 15px 5px 15px;
    border-radius: 10px 10px;
    background: rgba(0, 0, 0, 0.59);
    color: #fff;
    border: none;
  }
  .cancel {
    padding: 5px 15px 5px 15px;
    border-radius: 10px 10px;
    margin-top: 10px;
    background: rgba(230, 237, 225, 1);
    color: #fff;
    border: none;
  }
  .line {
    width: 100%;
    margin-top: 5px;
    border: 1px solid rgba(154, 182, 133, 1);
  }
`;
