import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://3.208.224.218:3000',
    withCredentials: true,
    //withCredentials > HTTP 요청을 보낼 때 인증 정보 함께 전송
});
