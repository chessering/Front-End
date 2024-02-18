import React from 'react'
import styled from 'styled-components'
import { ClipLoader } from 'react-spinners'

export default function Loader() {
  return (
    <LoaderWrap>
        <ClipLoader size={75}></ClipLoader>
    </LoaderWrap>
  )
}

const LoaderWrap = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: rgba(0,0,0,0.3);
`