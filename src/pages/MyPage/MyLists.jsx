import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyLists() {
    const navigate = useNavigate();
    return(
        <div className="flex justify-center h-1/6 leading-normal pt-5 pb-2 space-x-3 text-sm font-medium tracking-tighter mt-5">
            <div className="cursor-pointer" onClick={() => navigate("/myinfo")}>나의 정보</div>
            <div className="border-r-2"/>
            <div className="cursor-pointer" onClick={() => navigate("/myposts")}>마이 게시물</div>
            <div className="border-r-2"/>
            <div className="cursor-pointer" onClick={() => navigate("/likeposts")}>좋아요 누른 게시물</div>
            <div className="border-r-2"/>
            <div className="cursor-pointer" onClick={() => navigate("/myinfomodify")}>마이 페이지 변경</div>
        </div>
    );
}
export default MyLists;