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
        currentDate.value = new Date(newDate); 
    }
);

watchEffect(async () => {
    try {
        await eventStore.fetchEvents(currentDate.value);
    } catch (error) {
        console.error("Error fetching events:", error);
        events.value = []; 
    }
});

function getDaysInMonth(year, month) {

    const firstDayOfMonth = new Date(year, month, 1);

   
    const startDayOfWeek = firstDayOfMonth.getDay();

   
    const daysToMonday = (startDayOfWeek === 0 ? 6 : startDayOfWeek - 1);

    
    const firstDayOfFirstWeek = new Date(firstDayOfMonth);
    firstDayOfFirstWeek.setDate(firstDayOfMonth.getDate() - daysToMonday);

    const weeks = [];

    
    let currentDay = new Date(firstDayOfFirstWeek);

    
    for (let week = 0; week < 6; week++) {
        const weekDates = [];

        for (let day = 0; day < 7; day++) {
            weekDates.push(new Date(currentDay)); 
            currentDay.setDate(currentDay.getDate() + 1); 
        }

        weeks.push(weekDates); 
    }

    let days = [];
    weeks.forEach((week) => {
        days.push(...week); 
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
            
            <DateBox v-for="date in days" :date="date" :events="eventStore.events"
                :is-current-date="date.getDate() == today.getDate() && date.getMonth() == today.getMonth()" />
        </div>
    </div>
</template>