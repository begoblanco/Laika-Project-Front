<script setup>
import { toRefs, ref } from "vue";

const props = defineProps({
    event: {
        type: Object,
        required: true,
    },
});

const { event } = toRefs(props);

const emit = defineEmits(["close", "save"]);

const save = () => emit('save', { ...event });
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-violet-300 rounded-lg p-4">
            <h2 class="text-lg mb-4 text-gray-800">
                {{ event.id ? "Edit Event" : "New Event" }}
            </h2>
            <input v-model="event.title" placeholder="Title"
                class="border mb-2 w-full p-2 rounded text-gray-800 focus:outline-violet-500" required />
            <textarea v-model="event.description" placeholder="Content"
                class="border mb-2 w-full p-2 rounded text-gray-800 focus:outline-violet-500" rows="4"
                required></textarea>
            <input type="datetime-local" id="meeting-time" name="meeting-time" v-model="event.start_date"
                class="border mb-2 w-full p-2 rounded text-gray-800 focus:outline-violet-500" required />
            <div class="flex justify-end">
                <button @click="save" class="bg-purple-500 text-white px-4 py-2 rounded">
                    Save
                </button>
                <button @click="$emit('close')" class="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2">
                    Cancel
                </button>
            </div>
        </div>
    </div>
</template>
