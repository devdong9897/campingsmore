import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const PaymentWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 150px 0px;
  .top_payment_contents {
    width: 100%;
    height: auto;
    .payment_contents_inner {
      margin: 0 auto;
      width: 1300px;
      height: 100%;
      .top_line {
        width: 100%;
        height: auto;
        font-size: 20px;
        color: #6d6d6d;
      }
      .payment_order_cate_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 35px;
        margin-bottom: 35px;
        width: 100%;
        height: 50px;
        background: #f6f1bc;
        border-radius: 15px;
        overflow: hidden;
        padding: 0px 20px;
        .payment_order_cate {
          display: grid;
          grid-template-columns: 150px 2fr 1fr 1fr 1fr 0.5fr;
          height: auto;
          vertical-align: middle;
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto;
            font-size: 20px;
            border-right: 1px solid #9ab685;
            &:last-child {
              border-right: none;
            }
          }
        }
      }
      .payment_order_list {
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        overflow: hidden;
        border-radius: 15px;
        li {
          display: grid;
          grid-template-columns: 150px 2fr 1fr 1fr 1fr 0.5fr;
          width: 100%;
          height: 180px;
          background: #f2f2f2;
          padding: 20px 20px;
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            font-size: 18px;
          }
          .product_img {
            position: relative;
            height: 100%;
            border-radius: 15px;
            overflow: hidden;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-radius: 15px;
              height: 100%;
            }
          }
          .payment_moreinfo {
            justify-content: space-between;
            text-align: left;
            padding-left: 20px;
            .item_title {
              p {
                font-weight: bold;
                font-size: 21px;
                &:last-child {
                  font-weight: 400;
                  color: #6d6d6d;
                }
              }
            }
          }
          .payment_cancel {
            button {
              background: #696969;
              height: 35px;
              color: #fff;
              border-radius: 10px;
              overflow: hidden;
              border: none;
              cursor: pointer;
            }
            button:hover {
              background: #214a08;
            }
          }
        }
      }
      .payment_order_del {
        width: 100%;
        height: auto;
        background-color: white;
        border: 5px solid #9ab685;
        border-radius: 15px;
        margin-bottom: 50px;

        h1 {
          margin: 50px 0 0 50px;
          font-size: 25px;
        }
        p {
          margin: 20px 0 5px 50px;
          font-size: 20px;
        }
        .payment_address {
          display: block;
          width: 300px;
        }

        .payment_username {
          margin-left: 50px;
          width: 300px;
          height: 50px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
        }
        .payment_first_usernumber {
          margin-left: 50px;
          width: 70px;
          height: 50px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
        }

        .payment_usernumber {
          width: 70px;
          height: 50px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
        }
        .payment_postnumber {
          margin-left: 50px;
          width: 90px;
          height: 50px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
          margin-right: 10px;
        }
        .payment_postnumber_btn {
          width: 80px;
          height: 35px;
          background-color: white;
        }
        .payment_postnumber_btn:hover {
          background-color: black;
          color: white;
          border: none;
        }
        .payment_address {
          margin-left: 50px;
          width: 400px;
          height: 50px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
          margin-top: 5px;
        }
        .payment_memo {
          margin-left: 50px;
          width: 800px;
          height: 50px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
        }
        .plus {
          color: red;
        }
        hr {
          margin-top: 40px;
        }
        .payment_point_money {
          margin: 20px 0 0 50px;
          font-size: 20px;
          display: block;
          float: left;
        }
        .payment_point_money_box,
        .payment_point_money_box2 {
          border-top: none;
          border-left: none;
          border-right: none;
          display: block;
          margin-top: 30px;
          width: 300px;
          height: auto;
          direction: ltr;
          text-align: right;
        }
        .payment_point_money_box2 {
          margin-top: 50px;
          margin-right: 30px;
          float: left;
        }
        .payment_all_point {
          display: block;
          width: 100px;
          height: 30px;
          margin-top: 39px;
          border: 1px solid #9ab685;
          border-radius: 5px;
          background-color: white;
          font-size: 17px;
        }
        .payment_all_point:hover {
          border: 1px solid green;
        }
        .payment_box {
          display: block;
          background-color: #9ab685;
          width: 200px;
          height: 40px;
          color: white;
          border-radius: 10px;
          border: none;
          font-size: 20px;
          margin-left: 500px;
          margin-top: 100px;
          margin-bottom: 50px;
          cursor: pointer;
        }
        .payment_box:hover {
          background: green;
        }
      }
    }
  }
`;
