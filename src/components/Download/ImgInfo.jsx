import React, { useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { ProfileBox, ProfileWrap } from '../Profile/UserInfo'

export default function ImgInfo() {
  const [isMore, setIsMore]= useState(false);
  const textLimit = useRef(60);
  const comment = `신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의신체장애자 및 질병·노령 `;
  const commenter = useMemo(() => {
    const shortReview = comment.slice(0, textLimit.current);
    if (comment.length > textLimit.current) {
      if (isMore) { return comment; }
      return shortReview;
    }
    return comment;
  }, [isMore])

  return (
    <ImgBox>
      <ImgWrap>
      <BackgroundImg></BackgroundImg>
      <ImgInfoWrap>
        <TitleWrap>
          <Title>제목</Title>
          <DownloadBtn>저장</DownloadBtn>
        </TitleWrap>
        <DescriptionWrap>
          <Description>{commenter}</Description>
          <More onClick={() => setIsMore(!isMore)}> {(comment.length>textLimit.current) && (isMore ? '닫기' : '...더 보기')}</More>
        </DescriptionWrap>        
        <TagList>
          <Tag>태그 1</Tag>
          <Tag>태그 1</Tag>
          <Tag>태그 1</Tag>
          <Tag>태그 1</Tag>
          <Tag>태그 1</Tag>
        </TagList>
        <UploaderWrap>
          <UserWrap>
            <ProfileImg></ProfileImg>
            <UserIDWrap>
              <UserID>User ID</UserID>
              <Followers>팔로워 N명</Followers>
            </UserIDWrap>
          </UserWrap>
          <FollowBtn>팔로우</FollowBtn>
        </UploaderWrap>
        <OtherWrap>
          <OtherBtn>공유</OtherBtn>
          <OtherBtn>정보</OtherBtn>
          <OtherBtn>신고</OtherBtn>
        </OtherWrap>
      </ImgInfoWrap>
      </ImgWrap>
    </ImgBox>
  )
}

const ImgBox = styled(ProfileBox)``

const ImgWrap = styled(ProfileWrap)`
  width: 1000px;
  height: 500px;
`

const BackgroundImg = styled.img`
  display: flex;
  width: 588px;
  height: 364px;
  border: 1px solid black;
`

const ImgInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 352px;

`

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  width: 78px;
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

const DownloadBtn = styled.button`
  width: 66px;
  height: 34px;
  background: #0F62FE;
  border-radius: 36px;

  // position: absolute;
  // width: 25px;
  // height: 22px;
  // left: calc(50% - 25px/2 + 464.5px);
  // top: 181px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 158%;

  color: #FFFFFF;
`

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const Description = styled.div`
  display: flex;
  
  width: 352px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 158%;

  color: #6B6B6B;
`

const More = styled.div`
  height: 25px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 158%;
  /* or 25px */
  letter-spacing: 0.06em;

  color: #6B6B6B;
`

const TagList = styled.ul`
  display: flex;
  justify-content: 
`

const Tag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;

  width: 58px;
  height: 31px;
  background: #E9E9E9;
  border-radius: 7px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 158%;

  color: #6B6B6B;
`

export const UploaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

export const UserWrap = styled.div`
  display: flex;
`

export const UserIDWrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: #D9D9D9;
  margin-right: 10px;
`

export const UserID = styled.div`
  width: 54px;
  height: 25px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 158%;
  /* or 25px */

  color: #6B6B6B;
`

export const Followers = styled.div`
  width: 53px;
  height: 19px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 158%;
  /* identical to box height, or 19px */

  color: #9D9D9D;
`

export const FollowBtn = styled.button`
  width: 66px;
  height: 34px;

  background: #E9E9E9;
  border-radius: 36px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 158%;
  /* or 22px */

  color: #6B6B6B;
`
const OtherWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

const OtherBtn = styled.button`
  width: 40px;
  height: 29px;

  margin-right: 10px;

  box-sizing: border-box;

  background: #FFFFFF;
  border: 0.8px solid #9A9A9A;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08);
  border-radius: 7px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 158%;
  /* or 22px */

  color: #6B6B6B;


`