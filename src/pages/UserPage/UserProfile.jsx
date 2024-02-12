import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import UserInfo from '../../components/Profile/UserInfo'
import styled from 'styled-components'
import Photos from '../../components/Profile/Photos'
import Pagination from '../../components/Profile/Pagination'

export default function UserProfile() {
  // const fetchProfile = async () => {
  //   try{
  //     const endpoint = `/api/uploader/profile`;
  //     const res = await axios.get(endpoint)
  //     console.log(res);
  //   }
  // }

  const { userid } = useParams();
  const location = useLocation();

  return (
    <ProfileWrap>
        <UserInfo userid={userid} location={location}></UserInfo>
        <Photos></Photos>
        <Pagination></Pagination>
    </ProfileWrap>
  )
}

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
