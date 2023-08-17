import React from 'react'
import { SignUpModalWrapper } from '../../css/SignupModal-style'
import { SignupFetch } from '../../api/userFatch';
import { useNavigate } from 'react-router';

const SignModal = ({isSignupModal,SignUpData}) => {
    const navigate = useNavigate();

    const handleSignUp = async() => {
        const result = await SignupFetch(SignUpData);
        navigate("/");
    }
    
    const handleModal =() => {
        isSignupModal(false);
    }
  return (
    <SignUpModalWrapper>
    <div className="Signup_modal_inner">
      <div className="warning_text">
        <h2>입력하신 정보로 회원가입을 하시겠습니까?</h2>
        <span>실제 사용하시는 이메일 및 정확한 아이디를 입력하지 않을 시 계정을 찾는데 어려움이 있을 수 있습니다.</span>
      </div>
      <div className="modal_buttons">
        <button onClick={handleSignUp}>회원가입</button>
        <button onClick={handleModal}>다시입력</button>
      </div>
    </div>
  </SignUpModalWrapper>
  )
}

export default SignModal