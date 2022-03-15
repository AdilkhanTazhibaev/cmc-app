import Axios from 'axios';
const config = {
    baseURL: process.env.REACT_APP_HTTP_API_URL,
};

export const axios = Axios.create(config);
