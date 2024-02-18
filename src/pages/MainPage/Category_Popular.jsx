import React, { useEffect } from 'react';
import { Fragment } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPopularCategory } from '../../services/api';

 
// 카테고리 인기 페이지

export default function Category_Popular() {
    const { isLoading, data : popCategory } = useQuery({
      queryKey: ["popCategory"],
      queryFn: () => getPopularCategory(),
      refetchOnWindowFocus: false,
    })
    const navigate = useNavigate();
    const gotoDetail = (categoryId) =>{
      navigate(`/Category/${categoryId}`);
    }
    const gotoDownLoad = (post_id) => {
      navigate(`/download/${post_id}`);
  }
    useEffect(()=>{
      console.log(popCategory);
    },[])
    if (isLoading) {
      return (
          <div>로딩 중..</div>
      )
  }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
                  <div className="flex mt-9 items-center">
                        <span className="text-2xl text-[#21272A] font-semibold mr-4">인기 카테고리</span>
                    </div>
        {popCategory&&popCategory.map((category, index) => (
            <div key={index} className="mt-8 mb-8">
                <div className="flex  items-center">
                    <h2 className="text-2xl text-[#21272A] font-semibold">{category.category_name}</h2>
                    <button
                        className="ml-5 border border-gray-200 rounded-lg px-5 py-1 text-lg font-medium text-gray-500 hover:text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none"
                        onClick={() => gotoDetail(category.category_id)}
                    >
                        더보기
                    </button>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                    {category.post.map((image, idx) => (
                        <div key={idx} className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200">
                            <img src={image.img_url} alt={image.alt} className="object-cover object-center w-full h-full rounded-lg" onClick={()=>gotoDownLoad(image.post_id)} />
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    );

}