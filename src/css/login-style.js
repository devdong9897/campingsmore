import styled from "@emotion/styled";

const path = process.env.PUBLIC_URL;

export const LoginForm = styled.div`
position: relative;
width: 100%;
height: 100vh;
background: white;
background-image: url('${path}/image/bg.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
.login_inner{
    position: absolute;
    top:50%;
    left:50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%,-50%);
    margin: 0 auto;
    width: 575px;
    height: 835px;
    background: rgba(154,182,133,0.7);
    padding: 20px;
    border-radius: 20px;
    overflow: hidden;
    .login_logo{
        width: 100%;
        height: 160px;
        background-image: url('${path}/image/Logo.png');
        background-repeat: no-repeat;
        background-position: 50% 80%;
        background-size: 35%;
    }
    .login_form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        span{
            margin-top: 10px;
            margin-bottom: 5px;
            font-size: 20px;
            font-weight: 600;
            width: 100%;
            color:#fff;
        }
        input{
            padding: 15px;
            border-radius: 15px;
            border: none;
            font-size: 20px;
        }
    }
    .to_signup{
        margin-top: 20px;
        width: 100%;
        padding: 8px;
        display: flex;
        justify-content: center;
        gap: 10px;
        font-size: 17px;
        border-bottom: 1px solid #fff;
        span{
            a{
                color: #214A08;
            }
        }
    }
    .find_account{
        display: flex;
        justify-content: center;
        gap: 10px;
        padding: 5px;
        font-size: 17px;
        color:#fff;
        span{
            a{
                color: greenyellow;
            }
        }
    }
    .do_login{
        margin-top: 15px;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 50px;
        .login_submit_btn{
            width: 50%;
            border-radius: 15px;
            border: none;
            font-size: 17px;
            font-weight: 600;
            cursor: pointer;
        }
    }
    .sub_login{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        li{
            width: 100%;
            padding: 0px 10%;
            button{
                width: 100%;
                padding: 10px;
            }
        }
    }
    .non_member{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 20px;

        a{
            border-bottom: 1px solid #fff;
            font-size: 17px;
            color:#fff;
        }
    }

}
`