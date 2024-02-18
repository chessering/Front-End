import React, { useEffect } from 'react';
import { Fragment } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPopularCategory } from '../../services/api';

 
// 카테고리 인기 페이지

// const categories = [
//     {
//       categoryId: 1,
//       categoryName: "슈퍼 히어로",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/76b852/FFFFFF', alt: 'Nature Image 1' },
//         { src: 'https://via.placeholder.com/300x200/60a3bc/FFFFFF', alt: 'Nature Image 2' },
//         { src: 'https://via.placeholder.com/300x200/4a69bd/FFFFFF', alt: 'Nature Image 3' },
//         { src: 'https://via.placeholder.com/300x200/78e08f/FFFFFF', alt: 'Nature Image 4' }
//       ]
//     },
//     {
//       categoryId: 2,
//       categoryName: "게임",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/1e3799/FFFFFF', alt: 'Cities Image 1' },
//         { src: 'https://via.placeholder.com/300x200/3c6382/FFFFFF', alt: 'Cities Image 2' },
//         { src: 'https://via.placeholder.com/300x200/0a3d62/FFFFFF', alt: 'Cities Image 3' },
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Cities Image 4' }
//       ]
//     },
//     {
//       categoryId: 3,
//       categoryName: "영화",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/fa983a/FFFFFF', alt: 'Animals Image 1' },
//         { src: 'https://via.placeholder.com/300x200/eb2f06/FFFFFF', alt: 'Animals Image 2' },
//         { src: 'https://via.placeholder.com/300x200/1e3799/FFFFFF', alt: 'Animals Image 3' },
//         { src: 'https://via.placeholder.com/300x200/3c6382/FFFFFF', alt: 'Animals Image 4' }
//       ]
//     },
//     {
//       categoryId: 4,
//       categoryName: "연예인",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 5,
//       categoryName: "자동차",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 6,
//       categoryName: "자연",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 7,
//       categoryName: "TV 프로그램",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 8,
//       categoryName: "여행",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 9,
//       categoryName: "애니메이션",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 10,
//       categoryName: "음악",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 11,
//       categoryName: "사진",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 12,
//       categoryName: "컴퓨터",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 13,
//       categoryName: "동물",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 14,
//       categoryName: "스포츠",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 15,
//       categoryName: "만화",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 16,
//       categoryName: "축하",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 17,
//       categoryName: "그래픽",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 18,
//       categoryName: "영감",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 19,
//       categoryName: "라이프스타일",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//     {
//       categoryId: 20,
//       categoryName: "음식",
//       images: [
//         { src: 'https://via.placeholder.com/300x200/38ada9/FFFFFF', alt: 'Technology Image 1' },
//         { src: 'https://via.placeholder.com/300x200/6a89cc/FFFFFF', alt: 'Technology Image 2' },
//         { src: 'https://via.placeholder.com/300x200/82ccdd/FFFFFF', alt: 'Technology Image 3' },
//         { src: 'https://via.placeholder.com/300x200/b8e994/FFFFFF', alt: 'Technology Image 4' }
//       ]
//     },
//   ];
  


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
                            <img src={image.img_url} alt={image.alt} className="object-cover object-center w-full h-full rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    );

}