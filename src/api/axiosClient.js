import axios from 'axios'

export const TOKEN_KEY = "Token";
const PUBLIC_PATHS = ["/api/user/register" , "/api/auth/login"];

const isPublic = (url) => PUBLIC_PATHS.some((paths) => url?.startsWith(paths))

const axiosClient = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    headers:{
        "Content-Type" : "application/json",
    },
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("Token");

    if(token && !isPublic(config.url)){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.request.use(
    (response) => response ,
    (error) => {
        if(error.response?.status === 401  && !isPublic(error.config.url)){
            localStorage.removeItem(TOKEN_KEY);
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
)
export default axiosClient;