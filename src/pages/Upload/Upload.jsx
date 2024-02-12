import React from 'react'
import styled from 'styled-components'
import { ReactComponent as UploadIcon } from "../../assets/images/icon_Image Upload.svg"
export default function Upload() {
  return (
    <UploadWrap>
      <Container>
        <Title>업로드</Title>
        <UploadForm>
          <ImageUpload>
            <LeftContainer>
              <ImageLabel>
              <ImageInput type='file'></ImageInput>
              <UploadIcon></UploadIcon>
              <Drop>이미지를 끌어다 놓기</Drop>
              <Notices>
                <Notice>ㆍ 권리를 소유한 이미지만 업로드</Notice>
                <Notice>ㆍ 다른 사람들의 지적 재산권 존중</Notice>
                <Notice>ㆍ 이미지는 선명한 원본임</Notice>
              </Notices>
              </ImageLabel>
            </LeftContainer>
            <UploadBtn onClick={(e) => {
              e.preventDefault();
            }}>찾아보기</UploadBtn>
          </ImageUpload>
          <RightContainer>
            <Others>
              <Label>
                카테고리
                <Input/>
              </Label>
              <Label>
                제목
                <Input/>
              </Label>
              <Label>
                설명
                <Input/>
              </Label>
              <Label>
                관련링크
                <Input/>
              </Label>
              <Label>
                태그 n개
                <Input/>
              </Label>
            </Others>
            <Submit type='submit' onClick={(e) => {
              e.preventDefault();
            }}></Submit>
          </RightContainer>
        </UploadForm>
      </Container>
    </UploadWrap>
  )
}

const UploadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 1200px;
  height: 690px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 40px;
`

const Title = styled.div`
  width: 104px;
  height: 44px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;

  color: #2F2F2F;
`

const UploadForm = styled.form`
  width: 1200px;
  height: 569px;
  display: flex;
  justify-content: space-between;
`

const ImageUpload = styled.div`
  height: 442px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const LeftContainer = styled.label`
  width: 588px;
  height: 364px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #D9D9D9;
`

const RightContainer = styled.div`
  width: 486px;
  height: 569px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ImageLabel = styled.div`
  height: 161px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Drop = styled.div`
  width: 215px
  height: 29px

  font-family: Pretendard Variable;
  font-size: 26px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;

  color: #6B6B6B;

`

const Notices = styled.ul`
  width: 400px;

  display: flex;
  justify-content: space-between;
`

const Notice = styled.li`
  font-family: Pretendard Variable;
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;

  color: #6B6B6B;

`

const ImageInput = styled.input`
  display: none;
`

const UploadBtn = styled.button`
  width: 141px;
  height: 42px;

  background: #0F62FE;
  border-radius: 7px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  color: #FFFFFF;
`

const Others = styled.div`
  width: 486px;
  height: 491px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Label = styled.label`
  width: 486px;
  height: 79px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  font-family: Pretendard Variable;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: center;

  color: #21272A;
`

const Input = styled.input`
  width: 486px;
  height: 49px;

  background: #F2F1F1;
  border-radius: 7px;
`

const Submit = styled.input`
  width: 93px;
  height: 42px;
  
  align-self: flex-end;

  background: #0F62FE;
  border-radius: 7px;

  color: #FFFFFF;

`