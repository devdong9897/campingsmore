import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const PaymentWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 150px;
  background: bisque;
  .top_payment_contents {
    width: 100%;
    height: auto;
    position: relative;
  }
  .payment_contents_inner {
    position: absolute;
    width: 1300px;
    margin: 0 auto;
    height: 100%;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .top_line {
    width: 100%;
    height: auto;
    background-color: lightgray;
    font-size: 20px;
    color: #6d6d6d;
  }
  .payment_order_cate {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-around;
  }
  .payment_order_list {
    width: 100%;
    height: auto;
    display: block;
    background-color: white;
    border: 5px solid #9ab685;
    border-radius: 15px;
    margin-bottom: 50px;
    overflow: hidden;

    .payment_img {
      margin: 40px 0 40px 50px;
      float: left;
    }
    .payment_moreinfo {
      margin-top: 120px;
      width: auto;
      display: flex;
      justify-content: space-around;
    }
    .payment_moreinfo div:first-child {
      /* margin-left:-50px; */
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
`;
