import React from 'react';
import MyLists from "./MyLists";
import styled from 'styled-components';

const StyledButton = styled.button`
    background : blue;
    color : white;
    border : none;
    border-radius : 7px;
    width : 93px;
    height : 42px;
    margin-left : 160px;
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


function MyPosts() {
    const dummyposts=[
        {postId : 1, title : 2, author : 33, date : 11, like : 44},
        {postId : 1, title : 3, author : 33, date : 11, like : 44},
        {postId : 1, title : 4, author : 33, date : 11, like : 44},
        {postId : 1, title : 5, author : 33, date : 11, like : 44},
        {postId : 1, title : 6, author : 33, date : 11, like : 44},
        {postId : 1, title : 7, author : 33, date : 11, like : 44},
    ]
    //추후 api 받아온 정보로 교체할 예정

    const postlist = dummyposts.map((post, index) => (<StyledList key={index} even = {index % 2 === 0}>
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
            <div className="flex flex-row mt-12 w-8/12 ml-28">
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
                <StyledList>
                        {postlist}
                </StyledList>
            </div>
        </div>
    );
}

export default MyPosts;