<script setup>
import { ref, toRefs } from 'vue';
import EditEventModal from './modals/EditEventModal.vue';
import { useEventStore } from '@/stores/eventStore';

const eventStore = useEventStore();

const props = defineProps(['event']);
const { event } = toRefs(props);

const isEditModalOpen = ref(false);

const toggleEditModal = () => isEditModalOpen.value = !isEditModalOpen.value;

const saveEvent = (event) => {
    toggleEditModal();
    eventStore.updateEvent(event);
}

const deleteEvent = (event) => {
    toggleEditModal();
    eventStore.deleteEvent(event.id);
}

</script>

<template>
    <EditEventModal :event="event" @save="saveEvent" @delete="deleteEvent" @close="toggleEditModal"
        v-if="isEditModalOpen" />
    <div @click="toggleEditModal" class="text-xs bg-purple-100 mx-2">
        <div>{{ event.title }}</div>
        <div>{{ event.start_date }}</div>
    </div>
</template>