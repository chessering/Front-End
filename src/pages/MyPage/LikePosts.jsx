import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyLists from "./MyLists.jsx";
import Pgnation from "./Pgnation";
import styled from "styled-components";

const ModifyButton = styled.button`
    background : black;
    color : white;
    border : none;
    border-radius : 7px;
    width : 93px;
    height : 42px;
    margin-left : 200px;
`
const CancelButton = styled.button`
    background : black;
    color : white;
    border : none;
    border-radius : 7px;
    width : 93px;
    height : 42px;
    margin-left : 107px;
`
const DeleteButton = styled.button`
    background : black;
    color : white;
    border : none;
    border-radius : 7px;
    width : 93px;
    height : 42px;
`

const StyledList = styled.div`
    background : ${props => props.even ? '#F2F1F1' : 'white'};
    color : black;
    vertical-align: middle;
    gap : 0 20px;
    height: 39px;
    width : 100%;
    text-wrap : nowrap;
`

function LikePosts() {

    const [clicked, setClicked] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkItems, setCheckItems] = useState(new Set);

    const checkHandled = ({target}) => {
        console.log(target);
        setChecked(!checked);
        checkItemHandler(target.id, target.checked);
    }

    const Cancelfunc = () => {
        setClicked(!clicked);
        checkItems.clear();
        setChecked(false);
    }

    const checkItemHandler = (id, isChecked) => {
        if (isChecked) {
          checkItems.add(id) 
          setCheckItems(checkItems)
          console.log(checkItems)
        } else if (!isChecked) {
          checkItems.delete(id)
          setCheckItems(checkItems)
          console.log(checkItems)
        }
      }

      const [postInfo, setPostInfo] = useState([]);
      const token = localStorage.getItem('access_Token');
      console.log(token);
    
      async function handlePostInfo(){
          await axios({
              url : `${process.env.REACT_APP_API_URL}/mypages/liked_posting`,
              method: 'GET',
              headers : {
                  'authorization' : token
              }
          })
          .then(response => {
              console.log(response);
              setPostInfo(response.data.result);
          })
          .catch(error => {
              console.error(error);
          });
  
      }
      useEffect(() =>{
        handlePostInfo()
    },[])


    function SubmitPostInfo() {

        const array = Array.from(checkItems);
        axios.post(`${process.env.REACT_APP_API_URL}/mypages/liked_posting/modify`,
            {
                post_id : array,
            },
            {
                headers : {
                    'authorization' : `${token}`
                }
        
            },
            
        )
        .then(response => {
            console.log(response);

            setClicked(false);

        })
        .catch(error => {
            console.error(error);
        });
    }

    const [page, setPage] = useState(1);
    const [pageclicked, setPagelicked] = useState(false);
    const limit = 10; // 한 페이지의 post 최대갯수
    const offset = (page - 1) * limit;

    const postlist = Array.isArray(postInfo) && postInfo.slice(offset, offset + limit).map((postInfo, index) => (
    <StyledList key={index} even = {index % 2 === 0}>
        <div className="flex flex-row flex-wrap justify-between w-12/12 align-baseline">
            {(clicked) &&
                <input id={postInfo.post_id} type="checkbox" onClick={(e) => checkHandled(e)} />
            }
            <div className="flex mr-32 ml-12 pt-2.5 justify-center items-center text-center">{postInfo.post_id}</div>
            <div className="flex mr-40 pt-2.5 justify-center items-center text-center">{postInfo.title}</div>
            <div className="flex mr-32 pt-2.5 justify-center items-center text-center">{postInfo.user_id}</div>
            <div className="flex mr-32 pt-2.5 justify-center items-center text-center">{postInfo.createdAt}</div>
            <div className="flex mr-12 pt-2.5 justify-center items-center text-center">{postInfo.like_count}</div>
            
        </div>

        </StyledList>
        ));

    return(

        <div className="flex flex-col justify-center items-center w-12/12 h-4/6 mb-96 text-nowrap">
            <MyLists/>
            <div className="flex flex-row mt-12 w-8/12 ml-40">
                <div className="text-5xl mb-16 font-bold whitespace-nowrap text-left mr-96">좋아요 누른 게시물</div>
                {clicked &&
                    <div>
                        <CancelButton onClick = {() => {Cancelfunc()}}>취소</CancelButton>
                        <DeleteButton onClick = {() => {SubmitPostInfo()}}>삭제</DeleteButton>
                    </div>
                }
                {!clicked &&
                    <ModifyButton onClick = {() => setClicked(!clicked)}>수정</ModifyButton>
                }


            </div>
            <div className="flex w-7/12 flex-col">
                <div className="flex flex-row align-middle justify-between w-12/12 mb-2">
                    <div className="mr-32 ml-8">Post ID</div>
                    <div className="mr-40">제목</div>
                    <div className="mr-32">작성자</div>
                    <div className="mr-32">작성일</div>
                    <div className="mr-8">좋아요</div>
                </div>
                <StyledList>
                        {postlist}
                        <Pgnation limit={limit} page={page} totalPosts={postInfo.length} setPage={setPage}/>
                </StyledList>
            </div>
        </div>
    );

}

export default LikePosts;