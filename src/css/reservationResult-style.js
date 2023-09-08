import styled from "@emotion/styled";

export const ReservationResultWrapper = styled.div`
  margin: 0 auto;
  width: 1300px;
  height: auto;
  padding-top: 130px;
  background: #eaeaea;
  .camping_img {
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 300px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 100%;
    }
  }
  .camping_info {
    width: 100%;
    height: auto;
    padding: 3% 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    .title {
      font-size: 27px;
      font-weight: bold;
    }
    .detail_info_list {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  .payment_area {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 5% 10%;
    border-top: 5px solid rgba(0, 0, 0, 0.2);
    .title {
      display: block;
      font-size: 30px;
      padding: 5px 0px;
    }
    .sub_title {
      display: block;
      width: 100%;
      text-align: center;
      padding: 10px 0px;
    }
    .payment_list_form {
      width: 100%;
      height: auto;
      li {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 10%;
        padding: 15px 0px;
        span {
          font-size: 20px;
        }
        .input_box {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 45%;
          height: auto;
          input {
            width: 100%;
            height: 40px;
            border-radius: 15px;
            border: 1px solid #9ab685;
            padding-left: 10px;
          }
          .person_number {
            width: 100%;
            height: 40px;
            border-radius: 15px;
            border: 1px solid #9ab685;
            padding-left: 10px;
          }
          .camping_way {
            width: 100%;
            height: 40px;
            border-radius: 15px;
            border: 1px solid #9ab685;
            padding-left: 10px;
          }
        }
      }
    }
    .payment_check {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin: 0 auto;
      margin-top: 20px;
      width: 50%;
      padding: 5% 0px;
      border-top: 5px solid rgba(0, 0, 0, 0.2);
      .pay_btn {
        width: 200px;
        height: 50px;
        border: none;
        border-radius: 15px;
        font-size: 1.3rem;
        color: #fff;
        background: #d2b48c;
      }
    }
  }
`;
