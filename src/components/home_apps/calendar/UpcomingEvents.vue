<script setup>
import EventCard from './EventCard.vue';

import { useEventStore } from '@/stores/eventStore';

const eventStore = useEventStore();
eventStore.fetchUpcomingEvents();

const removeEvent = (event) => {
    eventStore.deleteEvent(event.id);
}

</script>

<template>
    <div class="col-span-12 xl:col-span-5">
        <h2 class="text-3xl leading-tight text-purple-200 mb-4">
            Upcoming Events!
        </h2>
        <EventCard v-for="event in eventStore.upcomingEvents" :event="event" @remove="removeEvent" />
    </div>
</template>