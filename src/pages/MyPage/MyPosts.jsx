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
    margin-left : 60px;
`

const StyledList = styled.div`
    background: ${props => props.isEven ? 'white' : 'gray'};
    color : black;
`

function MyPosts() {
    const posts=[
        [11, 22, 33, 44],
        [22, 33, 44, 55],
    ]
    // const postlists = posts.map

    return(

        <div className="flex flex-col justify-center items-center w-12/12 h-4/6">
            <MyLists/>
            <div className="flex flex-row mt-12 w-6/12">
                <div className="text-5xl mb-16 font-bold whitespace-nowrap text-left mr-96">마이 게시물</div>
                <StyledButton>수정</StyledButton>
            </div>
            <div className="flex w-6/12">
                <div className="flex flex-row align-middle justify-between w-12/12">
                    <div className="mr-24">Post ID</div>
                    <div className="mr-24">제목</div>
                    <div className="mr-24">작성자</div>
                    <div className="mr-24">작성일</div>
                    <div className="mr-24">좋아요</div>
                </div>
                <div>
                    {posts.map((post, index) => {
                        <StyledList key={post} isEven={(index+1) % 2 === 0 }>{post}</StyledList>
                    })}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;