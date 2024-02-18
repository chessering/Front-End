import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function Photos({ posts, click }) {
  const navigate = useNavigate();

  return (
    <PhotoContainer>
      {posts.map((post) => {
        return (
          <Photo
            key={post.post_id}
            src={post.img_url}
            onClick={(e) => {
                e.preventDefault();
                navigate(`/download/${post.post_id}`);
                window.scrollTo(0, 0);
              }
            }
          ></Photo>
        );
      })}
    </PhotoContainer>
  )
}

const PhotoContainer = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  width: 1224px;
  align-content: space-between;
`

const Photo = styled.img`
  width: 282px;
  height: 192px;
  margin-bottom: 23px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 0.5rem;

  cursor:pointer;
`
