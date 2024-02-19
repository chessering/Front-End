import React from "react";
import { Fragment } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSearchByTitle } from "../../services/mainpage";
import { getSearchByCategory } from "../../services/mainpage";
import { getSearchPageByNickname } from "../../services/mainpage";
import { getCategory } from "../../services/mainpage";
import { getCategory_Popular } from "../../services/mainpage";
import { getPopular } from "../../services/mainpage";
import Search from "./Search";
import { useQuery } from 'react-query';
import { getpopularWallpapers } from '../../services/api';
import { useRecoilState } from "recoil";
import { loadingState } from "../../recoil/atom";



// 카테고리 드롭다운
const resources = [
  {
    name: "제목",
  },
  // {
  //   name: "카테고리",
  // },
  // {
  //   name: "작성자",
  // },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Mainpage() {
  const navigate = useNavigate();
  const { iisLoading, data: popWall } = useQuery({
    queryKey: ["popWall"],
    queryFn: () => getpopularWallpapers(),
    refetchOnWindowFocus: false,
  })
  const gotoDownLoad = (post_id) => {
    navigate(`/download/${post_id}`);
  }
  const gototheLoad = (post_id) => {
    navigate(`/Category/${post_id}`);
  }

  useEffect(() => {
    // console.log(popWall);
  }, [])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("제목"); // 검색 유형 상태 추가
  const [searchResults, setSearchResults] = useState([]);

  const [popularWallpapers, setPopularWallpapers] = useState(null);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  const [isError, setIsError] = useState(false);
  const [ cataWallpapers, setCataWallpapers] = useState(null);

  const [searchResultData, setSearchResultData] = useState(null);

  const fetchSearchResults = async () => {
    try {
      let data;
      if (searchType === "제목") {
        console.log("찾으려는 값", searchTerm);
        data = await getSearchByTitle(searchTerm);
        setSearchResultData(data);
        console.log("제목 검색", data);
      } else if (searchType === "카테고리") {
        data = await getSearchByCategory(searchTerm);
        setSearchResultData(data);
        console.log("카테고리 검색", data);
      } else if (searchType === "작성자") {
        data = await getSearchPageByNickname(searchTerm);
        console.log("작성자 검색", data);
        setSearchResultData(data);
      } else {
        console.log("알 수 없는 검색 유형:", searchType);
        return;
      }
      setSearchResults(data.result); // 검색 결과 업데이트
    } catch (error) {
      console.error(`${searchType} 검색 중 오류 발생:`, error);
      setSearchResultData(null);
    }
  };

  const handlePopularClick = () => {
    navigate("/Popular");
  };
  const handleCategoryPopularClick = () => {
    navigate("/Category_Popular");
  };


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // 양식이 제출될 때 검색 API 호출
    fetchSearchResults();
  };

  // 검색어 입력 이벤트 핸들러
  const handleSearchInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (!newSearchTerm) {
      setSearchResults(null);
      setSearchResultData(null);
    }
  };

  // 검색 조건 설정
  const handleSearchTypeChange = (name) => {
    setSearchResultData(null);
    setSearchType(name);
    fetchSearchResults();
  };

  //popularWallpapers
  useEffect(() => {
    setIsLoading(true);
    getPopular()
      .then((data) => {
        console.log(data.data.result);
        setPopularWallpapers(data.data.result); // API로부터 받은 데이터를 상태에 저장
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching popular wallpapers:", error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  //cataWallpapers
  useEffect(() => {
    setIsLoading(true);
    getCategory_Popular()
      .then((data) => {
        const result = data?.result; // 수정된 경로
        console.log(result[0]);
        if (result) {
          const slicedData = result.slice(0, 5);
          setCataWallpapers(slicedData); // API로부터 받은 데이터를 상태에 저장
        } else {
          console.error("Invalid data structure", data);
          throw new Error("Invalid data structure"); // 적절한 에러 메시지와 함께 예외 발생
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cata wallpapers:", error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isError) {
    return <div>에러 발생</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid text-center">
        <main className="relative">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 p-10 sm:px-6 lg:px-8">
              <div className="text-center w-full">
                <h2 className="text-2xl text -[#21272A]  p-10  font-semibold">
                  찾고싶은 배경화면을 편하게 찾으세요.
                  <br /> Draw Desktop
                </h2>
                {/* <Search /> */}

                <div>
                  {/* <Search /> */}
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
                            <span>검색 기준: {searchType}</span>
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
                                    <p
                                      key={item.name}
                                      onClick={() =>
                                        handleSearchTypeChange(item.name)
                                      }
                                      className="text-base font-medium text-gray-900"
                                    >
                                      {item.name}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>

                    <form
                      className="flex items-center relative"
                      onSubmit={handleSearchSubmit}
                    >
                      <MagnifyingGlassIcon
                        className="items-center pointer-events-none absolute left-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        id="search-field"
                        className="block w-[655px] bg-[#ECECEC] text-lg rounded-full pl-10 pr-3 py-2 text-[#A5A5A5] placeholder:text-[#A5A5A5] focus:outline-none focus:ring-0"
                        placeholder="이미지 검색"
                        type="search"
                        name="search"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                      />
                    </form>

                    <div className="search-results mt-4">
                      {searchTerm && searchResults && searchResults.length > 0 ? (
                        <ul>
                          {searchResults
                            .filter(
                              (result) =>
                                result.title &&
                                result.title.includes(searchTerm)
                            )
                            .map((filteredResult) => (
                              <li key={filteredResult.post_id} className="mb-2">
                                <div className="result-title font-semibold">
                                  {filteredResult.title}
                                </div>
                                <img
                                  src={filteredResult.img_url}
                                  alt={filteredResult.title}
                                  onClick={() => gotoDownLoad(filteredResult.post_id)}
                                  className="w-20 h-20 object-cover flex items-center justify-center rounded-lg bg-gray-200"
                                />
                              </li>
                            ))}
                        </ul>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {!searchResultData && (
        <>
          <section className="mt-8 mb-8">
            <h2
              onClick={handlePopularClick}
              className="text-2xl text-[#21272A] font-semibold"
            >
              인기 바탕화면
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
              {popularWallpapers &&
                popularWallpapers.slice(0, 8).map((wallpaper, index) => (
                  <div
                    key={index}
                    className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200"
                  >
                    <img
                      src={wallpaper.img_url}
                      alt={wallpaper.title}
                      onClick={() => gotoDownLoad(wallpaper.post_id)}
                      className="object-cover object-center w-full h-full rounded-lg"
                    />
                  </div>
                ))}
            </div>
            {/* 카테고리 */}
          </section>
          <section className="mt-8 mb-8">
            <h2
              onClick={handleCategoryPopularClick}
              className="text-2xl items-center mb-4 text-[#21272A] font-semibold"
            >
              인기 카테고리
            </h2>
            {/* <div className="flex mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8"> */}

            {cataWallpapers &&
              cataWallpapers.map((category, index) => (
                <div key={index} className="mt-8 mb-8">
                  <div className="flex items-center">
                    <h2 className="text-2xl text-[#21272A] font-semibold">
                      {category.category_name}
                    </h2>

                    <button
                      className="ml-5 border border-gray-200 rounded-lg px-5 py-1 text-lg font-medium text-gray-500 hover:text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none"
                      onClick={() => gototheLoad(category.category_id)}
                    // 예를 들어, 더보기 버튼을 클릭했을 때 특정 동작을 수행하도록 이벤트 핸들러를 추가할 수 있습니다.
                    >
                      더보기
                    </button>

                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                    {category.post.map((post, idx) => (
                      <div
                        key={idx}
                        className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200"
                      >
                        <img
                          src={post.img_url}
                          onClick={() => gotoDownLoad(post.post_id)}
                          alt={post.title}
                          className="object-cover object-center w-full h-full rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            {/* 
                          </div> */}
          </section>
        </>
      )}
    </div>
  );
}
