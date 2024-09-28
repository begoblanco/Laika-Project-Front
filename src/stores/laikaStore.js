import { defineStore } from 'pinia';

export const useLaikaStore = defineStore('laika', {
    state: () => ({
        emotion: 'neutral'
    }),

    actions: {
        setEmotion(emotion) {
            this.emotion = emotion
        },
    },
});
