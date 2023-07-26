import styled from "@emotion/styled";

export const FindPassWordForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: rgba(154, 182, 133, 0.7);
  padding: 20px;
  border-radius: 20px;
  overflow: hidden;
  .password_title {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    height: 160px;
    span {
      text-align: center;
      color: #fff;
    }
    .large_title {
      font-size: 30px;
    }
  }
  .password_find_form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    span {
      margin-top: 10px;
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
  .find_password_comfirm {
    display: block;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 30px;
    width: 50%;
    height: 40px;
    border: none;
    border-radius: 15px;
    background: #f0f0f0;
  }
  .to_back {
    padding-top: 30px;
    border-top: 1px solid #e9e9e9;
    width: 100%;
    height: auto;
    .to_back_btn {
      display: block;
      margin: 0 auto;
      margin-bottom: 30px;
      width: 50%;
      height: 40px;
      border: none;
      border-radius: 15px;
      background: #f0f0f0;
    }
  }
`;
