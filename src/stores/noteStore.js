import { defineStore } from 'pinia';
import api from '@/services/api';

export const useNoteStore = defineStore('notes', {
  state: () => ({
    notes: [],
    note: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    async fetchNotes() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await api.get('/notes');
        this.notes = response.data;
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    async createNote(noteData) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await api.post("/notes", noteData)
        this.notes.push(response.data);
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    async updateNote(noteData) {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await api.put(`/notes/${noteData.id}`, noteData);
        const index = this.notes.findIndex(note => note.id === noteData.id);
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
        await api.delete(`/notes/${noteId}`);
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
