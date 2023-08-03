import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const PaymentModalWrapper = styled.div`
    width: 100%;
    height:auto;
    .top_payment_modal_contents {
        width: 100%;
        height:1000px;
        position:relative;
    }
    .payment_modal_contents_inner {
        position: absolute;
        width: 1300px;
        margin: 0 auto;
        height: 100%;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .payment_modal_box {
        width: 800px;
        height:570px;
        margin:0 auto;
        background-color:white;
    }
    .payment_modal_title {
        padding-top:50px;
        width: 600px;
        height: 250px;
        margin:0 auto;
        overflow: hidden;
        h1 {
            font-size:65px;
            text-align:center;
            span {
                color:#D2B48C;
            }
        }
    }
    hr {
        margin:0 auto;
        margin-bottom:50px;
        width: 600px;
        
    }
    .payment_modal_order_info {
        width: 600px;
        height: 250px;
        margin-left:100px;
    }
    .payment_modal_order_cate {
        width: 200px;
        font-size:25px;
        float:left;
    }
    .payment_modal_order_cate p:last-child {
        margin-top:100px;
    }
    .payment_modal_indi_info {
        font-size:20px;
    }
    .payment_modal_indi_info p:last-child {
        margin-top:22px;
        margin-left:200px;
        color:#D2B48C;
        font-size:25px;
        font-weight:900;
    }
    .payment_modal_check {
        display: flex;
        justify-content: center;
        button {
            width: 150px;
            height:40px;
            border-radius: 15px;
            font-size:20px;;
            color:white;
            background-color: #C0C0C0;
            border:none;
            cursor: pointer;
            margin-top:-50px;
    }
    button:hover {
        background-color: #808080;
    }
    button:first-child{
        margin-right:20px;
    }
    }
    
`