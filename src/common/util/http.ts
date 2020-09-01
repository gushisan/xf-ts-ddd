import axios from 'axios';

const http = axios.create({
	baseURL: 'http://localhost:5001/',
  timeout: 5000
});

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