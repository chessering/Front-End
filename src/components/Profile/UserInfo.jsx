import React from 'react'
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import styled from "styled-components"

export default function UserInfo( { userid, location} ) {
  const navigate = useNavigate();

  return (
    <ProfileBox> 
      <ProfileWrap>
        <ProfileImg></ProfileImg>
        <UserInfoWrap>
          <UserID>{userid}</UserID>
          <CountList>
            <CountWrap>
              <CountHeader>게시물</CountHeader>
              <CountBody>10,531</CountBody>
            </CountWrap>
            <Link to={`/profile/${userid}/followers`} state={{background: location}}>
              <CountWrap style={{'cursor': 'pointer'}}>
                <CountHeader>팔로워</CountHeader>
                <CountBody>1,702</CountBody>
                <Outlet/>
              </CountWrap>
            </Link>
            <Link to={`/profile/${userid}/following`} state={{background: location}}>
              <CountWrap style={{'cursor': 'pointer'}}>
                <CountHeader>팔로잉</CountHeader>
                <CountBody>609</CountBody>
                <Outlet/>
              </CountWrap>
            </Link>
          </CountList>
          <ProfileBio>신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.</ProfileBio>
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
  border: 1px solid black;
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