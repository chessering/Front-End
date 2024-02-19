import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
import MyLists from "./MyLists";

const MyImage = styled.img`
    width: 239px;
    height: 289px;
    margin-bottom: 10px;
    
`

const Container1 = styled.div`
    width: 662px;
    height: 39px;
    background: #F2F1F1;
    border-radius: 7px;
    margin-bottom: 18px;
    padding: 5px;
    padding-left : 5px;
`

const Container2 = styled.div`
width: 662px;
height: 129px;
background: #F2F1F1;
border-radius: 7px;
padding: 10px;
white-space: normal;
vertical-align : 100%;
line-height : 60px;
margin-bottom : 30px;
`

function Myinfo() {

    const location = useLocation();
    const [userInfo, setUserInfo] = useState({
        nickname : '',
        name : '',
        email : '',
        introduction : '',
        profile_img : "",
    })

    const token = localStorage.getItem('access_Token');
    console.log(token);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/mypages/profile`, {
                    headers : {
                        'authorization' : `${token}`
                    }
                });
                console.log(response);
                setUserInfo(response.data.result);

            }catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    console.log(userInfo);

    return(
        <div className="flex flex-col justify-center items-center w-12/12 h-4/6">
            <MyLists info={location.state}/>
            <div className="flex w-9/12 float-left ml-96">
                <div className="flex mb-4 justify-center flex-col mr-20 ">
                    <div className="text-5xl mb-8 font-bold whitespace-nowrap">나의 정보</div>
                    <div className="flex flex-col items-center">
                        <MyImage src={userInfo.profile_img} />
                    </div>
                    

                </div>
                <div className="flex mt-20 ml-16 justify-center flex-col">
                    <div className="mb-2 font-normal">닉네임</div>
                    <Container1>{userInfo.nickname}</Container1>
                    <div className="mb-2 font-normal">이름</div>
                    <Container1>{userInfo.name}</Container1>
                    <div className="mb-2 font-normal">Email</div>
                    <Container1>{userInfo.email}</Container1>
                    <div className="mb-2 font-normal">소개</div>
                    <Container2>{userInfo.introduction}</Container2>
                </div>
            </div>

        </div>
    );
}

export default Myinfo;