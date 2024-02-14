import React, { useState } from 'react';
import styled from 'styled-components';

function Pgnation ({page, totalPosts, limit, setPage}){
    const numPages = Math.ceil(totalPosts/limit)
    const [currPage, setCurrPage] = useState(page)
    let firstNum = currPage - (currPage % 5) + 1
    let lastNum = currPage - (currPage % 5) + 5
    if (lastNum > numPages) {
        lastNum = numPages;
    }

    return (
        <BtnWrap>
            <Pagelist>
                {!(page ===  1) && <PagingBtn
                onClick={() => {setPage(page-1); setCurrPage(page-2);}} 
                active={page > 1}
                disabled={page===0}
                >
                이전
                </PagingBtn>
                }
                <PageBtn
                    onClick={() => setPage(firstNum)}
                    current={page === firstNum ? "page" : null}>
                    {firstNum}
                </PageBtn>
                {Array(numPages).fill().map((_, i) =>{
                    if(i >= firstNum && i <= lastNum){
                        return (
                            <PageBtn
                                border="true" 
                                key={i+1} 
                                onClick={() => setPage(i + 1)}
                                current={page === i + 1 ? "page" : null}>
                                {i+1}
                            </PageBtn>
                        )
                    }
                })}
                {!(page === numPages) && <PageBtn 
                    onClick={() => {setPage(page+1); setCurrPage(page);}} 
                    active={page < numPages}
                    disabled={page>=numPages}>
                    다음
                </PageBtn>
                }  
            </Pagelist>
        </BtnWrap>
    );
}

export default Pgnation;

const BtnWrap = styled.div`
  display: flex;
  justify-content : center;
  margin-top : 30px;
  margin-bottom : 20px;
`

const Pagelist = styled.ul`
  display: flex;
  width: 200px;
  justify-content: space-evenly;
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