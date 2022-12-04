import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://yk-blog-backend.onrender.com/api/"
});
