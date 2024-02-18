import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getpopularWallpapers } from '../../services/api';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { loadingState } from '../../recoil/atom';

// 인기 바탕화면 페이지

export default function Category_Popular() {
    const [ _isLoading, setIsLoading ] = useRecoilState(loadingState);
    const { isLoading, data : popWall} = useQuery({
        queryKey: ["popWall"],
        queryFn: () => getpopularWallpapers(),
        refetchOnWindowFocus: false,
    })
    const navigate = useNavigate();
    const gotoDownLoad = (post_id) => {
        navigate(`/download/${post_id}`);
    }
    useEffect(()=>{
        console.log(popWall);
        // setIsLoading(true);
    },[])
    // useEffect(()=>{
    //     setIsLoading(false);
    // },[popWall])

    if(isLoading){
        setIsLoading(true);
      }
      else{
        setIsLoading(false);
      }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid text-left">
                <section className="mt-8 mb-8">
                    <div className="flex items-center">
                        <span className="text-2xl text-[#21272A] font-semibold mr-4">인기 바탕화면</span>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                        {popWall&&popWall.map((wallpaper, index) => (
                            <div key={index} className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200">
                                <img src={wallpaper.img_url} alt={wallpaper.title} className="object-cover object-center w-full h-full rounded-lg" onClick={()=>gotoDownLoad(wallpaper.post_id)}/>
                            </div>
                        ))}
                    </div>

                </section>

            </div>
        </div>
    );

}