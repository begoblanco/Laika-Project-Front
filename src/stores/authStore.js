import { defineStore } from 'pinia';
import api from '@/services/api';

export const useAuthStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('jwtToken') || null, 
        expiresIn: localStorage.getItem('expiresIn') || null,
        createdAt: localStorage.getItem('createdAt') || null,
    }),

    actions: {
        async login(credentials) {
            try {
                const response = await api.post('/auth/login', credentials);
                const token = response.data.token; 
                const expiresIn = response.data.expiresIn;
                
                this.token = token;
                this.expiresIn = expiresIn;
                this.createdAt = Date.now();
                localStorage.setItem('jwtToken', token);
                localStorage.setItem('expiresIn', expiresIn);
                localStorage.setItem('createdAt', this.createdAt);
            } catch (error) {
                console.error('Login failed:', error);
                throw error; 
            }
        },
        isExpired() {
            if (this.createdAt) {
                return Date.now() - this.createdAt >= this.expiresIn;
            }
            return false;
        },
        logout() {
            this.token = null;
            this.expiresIn = null;
            this.createdAt = null;
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('expiresIn');
            localStorage.removeItem('createdAt');
        },
    },
});