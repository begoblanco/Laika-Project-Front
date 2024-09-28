<script setup>
import { defineProps, ref } from 'vue';
import EditEventModal from './modals/EditEventModal.vue';
const props = defineProps(["event"]);

const emit = defineEmits(["remove", "save"]);

const isDropdownOpen = ref(false);
const isEditModalOpen = ref(false);

const toggleDropdown = () => isDropdownOpen.value = !isDropdownOpen.value;
const toggleEditModal = () => isEditModalOpen.value = !isEditModalOpen.value;

const edit = () => {
    toggleDropdown();
    toggleEditModal();
}

const remove = () => {
    toggleDropdown();
    emit("remove", { ...props.event });
}

</script>

<template>
    <EditEventModal @close="toggleEditModal" v-if="isEditModalOpen" :event="props.event" />
    <div class="flex gap-5 flex-col py-2">
        <div class="p-6 rounded-xl bg-white">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    <p class="text-base font-medium text-gray-900">
                        {{ props.event.start_date }}
                    </p>
                </div>
                <div class="dropdown relative inline-flex">
                    <button @click="toggleDropdown" type="button" data-target="dropdown-default"
                        class="dropdown-toggle inline-flex justify-center py-2.5 px-1 items-center gap-2 text-sm text-black rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
                            <path d="M1.85624 2.00085H1.81458M6.0343 2.00085H5.99263M10.2124 2.00085H10.1707"
                                stroke="currentcolor" stroke-width="2.5" stroke-linecap="round"></path>
                        </svg>
                    </button>
                    <div v-if="isDropdownOpen" id="dropdown-default"
                        class="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full -left-10 w-max mt-2"
                        aria-labelledby="dropdown-default">
                        <ul class="py-2">
                            <li>
                                <a class="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium"
                                    @click="edit">
                                    Edit
                                </a>
                            </li>
                            <li>
                                <a class="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium"
                                    @click="remove">
                                    Remove
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h6 class="text-xl leading-8 font-semibold text-black mb-1">
                {{ props.event.title }}
            </h6>
            <p class="text-base font-normal text-gray-600">
                {{ props.event.description }}
            </p>
        </div>
    </div>
</template>