import React, { useState } from "react";
import { CommunityWriteWrapper } from "../css/community-write-style";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import createPost, { getIBoard, postOnePice } from "../api/communityWriteFetch";
import { useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import DOMPurify from "dompurify";

const CommunityWrite = () => {
  const [comutitle, setComuTitle] = useState("");
  // const [comuCtnt, setComuCtnt] = useState("");

  const iboardRef = useRef(null);

  // ReactQull 태그 reference 저장
  const quillRef = useRef(null);

  const navigate = useNavigate();

  // Editor 에 담겨진 내용을 출력 state
  const [value, setValue] = useState();
  useEffect(() => {
    console.log(value);
  }, [value]);

  // iboard 키값 받아오기
  const getIBoardCall = async () => {
    const res = await getIBoard();
    iboardRef.current = res;
  };
  useEffect(() => {
    getIBoardCall();
  }, []);

  const imageHandler = () => {
    // console.log("이미지 핸들링", iboardRef);
    // 1. reactQuill 에디터를 저장한다.
    const editor = quillRef.current.getEditor();
    // console.log("editor : ", editor);
    // 2. image 를 저장할 input type="file" 을 즉시 생성
    //   태그를 만듦 <input type="file" accept="image/*" />
    const input = document.createElement("input");
    // 3. input 태그의 속성을 설정
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 강제로 클릭을 시켜줌.
    // 4. 이미지 선택시 즉, input 요소에 이미지 처리
    input.addEventListener("change", async () => {
      // console.log("온체인지");
      const file = input.files[0];
      // console.log("file : ", file)
      const formData = new FormData();
      // formData.append("키", 값)
      formData.append("pic", file);
      console.log("폼데이터가 뭔데예", formData);
      // 백엔드 이미지 서버로 전송을 실행한다.
      try {
        console.log(formData, iboardRef.current);
        const result = await postOnePice(iboardRef.current, formData);
        console.log("성공시 백엔드가 보내주는 데이터", result);
        const IMG_URL = `http://192.168.0.144:5005/img/${result}`;
        const editor = quillRef.current.getEditor();
        // editor.root.innerHTML =
        // editor.root.innerHTML + `<img src=${IMG_URL}/></br>`
        const range = editor.getSelection();
        editor.insertEmbed(range.index, "image", IMG_URL);
      } catch (err) {
        console.log(err);
      }
    });
  };
  // 툴바 설정하기
  // 화면이 갱신될때마다 새로 정의할 필요가 없음.
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
          ["image"],
          ["clean"],
        ],
        // handlers 를 통해서 개발자가 직접처리하겠다.
        handlers: { image: imageHandler },
      },
    }),
    [],
  );

  const handleSubmit = async () => {
    try {
      const postData = {
        iboard: iboardRef.current,
        // 유병준 체크 : 카테고리를 선택할 수 있게 해야함.
        icategory: 1,
        title: comutitle,
        ctnt: value,
      };
      await createPost(postData);
      setValue("");
      setComuTitle("");
      navigate("/main/community");
    } catch (error) {
      console.error(error.message);
    }
  };

  const onClickHandleDel = () => {
    navigate("/main/community");
  };

  return (
    <CommunityWriteWrapper>
      <div className="top_communityWrite_contents">
        <div className="communityWrite_contents_inner">
          <h1 className="top_communityWrite_title">커뮤니티 게시글 작성</h1>
          <hr className="communityWrite_line" />
          <input
            type="text"
            className="communityWrite_board_title"
            placeholder="제목을 입력해 주세요"
            onChange={e => setComuTitle(e.target.value)}
          />
          <div style={{ background: "#fff" }}>
            <ReactQuill ref={quillRef} onChange={setValue} modules={modules} />
          </div>
          <button
            onClick={onClickHandleDel}
            className="communityWrite_board_del"
          >
            취소
          </button>
          <button
            className="communityWrite_board_regi"
            onClick={handleSubmit}
            // onClick={handleToGoCommunity}
          >
            등록
          </button>
        </div>
      </div>
    </CommunityWriteWrapper>
  );
};

export default CommunityWrite;
