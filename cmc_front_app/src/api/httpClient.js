import {axios} from './axiosSettings';

const getBaseUrl = url => `${url}`;

export const httpClient = {
    get(url, data) {
        return axios.get(getBaseUrl(url), data);
    },

    post(url, data) {
        return axios.post(getBaseUrl(url), data);
    }
};
