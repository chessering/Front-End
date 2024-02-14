import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { ReactComponent as UploadIcon } from "../../assets/images/icon_Image Upload.svg"

export default function Upload() {
  const imageInput = useRef(null);
  const [imgURL, setImgURL] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  
  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    readImg(file)
  }

  const handleDragStart = () => {
    setIsDrag(true)
  }
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDrag(true)
  }
  const handleDragEnd = () => {
    setIsDrag(false)
  }
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if(file.type.startsWith('image'))
      readImg(file)
    else{
      setError('img_url',{
        message: "이미지 파일을 첨부해주세요."
      },{
        shouldFocus: true
      })
    }
  }

  const readImg = async (file) => {    
    try {
      setValue('img_url', URL.createObjectURL(file));
      clearErrors('img_url');
    } catch (error) {
      setError('img_url',{
        message: "사진을 첨부해주세요."
      },{
        shouldFocus: true
      })
    }
  }

  useEffect(() => {
    setValue('img_url', null);
    setError('img_url',{
      message: "사진을 첨부해주세요."
    },{
      shouldFocus: true
    })
  }, [])


  const {
    register,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({mode:"onChange"});

  const onSubmit = (data) => {
    console.log(data);
    alert('제출됨')
    // axios
    //   .post(`${""}/api/upload`, {
    //     img_url: data.img_url,
    //     category: data.category,
    //     title: data.title,
    //     explanation: data.description,
    //     link: data.link,
    //     tag: data.tag
    //   })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }

  return (
    <UploadWrap>
      <Container>
        <Title>업로드</Title>
        <UploadForm onSubmit={handleSubmit(onSubmit)}>
          <LeftContainer>
            <ImageLabel ref={imageInput} isdrag={isDrag}
              onDragEnter={handleDragStart}
              onDragOver={handleDragOver}
              onDragLeave={handleDragEnd}
              onDrop={handleDrop}>
              <ImageInput id='img_url' type='file' accept='image/*'  onChange={handleChangeImg}/>
              {watch('img_url') ? (<Preview src={watch('img_url')} alt='upload'></Preview>) : 
              (<GuideWrap>
                <GuideContainer>
                  <UploadIcon></UploadIcon>
                  <Drop>이미지를 끌어다 놓기</Drop>
                  <Notices>
                    <Notice>ㆍ 권리를 소유한 이미지만 업로드</Notice>
                    <Notice>ㆍ 다른 사람들의 지적 재산권 존중</Notice>
                    <Notice>ㆍ 이미지는 선명한 원본임</Notice>
                  </Notices>
                </GuideContainer>
              </GuideWrap>) 
              }
            </ImageLabel>
            <Browse onClick={(e) => {
              e.preventDefault();
              imageInput.current.click();
            }}>찾아보기</Browse>
          </LeftContainer>
          <RightContainer>
            <Others>
              <Label>
                카테고리
                <Input id='category' 
                  {...register('category',{
                    required: true,
                  })}/>
              </Label>
              <Label>
                제목
                <Input id='title' 
                  {...register('title', {
                    required: true,
                  })}/>
              </Label>
              <Label>
                설명
                <Input id='description' 
                  {...register('description', {
                    required: true,
                  })}/>
              </Label>
              <Label>
                관련링크
                <Input id='link' 
                  {...register('link', {
                    required: true,
                  })}/>
              </Label>
              <Label>
                태그 n개
                <Input id='tags' 
                  {...register('tag', {
                    required: true,
                  })
                }/>
              </Label>
            </Others>
            <Submit type='submit'>제출</Submit>
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

const LeftContainer = styled.div`
  height: 442px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ImageLabel = styled.label`
  width: 588px;
  height: 364px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: ${(props) => props.isdrag ? '1px solid red' : '1px solid blue'};
  cursor: pointer;
`

const GuideWrap = styled.div`
  width: 588px;
  height: 364px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #D9D9D9;
`

const GuideContainer = styled.div`
  height: 161px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Preview = styled.img`
  width: 588px;
  height: 364px;
`

const RightContainer = styled.div`
  width: 486px;
  height: 569px;

  display: flex;
  flex-direction: column;
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

const Browse = styled.button`
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
  padding-left: 10px;

  background: #F2F1F1;
  border-radius: 7px;
`

const Submit = styled.button`
  width: 93px;
  height: 42px;
  
  align-self: flex-end;

  background: #0F62FE;
  border-radius: 7px;

  color: #FFFFFF;
  cursor: pointer;

`