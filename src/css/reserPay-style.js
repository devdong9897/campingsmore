import styled from "@emotion/styled";

export const ReserPayWapper = styled.div`
  margin: 0 auto;
  width: 1300px;
  height: auto;
  padding-top: 130px;
  background: #eaeaea;
  .camping_info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 700px;
    .main_thumbnail {
      position: relative;
      width: 100%;
      height: 60%;
      background: gold;
      overflow: hidden;
      border-radius: 15px;
      .slide_inner {
        position: relative;
        width: 100%;
        height: 100%;
        background: red;
        overflow: hidden;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
        }
      }
    }
    .detail_info {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 30%;
      gap: 1%;
      .detail_info_desc {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        background: #fff;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        padding: 20px;
        .title {
          font-size: 27px;
          font-weight: bold;
          text-align: left;
        }
        .detail_info_list {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          width: 100%;
          li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            font-size: 17px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .note {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
        background: #fff;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        padding: 20px;
        .title {
          font-size: 23px;
          font-weight: bold;
          text-align: left;
        }
      }
    }
  }
  .calendar_area {
    width: 100%;
    height: 650px;
    padding: 0% 10%;
    .calender_title {
      margin-top: 5%;
      display: block;
      width: 100%;
      text-align: center;
      padding: 20px 0px;
      font-size: 25px;
    }
    .react-calendar {
      width: 100%;
      height: 80%;
      background: #fff;
      color: #222;
      border-radius: 8px;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
      /* border: 1px solid #a0a096; */
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.125em;
      .react-calendar__viewContainer {
        height: 90%;
        div {
          height: 100%;
          div {
            flex-grow: unset;
            height: 100%;
            .react-calendar__month-view__weekdays {
              height: 5%;
            }
            .react-calendar__month-view__days {
              height: 90%;
            }
          }
        }
      }
    }
    .react-calendar--doubleView {
      width: 700px;
    }
    .react-calendar--doubleView .react-calendar__viewContainer > * {
      width: 50%;
      margin: 0.5em;
    }
    .react-calendar,
    .react-calendar *,
    .react-calendar *:before,
    .react-calendar *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .react-calendar button {
      margin: 0;
      border: 0;
      outline: none;
    }
    .react-calendar button:enabled:hover {
      cursor: pointer;
    }
    .react-calendar__navigation {
      display: flex;
      height: 10%;
      margin-bottom: 1em;
    }
    .react-calendar__navigation button {
      color: #6f48eb;
      min-width: 44px;
      background: none;
      font-size: 16px;
      margin-top: 8px;
    }
    .react-calendar__navigation button:disabled {
      background-color: #f0f0f0;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background-color: #f8f8fa;
    }
    .react-calendar__month-view__weekdays {
      width: 100%;
      height: 10%;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.75em;
    }
    .react-calendar__month-view__weekdays__weekday {
      padding: 0.5em;
    }
    .react-calendar__month-view__weekNumbers .react-calendar__tile {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75em;
      font-weight: bold;
    }
    .react-calendar__month-view__days__day--weekend {
      color: #6f48eb;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
      color: #757575;
    }
    .react-calendar__year-view .react-calendar__tile,
    .react-calendar__decade-view .react-calendar__tile,
    .react-calendar__century-view .react-calendar__tile {
      padding: 2em 0.5em;
    }
    .react-calendar__tile {
      max-width: 100%;
      padding: 10px 6.6667px;
      background: none;
      text-align: center;
      line-height: 16px;
    }
    .react-calendar__tile:disabled {
      background-color: #f0f0f0;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background: #f8f8fa;
      color: #6f48eb;
      border-radius: 6px;
    }
    .react-calendar__tile--now {
      background: #646269;
      border-radius: 6px;
      font-weight: bold;
      color: #fff;
    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
      background: #6f48eb33;
      border-radius: 6px;
      font-weight: bold;
      color: #6f48eb;
    }
    .react-calendar__tile--hasActive {
      background: #6f48eb;
    }
    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
      background: #f8f8fa;
    }
    .react-calendar__tile--active {
      background: #6f48eb;
      border-radius: 6px;
      font-weight: bold;
      color: white;
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background: #6f48eb;
      color: white;
    }
    .react-calendar--selectRange .react-calendar__tile--hover {
      background-color: #f8f8fa;
    }

    .react-calendar__tile--range {
      background: #bfb3e8;
      color: #6f48eb;
      border-radius: 0;
    }
    .react-calendar__tile--rangeStart {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      background: #6f48eb;
      color: white;
    }
    .react-calendar__tile--rangeEnd {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      background: #6f48eb;
      color: white;
    }
  }
  .payment_area {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 5% 10%;
    border-top: 5px solid rgba(0, 0, 0, 0.2);
    .title {
      display: block;
      font-size: 30px;
      padding: 5px 0px;
    }
    .payment_list_form {
      width: 100%;
      height: auto;
      li {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 10%;
        padding: 15px 0px;
        span {
          font-size: 20px;
        }
        .input_box {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 45%;
          height: auto;
          input {
            width: 100%;
            height: 40px;
            border-radius: 15px;
            border: 1px solid #9ab685;
            padding-left: 10px;
          }
          .camping_way {
            width: 100%;
            height: 40px;
            border-radius: 15px;
            border: 1px solid #9ab685;
            padding-left: 10px;
          }
        }
      }
    }
    .payment_way_list {
      margin-top: 20px;
      display: flex;
      gap: 10%;
      justify-content: center;
      li {
        width: 20%;
        height: 100px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: 1px solid #191919;
        .payment_way {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 65%;
          font-size: 30px;
        }
        span {
          width: 100%;
          text-align: center;
        }
      }
    }
    .payment_check {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      margin-top: 50px;
      width: 50%;
      padding: 5% 0px;
      border-top: 5px solid rgba(0, 0, 0, 0.2);
      .pay_btn {
        width: 200px;
        height: 50px;
        border: none;
        border-radius: 15px;
        font-size: 1.3rem;
        color: #fff;
        background: #d2b48c;
      }
    }
  }
`;
