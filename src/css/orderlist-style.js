import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const OrderListWrapper = styled.div`
  width: 100%;
  height: auto;
  background: white;
  color: #eee;
  .orderlist_inner {
    padding-top: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 1300px;
    height: 3000px;
    box-shadow: 1px 1px 1px 3px inset skyblue;
    .orderlist_search {
      position: relative;
      width: 100%;
      height: 75px;
      overflow: hidden;
      background: red;
      border-radius: 100px;
      border: 2px solid #b28e68;
      input {
        width: 100%;
        height: 100%;
        font-size: 20px;
        padding: 0px 25px;
        border: none;
      }
      .search_submit {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 100px;
        height: 100%;
        background: #9ab685;
        border: none;
        color: #fff;
        font-size: 35px;
      }
    }
    .order_category {
      margin-top: 40px;
      display: flex;
      width: 100%;
      height: 120px;
      background: #b0d097;
      border-radius: 30px;
      overflow: hidden;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25%;
        height: 100%;
        font-size: 25px;
        color: #eee;
        cursor: pointer;
      }
    }
  }
  .order_item_list {
    position: relative;
    width: 100%;
    height: 237px;
    background: #f2f2f2;
    margin-top: 42px;
    border-radius: 30px;
    grid-template-columns: 100px 2fr 1fr;
  }
  .img {
    width: 242px;
    height: 237px;
    background-image: url("${path}/image/food.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 30px;
  }
  .product_desc {
    position: absolute;
    font-size: 30px;
    display: grid;
    top: 30px;
    left: 250px;
    color: black;
    .option {
      font-size: 20px;
      font-weight: 700;
    }
    .explanation {
      font-size: 15px;
      color: #929292;
    }
    .date {
      font-size: 15px;
      color: #929292;
      font-weight: 700;
      margin-top: 15px;
    }
  }
  .price {
    display: grid;
    font-size: 30px;
    position: absolute;
    right: 58px;
    top: 40px;
    color: black;
    .orderlist_btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
  }
  .orderlist_btn {
    bottom: 50px
  }
  .shopping_basket {
    width: 196px;
    height: 46px;
    border-radius: 30px;
    margin-bottom: 9px;
    background: #91AA7F;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  .product_details {
    width: 196px;
    height: 46px;
    border-radius: 30px;
    background: #D9D9D9;
    border: none;
    color: #868686;
    font-size: 20px;
    cursor: pointer;
  }
`;
