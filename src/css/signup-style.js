import styled from "@emotion/styled";
const path = process.env.PUBLIC_URL;

export const SignUpForm = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: white;
  background-image: url("${path}/image/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .signup_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 575px;
    height: auto;
    background: rgba(154, 182, 133, 0.7);
    padding: 20px;
    border-radius: 20px;
    overflow: hidden;
    .signup_title {
      margin-top: 20px;
      margin-bottom: 25px;
      width: 100%;
      height: auto;
      text-align: center;
      font-size: 30px;
      color: #fff;
    }
    .signup_form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      .select_gender {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        span {
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        .gender_box {
          display: flex;
          flex-direction: row;
          height: 45px;
          .gender_male,
          .gender_female {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 45px;
            background: #f3eddd;
            border-radius: 15px;
          }
          input[type="radio"] {
          }
        }
      }
      div {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        input {
          height: 50px;
          background: #f0f0f0;
          border: none;
          border-radius: 10px;
          padding: 0px 10px;
          font-size: 17px;
        }
      }
      /* .input_email {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        .email {
          height: 50px;
          background: #f0f0f0;
          border: none;
          border-radius: 10px;
          padding: 0px 10px;
        }
      }
      .input_password {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        .password {
          height: 50px;
          background: #f0f0f0;
          border: none;
          border-radius: 10px;
          padding: 0px 10px;
        }
      }
      .input_password_check {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        .password_check {
          height: 50px;
          background: #f0f0f0;
          border: none;
          border-radius: 10px;
          padding: 0px 10px;
        }
      }
      .input_name {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        .name {
          height: 50px;
          background: #f0f0f0;
          border: none;
          border-radius: 10px;
          padding: 0px 10px;
        }
      }
      .input_nickname {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        .nickname {
          height: 50px;
          background: #f0f0f0;
          border: none;
          border-radius: 10px;
          padding: 0px 10px;
        }
      }
      .input_phone {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        span {
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
        }
        .phone_number {
          height: 50px;
          background: #f0f0f0;
          border: none;
          border-radius: 10px;
          padding: 0px 10px;
        }
      } */
    }
    .confirm_box {
      margin-bottom: 30px;
      padding-top: 20px;
      border-top: 1px solid #fff;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      gap: 20px;
      button {
        width: 175px;
        height: 50px;
        border-radius: 15px;
        border: none;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
      }
      .signup_confirm {
        background: #cddcc1;
      }
      .back {
        background: #d0d0d0;
      }
    }
  }
`;
