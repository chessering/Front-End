import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import UserInfo from '../../components/Profile/UserInfo'
import axios from 'axios'
import styled from 'styled-components'
import Photos from '../../components/Profile/Photos'
import Pagination from '../../components/Profile/Pagination'
import Pgnation from '../MyPage/Pgnation'

export default function UserProfile() {
  const { userid } = useParams();
  const location = useLocation();
  const { profile } = location.state

  const [page, setPage] = useState(1);
  const limit = 16;
  const offset = (page - 1) * limit;

  const slicePosts = (posts) => {
    if(posts) {
      let result = posts.slice(offset, offset + limit)
      return result;
    }
  }

  return (
    <ProfileWrap>
        <UserInfo profile={profile}></UserInfo>
        <Photos posts={slicePosts(profile.post)}></Photos>
        <Pgnation limit={limit} page={page} totalPosts={profile.post.length} setPage={setPage}></Pgnation>
    </ProfileWrap>
  )
}

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 154px;
`
