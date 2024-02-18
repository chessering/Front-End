import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://3.208.224.218:3000',
});

export const getpopularWallpapers = async () => {
    try{
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/popular/wallpaper`,
            {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('access_Token')}`
                },
            }
        );
        console.log(response.data.result);
        return response.data.result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getPopularCategory = async () => {
    try{
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/popular/category`,
            {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('access_Token')}`
                },
            }
        )
        console.log(response.data.result);
        return response.data.result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getAllCategory = async () => {
    try{
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/posting/category`,
            {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('access_Token')}`
                },
            }
        )
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

