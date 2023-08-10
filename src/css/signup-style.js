import styled from "@emotion/styled";
const path = process.env.PUBLIC_URL;

export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  height: 800px;
  padding: 20px 100px;
  border-radius: 20px;
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
        gap: 10px;
        height: 45px;
        .gender_label {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 45px;
          background: #f3eddd;
          border-radius: 15px;
          cursor: pointer;
        }
        .selected {
          background: #cd853f;
          color: #fff;
          font-weight: bold;
        }
        input[type="radio"] {
          display: none;
          opacity: 0;
        }
      }
    }
    .input_info_area {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      gap: 30px;
      width: 100%;
      .input_left {
        width: 50%;
      }
      .input_right {
        width: 50%;
      }
      div {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        span {
          gap: 15px;
          display: flex;
          margin-bottom: 10px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
          p {
            color: #cf6353;
            font-size: 15px;
          }
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
    }
    .input_role {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      span {
        font-size: 18px;
        color: #fff;
        font-weight: bold;
      }
      .role_box {
        display: flex;
        flex-direction: row;
        gap: 10px;
        height: 45px;
        .role_label {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 45px;
          background: #f3eddd;
          border-radius: 15px;
          cursor: pointer;
        }
        .selected {
          background: #cd853f;
          color: #fff;
          font-weight: bold;
        }
        input[type="radio"] {
          display: none;
          opacity: 0;
        }
      }
    }
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
`;
