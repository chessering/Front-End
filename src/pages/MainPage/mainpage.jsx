import React from 'react';
import { Fragment } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import searchByTitle from '../../services/mainpage';

// 카테고리 드롭다운 
const resources = [
  {
    name: "제목",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "카테고리",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "작성자",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const images = [
  { src: 'https://via.placeholder.com/300x200/CCCCCC/FFFFFF', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/300x200/BBBBBB/FFFFFF', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/300x200/AAAAAA/FFFFFF', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/300x200/999999/FFFFFF', alt: 'Image 4' },
  { src: 'https://via.placeholder.com/300x200/888888/FFFFFF', alt: 'Image 5' },
  { src: 'https://via.placeholder.com/300x200/777777/FFFFFF', alt: 'Image 6' },
  { src: 'https://via.placeholder.com/300x200/666666/FFFFFF', alt: 'Image 7' },
  { src: 'https://via.placeholder.com/300x200/555555/FFFFFF', alt: 'Image 8' },
];

export default function Mainpage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      searchByTitle(searchTerm)
        .then(data => {
          setSearchResults(data.result); 
        })
        .catch(error => {
          console.error('검색 중 오류 발생:', error);
        });
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    const { value } = event.target.search;
    setSearchTerm(value);
  };



  const handlePopularClick = () => {
    navigate('/Popular');
  };
  const handleCategoryPopularClick = () => {
    navigate('/Category_Popular');
  };
  const handleCategoryClick = () => {
    navigate('/Category');
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid text-center">
        <main className="relative">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 p-10 sm:px-6 lg:px-8">
              <div className="text-center w-full">
                <h2 className="text-2xl text-[#21272A]  p-10  font-semibold">찾고싶은 배경화면을 편하게 찾으세요.<br /> Draw Desktop
                </h2><div>
                  <div className="mt-4 gap-4 flex items-center justify-center">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-gray-900" : "text-gray-500",
                              "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            )}
                          >
                            <span>검색 기준</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-48 -translate-x-1/2 transform px-2 sm:px-0">
                              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white px-3 py-6 sm:gap-8 sm:p-8">
                                  {resources.map((item) => (
                                    // <a
                                    //   key={item.name}
                                    //   href={item.href}
                                    //   className="-m-3 block rounded-md p-3 hover:bg-gray-50"
                                    // >
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    // <p className="mt-1 text-sm text-gray-500">
                                    //   {item.description}
                                    // </p>
                                    // </a>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>

                          </Transition>

                        </>
                      )}

                    </Popover>


                    <form className="flex items-center relative" onSubmit={handleSearch}>
                      <MagnifyingGlassIcon className="items-center pointer-events-none absolute left-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <input
                        id="search-field"
                        className="block w-[655px] bg-[#ECECEC] text-lg rounded-full pl-10 pr-3 py-2 text-[#A5A5A5] placeholder:text-[#A5A5A5] focus:outline-none focus:ring-0"
                        placeholder="이미지 검색"
                        type="search"
                        name="search"
                      />
                    </form>
                    <div className="search-results mt-4">
                      {searchResults.length > 0 ? (
                        <ul>
                          {searchResults.map((result) => (
                            <li key={result.post_id} className="mb-2">
                              <div className="result-title font-semibold">{result.title}</div>
                              <img src={result.img_url} alt={result.title} className="w-20 h-20 object-cover" />
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div>검색 결과가 없습니다.</div>
                      )}

                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>

        </main>
      </div>
      {/* 인기 바탕화면 */}
      <section className="mt-8 mb-8">
        <h2 onClick={handlePopularClick} className="text-2xl text-[#21272A] font-semibold">인기 바탕화면</h2>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200">
              <img src={image.src} alt={image.alt} className="object-cover object-center w-full h-full rounded-lg" />
            </div>
          ))}
        </div>

      </section>
      <section className="mt-8 mb-8">
        <h2 onClick={handleCategoryPopularClick} className="text-2xl items-center mb-4 text-[#21272A] font-semibold">인기 카테고리</h2>

        <h5 className='text-lg text-[#6B6B6B]'>카테고리 1
          <button onClick={handleCategoryClick}  type="button" className="ml-5 border border-gray-200 rounded-lg px-5 py-1 text-lg font-medium text-gray-500 hover:text-gray-900 shadow-sm hover:bg-gray-500  focus:outline-none">더보기</button>
        </h5>
        <div className="flex mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">

          {images.map((image, index) => (
            <div key={index} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
              <img src={image.src} alt={image.alt} className="object-cover object-center w-full h-full rounded-lg" />

            </div>

          ))}

        </div>

      </section>
    </div>
  );
}