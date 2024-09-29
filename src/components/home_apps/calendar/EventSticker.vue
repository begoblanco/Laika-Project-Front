<script setup>
import { ref, toRefs } from 'vue';
import EditEventModal from './modals/EditEventModal.vue';
import { useEventStore } from '@/stores/eventStore';

const eventStore = useEventStore();

const props = defineProps(['event']);
const { event } = toRefs(props);

const isEditModalOpen = ref(false);

const toggleEditModal = () => isEditModalOpen.value = !isEditModalOpen.value;


const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};


const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};
</script>

<template>
    <EditEventModal :event="event" @save="saveEvent" @delete="deleteEvent" @close="toggleEditModal"
        v-if="isEditModalOpen" />
    
    <div @click="toggleEditModal" class="text-xs bg-purple-100 mx-2">
        
        <div>{{ truncateText(event.title, 20) }}</div>
        <div>{{ formatTime(event.start_date) }}</div>
    </div>
</template>
