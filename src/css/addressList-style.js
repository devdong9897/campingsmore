import styled from "@emotion/styled";

export const AddressListWapper = styled.div`
  width: 100%;
  height: auto;
  .note {
    margin-top: 20px;
    width: 100%;
    height: 80px;
    border: 10px;
    span {
      font-size: 20px;
    }
  }
  .add_address_btn {
    padding: 8px;
    border-radius: 10px;
    border: none;
    background: #9ab685;
    color: #fff;
  }
  .post_address_box {
    margin-top: 15px;
    width: 100%;
    height: auto;
    display: flex;
    gap: 5%;
    padding: 15px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 15px;
    .post_address_list {
      width: 50%;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      li {
        display: flex;
        flex-direction: column;
        input {
          padding: 5px 10px;
          border: 1px solid #000;
          background: #fff;
          border-radius: 10px;
        }
      }
    }
    .post_address_result {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
      width: 50%;
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        input {
          padding: 5px 0px;
          border: none;
          background: none;
        }
      }
      button {
        padding: 8px;
        border-radius: 10px;
        border: none;
        background: #9ab685;
        color: #fff;
      }
    }
  }
`;
