import { defineStore } from 'pinia';
import api from '@/services/api';

const parseEventDates = (event) => ({
  ...event,
  start_date: new Date(event.start_date)
});

export const useEventStore = defineStore('events', {
  state: () => ({
    currentDate: null,
    events: [],
    upcomingEvents: []
  }),

  actions: {
    async fetchEvents(date) {
      try {
        const response = await api.get('/events', { params: { date: date.toISOString().split('T')[0] } });
        this.events = response.data.map(parseEventDates);
        this.currentDate = date;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchUpcomingEvents() {
      try {
        const response = await api.get('/events/upcoming');
        this.upcomingEvents = response.data.map(parseEventDates);;
      } catch (error) {
        console.error(error);
      }
    },
    async sync() {
      if (this.currentDate) {
        await this.fetchEvents(this.currentDate);
      }
      await this.fetchUpcomingEvents();
    },
    async createEvent(event) {
      try {
        await api.post("/events", event)
        await this.sync();
      } catch (error) {
        console.error(error);
      }
    },

    async updateEvent(event) {
      try {
        await api.put(`/events/${event.id}`, event);
        await this.sync();
      } catch (error) {
        console.error(error);
      }
    },

    async deleteEvent(eventId) {
      try {
        await api.delete(`/events/${eventId}`);
        await this.sync();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
