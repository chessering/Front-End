import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getAllCategory } from '../../services/api';
import { useRecoilState } from 'recoil';
import { loadingState } from '../../recoil/atom';


// 카테고리 페이지

export default function Category() {
    const [ _isLoading, setIsLoading ] = useRecoilState(loadingState);
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