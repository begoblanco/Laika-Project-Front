<script setup>
import { ref } from "vue";
import CalendarTable from "./CalendarTable.vue";
import EditEventModal from "./modals/EditEventModal.vue";
import { useEventStore } from "@/stores/eventStore";

const eventStore = useEventStore();

const currentDate = ref(new Date());

const isCreateModalOpen = ref(false);

const toggleCreateModal = () => {
  console.log("Showing create modal");
  isCreateModalOpen.value = !isCreateModalOpen.value;
};

const prevMonth = () => {
  let tempDate = currentDate.value;
  tempDate.setMonth(currentDate.value.getMonth() - 1);
  currentDate.value = new Date(tempDate);
};

const nextMonth = () => {
  let tempDate = currentDate.value;
  tempDate.setMonth(currentDate.value.getMonth() + 1);
  currentDate.value = new Date(tempDate);
};

const saveEvent = (event) => {
  toggleCreateModal();
  eventStore.createEvent(event);
};
</script>

<template>
  <EditEventModal
    :event="{ id: null, title: '', start_date: null }"
    @save="saveEvent"
    @close="toggleCreateModal"
    v-if="isCreateModalOpen"
  />
  <div
    class="col-span-12 xl:col-span-7 px-2.5 py-5 sm:p-8 bg-gradient-to-b from-white/25 to-white xl:bg-white rounded-2xl max-xl:row-start-1"
  >
    <div
      class="flex flex-col md:flex-row gap-4 items-center justify-between mb-5"
    >
      <div class="flex items-center gap-4">
        <h5 class="text-xl leading-8 font-semibold text-gray-900">
          {{
            currentDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })
          }}
        </h5>
        <div class="flex items-center">
          <button
            @click="prevMonth"
            class="text-primary p-1 rounded transition-all duration-300 hover:text-white hover:bg-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M10.0002 11.9999L6 7.99971L10.0025 3.99719"
                stroke="currentcolor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <button
            @click="nextMonth"
            class="text-primary p-1 rounded transition-all duration-300 hover:text-white hover:bg-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.00236 3.99707L10.0025 7.99723L6 11.9998"
                stroke="currentcolor"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <button @click="toggleCreateModal">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
                fill="#d0a5ff"
              />
              <path
                d="M12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z"
                fill="#1C274C"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <CalendarTable :currentDate="currentDate" />
  </div>
</template>
