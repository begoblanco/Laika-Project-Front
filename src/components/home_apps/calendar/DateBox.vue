<script setup>
import { ref, toRefs } from 'vue';
import EventSticker from './EventSticker.vue';


const props = defineProps(['date', 'events', 'isCurrentDate']);
const { date, events } = toRefs(props);

const getEventsForDate = (date) => {
    let evs = [];
    if (events.value) {
        events.value.forEach((ev) => {
            if (ev.start_date.getDate() === date.getDate() && ev.start_date.getMonth() === date.getMonth())
                evs.push(ev);
        });
    }
    return evs;
}
</script>

<template>
    <div
        class="flex xl:aspect-square max-xl:min-h-[60px] p-3.5 bg-gray-50 border-r border-b border-purple-200 transition-all duration-300 hover:bg-purple-50">
        <span v-if="isCurrentDate"
            class="text-xs font-semibold text-primary sm:text-white sm:w-6 sm:h-6 rounded-full sm:flex items-center justify-center sm:bg-primary">
            {{ date.getDate() }}
        </span>
        <span v-else class="text-xs font-semibold text-gray-400">
            {{ date.getDate() }}
        </span>
        <EventSticker v-for="event in getEventsForDate(date)" :event="event" />
    </div>
</template>