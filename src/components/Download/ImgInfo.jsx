import React, { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { ProfileBox, ProfileWrap } from '../Profile/UserInfo'
import { useNavigate, useParams } from 'react-router-dom';

export default function ImgInfo( { image, uploader }) {
  const url = process.env.REACT_APP_API_URL
  const token = window.localStorage.getItem('access_Token');

  const [isMore, setIsMore]= useState(false);
  const [isLike, setIsLike] = useState(false);
  const textLimit = useRef(60);
  const navigate = useNavigate();
  
  // 좋아요 여부 확인하기
  const checkLike = async () => {
    try {
      const res1 = await axios.post(`${url}/like/${image.post_id}`, null, {
        headers: {
          authorization: token
        },
      });
      // console.log(res1.data);
      if(!res1.data.isSuccess) throw new Error('통신오류')

      const res2 = await axios.delete(`${url}/like/${image.post_id}`, {
        headers: {
          authorization: token
        },
      });
      // console.log(res2.data);
      setIsLike(false)
    } catch (error) {
      setIsLike(true)
    }
  };

  //좋아요 누르기 API
  const postLike = async () => {
    console.log('Like')
    try {
      const res = await axios.post(`${url}/like/${image.post_id}`, null, {
        headers: {
          authorization: token
        },
      });
      // console.log(res.data);
      setIsLike(!isLike)
      if(!res.data.isSuccess) throw new Error('통신오류')
  } catch (error) {
    console.error(error);
  }
};

//좋아요 취소 API
  const postUnlike = async () => {
    console.log('Unlike')
    try {
      const res = await axios.delete(`${url}/like/${image.post_id}`, {
        headers: {
          authorization: token
        },
      });
      // console.log(res.data);
      if(!res.data.isSuccess) throw new Error('통신오류')
      setIsLike(!isLike)
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleClickLike = async (e) => {
    e.preventDefault();
    if (isLike) 
      postUnlike()
    else
      postLike()
  }
  
  //다운로드 버튼
  const handleDownload = () => {
    console.log(image.img_url)
    axios.get(image.img_url, { responseType: "blob" })
      .then((res) => {
        console.log(res)
        const extension = res.data.type.substring("image/".length);
        const url = URL.createObjectURL(new Blob([res.data]));
        const a = document.createElement("a");
        a.href = url;
        a.style.display = "none";
        a.download = `${image.title}.${extension}`;

        document.body.appendChild(a);
        a.click();
        a.remove();

        URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  // API 연결 전 더미데이터
  const followers = 'N'
  
  const commenter = useMemo(() => {
    if(image.explanation) {
      const shortReview = image.explanation.slice(0, textLimit.current);
      if (image.explanation.length > textLimit.current) {
        if (isMore) { return image.explanation; }
        return shortReview;
      }
      return image.explanation;
    }
  }, [isMore, image.explanation])
  
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(`/profile/${image.user_id}`, {
      state: {
        profile: uploader
      }
    });
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    setIsLike(false);
    checkLike();
  }, [image])

  return (
    <ImgBox>
      <ImgWrap>
      <Wallpaper src={image.img_url}></Wallpaper>
      <ImgInfoWrap>
        <TitleWrap>
          <Title>{image.title}</Title>
          <Download onClick={handleDownload}>저장</Download>
        </TitleWrap>
        <DescriptionWrap>
          <Description>{commenter}</Description>
          {image.explanation && <More onClick={() => setIsMore(!isMore)}> {(image.explanation.length>textLimit.current) && (isMore ? '닫기' : '...더 보기')}</More>}
        </DescriptionWrap>        
        <TagList>
          {image.Tags.map((tag, index) => {
            return <Tag key={index}>{tag.tagging}</Tag>
          })}
        </TagList>
        <UploaderWrap>
        {uploader && 
          <UserWrap>
            <ProfileImg src={uploader.profile_img} onClick={handleNavigate}></ProfileImg>
            <UserIDWrap>
              <UserID onClick={handleNavigate}>{uploader.name}</UserID>
              <Followers>팔로워 {followers}명</Followers>
            </UserIDWrap>
          </UserWrap>
        }
        </UploaderWrap>
        <OtherWrap>
          {isLike ? <Like onClick={handleClickLike}/> : <Unlike onClick={handleClickLike}/>}          
          <OtherContainer>
            <OtherBtn>공유</OtherBtn>
            <OtherBtn>정보</OtherBtn>
            <OtherBtn>신고</OtherBtn>
          </OtherContainer>
        </OtherWrap>
      </ImgInfoWrap>
      </ImgWrap>
    </ImgBox>
  )
}

const ImgBox = styled(ProfileBox)`
  
`

const ImgWrap = styled(ProfileWrap)`
  width: auto;
`

const Wallpaper = styled.img`
  display: flex;

  max-width: 588px;
  max-height: 364px;
  margin-right: 64px;
`

const ImgInfoWrap = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;
`

const Title = styled.div`
  height: 35px;
  margin-right: 24px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  
  display: flex;
  align-items: center;

  color: #2F2F2F;
`

const Download = styled.button`
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

  &:active {
    background: #2F2F2F;
  }
`

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
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
  
  margin-bottom: 24px;
`

const Tag = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;

  height: 31px;
  padding-left: 10px;
  padding-right: 10px;
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
  
  margin-bottom: 24px;
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

  cursor: pointer;
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
  cursor: pointer;
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

export const Follow = styled.button`
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

  &:active {
  background: #2F2F2F;

  color: #FFFFFF;
  }
`

const Like = styled(HeartFilled)`
  color: red;
  font-size: 30px;

  transition: transform 300ms ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`

const Unlike = styled(HeartOutlined)`
  font-size: 30px;

  transition: transform 300ms ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    color: red;
  }
`

const OtherWrap = styled.div`
  display: flex;
  justify-content: space-between;
`

const OtherContainer = styled.div`
  display: flex;
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