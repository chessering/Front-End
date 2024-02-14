import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { ReactComponent as Close } from "../../assets/images/icon_Close.svg"
import { ReactComponent as Search } from "../../assets/images/icon_Search.svg"
import { UploaderWrap, UserWrap, UserIDWrap, ProfileImg, UserID, Followers, Like } from '../Download/ImgInfo';

export default function Modal({ title }) {
  const [searchingId, setSearchingId] = useState('')
  const { userid } = useParams();
  const navigate = useNavigate();

  const ids = () => {
    const list = [];
    for (let i=0; i<10; i++){
      list.push(
          <ResultWrap>
            <UserWrap>
              <ProfileImg></ProfileImg>
              <UserIDWrap>
                <UserID>User ID</UserID>
                <Name>이름</Name>
              </UserIDWrap>
            </UserWrap>
            <Like>삭제</Like>
          </ResultWrap>
        )
    }
    return list;
  }

  console.log(searchingId);
  console.log(userid)
  const closeModal = (e) => {
    e.preventDefault();
    navigate(`/profile/${userid}`)
  }

  return (
    <ModalWrap onClick={closeModal}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <CloseWrap onClick={closeModal}><Close/></CloseWrap>
        <Title>{title}</Title>
        <SearchBar>
          <SearchWrap><Search/></SearchWrap>
          <SearchInput placeholder='검색' onChange={(e) => {
            setSearchingId(e.target.value);
          }}></SearchInput>
        </SearchBar>
        <ResultList>
          {ids()}
        </ResultList>
      </ModalBox>
    </ModalWrap>
  )
}

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.65);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBox = styled.div`
  position: relative;

  width: 557px;
  height: 535px;

  background: #FFFFFF;
  border-radius: 16px;

  overflow: hidden;
`

const CloseWrap = styled.div`
  width: 18px;
  height: 18px;

  position: absolute;
  left: 37px;
  top: 36px;

  display: flex;
  
  cursor: pointer;
`

const Title = styled.div`
  width: 78px;
  height: 33px;

  position: absolute;
  left: 240px;
  top: 31px;

  font-family: Pretendard Variable;
  font-size: 30px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
`

const SearchBar = styled.div`
  position: absolute;
  width: 522px;
  height: 43px;
  left: 18px;
  top: 82px;

  background: #ECECEC;
  border-radius: 36px;

`

const SearchWrap = styled.div`
  position: absolute;
  width: 18.63px;
  height: 18px;
  left: 22.88px;
  top: 13px;
`

const SearchInput = styled.input`
  position: absolute;
  width: 440px;
  height: 18px;
  left: 50.15px;
  top: 14px;
  background: none;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;

  color: #A5A5A5;

  outline: none;
`

const ResultList = styled.div`
  display: flex;
  flex-direction: column;

  width: 540px;
  height: 379px;
  margin-top: 30px;

  position: absolute;
  left: 18px;
  top: 126px;

  overflow: scroll;
`

const ResultWrap = styled(UploaderWrap)`
  padding-left: 10px;
  padding-right: 44px;

  margin-bottom: 20px;
`
const Name = styled(Followers)`
`