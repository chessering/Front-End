import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useFieldArray, useForm } from "react-hook-form"
import axios from 'axios'
import { ReactComponent as UploadIcon } from "../../assets/images/icon_Image Upload.svg"
import { useNavigate } from 'react-router-dom'
import { categories } from './categories'

export default function Upload() {
  const url = process.env.REACT_APP_API_URL;
  const token = window.localStorage.getItem('access_Token');
  
  const imageInput = useRef(null);
  const [imgURL, setImgURL] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const navigate = useNavigate();
  
  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    if(file)
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
      setError('image',{
        message: "이미지 파일을 첨부해주세요."
      },{
        shouldFocus: false
      })
    }
  }

  const readImg = async (file) => {    
    try {
      setValue('image', file);
      clearErrors('image');
      setImgURL(URL.createObjectURL(file));
    } catch (error) {
      setError('image',{
        message: "사진을 첨부해주세요."
      },{
        shouldFocus: false
      })
    }
  }

  useEffect(() => {
    setValue('image', null);
    setError('image',{
      message: "사진을 첨부해주세요."
    },{
      shouldFocus: false
    })
  }, [])

  const [inputHashTag, setInputHashTag] = useState('');

  const addHashTag = (e) => {
    const allowedCommand = ['Comma', 'Enter', 'Space', 'NumpadEnter'];
    if (!allowedCommand.includes(e.code)) return;

    if (isEmptyValue(e.target.value.trim())) {
      return setInputHashTag('')
    }

    let newHashTag = String(e.target.value.trim());
    const regExp = /[{}[\]/?.;:|)*~`!^\-_+<>@#$%&\\=('"]/g;
    if (regExp.test(newHashTag)) {
      newHashTag = newHashTag.replace(regExp, '');
    }
    if (newHashTag.includes(',')) {
      newHashTag = newHashTag.split(',').join('');
    }

    if (isEmptyValue(newHashTag)) return;
    if (!fields.some(field => field.tag === newHashTag) && fields.length < 30)
      append({tag: newHashTag});

    setInputHashTag('');
  };

  const handleKeyDown = (e) => {
    if (e.code !== 'Enter' && e.code !== 'NumpadEnter') return;
    e.preventDefault();
  
    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
    if (!regExp.test(e.target.value)) {
      setInputHashTag('');
    }
  };
  
  const changeHashTagInput = (e) => {
    setInputHashTag(e.target.value);
  };

  const isEmptyValue = (value) => {
    if (!value.length) {
      return true;
    }
    return false;
  }

  const {
    register,
    control,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({mode:"onChange"});

  const { fields, append, remove } = useFieldArray({
    name: "tag",
    control: control
  })

  const onSubmit = async (data) => {
    const tags = data.tag.map((item) => item.tag)
    console.log(data)
    const formData = new FormData();

    formData.append(
      'data',
      JSON.stringify({
        category_id: data.category_id,
        title: data.title,
        explanation: data.explanation,
        link: [...data.link],
        tag: tags,
      })
    )
    formData.append(
      'image',
      data.image
    )
    
    for (let key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }

    try{
      const res = await axios.post(`${url}/post/upload`, formData,
      {
        headers: {
          authorization: token,
          'Content-type': 'multipart/form-data',
        }
      })
      console.log(res)
      alert("업로드 성공!")
      navigate(`/main`)
    } catch (error) {
      console.error(error)
      alert("업로드에 실패했습니다.");
    }
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
              <ImageInput id='image' type='file' accept='image/*'  onChange={handleChangeImg} />
              {watch('image') ? (<Preview src={imgURL} alt='upload_img'></Preview>) : 
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
            <Errors>
              {errors.image && (<div>{errors.image.message}</div>)}
              {errors.category_id?.type === 'required' && (<div>카테고리는 필수 정보입니다.</div>)}
              {errors.title?.type === 'required' && (<div>제목은 필수 정보입니다.</div>)}
            </Errors>
          </LeftContainer>
          <RightContainer>
            <Others>
              <Label>
                카테고리
                <Select {...register('category_id', { required: true })}>
                  <option value='' disabled selected style={{display: 'none', }}>카테고리를 선택하세요</option>
                  {categories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    )
                  })}
                </Select>
                {/* <Input id='category_id' 
                  {...register('category_id',{
                    required: true
                  })}/> */}
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
                <Input id='explanation' 
                  {...register('explanation')}/>
              </Label>
              <Label>
                관련링크
                <Input id='link' 
                  {...register('link')}/>
              </Label>
              <Label>
                태그
                <TagsWrap>
                  {fields.length > 0 && (
                    <TagContainer>
                      {fields.map((item, index) => {
                        return (
                          <Tag key={item.id} onClick={() => remove(index)}>
                            #{`${item.tag}`}
                          </Tag>
                      );
                      })}
                    </TagContainer>)
                  }
                  <InputTag
                    value={inputHashTag}
                    onChange={changeHashTagInput}
                    onKeyUp={addHashTag}
                    onKeyDown={handleKeyDown}

                    placeholder='#해시태그를 등록해보세요. (최대 30개)'
                  />
                </TagsWrap>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 1200px;

  display: flex;
  flex-basis: 690px;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 40px;
`

const Title = styled.div`
  width: 104px;
  height: 121px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;

  color: #2F2F2F;
`

const UploadForm = styled.form`
  width: 1200px;
  
  display: flex;
  flex-basis: 569px;
  justify-content: space-between;
`

const LeftContainer = styled.div`
  height: 569px;

  display: flex;
  flex-direction: column;
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

  // border: ${(props) => props.isdrag ? '1px solid red' : '1px solid blue'};
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

const Errors = styled.div`
  height: 127px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  color: #FF4646;
`

const RightContainer = styled.div`
  width: 486px;

  display: flex;
  flex-direction: column;
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
  margin-top: 36px;

  background: #0F62FE;
  border-radius: 7px;

  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  color: #FFFFFF;

  &:active {
    background: #2F2F2F;
  }
`

const Others = styled.div`
  width: 486px;

  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  width: 486px;
  margin-bottom: 24px;
  
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
  margin-top: 12px;
  padding-left: 10px;

  background: #F2F1F1;
  border-radius: 7px;
`

const Option = styled.option`
  width: 486px;
  height: 49px;
  margin-top: 12px;
  padding-left: 10px;

  background: #F2F1F1;
  border-radius: 7px;
`

const Select = styled.select`
  width: 486px;
  height: 49px;
  margin-top: 12px;
  padding-left: 10px;
  padding-right: 10px;

  background: #F2F1F1;
  border-radius: 7px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: Pretendard Variable;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
`

const Submit = styled.button`
  width: 93px;
  height: 42px;
  
  align-self: flex-end;

  background: #0F62FE;
  border-radius: 7px;

  color: #FFFFFF;
  cursor: pointer;

  &:active {
    background: #2F2F2F;
  }
`

const TagsWrap = styled.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;

  background: #F2F1F1;
  border-radius: 7px;
`
const TagContainer = styled.div`
  width: 486px;
  padding-top: 5px;
  padding-left: 10px;

  display: flex;
  flex-wrap: wrap;

  background: #F2F1F1;
  border-radius: 7px;
`

const Tag = styled.div`
  margin: 3px;
  padding: 3px;

  display: flex;
  flex: 0 auto;
  align-items: center;

  background: #FFFFFF;
  border-radius: 7px;

  color: #6B6B6B;
  cursor: pointer;

  &:active {
    background: #2F2F2F;
  }
`

const InputTag = styled(Input)`
  margin-top: 0px;
`