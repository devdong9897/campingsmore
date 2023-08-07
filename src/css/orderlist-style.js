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
    height: auto;
    .orderlist_search {
      position: relative;
      width: 100%;
      height: 75px;
      margin-top: 42px;
      overflow: hidden;
      border-radius: 100px;
      border: 2px solid #b28e68;
      cursor: pointer;
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
        background: #d2b48c;
        border: none;
        color: #fff;
        font-size: 35px;
        cursor: pointer;
      }
    }
    .order_category {
      margin-top: 40px;
      display: flex;
      width: 100%;
      height: 120px;
      background: #d2b48c;
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
        &:hover {
          background: #8b4513;
        }
      }
    }
    .order_item_list {
      display: grid;
      flex-wrap: wrap;
      gap: 1% 5%;
      grid-template-columns: 30% 30% 30%;
      width: 100%;
      height: auto;
      padding-bottom: 30%;
      margin-top: 42px;
      li {
        display: flex;
        flex-direction: column;
        width: 100%;
        color: black;
        height: 550px;
        background: #f2f2f2;
        border-radius: 30px;
        overflow: hidden;
        .img {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 125%;
            height: auto;
          }
        }
        .product_desc {
          padding: 20px;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: black;
          .name {
            font-weight: bold;
            font-size: 21px;
          }
          .date {
            display: flex;
            justify-content: space-between;
            font-size: 15px;
            font-weight: 700;
            margin-top: 15px;
            p {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              height: auto;
            }
            .item_price {
              font-size: 22px;
            }
            .item_date {
              font-size: 14px;
              color: #929292;
            }
          }
        }
        .content {
          width: 100%;
          height: 50px;
          .orderlist_btn {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            button {
              &:hover {
                background: #8b4513;
              }
            }
            .shopping_basket {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 10px;
              width: 50%;
              border: none;
              background: #d2b48c;
              color: #fff;
              font-size: 20px;
              font-weight: 700;
              cursor: pointer;
            }
            .product_details {
              width: 50%;
              border: none;
              background: #d2b48c;
              font-size: 20px;
              font-weight: 700;
              a {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                width: 100%;
                height: 100%;
                color: #fff;
              }
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

`;
