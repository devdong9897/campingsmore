import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const Logininner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 100px;
  .login_logo {
    width: 100%;
    height: 200px;
    background-image: url("${path}/image/logo2.png");
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: 50%;
  }
  .login_form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    span {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 20px;
      font-weight: 600;
      width: 100%;
      color: #fff;
    }
    input {
      padding: 15px;
      border-radius: 15px;
      border: none;
      font-size: 20px;
    }
  }
  .to_signup {
    margin-top: 20px;
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;
    gap: 10px;
    font-size: 17px;
    border-bottom: 1px solid #fff;
    span {
      font-weight: bold;
      color: #8b4513;
      a {
        color: #f0ff7d;
      }
    }
  }
  .find_account {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    font-size: 17px;
    color: #fff;
    span {
      a {
        color: #f0ff7d;
      }
    }
  }
  .do_login {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    .login_submit_btn {
      width: 50%;
      border-radius: 15px;
      border: none;
      font-size: 17px;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .sub_login {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
      width: 100%;
      padding: 0px 10%;
      button {
        width: 100%;
        padding: 10px;
        cursor: pointer;
      }
      .kakao {
        background: #fae100;
        border: none;
        border-radius: 5px;
        color: #fff;
      }
      .google {
        border: none;
        border-radius: 5px;
      }
      .naver {
        background: #00c300;
        border: none;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
  .non_member {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;

    a {
      border-bottom: 1px solid #fff;
      font-size: 17px;
      color: #fff;
    }
  }
`;
