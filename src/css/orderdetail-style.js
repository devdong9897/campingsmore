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
        h1 {
          font-size: 45px;
          color: #9ab685;
          margin-top: 39px;
          margin-left: 20px;
        }
        p {
          font-size: 25px;
          font-weight: 700;
          margin-left: 20px;
          color: #bfbfbf;
        }
        .save {
          .orderdetail_price {
            font-size: 50px;
            color: black;
          }
          .point {
            margin-top: 100px;
            font-weight: 900;
            color: black;
          }
          .review {
            font-size: 20px;
            color: #bfbfbf;
          }
          .img_upload {

          }
        }
        .points_earned {
            
        }
      }
    }
  }
`;
