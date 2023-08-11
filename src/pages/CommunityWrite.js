import React, { useState } from "react";
import { CommunityWriteWrapper } from "../css/community-write-style";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import createPost from "../api/communityWriteFetch";
import { useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import DOMPurify from "dompurify";

const CommunityWrite = () => {
  const [comutitle, setComuTitle] = useState("");
  // const [comuCtnt, setComuCtnt] = useState("");
  const [content, setContent] = useState("");
  const [title, setTItle] = useState("");

// ReactQull 태그 reference 저장
const quillRef = useRef(null);

// Editor 에 담겨진 내용을 출력 state
const [value, setValue] = useState();
useEffect(() => {
  console.log(value);
}, [value]);



  const imageHandler = () => {
    console.log("이미지 핸들링");
    // 1. reactQuill 에디터를 저장한다.
    const editor = quillRef.current.getEditor();
    console.log("editor : ", editor);
    // 2. image 를 저장할 input type="file" 을 즉시 생성
    //   태그를 만듦 <input type="file" accept="image/*" />
    const input = document.createElement("input");
    // 3. input 태그의 속성을 설정
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 강제로 클릭을 시켜줌.
    // 4. 이미지 선택시 즉, input 요소에 이미지 처리
    input.addEventListener("change", () => {
      console.log("온체인지");
      const file = input.files[0];
      const formData = new FormData();
      // formData.append("키", 값)
      formData.append("img", file);
      // 백엔드 이미지 서버로 전송을 실행한다.
      try {
        console.log("서버로 이미지 전송 axios");
        // firebase Storage 에 업로드
        // storage 레퍼런스를 만든다.
        // ref(스토리지, 폴더명/파일명)
        // const storageRef = ref(appStorage, `files/${file.name}`);
        // const uploadTask = uploadBytesResumable(storageRef, file);
        // uploadTask.on("state_changed", 성공함수, 실패함수, 완료함수);
        // uploadTask.on(
        //   "state_changed",
        //   snapshot => {
        //     // 업로드 상태(%) 출력
        //     const progress = Math.round(
        //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        //     );
        //     console.log("업로드 상태", progress);
        //   },
        //   err => {
        //     alert(err);
        //   },
        //   () => {
        //     console.log("업로드 완료");
        //     // 업로드된 이미지의 URL 을 알아냄
        //     getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
        //       console.log(downloadUrl);
        //       // 에디터에 코드를 삽입한다.
        //       // <img src=downloadUrl>
        //       // editor.root.innerHTML = editor.root.innerHTML + `<img src=${downloadUrl} />`
        //       // 현재 마우스 커서 위치를 알아내서 뒷쪽에 배치한다.
        //       const range = editor.getSelection();
        //       editor.insertEmbed(range.index, "image", downloadUrl);
        //     });
        //   },
        // );
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

  const handleContentChange = value => {
    setContent(value);
  };
  const handleSubmit = async () => {
    try {
      const postData = {
        iboard: 0,
        icategory: 0,
        title: title,
        ctnt: content,
      };
      await createPost(postData);
      setContent("");
      setTItle("");
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleTitleChange = e => {
    setTItle(e.target.value);
  };

  return (
    <CommunityWriteWrapper>
      {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} /> */}



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
      <div>
            <h2>html 출력하기 : </h2>
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}
            />
          </div>

          {/* <ReactQuill
            theme="snow"
            value={content}
            // modules={quillModules}
            // formats={quillFormats}
            onChange={handleContentChange}
            placeholder="게시글 작성"
            className="communityWrite_board_quill"
          /> */}
          {/* <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력해주세요"
          /> */}
          {/* <button onClick={handleSubmit}>작성 완료</button> */}

          {/* <textarea
            cols="30"
            rows="10"
            className="communityWrite_board_detail"
            placeholder="내용을 입력해 주세요"
            onChange={e => setComuCtnt(e.target.value)}
          ></textarea> */}
          <button className="communityWrite_board_del">취소</button>
          <button 
            className="communityWrite_board_regi" 
            onClick={handleSubmit}
            // onClick={handleToGoCommunity}
          >등록</button>
        </div>
      </div>
    </CommunityWriteWrapper>
  );
};

export default CommunityWrite;
