import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as RegistrationCompleted } from "../assets/images/Illust_Registration Completed.svg"

const CompleteAuth = () => {
  const navigate = useNavigate();
  const gotoLogin =() =>{
    navigate('/login');
  }
  return (
    <Container>
        <RegistrationCompleted/>
        <Text1>Draw Desktop 회원가입을 완료하였습니다.</Text1>
        <Text2>회원님은 Draw Desktop에 성공적으로 회원가입 되셨습니다.</Text2>
        <Button onClick={gotoLogin}>로그인 페이지 이동</Button>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 238px;
    color: #2f2f2f;
`;
const Text1 = styled.div`
    font-weight: 700;
    font-size: 42px;
    margin-top: 79px;
    margin-bottom: 32px;
`;
const Text2 = styled.div`
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 79px;
`;
const Button = styled.button`
    width: 180px;
    height: 42px;
    border-radius: 7px;
    background-color: #0F62FE;
    color: white;
    font-size: 14px;
`;
export default CompleteAuth