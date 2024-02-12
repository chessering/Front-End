import React from 'react';
import styled from 'styled-components'
import MyLists from "./MyLists";

const MyImage = styled.img`
    width: 239px;
    height: 239px;
    margin-bottom: 10px;
    
`

const Container1 = styled.div`
    width: 662px;
    height: 49px;
    background: #F2F1F1;
    border-radius: 7px;
    margin-bottom: 18px;
    padding: 3px;
`

const Container2 = styled.div`
    width: 662px;
    height: 139px;
    background: #F2F1F1;
    border-radius: 7px;
    padding: 3px;
`

function Myinfo() {
    return(
        <div className="flex flex-col justify-center items-center w-12/12 h-4/6">
            <MyLists/>
            <div className="flex w-9/12 float-left ml-52">
                <div className="flex mb-4 justify-center flex-col mr-20 ">
                    <div className="text-5xl mb-16 font-bold whitespace-nowrap">나의 정보</div>
                    <div className="flex flex-col items-center">
                        <MyImage/>
                        <div className="text-gray-500 text-base font-medium hover:underline decoration-current ">프로필 이미지 변경</div>
                    </div>
                    

                </div>
                <div className="flex mt-20 ml-16 justify-center flex-col">
                    <div className="mb-2 font-normal">ID</div>
                    <Container1></Container1>
                    <div className="mb-2 font-normal">이름</div>
                    <Container1></Container1>
                    <div className="mb-2 font-normal">Email</div>
                    <Container1></Container1>
                    <div className="mb-2 font-normal">소개</div>
                    <Container2></Container2>
                </div>
            </div>

        </div>
    );
}

export default Myinfo;