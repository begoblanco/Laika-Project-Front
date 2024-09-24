import { defineStore } from 'pinia';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_ENDPOINT + '/notes';

export const useNoteStore = defineStore('notes', {
  state: () => ({
    notes: [],
    note: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchNotesByUserId(userId) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.get(`${BASE_URL}/user/${userId}`);
        this.notes = response.data;
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchNoteById(noteId) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.get(`${BASE_URL}/${noteId}`);
        this.note = response.data;
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    async createNoteForUser(userId, noteData) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.post(`${BASE_URL}/user/${userId}`, noteData);
        this.notes.push(response.data);
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    async updateNote(noteId, noteData) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.put(`${BASE_URL}/${noteId}`, noteData);
        const index = this.notes.findIndex(note => note.id === noteId);
        if (index !== -1) {
          this.notes[index] = response.data;
        }
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    async deleteNote(noteId) {
      this.isLoading = true;
      this.error = null;
      try {
        await axios.delete(`${BASE_URL}/${noteId}`);
        this.notes = this.notes.filter(note => note.id !== noteId);
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    handleError(error) {
      this.error = error.response
        ? `Error: ${error.response.status} - ${error.response.data.message}`
        : 'No response from server';
    },
  },
});
