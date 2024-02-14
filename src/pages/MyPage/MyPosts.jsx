import React, { useState } from 'react';
import MyLists from "./MyLists";
import Pgnation from "./Pgnation";
import styled from 'styled-components';

const StyledButton = styled.button`
    background : blue;
    color : white;
    border : none;
    border-radius : 7px;
    width : 93px;
    height : 42px;
    margin-left : 350px;
`

const StyledList = styled.div`
    background : ${props => props.even ? '#F2F1F1' : 'white'};
    color : black;
    vertical-align: middle;
    gap : 0 20px;
    height: 39px;
    width : 100%;
    text-wrap : nowrap;
    margin-bottom : 0px;
`


function MyPosts() {
    const dummyposts=[
        {postId : 1, title : 2, author : 33, date : 11, like : 44},
        {postId : 1, title : 3, author : 33, date : 11, like : 44},
        {postId : 1, title : 4, author : 33, date : 11, like : 44},
        {postId : 1, title : 5, author : 33, date : 11, like : 44},
        {postId : 1, title : 6, author : 33, date : 11, like : 44},
        {postId : 1, title : 7, author : 33, date : 11, like : 44},
        {postId : 1, title : 2, author : 33, date : 11, like : 44},
        {postId : 1, title : 3, author : 33, date : 11, like : 44},
        {postId : 1, title : 4, author : 33, date : 11, like : 44},
        {postId : 1, title : 5, author : 33, date : 11, like : 44},
        {postId : 1, title : 6, author : 33, date : 11, like : 44},
        {postId : 1, title : 7, author : 33, date : 11, like : 44},
        
    ]

    //추후 api 받아온 정보로 아래 코드로 교체할 예정
    // const [postInfo, setPostInfo] = useState([]);
  
	// async function handlePostInfo(){
    //     const result = await axios({
    //         url : `${""}/mypages/posting`,
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     setPostInfo(result.data)
    // }

    // useEffect(() =>{
    //     handlePostInfo()
    // },[])

    //이후 postinfo를 api 형식에 맞게 바꾸고 dummypost를 교체

    const [page, setPage] = useState(1);
    const limit = 10; // 한 페이지의 post 최대갯수
    const offset = (page - 1) * limit;

    const postsData = (dummyposts) => {
        if(dummyposts){
            let result = dummyposts.slice(offset, offset + limit);
            return result;
        }
    }

    const postlist = postsData(dummyposts).map((post, index) => (
        <StyledList key={index} even = {index % 2 === 0}>
            <div className="flex flex-row flex-wrap justify-between w-12/12 align-baseline">
                <div className="flex mr-32 ml-12 pt-2.5 justify-center items-center text-center">{post.postId}</div>
                <div className="flex mr-40 pt-2.5 justify-center items-center text-center">{post.title}</div>
                <div className="flex mr-32 pt-2.5 justify-center items-center text-center">{post.author}</div>
                <div className="flex mr-32 pt-2.5 justify-center items-center text-center">{post.date}</div>
                <div className="flex mr-12 pt-2.5 justify-center items-center text-center">{post.like}</div>
            </div>
        </StyledList>
    ));



    return(

        <div className="flex flex-col justify-center items-center w-12/12 h-4/6 mb-96 text-nowrap">
            <MyLists/>
            <div className="flex flex-row mt-12 w-8/12 ml-40">
                <div className="text-5xl mb-16 font-bold whitespace-nowrap text-left mr-96">마이 게시물</div>
                <StyledButton>수정</StyledButton>
            </div>
            <div className="flex w-7/12 flex-col">
                <div className="flex flex-row align-middle justify-between w-12/12 mb-2">
                    <div className="mr-32 ml-8">Post ID</div>
                    <div className="mr-40">제목</div>
                    <div className="mr-32">작성자</div>
                    <div className="mr-32">작성일</div>
                    <div className="mr-8">좋아요</div>
                </div>
                <div className="mb-12">
                    <StyledList>
                            {postlist}
                            <Pgnation limit={limit} page={page} totalPosts={dummyposts.length} setPage={setPage}/>
                    </StyledList>
                </div>

            </div>
        </div>
    );
}

export default MyPosts;