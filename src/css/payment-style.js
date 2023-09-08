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
      .camping_call_btn {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 80px;
        background: #9ab685;
        color: #fff;
        text-align: center;
        border-radius: 10px;
        font-size: 20px;
        cursor: pointer;
        &:hover {
          background: #a7c491;
        }
      }
      .payment_order_cate_box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 35px;
        margin-bottom: 35px;
        width: 100%;
        height: 50px;
        background: #d2b48c;
        border-radius: 15px;
        overflow: hidden;
        padding: 0px 20px;
        color: white;
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
            border-right: 1px solid #fff;
            &:last-child {
              border-right: none;
            }
          }
        }
      }
      .camping_info_box {
        margin: 20px 0px;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 300px;
        padding: 20px;
        background: #fff;
        border-radius: 15px;
        border: 1px solid #cd853f;
        .camping_img {
          position: relative;
          width: 50%;
          height: 100%;
          overflow: hidden;
          border-radius: 10px;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
          }
        }
        .camping_info_list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 50%;
          height: 100%;
          padding-left: 50px;
          li {
            display: grid;
            grid-template-columns: 80px 1fr;
            width: 100%;
            font-size: 18px;
          }
          .note {
            margin-top: 10px;
            color: #cd853f;
            font-weight: bold;
          }
          .camping_order_cencel {
            width: 125px;
            height: 50px;
            border: 10px;
            border-radius: 10px;
            background: #9ab685;
            color: #fff;
            &:hover {
              background: #a7c491;
            }
          }
        }
      }
      .payment_order_list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        height: auto;
        margin-top: 20px;
        margin-bottom: 50px;
        border: 1px solid #cd853f;
        border-radius: 15px;
        padding: 20px;
        li {
          width: 100%;
          height: 200px;
          border-bottom: 1px solid #b5b5b5;
          .information {
            display: flex;
            gap: 20px;
            padding: 20px;
            .img {
              width: 160px;
              height: 160px;
              border-radius: 15px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
              }
            }
            .item_info {
              display: flex;
              flex-direction: column;
              gap: 10px;
              h1 {
                color: #cd853f;
              }
              p {
                font-size: 18px;
              }
              .date {
                margin-top: 55px;
              }
            }
          }
          &:last-child {
            border: none;
          }
        }
      }
      .payment_order_del {
        width: 100%;
        height: auto;
        background-color: white;
        border: 2px solid #d2b48c;
        border-radius: 15px;
        margin-bottom: 50px;
        padding-left: 50px;

        h1 {
          margin: 50px 0 0 0px;
          font-size: 25px;
        }
        p {
          margin: 20px 0 5px 0px;
          font-size: 20px;
        }
        .payment_address {
          display: block;
          width: 300px;
        }
        .payment_add {
          font-size: 12px;
          color: red;
        }

        .payment_username {
          width: 300px;
          height: 40px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
        }
        .payment_first_usernumber {
          width: 200px;
          height: 40px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
        }

        .payment_usernumber {
          width: 70px;
          height: 40px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
        }
        .payment_postnumber {
          width: 90px;
          height: 40px;
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
          border-radius: 5px;
          color: white;
          border: none;
        }
        .payment_address {
          width: 400px;
          height: 40px;
          border-radius: 15px;
          text-indent: 10px;
          font-size: 20px;
          margin-top: 5px;
        }
        .payment_address_detail {
          width: 350px;
          height: 40px;
          border-radius: 15px;
          padding-left: 10px;
          margin-top: 5px;
        }
        .payment_memo {
          width: 800px;
          height: 40px;
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
          border: 1px solid #d2b48c;
          border-radius: 5px;
          background-color: white;
          font-size: 17px;
        }
        .payment_all_point:hover {
          border: 1px solid #ff4500;
        }
        .title {
          margin-top: 10px;
          display: block;
          width: 100%;
          text-align: center;
          font-size: 20px;
        }
        .pay_type {
          margin: 50px 0px;
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: center;
          gap: 5%;
          button {
            width: 200px;
            height: 100%;
            border-radius: 10px;
            border: none;
          }
          .card_pay {
            background: url("/image/CARDPAY.jpg");
            background-position: center;
            background-size: contain;
            background-color: #6d6d6d;
            background-repeat: no-repeat;
          }
          .kakao_pay {
            background: url("/image/kakaoPay.jpg");
            background-position: center;
            background-size: contain;
            background-color: #6d6d6d;
            background-repeat: no-repeat;
          }
          .payment_box {
            display: block;
            background-color: #d2b48c;
            width: 150px;
            height: 100px;
            color: white;
            border-radius: 10px;
            border: none;
            font-size: 20px;
            margin-left: 500px;
            margin-top: 100px;
            margin-bottom: 50px;
            background: url("/image/CARDPAY.jpg");
            background-position: center;
            background-size: contain;
            background-color: black;
            background-repeat: no-repeat;
            cursor: pointer;
          }
        }

        /* .payment_box:hover {
          background: #cd853f;
        } */
      }
    }
  }
`;
