import React from 'react';
import styled from "styled-components";
import { ReactComponent as FailedSearch } from '../assets/images/Illust_Search Failed.svg';

const NotFound = () => {
  return (
    <Container>
        <LeftSide>
            <MainText>해당 검색 결과가 존재하지 않습니다.</MainText>
            <Content>
                <li>
                    단어를 정확하게 입력했는지 확인해 보세요.
                </li>
                <li>
                    두 단어 이상의 검색어인 경우에는 띄어쓰기가 맞는지 확인해 보세요.
                </li>
                <li>
                    한글을 영어로 또는 영어를 한글로 잘못 입력했는지 확인해 보세요.
                </li>
            </Content>
        </LeftSide>
        <RigthSide>
            <FailedSearch/>
        </RigthSide>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 230px;
`;
const LeftSide = styled.div`
  margin-right: 178px;
  display: flex;
  flex-direction: column;
`;
const RigthSide = styled.div`
`;
const MainText = styled.div`
  margin-bottom: 56px;
  font-size: 42px;
  font-weight: 700;
`;
const Content = styled.ul`
  margin-left: 30px;
  font-size: 20px;
  color: #6b6b6b;
  li{
    list-style: disc;
    margin-bottom: 8px;
    font-family: "Pretendard Variable";
  }
`;
export default NotFound