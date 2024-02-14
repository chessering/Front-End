import axios from 'axios';
import React, { useState } from 'react';
import styled from "styled-components";

const HelpDesk = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [detail, setDetail] = useState('');
  const [selected, setSelected] = useState(false);
  const handleName = (event) => {
    setName(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleReason = (event) => {
    setReason(event.target.value);
    setSelected(true);
  }
  const handleDetail = (event) =>{
    setDetail(event.target.value);
  }
  const handleSubmit =(event) =>{
    event.preventDefault();
    console.log(name,email,reason,detail);
    if (name.trim() === '' || email.trim() === '' || reason.trim() === '' || detail.trim() === '') {
      alert('내용을 입력해주세요!');
      return;
    }
    axios
      .post(`${''}/api/help`,{
        name : name,
        email : email,
        reason : reason,
        detail : detail,
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  return (
    <Container>
        <Title>어떻게 도와드릴까요?</Title>
        <form onSubmit={handleSubmit}>
            <Label>이름</Label>
                <TextArea onChange={handleName}/>
            <Label>이메일</Label>
                <TextArea onChange={handleEmail}/>
            <Label>사유</Label>
                <Select onChange={handleReason} defaultValue={'선택하십시오'} selected={selected}>
                    <option value={'선택하십시오'}disabled hidden>선택하십시오</option>
                    <option value={'1'}>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                </Select>
            <Label>세부사항</Label>
                <DetailArea placeholder='귀하가 겪은 문제를 최대한 자세히 설명해주세요.' onChange={handleDetail}/>
            <SubmitButton type='submit'>제출</SubmitButton>
        </form>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  font-family: "Pretendard Variable";
`;
const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 53px;
  color: #2f2f2f;
`;
const Label = styled.label`
  display: block;
  margin-top: 24px;
  margin-bottom: 12px;
  color: #21272A;
`;
const TextArea = styled.textarea`
  width: 384px;
  height: 49px;
  background-color: #f2f1f1;
  color: #21272A;
  border-radius: 7px;
  resize: none;
  padding-left: 7px;
  line-height: 49px;
`;
const Select = styled.select`
  width: 384px;
  height: 49px;
  background-color: #f2f1f1;
  option{
    color: #21272a;
  } 
  color: ${({ selected }) => (selected ? '#21272a' : '#a9a9a9')};
  border-radius: 7px;
  padding-left: 7px;
`;
const DetailArea = styled(TextArea)`
  height: 100px;
`;
const SubmitButton = styled.button`
  display: block;
  width: 93px;
  height: 42px;
  margin: 40px 0 100px 291px;
  border-radius: 7px;
  background-color: #0F62FE;
  color: #ffffff;
`;
export default HelpDesk