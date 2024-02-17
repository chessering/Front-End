import React from 'react'
import styled from 'styled-components'
import ImgInfo from '../../components/Download/ImgInfo'
import Photos from '../../components/Profile/Photos'
import Pagination from '../../components/Profile/Pagination'
import { useParams } from 'react-router-dom'

export default function Donwload() {
  
  const { postid } = useParams();

  return (
    <DownloadWrap>
        <ImgInfo postid={postid}></ImgInfo>
        <More>더 보기</More>
        <Photos></Photos>
        <Pagination></Pagination>
    </DownloadWrap>
  )
}

const DownloadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 154px;
`

const More = styled.div`
  width: 86px;
  height: 33px;

  margin-top: 15px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 110%;
  /* identical to box height, or 33px */
  display: flex;
  align-items: center;

  color: #2F2F2F;
`