import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MyLists from "./MyLists.jsx";
import styled from 'styled-components';
import Swal from "sweetalert2";


const MyImage = styled.img`
    width: 239px;
    height: 289px;
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
    margin-bottom : 30px;
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
    margin-bottom : 30px;
`


function MyInfoModify() {

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        nickname : '',
        name : '',
        email : '',
        introduction : '',
        img : "",
    })
    const [imageSrc, setImageSrc] = useState('');

    const token = localStorage.getItem('access_Token');
    console.log(token);

    //정보 불러오기
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
                setImageSrc(response.data.result.profile_img);

            }catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const onChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.name);
        console.log(e.target.value);
        setUserInfo((userInfo) => ({
            ...userInfo,
            [name]: value
        }));
        console.log(userInfo);
    };

    //변경된 정보 제출하기
    const OnSubmit = (e) => {
        
        axios.post(`${process.env.REACT_APP_API_URL}/mypages/profile/modify`, {
            headers : {
                'authorization' : `${token}`
            },
            body : {
                data : {
                    nickname : userInfo.id,
                    name : userInfo.name,
                    email : userInfo.email,
                    introduction : userInfo.introduction,
                },
                image : imageSrc

            }
        })
        .then(response => {
            console.log(response);
            console.log(imageSrc);
        })
        .catch(error => {
            console.log(error);
        })

        Swal.fire({
            icon : "success",
            title : "Draw Desktop",
            text : "정보 수정이 완료되었습니다."
        }).then(() => {
            navigate("/myinfo");
        })

    } 

    const ChangeImage = (fileBlob) => {
        
        const reader = new FileReader();  
        reader.readAsDataURL(fileBlob);

        return new Promise((resolve) => {
  
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
      };

    return (
        <div className="flex flex-col justify-center items-center w-12/12 h-4/6 mx-auto">
            <MyLists/>
            <div className="flex w-9/12 float-left ml-52">
                <div className="flex mb-4 justify-center flex-col mr-20 ">
                    <div className="text-5xl mb-16 font-bold whitespace-nowrap">나의 정보-변경</div>
                    <div className="flex flex-col items-center">
                    <label htmlFor="profile-image">
                        {!(imageSrc) ? (
                            <MyImage src={userInfo.profile_img} />
                        ) : (
                            <MyImage src={imageSrc} />
                        ) 

                        }
                            
                            <input type="file" id="profile-image" style={{ display: "none" }} accept="image/*" onChange={(e) => {ChangeImage(e.target.files[0])}} />
                            <div className="text-gray-500 font-medium text-center hover:underline decoration-current ">프로필 이미지 변경</div>
                        </label>
                    </div>
                    

                </div>
                <div className="flex mt-20 ml-16 justify-center flex-col">
                    <div className="mb-2 font-normal">ID</div>
                    <Container1 name="nickname" defaultValue = {userInfo.nickname} onChange={onChange}></Container1>
                    <div className="mb-2 font-normal">이름</div>
                    <Container1 name="name" defaultValue = {userInfo.name} onChange={onChange}></Container1>
                    <div className="mb-2 font-normal">Email</div>
                    <Container1 name="email" defaultValue = {userInfo.email} onChange={onChange}></Container1>
                    <div className="mb-2 font-normal">소개</div>
                    <Container2 name="introduction" defaultValue = {userInfo.introduction} onChange={onChange}></Container2>
                </div>
            </div>
            <StyledButton onClick = {OnSubmit}>변경사항 저장</StyledButton>
            

        </div>

    );

}
export default MyInfoModify;