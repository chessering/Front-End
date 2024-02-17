import { client } from './api';


const getSearchByTitle = async (title) => {
    try {
        const encodedTitle = encodeURIComponent(title);
        const url = `/search/title?title=${encodedTitle}`;

        const response = await client.get(url);

        console.log(response.data); 
        return response.data; 
    } catch (error) {
        console.error('Error during API call:', error);
        throw error; // 오류 처리
    }
};

const getSearchByCategory = async (category) => {
    try {
        const encodedCategory = encodeURIComponent(category);
        const url = `/search/category?category_name=${encodedCategory}`;

        const response = await client.get(url);

        console.log(response.data); 
        return response.data; 
    } catch (error) {
        console.error('Error during API call:', error);
        throw error; // 오류 처리
    }
};

const getSearchPageByNickname = async (nickname) => {
    try {
        const encodedNickname = encodeURIComponent(nickname);
        const url = `/search/user?nickname=${encodedNickname}`;

        const response = await client.get(url);

        console.log(response.data); 
        return response.data; 
    } catch (error) {
        console.error('Error during API call:', error);
        throw error; // 오류 처리
    }
};


const getCategory= async () => {
    try{
        const url = `/posting/category`;

        const response = await client.get(url);

        console.log(response.data);
        return response.data;
    }catch(error){
        console.error('Error during API call:', error);
        throw error;
    }
};
const getCategory_Popular = async () => {
    try{
        const url = `/popular/category`;

        const response = await client.get(url);

        console.log(response.data);
        return response.data;
    }catch(error){
        console.error('Error during API call:', error);
        throw error;
    }
};
const getPopular = async () => {
    try{
        const url = `/popular/wallpaper`;

        const response = await client.get(url);

        console.log(response.data);
        return response.data;
    }catch(error){
        console.error('Error during API call:', error);
        throw error;
    }
};
const mainpageServices = {getSearchByTitle, getSearchByCategory,getSearchPageByNickname , getCategory, getCategory_Popular, getPopular};

export default mainpageServices;

