import React from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const navigate = useNavigate();
  const gotoAuth =() =>{
    navigate('/auth');
  }
  const onSubmit =(data) =>{
      console.log(data);
      axios
        .post(`${""}/api/auth/login`,{
          login_id : data.id,
          password : data.pw,
        })
        .then((res)=>{
          console.log(res);
          navigate('/');
        })
        .catch((err)=>{
          console.log(err.response);
          switch(err.response.status){
            case "MEMBER4006":
              setError("password",{ type:'wrong password', message: '비밀번호가 틀립니다.'});
              break;
            case 403:
              if(window.confirm("등록된 정보가 없습니다. 회원가입 하시겠습니까?")){
                navigate('/auth');
              }
              break;
            case 404:
              if(window.confirm("네트워크 에러")){
                window.location.reload();
              }
            default:
              break;
          }
        })
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Draw Desktop</Title>
        <SubTitle>재방문을 환영합니다.</SubTitle>
        <div>
          <label htmlFor='userid'>아이디</label>
          <Input
            id='id'
            type='text'
            placeholder='아이디'
            {...register("id",{
              required: true,
              pattern:{
                value:
                /^[A-Za-z0-9]{4,12}$/,
                message: "아이디 형식이 올바르지 않습니다."
              }
            })}/>
            {errors.id?.type === "required" && <AlertMessage>아이디를 입력해주세요.</AlertMessage>}
            {errors.id?.type === "pattern" && <AlertMessage>{errors.id.message}</AlertMessage>}
        </div>
        <div>
          <label htmlFor='userpw'>암호</label>
          <Input
            id='password'
            type='password'
            placeholder='암호'
            {...register('password',{
              required: true,
              pattern:{
                value:
                /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
                message: "비밀번호 형식이 올바르지 않습니다.",
              }
            })}/>
            {errors.password?.type === "required" && <AlertMessage>비밀번호를 입력해주세요.</AlertMessage>}
            {errors.password?.type === "pattern" && <AlertMessage>{errors.password.message}</AlertMessage>}
            {errors.password?.type === "wrong password" && <AlertMessage>{errors.password.message}</AlertMessage>}
        </div>
        <div>
          <LoginButton type='submit'>로그인</LoginButton>
        </div>
        <Authenticate onClick={gotoAuth}>회원가입</Authenticate>
        <LoginOption>
          <div>서비스 이용약관</div>
          <div>&nbsp;/&nbsp;</div>
          <div>개인정보 보호정책</div>
        </LoginOption>
      </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  margin-bottom: 50px;
  color: #2f2f2f;
  font-family: 'Pretendard Variable';
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 24px;
  text-align: center;
`;
const SubTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  margin-bottom: 55px;
`;
const Input = styled.input`
  display: block;
  margin-top: 12px;
  margin-bottom: 17px;
  padding-left: 10px;
  width: 384px;
  height: 49px;
  border-radius: 7px;
  background-color: #f2f2f1;
  &::placeholder{
    padding-left: 3px;
  }
`;
const LoginButton = styled.button`
  width: 384px;
  height: 42px;
  border-radius: 7px;
  margin-top: 51px;
  margin-bottom: 55px;
  background-color: #0F62FE;
  color: white;
`;
const Authenticate = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  color: #21272A;
  text-align: center;
  margin-bottom: 19px;
`;
const LoginOption = styled.div`
  display: flex;
  justify-content: center;
  color: #969696;
`;
const AlertMessage = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #FF4646;
`;
export default Login