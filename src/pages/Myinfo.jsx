import React from 'react';
import styled from 'styled-components'



function Myinfo() {
    return(
        <div className="flex justify-center items-center w-12/12 h-4/6">
            <div className="flex justify-center h-1/6 leading-normal py-5 space-x-3 text-sm font-medium tracking-tighter">
                <div>나의 정보</div>
                <div className="border-r-2"/>
                <div>마이 게시물</div>
                <div className="border-r-2"/>
                <div>좋아요 누른 게시물</div>
                <div className="border-r-2"/>
                <div>마이 페이지 변경</div>
            </div>

        </div>
    );
}

export default Myinfo;