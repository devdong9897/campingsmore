import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const PaymentWrapper = styled.div`
    width: 100%;
    height:auto;
    .top_payment_contents{
        width: 100%;
        height:1000px;
        position:relative;
    }
    .payment_contents_inner {
        position:absolute;
        width:1300px;
        margin:0 auto;
        height: 100%;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .top_line {
        width: 100%;
        height: auto;
        background-color: red;
        font-size:20px;
        color:#6D6D6D;
    }
    .payment_order_cate {
        width: 100%;
        height:20px;
        display: flex;
        justify-content: space-around;
    }
    .payment_order_list {
        width: 100%;
        height:auto;
        display: flex;
        background-color:white;
        border:10px solid #9AB685;
        border-radius: 15px;
        margin-bottom:50px;
        overflow: hidden;
        
        .payment_img {
        margin:40px 0 40px 50px;
        float:left;
        
        }
        .payment_moreinfo{
            width: auto;
        }
    } 
    
    .payment_order_del {
        width: 100%;
        height:auto;
        background-color:white;
        border:10px solid #9AB685;
        border-radius: 15px;
        margin-bottom:50px;
            
        h1 {
            margin:50px 0 0 50px;
            font-size: 25px;
        }
        p {
            margin:20px 0 5px 50px;
            font-size:20px;
        }
        .payment_address {
            display: block;
            width: 300px;
        }
        input {
            margin-left:50px;
        } 
        
    }
    
    
    .payment_point_money {
        margin:40px 0 0 50px;
    }
    .payment_point_money_box, .payment_point_money_box2 {
        border-top:none;
        border-left:none;
        border-right:none;
    }
    .payment_all_point {
        
    }
    .payment_box {
        display:block;
        background-color: #9AB685;
        width: 200px;
        height:40px;
        color:white;
        border-radius: 10px;
        border:none;
        font-size:20px;
        margin-left:500px;
    }
`