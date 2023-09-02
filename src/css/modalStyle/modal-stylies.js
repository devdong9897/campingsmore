import styled from "@emotion/styled";

export const BoardDeleteModalWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  .boardDelete_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    width: 500px;
    height: 200px;
    background: rgba(210, 180, 140, 0.9);
    border-radius: 35px;
    padding: 20px;
    .warning_text {
      margin-top: 30px;
      width: 100%;
      height: auto;
      font-size: 25px;
      text-align: center;
      color: #fff;
    }
    .modal_button {
      margin-top: 35px;
      gap: 20px;
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        width: 150px;
        height: 45px;
        border-radius: 10px;
        border: none;
        font-size: 18px;
      }
    }
  }
`;

export const ReviewModalComWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  .reviewcom_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    width: 500px;
    height: 200px;
    background: rgba(210, 180, 140, 0.9);
    border-radius: 35px;
    padding: 20px;
    .warning_text {
      margin-top: 30px;
      width: 100%;
      height: auto;
      font-size: 25px;
      text-align: center;
      color: #fff;
    }
    .modal_button {
      margin-top: 35px;
      gap: 20px;
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        width: 150px;
        height: 45px;
        border-radius: 10px;
        border: none;
        font-size: 18px;
      }
    }
  }
`;

export const ReviewModalWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  .reviewModal_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    width: 500px;
    height: 200px;
    background: rgba(210, 180, 140, 0.9);
    border-radius: 35px;
    padding: 20px;
    .warning_text {
      margin-top: 30px;
      width: 100%;
      height: auto;
      font-size: 25px;
      text-align: center;
      color: #fff;
    }
    .modal_button {
      margin-top: 35px;
      gap: 20px;
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        width: 150px;
        height: 45px;
        border-radius: 10px;
        border: none;
        font-size: 18px;
      }
    }
  }
`;

export const ReserModalWapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
  .reserModal_inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    width: 500px;
    height: auto;
    background: rgba(210, 180, 140, 1);
    border-radius: 35px;
    padding: 20px;
    .warning_text {
      margin-top: 30px;
      width: 100%;
      height: auto;
      font-size: 25px;
      text-align: center;
      color: #fff;
      .pay_check_head {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        .camp_name {
          width: 100%;
          text-align: center;
          padding: 10px 0px;
          font-size: 18px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        }
        .price {
          text-align: center;
        }
      }
      .pay_info_list {
        border-top: 1px dotted #fff;
        border-bottom: 1px dotted #fff;
        padding: 10px 0px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        li {
          display: flex;
          justify-content: space-between;
          span {
            font-size: 16px;
          }
        }
      }
    }
    .warning_confrim_text {
      padding: 10px 0px;
      text-align: center;
      color: #fff;
    }
    .modal_button {
      margin-top: 35px;
      gap: 20px;
      display: flex;
      justify-content: center;
      width: 100%;
      button {
        width: 150px;
        height: 45px;
        border-radius: 10px;
        border: none;
        font-size: 18px;
      }
    }
  }
`;
