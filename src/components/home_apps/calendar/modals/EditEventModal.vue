<script setup>
import { toRefs, reactive } from "vue";

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["close", "save", "delete"]);
const event = reactive({ ...props.event });

const formatDate = (date) => {
    if (!date) return null;

    let year = date.getFullYear();
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);
    let hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const updateStartDate = (ev) => {
    let d = new Date(ev.target.value);
    event.start_date = d;
};

const save = () => emit('save', { ...event });
const remove = () => emit('delete', { ...event });
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-violet-300 rounded-lg p-4">
            <h2 class="text-lg mb-4 text-gray-800">
                {{ event.id ? "Edit Event" : "New Event" }}
            </h2>
            <form @submit.prevent="save">
                <input v-model="event.title" placeholder="Title"
                    class="border mb-2 w-full p-2 rounded text-gray-800 focus:outline-violet-500" required />
                <input type="datetime-local" id="meeting-time" name="meeting-time" :value="formatDate(event.start_date)"
                    @input="updateStartDate($event)"
                    class="border mb-2 w-full p-2 rounded text-gray-800 focus:outline-violet-500" required />
                <div class="flex justify-end">
                    <button type="submit" class="bg-purple-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                    <button v-if="event.id" @click="remove" class="bg-red-500 text-gray-100 px-4 py-2 rounded ml-2">
                        Delete
                    </button>
                    <button @click="$emit('close')" class="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
