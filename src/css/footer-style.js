import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 300px;
  background: #444444;
  .inner {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1300px;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 30px;
    color: #fff;
    .footer_right {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .customer_service {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
        span {
          display: flex;
          gap: 15px;
          font-size: 25px;
        }
        .service_title {
          font-weight: bold;
        }
        .service_number {
          p {
            font-size: 16px;
          }
        }
      }
      .site_info_list {
        border-top: 1px solid #fff;
        display: flex;
        gap: 10px;
        padding: 10px 0px;
        li {
          a {
            color: #fff;
          }
        }
      }
      .site_address {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        gap: 3px;
        span {
          display: flex;
          gap: 5px;
          color: #b6b6b6;
          p {
            padding: 0px 10px;
            border-right: 1px solid #fff;
            &:first-child {
              padding-left: 0px;
            }
            &:last-child {
              border: none;
            }
          }
        }
      }
    }
    .footer_left {
      width: auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      .footer_nav_menu {
        border-bottom: 1px solid #fff;
        margin-bottom: 10px;
        padding-bottom: 20px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        li {
          a {
            color: #fff;
          }
        }
      }
      .footer_logo {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;
