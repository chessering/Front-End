import React from 'react'
import { Link, useLocation, useNavigate, Outlet, useParams } from 'react-router-dom';
import styled from "styled-components"

export default function UserInfo( { userid, profile} ) {
  return (
    <ProfileBox> 
      <ProfileWrap>
        <ProfileImg src={profile.profile_img}></ProfileImg>
        <UserInfoWrap>
          <UserID>{profile.name}</UserID>
          <CountList>
            <CountWrap>
              <CountHeader>게시물</CountHeader>
              <CountBody>{profile.post.length.toLocaleString("ko-KR")}</CountBody>
            </CountWrap>
          </CountList>
          <ProfileBio>{profile.introduction}</ProfileBio>
        </UserInfoWrap>
      </ProfileWrap>
    </ProfileBox>
  )
}

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: #D4D4D4 1px solid;
`
export const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 120px;

  width: 800px;
`

const ProfileImg = styled.img`
  display: flex;
  width: 281px;
  height: 281px;
`

const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const UserID = styled.div`
  width: 149px;
  height: 35px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */
  display: flex;
  align-items: center;

  color: #2F2F2F;
`

const CountList = styled.ul`
  display: flex;
`

const CountWrap = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  width: 61px;
  height: 60px;
`

const CountHeader = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 158%;

  color: #9D9D9D;
`
const CountBody = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 158%;

  color: #6B6B6B;
`

const ProfileBio = styled.div`
  width: 458px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 158%;

  color: #6B6B6B;
`