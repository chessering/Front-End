import React from 'react'
import styled from 'styled-components'

export default function Photos() {
  const photos = () => {
    const list = [];
    for (let i=0; i<16; i++) {
      list.push(<Photo key={i}></Photo>);
    }
    return list;
  };
  return (
    <PhotoContainer>
      {photos()}
    </PhotoContainer>
  )
}

const PhotoContainer = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  width: 1200px;
  justify-content: space-between;
  align-content: space-between;
`

const Photo = styled.img`
  width: 282px;
  height: 192px;
  margin-bottom: 23px;
`
