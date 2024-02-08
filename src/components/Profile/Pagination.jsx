import React, { useState } from 'react'
import styled from 'styled-components';

export default function Pagination() {

  const [page, setPage] = useState(1);

  const lis = [];
  const clickPage = (i) => {
    return (e) => {
      e.preventDefault();
      setPage(i);
    }
  }

  for (let i = page-2; lis.length < 5; i++) {
    if (i>0) {
      lis.push(<PageBtn current={i===page} onClick={clickPage(i)}>{i}</PageBtn>)
    }
  }
  return (
    <BtnWrap>
      <Pagelist>
        <PagingBtn active={page>1} onClick={(page>1) ? clickPage((prev) => prev-1) : (e) => e.preventDefault()}>이전</PagingBtn>
        {lis}
        <PagingBtn active={true} onClick={clickPage((prev) => prev+1)}>다음</PagingBtn>
      </Pagelist>
    </BtnWrap>
  )
}

const BtnWrap = styled.div`
  display: flex;
`

const Pagelist = styled.ul`
  display: flex;
  width: 200px;
  justify-content: space-between;
`

const PageBtn = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;

  color: ${(props) => (props.current ? "#000000" : "#D9D9D9")};
  cursor: pointer;

  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none
`

const PagingBtn = styled(PageBtn)`
  color: ${(props) => (props.active ? "#000000" : "#D9D9D9")}
`