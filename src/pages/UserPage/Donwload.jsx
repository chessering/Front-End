import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImgInfo from '../../components/Download/ImgInfo'
import Photos from '../../components/Profile/Photos'
import Pagination from '../../components/Profile/Pagination'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Pgnation from '../MyPage/Pgnation'
import { useRecoilState } from 'recoil'
import { loadingState } from '../../recoil/atom'

export default function Donwload() {
  const url = process.env.REACT_APP_API_URL
  const token = window.localStorage.getItem('access_Token');

  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const { postid } = useParams();
  const [wallpaper, setWallpaper] = useState();
  const [uploader, setUploader] = useState();
  const [posts, setPosts] = useState()

  const [page, setPage] = useState(1);
  const limit = 16;
  const offset = (page - 1) * limit;

  const slicePosts = (posts) => {
    if(posts) {
      let result = posts.slice(offset, offset + limit)
      return result;
    }
  }
  
  const fetchImg = async () => {
    setIsLoading(true);
    try{
      const res = await axios.get(`${url}/post/${postid}`, {
        headers: {
          authorization: token
        }
      })
      console.log("wallpaper", res.data.result);
      setWallpaper(res.data.result);

      fetchUploader(res.data.result.user_id)
      fetchMore(res.data.result.Category.category_name)
    } catch(error){
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchUploader = async (userid) => {
    try{
      const res = await axios.get(`${url}/post/profile/${userid}`, {
        headers: {
          authorization: token
        }
      })
      console.log(res);
      setUploader(res.data.result);
    } catch(error){
      console.log(error);
    }
  }

  const fetchMore = async (category_name) => {
    try {
      const res = await axios.get(`${url}/search/category?category_name=${category_name}`)
      // console.log(res);
      setPosts(res.data.result[0])
    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    fetchImg();
  }, [postid])

  return (
    <DownloadWrap>
        {wallpaper && <ImgInfo image={wallpaper} uploader={uploader} ></ImgInfo>}
        <More>더 보기</More>
        {posts && (
          <div>
            <Photos posts={slicePosts(posts)}></Photos>
            <Pgnation limit={limit} page={page} totalPosts={posts.length} setPage={setPage}></Pgnation>
          </div>
        )}
        
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