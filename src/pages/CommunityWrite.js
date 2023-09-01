import React, { useState } from "react";
import { CommunityWriteWrapper } from "../css/community-write-style";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ReactQuill from "react-quill";
import createPost, {
  deleteBoard,
  getIBoard,
  postOnePice,
} from "../api/communityWriteFetch";
import { useRef } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import DOMPurify from "dompurify";
import { getFetchData } from "../api/communityBulletinBoardFetch";

const CommunityWrite = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const writeBoard = searchParams.get("iboard");
  // 수정하기로 들어올때 받아오는 작성된 게시글 데이타
  const [boardData, setboardData] = useState({});
  const [comutitle, setComuTitle] = useState("");
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  // 글 등록을 눌렀는지,취소를 했는지, 뒤로가기를 했는지 체크 state
  const [checkBack, setCheckBack] = useState(0);

  // 글 제목, 내용이 비었을시 버튼 비 활성화
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  useEffect(() => {
    if (comutitle.trim() !== "" && value.trim() !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [comutitle, value]);

  useEffect(() => {
    const handleGoBack = () => {
      console.log("뒤로가기");
    };
    // 웹브라우저의 뒤로가기 버튼 클릭 이벤트 리스너 등록
    window.addEventListener("popstate", handleGoBack);

    // 컴포넌트 언마운트시 이벤트 리스너 제거
    return () => {
      if (checkBack === 0) {
        console.log("게시글 취소, 또는 뒤로가기");
      } else {
        console.log("게시글 정상 등록해서 이동");
      }
      window.removeEventListener("popstate", handleGoBack);
    };
  }, [location]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  // const [comuCtnt, setComuCtnt] = useState("");

  const iboardRef = useRef(null);

  // ReactQull 태그 reference 저장
  const quillRef = useRef(null);

  // Editor 에 담겨진 내용을 출력 state
  useEffect(() => {
    // console.log(value);
  }, [value]);

  // iboard 키값 받아오기
  const getIBoardCall = async () => {
    const res = await getIBoard();
    iboardRef.current = res;
  };
  useEffect(() => {
    getIBoardCall();
  }, []);

  // 리액트에서 웹브라우저 종료시 처리

  // 마이페이지에서 게시글 수정해서 들어올때 실행

  const getBoardData = async () => {
    try {
      const data = await getFetchData(writeBoard);
      console.log("게시글 디테일 요청해서 받은 데이터", data.boardDeVo);
      setboardData(data.boardDeVo);
      setComuTitle(data.boardDeVo.title);
      setValue(data.boardDeVo.ctnt);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (writeBoard) {
      getBoardData();
    }
    const handleBeforeUnload = event => {
      // 사용자에게 경고 메세지를 표시
      event.preventDefault();
      event.returnValue = ""; // 이 부분은 브라우저에 따라 동작하지 않을수 있음
      localStorage.setItem("pk", iboardRef.current);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      // localStorage.removeItem("pk")
    };
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

  // const handleCategoryChange = (event) => {
  //   const selectedValue = event.target.value;
  //   setSelectedCategory(selectedValue)
  // }

  const handleSubmit = async () => {
    try {
      const postData = {
        iboard: iboardRef.current,
        // 카테고리를 선택할 수 있게 해야함.
        icategory: selectedCategory,
        title: comutitle,
        ctnt: value,
      };
      await createPost(postData);
      // 정상 등록
      setCheckBack(1);
      setValue("");
      setComuTitle("");
      navigate("/main/community");
    } catch (error) {
      console.error(error.message);
    }
  };

  const onClickHandleDel = async () => {
    // 취소한 경우 게시물 제거
    await deleteBoard(iboardRef.current);
    // 등록 취소
    setCheckBack(0);
    navigate("/main/community");
  };

  return (
    <CommunityWriteWrapper>
      {/* <div dangerouslySetInnerHTML={{ __html: value }} /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} /> */}

      <div className="top_communityWrite_contents">
        <div className="communityWrite_contents_inner">
          <h1 className="top_communityWrite_title">커뮤니티 게시글 작성</h1>
          <hr className="communityWrite_line" />
          {boardData ? (
            <>
              <select
                className="communityWrite_select"
                onChange={e => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                <option value="" disabled>
                  분류
                </option>
                <option value={1}>공지</option>
                <option value={2}>자유</option>
                <option value={3}>중고거래</option>
                <option value={4}>질문</option>
                <option value={5}>지역</option>
              </select>
              <input
                type="text"
                className="communityWrite_board_title"
                placeholder="제목을 입력해 주세요"
                onChange={e => setComuTitle(e.target.value)}
                value={comutitle}
              />
              <div style={{ background: "#fff", height: "340px" }}>
                <ReactQuill
                  ref={quillRef}
                  onChange={setValue}
                  modules={modules}
                  style={{ height: "300px" }}
                />
              </div>
              {/* <div>
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}
            />
          </div> */}

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
                disabled={isButtonDisabled}
              >
                등록
              </button>
            </>
          ) : (
            <>
              <select
                className="communityWrite_select"
                onChange={e => setSelectedCategory(e.target.value)}
                value={selectedCategory}
              >
                <option value={1}>공지</option>
                <option value={2}>자유</option>
                <option value={3}>중고거래</option>
                <option value={4}>질문</option>
                <option value={5}>지역</option>
              </select>
              <input
                type="text"
                className="communityWrite_board_title"
                placeholder="제목을 입력해 주세요"
                onChange={e => setComuTitle(e.target.value)}
                value={comutitle}
              />
              <div style={{ background: "#fff", height: "340px" }}>
                <ReactQuill
                  ref={quillRef}
                  onChange={setValue}
                  modules={modules}
                  style={{ height: "300px" }}
                />
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
                disabled={isButtonDisabled}
              >
                등록
              </button>
            </>
          )}
        </div>
      </div>
    </CommunityWriteWrapper>
  );
};

export default CommunityWrite;
