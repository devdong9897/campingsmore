import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const ReviewModalWrapper = styled.div`
width: 100%;
    height: auto;
    .top_review_modal_contents {
        width: 100%;
        height: 800px;
        position: relative;
    }
    .review_modal_contents_inner {
        position: absolute;
        width: 1300px;
        margin: 0 auto;
        height: 100%;
        top: 70%;
        left: 50%;
        border-radius: 30px;
        transform: translate(-50%, -50%);
        background-color: lightgray;
    }
    .review_modal_title {
        width: calc(100% - 80px);
        height: 60px;
        background-color: white;
        margin:0 auto;
        margin-top:40px;
        display: block;
        text-indent:20px;
        font-size:20px;
        border:none;
        border-radius: 10px;
        margin-bottom:10px;
    }
    .review_modal_detail {
        width: calc(100% - 80px);
        height: auto;
        background-color: white;
        margin:0 auto;
        margin-top:40px;
        display: block;
        text-indent:20px;
        font-size:20px;
        border:none;
        border-radius: 10px;
        margin-bottom:10px;
    }
    .review_modal_eval {
        text-align:center;
        padding-top:10px;
    }
    .review_modal_star{
        text-align:center;
        color:#ffdc62;
        margin:10px 0;
    }

    .review_modal_complete {
        display: block;
        margin:0 auto;
        margin-top:50px;
        padding:5px 50px;
        border-radius:5px; 
        border:none;
    }
`

