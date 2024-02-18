import React from 'react';
import styled from 'styled-components';
import mockupImg from "../assets/images/desktop_mockup.png";

const StyledBox = styled.div`
    box-shadow : 5px 5px 5px 5px #dcdcde;
    background : #f0f0f1;
    border-radius : 20px;
    width : 380px;
    height : 284px;
    border : none;
    outline : none;
    align-items : center;
    text-align : center;
`
const Container = styled.div`
    width : 100%;
    height : 970px;
    background-color : white !important;
`
const SearchBox = styled.div`
    display : flex;
    flex-direction : row;
    margin : 0 auto;
    background : white;
    border-radius : 20px;
    width : 50%;
    height : 80px;
    padding : 10px;
    align-items : middle;
    position : absolute;
    top : 805px;
`
const Border = styled.div`
    border : 2px solid #4f94d4;
    width : 55px;
    position : relative;
    top : 110px;
    left : 15px;
`
const Grid = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
    grid-template-rows : 1fr 1fr;
    grid-column-gap : 25px;
    grid-gap : 100px 120px;
    position : relative;
    top : 100px;
    right : 610px;
`

const FooTer = styled.div`
    background : #dcdcde !important;
    width: 100%;
    height : 300px;
    align-items : center;
`


function About() {
    return(
        <div className="flex flex-col items-center w-12/12 bg-black relative">
            <div className="items-center flex flex-col text-center justify-center mb-32 bg-black w-12/12 h-2/6">
                <div className="text-[#4f94d4] font-semibold text-8xl mb-12 mt-20 mx-auto">DRAW DESKTOP</div>
                <div className="text-[#dcdcde] text-6xl mx-auto mb-28">바탕화면을 꾸미다</div>
                <div className="bg-white text-3xl text-black w-52 rounded-3xl text-center mx-auto p-1 font-semibold mb-12">사이트 소개</div>
                <p className="mx-auto text-[#dcdcde] break-all text-xl font-extralight whitespace-normal leading-loose">
                    바탕화면 다운로드 사이트 Draw Desktop은 사용자로
                </p>
                <p className="mx-auto text-[#dcdcde] break-all text-xl font-extralight whitespace-normal leading-loose">
                    하여금 편하게 바탕화면을 다운로드하고 업로드할 수 있도록
                </p>
                <p className="mx-auto text-[#dcdcde] break-all text-xl font-extralight whitespace-normal leading-loose">
                    유도하는 데 포커스를 두고 있습니다. 다양한 검색 연관
                </p>
                <p className="mx-auto text-[#dcdcde] break-all text-xl font-extralight whitespace-normal leading-loose">
                    서비스를 통해 해당 기능을 구현하는데 목적을 두고 있으며,
                </p>
                <p className="mx-auto text-[#dcdcde] break-all text-xl font-extralight whitespace-normal leading-loose">
                    추후 업데이트와 더 나은 웹사이트 세팅으로 더 발전된
                </p>
                <p className="mx-auto text-[#dcdcde] break-all text-xl font-extralight whitespace-normal leading-loose">
                    사이트가 되는 것을 목표로 하고 있습니다.
                </p>
            </div>
            <SearchBox>
                <div className="flex flex-row h-16 align-middle pt-2">
                    <select disabled className="ml-3 mr-6 font-bold align-middle">
                        <option disabled selected className="mr-3">제목</option>
                    </select>
                    
                    <input disabled className="bg-[#f0f0f1] font-bold align-middle rounded-3xl pl-5 pr-96 my-auto h-8" placeholder="이미지 검색"/>
                </div>
                <img src={mockupImg} style={{width : "700px", height : "500px", position : "absolute", top : "-170px", left : "550px"}}></img>
            </SearchBox>

            <Container>
                <div className="mx-auto mb-32 w-6/12">
                    <Border/>
                    <div className="text-[#4f94d4] float-left text-5xl mr-96 mt-32 font-semibold">주요 서비스</div>
                </div>

                <Grid>
                    <StyledBox>
                            <div className="pt-12 text-2xl font-extrabold">카테고리</div>
                            <div className="mx-auto break-all text-xl font-extralight whitespace-normal leading-loose p-9">
                                상단의 카테고리 나열을 통해서 원하는
                                카테고리의 바탕화면을 다운로드 할 수
                                있도록 설계하였습니다. 
                            </div>
                        </StyledBox>
                        <StyledBox>
                            <div className="pt-8 text-2xl font-extrabold">인기 바탕화면, 인기 카테고리</div>
                            <div className="mx-auto break-all text-xl font-extralight whitespace-normal leading-loose p-9">
                                인기 바탕화면과 인기 카테고리 2가지로
                                인기 항목을 구상해 현재 언급이 많이 되는
                                바탕화면을 다운로드 할 수 있도록
                                하였습니다.
                            </div>
                        </StyledBox>
                        <StyledBox>
                            <div className="pt-14 text-2xl font-extrabold">검색 기능</div>
                            <div className="mx-auto break-all text-xl font-extralight whitespace-normal leading-loose p-9">
                                작성자/제목/카테고리로 나누어서
                                검색할 수 있도록 설정하였습니다.   
                            </div>
                        </StyledBox>
                        <StyledBox>
                            <div className="pt-11 text-2xl font-extrabold">사진 업로드</div>
                            <div className="mx-auto break-all text-xl font-extralight whitespace-normal leading-loose p-9">
                                로그인 후 업로드 기능을 통해 바탕화면
                                업로드 기능을 추가하였습니다.
                            </div>
                        </StyledBox>
                </Grid>     
            </Container>
            <FooTer>
                <div className="flex flex-row justify-center pt-20 items-center">
                    <div className="mr-48 ml-32">
                        <div className="text-4xl text-[#4f94d4] font-semibold pb-20">비즈니스 모델</div>
                    </div>

                    <div className="mr-64">
                        <div className="text-3xl font-semibold mb-6">광고, 컨텐츠</div>
                        <div className="">
                            <p className="text-xl font-bold">디스플레이, 이벤트, 공동 프로모션, 마케팅 제휴,</p>
                            <p className="text-xl font-bold">추가적인 콘텐츠 관련 제휴를 비지니스 모델로 사용합니다.</p>
                        </div>
                    </div>
                </div>
            </FooTer>
        </div>
    );
}

export default About;