import React, { useState } from "react";
import { AddressListWapper } from "../css/addressList-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import DaumPost from "../api/DaumPost";

const AddressPath = () => {
  const [addAddressState, setAddAddressState] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [fromAddressSet, setFromAddressSet] = useState(false);
  const handleAdd = () => {
    setAddAddressState(true);
  };

  const handleDaumPostCall = () => {
    setFromAddressSet(true);
  };
  const handleCancel = () => {
    setAddress("");
    setAddressDetail("");
    setName("");
    setPhone("");
    setAddAddressState(false);
  };

  const handleSumbit = () => {
    const sendData = {
      address: address,
      addressDetail: addressDetail,
      name: name,
      phone: phone,
    };
    if (!sendData.address) {
      alert("상세주소를 입력하세요");
    } else if (!sendData.addressDetail) {
      alert("이름을 입력하세요");
    } else if (!sendData.name) {
      alert("전화번호를 입력하세요");
    } else if (!sendData.phone) {
      alert("주소를 입력하세요!");
    } else {
      alert("오케이 땡규! 오케이 사딸라!");
    }
    console.log(sendData);
  };
  return (
    <AddressListWapper>
      <h1>배송지 관리</h1>
      <div className="note">
        <span>
          <FontAwesomeIcon icon={faCircleExclamation} />
        </span>
        <p>
          배송지를 등록하게되면 주문하실때 등록한 배송지로 설정이 가능합니다.
          배송지 설정은 여려개 등록이 가능합니다.
        </p>
      </div>
      <button className="add_address_btn" onClick={handleAdd}>
        배송지 추가 등록
      </button>
      {addAddressState ? (
        <div className="post_address_box">
          <ul className="post_address_list">
            <li>
              <span>주소</span>
              <input
                type="text"
                placeholder="배송지 주소를 입력하세요"
                onClick={handleDaumPostCall}
              ></input>
            </li>
            <li>
              <span>상세주소</span>
              <input
                type="text"
                placeholder="상세주소를 입력하세요"
                value={addressDetail}
                onChange={e => setAddressDetail(e.target.value)}
              ></input>
            </li>
            <li>
              <span>수령인</span>
              <input
                type="text"
                placeholder="수령인을 입력하세요"
                value={name}
                onChange={e => setName(e.target.value)}
              ></input>
            </li>
            <li>
              <span>전화번호</span>
              <input
                type="text"
                placeholder="전화번호를 입력하세요"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              ></input>
            </li>
          </ul>
          <ul className="post_address_result">
            <li>
              <span>주소</span>
              <input
                type="text"
                readOnly
                placeholder="배송지 주소를 입력하세요"
              ></input>
            </li>
            <li>
              <span>상세주소</span>
              <input
                type="text"
                readOnly
                value={addressDetail}
                placeholder="상세주소를 입력하세요"
              ></input>
            </li>
            <li>
              <span>수령인</span>
              <input
                type="text"
                readOnly
                value={name}
                placeholder="수령인을 입력하세요"
              ></input>
            </li>
            <li>
              <span>전화번호</span>
              <input
                type="text"
                readOnly
                value={phone}
                placeholder="전화번호를 입력하세요"
              ></input>
            </li>
            <button onClick={handleSumbit}>배송지 등록하기</button>
            <button onClick={handleCancel}>취소하기</button>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="address_list_box">등록된 배송지가 없습니다.</div>
    </AddressListWapper>
  );
};

export default AddressPath;
