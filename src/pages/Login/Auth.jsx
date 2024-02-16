import React, { useState } from 'react';
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        watch,
        setError,
      } = useForm({mode:"onChange"});

    const navigate = useNavigate();

    const [nickNameCheck, setNickNameCheck] = useState(false);

    const checknickname = async(e) =>{
      e.preventDefault();
      console.log(watch('nickname'));
      if(watch('nickname')===""){
        setError('nickname',{message:"닉네임은 필수 입력입니다."});
        return;
      }
      try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/nick_name`,{
          params:{
            nickname : watch('nickname')
          }
        });
        console.log(res);
        alert("사용 가능한 닉네임입니다.");
        setNickNameCheck(true);
      }
      catch(err){
        setNickNameCheck(false);
        console.log(err);
      }
    }
    const onSubmit =(data) =>{
        console.log(data);
        if(nickNameCheck === false){
          alert("닉네임 중복 체크를 해주세요");
          return;
      }
        axios
          .post(`${process.env.REACT_APP_API_URL}/auth/join`,{
            login_id : data.id,
            password : data.pw,
            nickname : data.nickname,
            name : data.name,
            email : data.email,
          })
          .then((res)=>{
            console.log(res);
            navigate('/authcomplete');
          })
          .catch((err)=>{
            console.log(err);
            switch(err.response.status){
              case 'MEMBER4003':
                if(window.confirm("이미 존재하는 아이디입니다. 아이디를 다시 입력해주세요.")){
                  window.location.reload();
                }
                break;
              // case 404:
              //   if(window.confirm("네트워크 에러")){
              //     window.location.reload();
              //   }
              default:
                break;
            }
          })
    }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Draw Desktop</Title>
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
                message: "영어 대소문자와 숫자를 혼합해 4-12글자로 구성해주세요."
              }
            })}/>
            {errors.id?.type === "required" && <AlertMessage>아이디는 필수 입력입니다.</AlertMessage>}
            {errors.id?.type === "pattern" && <AlertMessage>{errors.id.message}</AlertMessage>}
        </div>
        <div>
          <label htmlFor='userpw'>비밀번호</label>
          <Input
            id='password'
            type='password'
            placeholder='비밀번호'
            {...register('password',{
              required: true,
              pattern:{
                value:
                /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,}$/,
                message: "최소 1개의 영문자, 숫자, 특수문자(!@#$%^&*_-)로 구성해주세요.",
              }
            })}/>
            {errors.password?.type === "required" && <AlertMessage>비밀번호는 필수 입력입니다.</AlertMessage>}
            {errors.password?.type === "pattern" && <AlertMessage>{errors.password.message}</AlertMessage>}
        </div>
        <div>
          <label htmlFor='userpwck'>비밀번호 재확인</label>
          <Input
            id='passwordCheck'
            type='password'
            placeholder='비밀번호'
            {...register('passwordCheck',{
              required:"비밀번호 재확인이 필요합니다.",
              validate:{
                check : val=>{
                    if(getValues("password") !== val){
                        return "비밀번호가 다릅니다."
                    }
                }
              }
            })}/>
            {errors.passwordCheck && <AlertMessage>{errors.passwordCheck.message}</AlertMessage>}
        </div>
        <div>
          <label htmlFor='usernicknme'>닉네임</label>
          <DoubleCheck>
            <Input
              id='nickname'
              type='text'
              placeholder='닉네임'
              {...register("nickname",{
                required: true,
                minLength : { value: 2, message: '닉네임은 1자 이상이어야 합니다.' },
              })}/>
              {errors.nickname?.type === "required" && <AlertMessage>닉네임은 필수 입력입니다.</AlertMessage>}
              {errors.nickname && <AlertMessage>{errors.nickname.message}</AlertMessage>}
            <button onClick={checknickname}>중복 확인</button>
          </DoubleCheck>
        </div>
        <div>
          <label htmlFor='username'>이름</label>
          <Input
            id='name'
            type='text'
            placeholder='이름'
            {...register("name",{
              required: true,
              minLength : 2,
            })}/>
            {errors.name?.type === "required" && <AlertMessage>이름은 필수 입력입니다.</AlertMessage>}
            {errors.name?.type === "minLength" && <AlertMessage>이름이 너무 짧습니다.</AlertMessage>}
        </div>
        <div>
          <label htmlFor='useremail'>이메일</label>
          <Input
            id='email'
            type='text'
            placeholder='drawdesktop@email.com'
            {...register("email",{
              required: true,
              pattern: {
                value: /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]{2,3})$/,
                message: "대소문자 구분하여 이메일 형식에 맞게 입력해주세요",
            },
            })}/>
            {errors.email?.type === "required" && <AlertMessage>이메일은 필수 입력입니다.</AlertMessage>}
            {errors.email?.type === "pattern" && <AlertMessage>{errors.email.message}</AlertMessage>}
        </div>
        <div>
          <SubmitButton type='submit'>가입</SubmitButton>
        </div>
        </form>
    </Container>
  )
}
const DoubleCheck = styled.div`
  position: relative;
  button{
    position: absolute;
    top: 8px;
    right: 10px;
    background-color: #484848;
    color: #d8d8d8;
    font-size: 16px;
    border-radius: 7px;
    padding: 5px;
    &:hover{
      background-color: #0F62FE;
    }
    &:focus{
      background-color: #838383;
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
  color: #2f2f2f;
  font-family: 'Pretendard Variable';
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 24px;
  text-align: center;
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
const SubmitButton = styled.button`
  width: 384px;
  height: 42px;
  border-radius: 7px;
  margin-top: 51px;
  margin-bottom: 55px;
  background-color: #0F62FE;
  &:focus{
    background-color: #2f2f2f;
  }
  color: white;
`;
const AlertMessage = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  color: #FF4646;
`;
export default Auth