<script setup lang="ts">
import CalendarTable from './CalendarTable.vue';
import { ref } from 'vue';

const currentDate = ref(new Date());

const prevMonth = () => {
    let tempDate = currentDate.value;
    tempDate.setMonth(currentDate.value.getMonth() - 1);
    currentDate.value = new Date(tempDate);
};

const nextMonth = () => {
    let tempDate = currentDate.value;
    tempDate.setMonth(currentDate.value.getMonth() + 1);
    currentDate.value = new Date(tempDate);
}
</script>

<template>
    <div
        class="col-span-12 xl:col-span-7 px-2.5 py-5 sm:p-8 bg-gradient-to-b from-white/25 to-white xl:bg-white rounded-2xl max-xl:row-start-1">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between mb-5">
            <div class="flex items-center gap-4">
                <h5 class="text-xl leading-8 font-semibold text-gray-900">
                    {{ currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) }}
                </h5>
                <div class="flex items-center">
                    <button @click="prevMonth"
                        class="text-primary p-1 rounded transition-all duration-300 hover:text-white hover:bg-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M10.0002 11.9999L6 7.99971L10.0025 3.99719" stroke="currentcolor"
                                stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                    <button @click="nextMonth"
                        class="text-primary p-1 rounded transition-all duration-300 hover:text-white hover:bg-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6.00236 3.99707L10.0025 7.99723L6 11.9998" stroke="currentcolor"
                                stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
        <CalendarTable :currentDate="currentDate" />
    </div>
</template>