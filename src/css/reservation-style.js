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
        border-right: 5px solid rgba(0, 0, 0, 0.1);
        .reservaion_info {
          width: 100%;
          height: 25%;
          .capming_list_title {
            margin: 15px 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0px 0px;
            font-size: 28px;
          }
          .camping_search {
            width: 100%;
            padding: 0px 100px;
            display: flex;
            flex-direction: column;
            span {
              text-align: center;
            }
            .search_input_box {
              position: relative;
              width: 100%;
              height: 35px;
              background: red;
              border-radius: 10px;
              overflow: hidden;
              border: 1px solid #b28e68;
              input {
                width: 100%;
                height: 100%;
                border: none;
                padding-left: 10px;
                padding-right: 60px;
              }
              .search_btn {
                position: absolute;
                top: 0px;
                right: 0px;
                width: 50px;
                height: 100%;
                z-index: 1;
                border: none;
                background: #b28e68;
                color: #fff;
              }
            }
          }
          .camping_location {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            width: 100%;
            height: 80px;
            padding: 0px 100px;
            .select_location {
              width: 100%;
              height: 35px;
              border-radius: 10px;
              padding: 0px 10px;
              border: 1px solid #b28e68;
            }
          }
        }

        .camping_list {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 70%;
          overflow-y: scroll;
          li {
            display: flex;
            flex-direction: column;
            gap: 10px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
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
            .camping_reservation {
              button {
                border: none;
                padding: 5px 10px;
                border-radius: 5px;
                background: #d2b48c;
                &:hover {
                  background: #a87f0f;
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
