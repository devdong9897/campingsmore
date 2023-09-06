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
    .topline {
      width: 100%;
      height: 65px;
      margin-top: 67px;
      background: #d2b48c;
      border-radius: 15px;
      .topline_list {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 55px 150px 3fr 1fr 1fr 1fr;
        margin-top: 10px;
        vertical-align: middle;
        color: black;
        font-size: 20px;
        padding: 20px 0px;
        li {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          align-items: center;
          border-right: 1px solid #fff;
          &:last-child {
            border-right: none;
          }
        }
      }
    }
    .history_list {
      width: 100%;
      height: 100%;
      .list_items {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        height: 100%;
        padding-top: 20px;
        overflow: hidden;
        li {
          width: 100%;
          height: 180px;
          padding: 20px 0px;
          display: grid;
          border-radius: 15px;
          background: #f2f2f2;
          grid-template-columns: 55px 150px 3fr 1fr 1fr 1fr;
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            color: black;
            text-align: center;
          }
          .product_img {
            background: gold;
            border-radius: 15px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              background-image: url(${process.env.PUBLIC_URL}/image/food.jpg);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            }
          }
          .first_title {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 5%;
            text-align: left;
            padding-left: 30px;
            span {
              padding-right: 30px;
            }
            .product_name {
              font-size: 21px;
              font-weight: bold;
            }
            .product_desc {
              display: inline-block; /* inline-block으로 변경 */
              width: 100%;
              max-height: 60px; /* height 속성 대신 max-height로 변경 */
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 16px;
              color: #929292;
            }
          }
          .option {
            display: flex;
            flex-direction: column;
            gap: 10px;
            span {
              font-size: 18px;
              font-weight: bold;
            }
          }
          .price {
            font-weight: bold;
            font-size: 18px;
          }
          .product_btn {
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;

            button {
              height: 40px;
              border: none;
              border-radius: 15px;
              color: #fff;
              font-size: 17px;
              cursor: pointer;
            }
            .write {
              background: #d2b48c;
            }
            .cancel {
              background: #d9d9d9;
              color: #868686;
            }
          }
        }
      }
    }
  }
  /* 
  .list_items {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 15px;
    list-style: none;
    padding: 0;
  } */
  /* 
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
  } */
`;
