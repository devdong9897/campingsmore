import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const OrderDetailWrapper = styled.div`
  width: 100%;
  height: auto;
  background: white;
  color: #eee;
  .orderdetail_inner {
    padding-top: 100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 1300px;
    height: 3000px;
    box-shadow: 1px 1px 1px 3px inset skyblue;
    .main {
      display: flex;
      margin-top: 107px;
      gap: 24px;
      .first_box {
        width: 662px;
        height: 659px;
        .main_img {
          width: 660px;
          height: 480px;
          background-image: url("${path}/image/food.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 20px;
        }
        .sub_img {
          display: flex;
          gap: 25px;
          margin-top: 20px;
          .subfir_img {
            width: 200px;
            height: 150px;
            background-image: url("${path}/image/food.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 20px;
          }
          .middle_img {
            width: 200px;
            height: 150px;
            background-image: url("${path}/image/food.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 20px;
          }
          .last_img {
            width: 200px;
            height: 150px;
            background-image: url("${path}/image/food.jpg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 20px;
          }
        }
      }
      .second_box {
        width: 700px;
        height: 700px;
        border: 1px solid black;
        border-radius: 20px;
        .title {
          h1 {
            font-size: 40px;
            color: #9ab685;
            margin-left: 37px;
          }
          p {
            margin-left: 37px;
          }
          .meddle_title {
            font-size: 20px;
            font-weight: 900;
            color: #bfbfbf;
            margin-top: 8px;
          }
          .price {
            font-size: 50px;
            font-weight: 900;
            margin-top: 17px;
            margin-left: 46px;
            color: black;
          }
        }
        .points {
          display: flex;
          .way {
            width: 270px;
            height: 260px;
            .point_earned {
              font-size: 25px;
              font-weight: 900;
              margin-top: 100px;
              margin-left: 46px;
              color: black;
            }
            .review {
              font-size: 15px;
              margin-top: 14px;
              margin-left: 46px;
              color: black;
            }
            .img {
              font-size: 15px;
              margin-top: 10px;
              margin-left: 46px;
              color: black;
            }
          }
          .earned {
            width: 270px;
            height: 260px;
            margin-left: 75px;
            .max_point {
              font-size: 15px;
              margin-top: 150px;
              margin-left: 120px;
              color: black;
              span {
                color: red;
              }
            }
            .min_point {
              font-size: 15px;
              margin-top: 8px;
              margin-left: 120px;
              color: black;
            }
          }
        }
        .qantity {
          .free {
            font-size: 20px;
            color: black;
            margin-top: 141px;
            margin-bottom: 27px;
            border-bottom: 1px solid black;
          }
        }
        .num {
          display: flex;
          button {
            width: 55px;
            height: 40px;
            font-size: 30px;
          }
          .one {
            width: 47px;
            height: 40px;
            font-size: 30px;
            padding-left: 15px;
            border: 1px solid black;
            color: black;
          }
        }
        .number {
          font-size: 30px;
          font-weight: 900;
          margin-left: 320px;
          color: black;
        }
      }
      .total {
        display: flex;
        justify-content: space-between;
        margin-top: 37px;
        .total_price {
          font-size: 35px;
          font-weight: 700;
          color: black;
        }
        .orderdetail_price {
          font-size: 35px;
          color: #9AB685;
          font-weight: 700;
        }
      }
    }
    .left {
      width: 300px;
      height: 100px;
      font-size: 40px;
      font-weight: 900;
      cursor: pointer;
      margin-top: 14px;
      color: #9AB685;
      background: #fff;
      border: 1px solid #9AB685;
      border-radius: 20px;
    }
    .right {
      width: 300px;
      height: 100px;
      font-size: 40px;
      font-weight: 900;
      cursor: pointer;
      margin-top: 14px;
      color: #9AB685;
      margin-left: 9px;
      background: #fff;
      border: 1px solid #9AB685;
      border-radius: 20px;
    }
  }
`;
