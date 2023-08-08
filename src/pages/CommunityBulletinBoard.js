import React, { useEffect } from "react";
import {CommunityBulletinBoardWrapper} from '../css/community-bulletin-board-style'
import { useNavigate } from "react-router";
import { useState } from "react";
import createPost from "../api/communityBulletinBoardFetch";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const CommunityBulletinBoard = () => {

    const [content, setContent] = useState('')
    const [title, setTItle] = useState('')
    // const [communityBulletinBoardData, setCommunityBulletinBoardData] = useState()
    const navigate = useNavigate();

    useEffect(() => {

    },[])

    const handleGoToCommunityBulletinBoard = () => {
        navigate("/main/communitywrite")
    }

    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
        ]
    }

    const quillFormats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'bullet',
        'link',
        'image',
    ];    

    const handleContentChange = (value) => {
        setContent(value)
    }

    const handleTitleChange = (e) => {
        setTItle(e.target.value)
    }

    const handleSubmit = async () => {
        try{
            const postData = {
            iboard: 0,
            icategory: 0,
            title: title,
            ctnt: content,
            }
            await createPost(postData)
            setContent('')
            setTItle('')
        }catch(error) {
            console.error(error.message)
        }
    }

    return (
        <CommunityBulletinBoardWrapper>
            <div className="top_community_bulletin_board_contents">
                <div className="community_bulletin_board_contents_inner">
                    <h1>커뮤니티 게시글</h1>

                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="제목을 입력해주세요"
                    />
                    <ReactQuill
                        theme="snow"
                        value={content}
                        modules={quillModules}
                        formats={quillFormats}
                        onChange={handleContentChange}
                        placeholder="게시글 작성"

                    />
                    <button onClick={handleSubmit}>작성 완료</button>





                    {/* <hr className="community_bulletin_board_line" />
                    <button className="community_bulletin_board_regi" onClick={handleGoToCommunityBulletinBoard}>게시글 등록</button>
                    <button className="community_bulletin_board_del">삭제</button>
                    <button className="community_bulletin_board_edit">수정</button>
                    
                    <input
              type="text"
              className="community_bulletin_board_title"
              placeholder="제목을 입력해 주세요"
            />
            <textarea
              cols="30"
              rows="10"
              className="community_bulletin_board_detail"
              placeholder="내용을 입력해 주세요"
            ></textarea>
                    <h1>리뷰작성</h1>
            <div className="community_bulletin_board_comment_box">
                <div className="community_bulletin_board_comment">
                <img src="/image/profile.jpg" alt="My Image" className="community_bulletin_board_img"/>
                    <p>hyeongman1990</p>
                    <textarea cols="30" rows="10"></textarea>
                            <button>등록</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </CommunityBulletinBoardWrapper>
    )
};

export default CommunityBulletinBoard;
