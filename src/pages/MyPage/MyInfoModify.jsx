import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MyLists from "./MyLists.jsx";
import styled from 'styled-components';
import Swal from "sweetalert2";


const MyImage = styled.div`
    width: 239px;
    height: 239px;
    margin-bottom: 10px;
    border: 1px solid;
    border-color: #6B6B6B;
    border-radius: 3px;
    
`

const Container1 = styled.input`
    width: 662px;
    height: 49px;
    background: #F2F1F1;
    border-radius: 7px;
    margin-bottom: 18px;
    padding: 10px;
    white-space : normal;
    vertical-align : top;
`

const Container2 = styled.input`
    width: 662px;
    height: 129px;
    background: #F2F1F1;
    border-radius: 7px;
    padding: 10px;
    white-space: normal;
    vertical-align : 100%;
    line-height : 60px;
`
const StyledButton = styled.button`
    background : blue;
    color : white;
    width : 153px;
    height : 49px;
    margin-top : 15px;
    justify-content : center;
    border : none;
    border-radius : 7px;
    font-weight : 500;
    line-height : 18px;
    font-size : 16px;
`


function MyInfoModify() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        id : "",
        name : "",
        email : "",
        Intro : "",
    });

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        Swal.fire({
            icon : "success",
            title : "Draw Desktop",
            text : "정보 수정이 완료되었습니다."
        }).then(() => {
            navigate("/myinfo");
        })
    } 

    return (
        <div className="flex flex-col justify-center items-center w-12/12 h-4/6">
            <MyLists/>
            <div className="flex w-9/12 float-left ml-52">
                <div className="flex mb-4 justify-center flex-col mr-20 ">
                    <div className="text-5xl mb-16 font-bold whitespace-nowrap">나의 정보-변경</div>
                    <div className="flex flex-col items-center">
                        <MyImage/>
                        <div className="text-gray-500 text-base font-medium hover:underline decoration-current ">프로필 이미지 변경</div>
                    </div>
                    

                </div>
                <div className="flex mt-20 ml-16 justify-center flex-col">
                    <div className="mb-2 font-normal">ID</div>
                    <Container1 onChange={onChange}></Container1>
                    <div className="mb-2 font-normal">이름</div>
                    <Container1 onChange={onChange}></Container1>
                    <div className="mb-2 font-normal">Email</div>
                    <Container1 onChange={onChange}></Container1>
                    <div className="mb-2 font-normal">소개</div>
                    <Container2 onChange={onChange}></Container2>
                </div>
            </div>
            <StyledButton onClick = {onSubmit}>변경사항 저장</StyledButton>
            

        </div>

    );

}
export default MyInfoModify;