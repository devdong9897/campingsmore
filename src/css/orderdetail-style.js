import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const OrderDetailWrapper = styled.div`
  width: 100%;
  height: auto;
  background: white;
  color: #eee;

  .orderdetail_inner {
    position: relative;
    padding-top: 100px;
    padding-bottom: 150px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 1300px;
    height: auto;
    .main {
      display: flex;
      margin-top: 107px;
      gap: 24px;

      .first_box {
        width: 662px;
        height: 659px;

        .main_img {
          img {
            width: 660px;
            height: 480px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 20px;
          }
        }
      }

      .second_box {
        width: 700px;
        height: 670px;
        border: 1px solid black;
        border-radius: 20px;

        .title {
          h1 {
            font-size: 35px;
            font-weight: 900;
            color: #d2b48c;
            margin-top: 10px;
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

          .earned {
            width: 270px;
            height: 260px;
          }

          .way {
            .point_earned {
              font-size: 25px;
              font-weight: 900;
              margin-top: 100px;
              margin-left: 46px;
              color: black;
            }

            .review,
            .img {
              font-size: 15px;
              margin-top: 10px;
              margin-left: 46px;
              color: black;
            }
          }

          .earned {
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
          .num {
            display: flex;
            margin-left: 5px;
            margin-bottom: 5px;

            button {
              width: 55px;
              height: 40px;
              font-size: 30px;
            }

            .one {
              width: 55px;
              height: 40px;
              font-size: 30px;
              padding-left: 15px;
              border: 1px solid black;
              color: black;
            }
            .number {
              font-size: 30px;
              font-weight: 900;
              margin-left: 320px;
              color: black;
            }
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
            color: #d2b48c;
            font-weight: 900;
          }
        }
        .left {
          width: 300px;
          height: 100px;
          font-size: 40px;
          font-weight: 900;
          cursor: pointer;
          margin-top: 14px;
          color: #d2b48c;
          background: #fff;
          border: 1px solid #d2b48c;
          border-radius: 20px;
        }
        .right {
          width: 300px;
          height: 100px;
          font-size: 40px;
          font-weight: 900;
          cursor: pointer;
          margin-top: 14px;
          color: #d2b48c;
          margin-left: 9px;
          background: #fff;
          border: 1px solid #d2b48c;
          border-radius: 20px;
          .payrig {
            color: #d2b48c;
          }
        }
      }
    }

    .botton_line {
      border-bottom: 1px solid #c0c0c0;
      margin-top: 250px;
    }

    .detailed_image {
      width: 70%;
      height: auto;
      margin: 0 auto;
    }
    .profile_box {
      width: 100%;
      height: auto;
      .profile {
        display: flex;
        margin-top: 50px;
        margin-left: 30px;

        .profile_img {
          width: 150px;
          height: 150px;
          background-image: url("${path}/image/profile.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 50%;
        }

        .profile_name {
          font-size: 20px;
          margin-top: 20px;
          margin-left: 20px;
          color: black;
        }
      }
      .profile_content {
        font-size: 20px;
        color: black;
        margin-left: 30px;

        .profile_title {
          display: inline-block;
          margin-top: 20px;
        }

        .content {
          margin-top: 20px;
        }
      }
    }
  }
`;
