import axios from 'axios';

export const client = axios.create({
    baseURL: 'http://3.208.224.218:3000',
});
