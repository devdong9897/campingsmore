import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const PaymentModalWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  .top_payment_modal_contents {
    width: 100%;
    height: 1000px;
    position: relative;
    .payment_modal_contents_inner {
      position: absolute;
      width: 1300px;
      margin: 0 auto;
      height: 100%;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      .payment_modal_box {
        width: 800px;
        height: 570px;
        margin: 0 auto;
        background-color: white;
        .payment_modal_title {
          padding-top: 50px;
          width: 600px;
          height: 250px;
          margin: 0 auto;
          overflow: hidden;
          h1 {
            font-size: 65px;
            text-align: center;
            span {
              color: #d2b48c;
            }
          }
        }
        hr {
          margin: 0 auto;
          margin-bottom: 50px;
          width: 600px;
        }
      }
      .payment_modal_order_info {
        width: 600px;
        height: 250px;
        margin-left: 100px;
        .payment_modal_order_cate {
          width: 100%;
          font-size: 25px;
          .order_info {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            font-size: 18px;
            li {
              display: block;
              width: 100%;
              width: 100%;
              display: grid;
              grid-template-columns: 100px 1fr;
              grid-template-rows: 10px 10px 10px;
            }
          }
        }
      }
      .payment_modal_check {
        display: flex;
        justify-content: center;
        button {
          width: 150px;
          height: 40px;
          border-radius: 15px;
          font-size: 20px;
          color: white;
          background-color: #c0c0c0;
          border: none;
          cursor: pointer;
          margin-top: -50px;
        }
        button:hover {
          background-color: #808080;
        }
        button:first-child {
          margin-right: 20px;
        }
      }
    }
  }
`;
