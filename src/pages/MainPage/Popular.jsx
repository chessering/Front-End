import React, { useState, useEffect } from "react";
import { getPopular } from "../../services/mainpage";

// 인기 바탕화면 페이지
export default function Category_Popular() {
  const [popularWallpapers, setPopularWallpapers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러 발생</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid text-left">
        <section className="mt-8 mb-8">
          <div className="flex items-center">
            <span className="text-2xl text-[#21272A] font-semibold mr-4">
              인기 바탕화면
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {popularWallpapers &&
              popularWallpapers.map((wallpaper, index) => (
                <div
                  key={index}
                  className="aspect-w-6 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200"
                >
                  <img
                    src={wallpaper.img_url}
                    alt={wallpaper.title}
                    className="object-cover object-center w-full h-full rounded-lg"
                  />
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
