import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const CommunityWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 150px;
  .top_community_contents {
    margin: 0 auto;
    width: 1300px;
    height: auto;
    overflow: hidden;
    .community_contents_inner {
      width: 100%;
      height: auto;
      .community_line {
        margin: 20px 0;
      }
      .community_input_area {
        width: 100%;
        height: auto;
        .community_form {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: auto;
          .community_board_menu {
            width: 150px;
            height: 30px;
            text-indent: 5px;
            display: block;
            margin-right: 10px;
            margin-bottom: 20px;
          }
          .community_input_from {
            width: 300px;
            height: 30px;
            .community_search {
              float: right;
              height: 30px;
              margin-right: 10px;
              text-indent: 10px;
            }
            .community_icon {
              width: 20px;
              height: 20px;
              border: 1px solid #000;
              padding: 4px;
              border-radius: 10px;
              float: right;
              cursor: pointer;
            }
          }
        }
      }
      .community_board_list_head_box {
        width: 100%;
        height: auto;
        .community_write_box {
          margin-bottom: 30px;
          display: flex;
          justify-content: flex-end;
          width: 100%;
          height: auto;
          .community_board_regi {
            background-color: #d2b48c;
            border-radius: 15px;
            border: none;
            width: 130px;
            height: 30px;
            color: white;
            display: block;
            margin-top: 20px;
          }
        }
        .community_board_list_head {
          width: 100%;
          height: auto;
          .community_board_bod {
            display: flex;
            flex-direction: column;
            width: 100%;
            li {
              display: flex;
              justify-content: space-between;
              border-top: 1px solid #000;
              width: 100%;
              height: 80px;
              background: #ffffff;
              .list_left {
                display: flex;
                justify-content: flex-start;
                width: 80%;
                height: 100%;
                span {
                  display: block;
                }
                .list_item_cate {
                  display: block;
                  width: 80px;
                  height: 100%;
                  padding: 10px;
                  p {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                    background: #a9a9a9;
                    color: #fff;
                    font-weight: bold;
                  }
                }
                .list_item_title {
                  padding: 0px 20px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  color: #000;
                  font-size: 20px;
                }
              }
              .list_right {
                display: flex;
                flex-direction: column;
                gap: 10px;
                justify-content: center;
                span {
                  display: block;
                  text-align: right;
                }
              }
            }
            li:last-child {
              border-bottom:1px solid #000;
            }
            li:hover{
              background-color: #e8fffd;
            }
          }
        }
      }
      .comu_pagenation {
        margin: 20px 0px;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 35px;
        gap: 10px;
        li {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          width: 35px;
          height: 35px;
          border-radius: 100%;
          font-size: 18px;
          background: #a9a9a9;
          color: #fff;
        }
      }
    }
  }
`;