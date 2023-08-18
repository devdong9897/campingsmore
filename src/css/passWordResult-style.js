import styled from "@emotion/styled";

export const Passcomplete = styled.div`
  display: flex;
  flex-direction: column;
  width: 525px;
  height: auto;
  padding: 20px;
  border-radius: 20px;
  overflow: hidden;
  .passcom_title {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    height: auto;
    span {
      text-align: center;
      color: #fff;
    }
    .large_title {
      font-size: 30px;
    }
  }
  .passcom_box {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0px 30px;
    span {
      font-size: 18px;
      text-align: center;
      color: #fff;
    }
  }
  .to_login {
    padding-top: 30px;
    border-top: 1px solid #e9e9e9;
    width: 100%;
    height: auto;
    .to_login_btn {
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
