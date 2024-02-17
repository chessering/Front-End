import React, { useState, useEffect } from 'react';
import  mainpageServices  from '../../services/mainpage';


// 인기 바탕화면 페이지

// 무한 스크롤로 데이터 받아옴
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
    { src: 'https://via.placeholder.com/300x200/999999/FFFFFF', alt: 'Image 4' },
    { src: 'https://via.placeholder.com/300x200/888888/FFFFFF', alt: 'Image 5' },
    { src: 'https://via.placeholder.com/300x200/777777/FFFFFF', alt: 'Image 6' },
    { src: 'https://via.placeholder.com/300x200/666666/FFFFFF', alt: 'Image 7' },
    { src: 'https://via.placeholder.com/300x200/555555/FFFFFF', alt: 'Image 8' },
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
    { src: 'https://via.placeholder.com/300x200/999999/FFFFFF', alt: 'Image 4' },
    { src: 'https://via.placeholder.com/300x200/888888/FFFFFF', alt: 'Image 5' },
    { src: 'https://via.placeholder.com/300x200/777777/FFFFFF', alt: 'Image 6' },
    { src: 'https://via.placeholder.com/300x200/666666/FFFFFF', alt: 'Image 7' },
    { src: 'https://via.placeholder.com/300x200/555555/FFFFFF', alt: 'Image 8' },
];


export default function Category_Popular() {
    // const [popularWallpapers, setPopularWallpapers] = useState([]);

    // useEffect(() => {
    //     mainpageServices.getPopular().then(data => {
    //         if (data.isSuccess) {
    //             setPopularWallpapers(data.result); // API로부터 받은 데이터를 상태에 저장
    //         }
    //     }).catch(error => {
    //         console.error('Error fetching popular wallpapers:', error);
    //     });
    // }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid text-left">
                <section className="mt-8 mb-8">
                    <div className="flex items-center">
                        <span className="text-2xl text-[#21272A] font-semibold mr-4">인기 바탕화면</span>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                        {images.map((image, index) => (
                            <div key={index} className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200">
                                <img src={image.src} alt={image.alt} className="object-cover object-center w-full h-full rounded-lg" />
                            </div>
                        ))}
                        {/* api연결
                        {popularWallpapers.map((wallpaper, index) => (
                            <div key={index} className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200">
                                <img src={wallpaper.img_url} alt={wallpaper.title} className="object-cover object-center w-full h-full rounded-lg" />
                            </div> */}
                    </div>

                </section>

            </div>
        </div>
    );

}