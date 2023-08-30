import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const ReservationWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 120px;
  .reservation_inner {
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    .reser_frame {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      .camping_list_area {
        width: 550px;
        height: 100%;
        overflow: hidden;
        .capming_list_title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 15px 0px;
          height: 10%;
          font-size: 20px;
        }
        .camping_list {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 90%;
          overflow-y: scroll;
          li {
            display: flex;
            flex-direction: column;
            gap: 10px;
            border-top: 1px solid #000;
            padding: 20px 10px;
            width: 100%;
            min-height: 200px;
            cursor: pointer;
            .camping_info_box {
              display: flex;
              gap: 10px;
              width: 100%;
              height: 80%;
              .camping_img {
                position: relative;
                width: 40%;
                height: 100%;
                background: gold;
                border-radius: 10px;
                overflow: hidden;
                img {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  width: 100%;
                }
              }
              .camping_info {
                display: flex;
                flex-direction: column;
                gap: 5px;
                width: 60%;
                height: 100%;
                .camping_name {
                  font-weight: bold;
                  font-size: 20px;
                }
              }
            }
            &:hover {
              background-color: #ededed;
            }
          }
        }
      }
      .kakaoMap {
        width: calc(100% - 550px);
        height: 100%;
        background: darkcyan;
      }
    }
  }
`;
