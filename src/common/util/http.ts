import axios from 'axios';

const http = axios.create();

http.interceptors.response.use(
    (response) => {
        const { code, msg, data } = response.data;
        if (parseInt(code, 10) !== 0) {
            return Promise.reject(msg);
        }
        return data;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default http;