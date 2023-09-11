import React from "react";
import { WithdrawalWrapper } from "../../css/WithdrawalModal-style";
import { AccoutwithdrawalFetch } from "../../api/userFatch";
import { useNavigate } from "react-router";
import { deleteCookie } from "../../api/client";
import { basketItemEmpty } from "../../reducers/basketSlice";
import { UserLogout } from "../../reducers/userSlice";
import { useDispatch } from "react-redux";

const WithdrawalModal = ({ userIuser, isWithdrawal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const WithdrawalCancel = () => {
    isWithdrawal(false);
  };
  const WithdrawalDO = () => {
    console.log(userIuser);
    AccoutwithdrawalFetch(userIuser);
    deleteCookie();
    const LogoutEmpty = [];
    const basketEmpty = [];
    dispatch(UserLogout(LogoutEmpty));
    dispatch(basketItemEmpty(basketEmpty));
    navigate("/");
  };
  return (
    <WithdrawalWrapper>
      <div className="Withdrawal_inner">
        <div className="warning_text">정말로 회원 탈퇴를 하시겠습니까?</div>
        <div className="modal_button">
          <button onClick={WithdrawalDO}>회원탈퇴</button>
          <button onClick={WithdrawalCancel}>취소</button>
        </div>
      </div>
    </WithdrawalWrapper>
  );
};

export default WithdrawalModal;
