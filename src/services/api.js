import axios from 'axios';
import { useAuthStore } from '@/stores/authStore'; 


const api = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
});


api.interceptors.request.use(
    (config) => {
        const userStore = useAuthStore();
        const token = userStore.token;

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem('jwtToken');
            window.location.href = '/login'; 
        }
        return Promise.reject(error);
    }
);

export default api;
