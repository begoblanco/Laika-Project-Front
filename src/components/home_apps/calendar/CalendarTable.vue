<script setup>

import { ref, defineProps, toRefs, watch, computed, watchEffect, onMounted } from 'vue';
import EventSticker from './EventSticker.vue';
import DateBox from './DateBox.vue';
import api from '@/services/api';
import { useEventStore } from '@/stores/eventStore';

const eventStore = useEventStore();

const props = defineProps(["currentDate"]);

const today = new Date();

const weekdays = ref(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
const currentDate = ref(new Date(props.currentDate));
const events = ref([]);


watch(
    () => props.currentDate,
    (newDate) => {
        currentDate.value = new Date(newDate); // Update local copy when prop changes
    }
);

watchEffect(async () => {
    try {
        await eventStore.fetchEvents(currentDate.value);
    } catch (error) {
        console.error("Error fetching events:", error);
        events.value = []; // Handle error case, e.g., set events to an empty array
    }
});

function getDaysInMonth(year, month) {
    // Get the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);

    // Get the day of the week the month starts on (0 is Sunday, 6 is Saturday)
    const startDayOfWeek = firstDayOfMonth.getDay();

    // Adjust so the week starts on Monday (if it's Sunday, treat it as the 7th day of the previous week)
    const daysToMonday = (startDayOfWeek === 0 ? 6 : startDayOfWeek - 1);

    // Calculate the first day of the first week (may include dates from the previous month)
    const firstDayOfFirstWeek = new Date(firstDayOfMonth);
    firstDayOfFirstWeek.setDate(firstDayOfMonth.getDate() - daysToMonday);

    const weeks = [];

    // Start at the first day of the first week
    let currentDay = new Date(firstDayOfFirstWeek);

    // Collect the days for 6 weeks (6 * 7 = 42 days)
    for (let week = 0; week < 6; week++) {
        const weekDates = [];

        for (let day = 0; day < 7; day++) {
            weekDates.push(new Date(currentDay)); // Add a new date to the week
            currentDay.setDate(currentDay.getDate() + 1); // Move to the next day
        }

        weeks.push(weekDates); // Add the week to the weeks array
    }

    let days = [];
    weeks.forEach((week) => {
        days.push(...week); // Display each day of the week
    });
    return days;
}


const days = computed(() => getDaysInMonth(currentDate.value.getFullYear(), currentDate.value.getMonth()));

</script>

<template>
    <div class="border border-purple-200 rounded-xl">
        <div class="grid grid-cols-7 rounded-t-3xl border-b border-purple-200">
            <div v-for="weekDay in weekdays"
                class="py-3.5 border-r border-purple-200 bg-purple-50 flex items-center justify-center text-sm font-medium text-primary">
                {{ weekDay }}
            </div>
        </div>
        <div class="grid grid-cols-7 rounded-b-xl">
            <!-- relative class only for when stickers are needed -->
            <DateBox v-for="date in days" :date="date" :events="eventStore.events"
                :is-current-date="date.getDate() == today.getDate() && date.getMonth() == today.getMonth()" />
        </div>
    </div>
</template>