import React, { useState } from 'react';
import {
    getSearchByTitle,
    getSearchByCategory,
    getSearchPageByNickname
  } from '../../services/mainpage'; // 개별 API 함수를 불러옵니다

const SearchComponent = () => {
    const [selectedOption, setSelectedOption] = useState(''); // 사용자가 선택한 옵션
    const [searchQuery, setSearchQuery] = useState(''); // 사용자가 입력한 검색어
    const [searchResults, setSearchResults] = useState([]); // 검색 결과

    const handleSearch = async (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 리로드 방지

        try {
            let results;

            switch (selectedOption) {
                case 'title':
                    results = await getSearchByTitle(searchQuery);
                    console.log(results);
                    break;
                case 'category':
                    results = await getSearchByCategory(searchQuery);
                    break;
                case 'user':
                    results = await getSearchPageByNickname(searchQuery);
                    break;
                default:
                    console.error('Unknown search option');
                    return;
            }

            setSearchResults(results); // 검색 결과를 상태에 저장
        } catch (error) {
            console.error('Error during API call:', error);
        }
    };

    // console.log(searchResults);

    // 조건별 렌더링
    // const renderSearchResult = (result) => {
    //     switch (selectedOption) {
    //         case 'title':
    //             return (
    //                 <div key={result.user_id} className="p-4 border-b border-gray-200">
    //                     <h3 className="text-lg font-semibold">{result.title}</h3>
    //                     <p>{result.content}</p>
    //                 </div>
    //             );
    //         case 'category':
    //             return (
    //                 <div key={result.user_id} className="p-4 border-b border-gray-200">
    //                     <h3 className="text-lg font-semibold">{result.Category.category_name}</h3>
    //                     <ul>{result.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    //                 </div>
    //             );
    //         case 'user':
    //             return (
    //                 <div key={result.user_id} className="p-4 border-b border-gray-200">
    //                     <h3 className="text-lg font-semibold">{result.User.nickname}</h3>
    //                     <ul>{result.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    //                 </div>
    //             );
    //         default:
    //             return null;
    //     }
    // };


    return (
        <div className="flex flex-col items-center">
            <form className="flex items-center mt-4" onSubmit={handleSearch}>
                <div className="relative">
                    <select
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="title">제목</option>
                        <option value="category">카테고리</option>
                        <option value="user">사용자</option>
                    </select>
                </div>
                <input
                    className="ml-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="검색어를 입력하세요"
                />
                <button
                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    검색
                </button>
            </form>

            <div className="mt-4 w-full">

            </div>
            {searchQuery} {selectedOption} {searchResults} {searchResults.length}
            <div className="mt-4 w-full">
                {searchResults.map((result) => (
                    <div key={result.post_id} className="p-4 border-b border-gray-200">
                        {result}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SearchComponent;
