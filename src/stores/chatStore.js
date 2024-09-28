import { defineStore } from 'pinia';
import api from '@/services/api';

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: []
    }),

    actions: {
        async sendMessage(message) {
            try {
                this.messages.push(message);
                const response = await api.post("/chat", { "message": message });
                this.messages.push(response.data.message);
                return response.data.emotion;
            } catch (error) {
                console.error('Message failed:', error);
                throw error; 
            }
        },
    },
});
