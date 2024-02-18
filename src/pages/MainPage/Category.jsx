import React, { useEffect } from 'react';
import { Fragment } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getAllCategory } from '../../services/api';


// 카테고리 페이지

const images = [
    { src: 'https://via.placeholder.com/300x200/CCCCCC/FFFFFF', alt: 'Image 1' },
    { src: 'https://via.placeholder.com/300x200/BBBBBB/FFFFFF', alt: 'Image 2' },
    { src: 'https://via.placeholder.com/300x200/AAAAAA/FFFFFF', alt: 'Image 3' },
    { src: 'https://via.placeholder.com/300x200/999999/FFFFFF', alt: 'Image 4' },
    { src: 'https://via.placeholder.com/300x200/888888/FFFFFF', alt: 'Image 5' },
    { src: 'https://via.placeholder.com/300x200/777777/FFFFFF', alt: 'Image 6' },
    { src: 'https://via.placeholder.com/300x200/666666/FFFFFF', alt: 'Image 7' },
    { src: 'https://via.placeholder.com/300x200/555555/FFFFFF', alt: 'Image 8' },
    { src: 'https://via.placeholder.com/300x200/CCCCCC/FFFFFF', alt: 'Image 1' },
    { src: 'https://via.placeholder.com/300x200/BBBBBB/FFFFFF', alt: 'Image 2' },
    { src: 'https://via.placeholder.com/300x200/AAAAAA/FFFFFF', alt: 'Image 3' },
    { src: 'https://via.placeholder.com/300x200/999999/FFFFFF', alt: 'Image 4' }
];


export default function Category() {
    const { isLoading, data : allCategory } = useQuery({
        queryKey: ["allCategory"],
        queryFn: () => getAllCategory(),
        refetchOnWindowFocus: false,
    });
    const params = useParams();
    const navigate = useNavigate();
    const gotoDetail = (postId) => {
        navigate(`/download/${postId}`);
    }
    useEffect(()=>{
        console.log(allCategory);
    },[isLoading])
    if (isLoading) {
        return (
            <div>로딩 중..</div>
        )
    }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid text-left">
                <section className="mt-8 mb-8">
                    <div className="flex items-center">
                        <span className="text-2xl text-[#21272A] font-semibold mr-4">{allCategory&&allCategory[parseInt(params.postid)-1].category_name}
                            <span className="ml-4 text-lg text-[#6B6B6B]">
                                {allCategory&&allCategory[parseInt(params.postid)-1].recent}
                                /
                                {allCategory&&allCategory.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0)}
                            </span>
                        </span>
                        
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                        {allCategory&&allCategory[parseInt(params.postid)-1].post.map((image, index) => (
                            <div key={index} className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200">
                                <img 
                                    src={image.img_url} 
                                    alt={image.alt} 
                                    className="object-cover object-center w-full h-full rounded-lg" 
                                    onClick={() => gotoDetail(image.post_id)}
                                    />
                            </div>
                        ))}
                    </div>

                </section>

            </div>
        </div>
    );

}