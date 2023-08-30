import styled from "@emotion/styled"

export const CommentListWrapper = styled.div`
    width: 100%;
    height: auto;
    .comment_top {
        height: auto;
        border-radius:15px;
        padding:5px;
    }
    .comment_user {
        float:right;
    }
    textarea{
        width: 300px;
        resize:none;
    }

    .comment_user span:first-child{
        margin-right:10px;
        display: block;
        white-space:pre-line;
    }
    .editLine {
        border-bottom:1px dotted #000;
        margin-top:20px;
        margin-bottom:20px;
    }
    .completeEditBt{
        margin-right:10px;
        margin-bottom:5px;
        padding:2px 10px;
        background-color: #edd7b4;
        border:none;
        border-radius: 5px;
    }
    .cancelDeleteBt {
        padding:2px 10px;
        background-color: #edd7b4;
        border:none;
        border-radius: 5px;
    }

    

`