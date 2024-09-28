<script setup>
import { ref } from "vue";
import NotesModal from "./modals/NotesModal.vue";
import FullNoteModal from "./modals/FullNotesModal.vue";
import addIcon from "@/components/icons/add.svg";
import { useNoteStore } from "@/stores/noteStore";
import { useAuthStore } from "@/stores/authStore";

const notesStore = useNoteStore();
const authStore = useAuthStore();

// const notes = ref([]);
notesStore.fetchNotes();
const isNotesModalVisible = ref(false);
const isFullNoteModalVisible = ref(false);
const currentNote = ref(null);
const fullNoteContent = ref("");

const showAddNoteModal = () => {
  currentNote.value = {
    title: "",
    content: "",
    date: new Date().toLocaleDateString(),
    color: "violet",
  };
  isNotesModalVisible.value = true;
};

const editNote = (note) => {
  currentNote.value = { ...note };
  isNotesModalVisible.value = true;
};

const deleteNote = (id) => {
  notesStore.deleteNote(id);
};

const saveNote = (note) => {
  if (note.id) {
    const index = notesStore.notes.findIndex((n) => n.id === note.id);
    if (index !== -1) {
      notesStore.updateNote(note);
    }
  } else {
    notesStore.createNote(note);
  }
  closeNotesModal();
};

const closeNotesModal = () => {
  isNotesModalVisible.value = false;
  currentNote.value = null;
};

const openFullNoteModal = (note) => {
  fullNoteContent.value = note.content;
  isFullNoteModalVisible.value = true;
};

const closeFullNoteModal = () => {
  isFullNoteModalVisible.value = false;
};

const truncateContent = (content, limit) => {
  if (content.length > limit) {
    return content.substring(0, limit) + "...";
  }
  return content;
};
</script>

<template>
  <div class="mx-auto max-w-screen-xl py-20 px-6">
    <button @click="showAddNoteModal" class="mb-4">
      <img :src="addIcon" alt="add Icon" class="w-20 h-20" />
    </button>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="note in notesStore.notes"
        :key="note.id"
        :class="`rounded bg-violet-300 border border-gray-400 shadow-lg mb-6`"
      >
        <div class="p-5">
          <h4 class="text-gray-800 font-bold mb-2">{{ note.title }}</h4>
          <p class="text-gray-800 text-sm break-words">
            {{ truncateContent(note.content, 100) }}
          </p>
          <!-- <p class="text-gray-800 text-sm break-words">{{ note.content }}</p> -->
        </div>
        <div class="flex items-center justify-between text-gray-800 p-5">
          <p class="text-sm">{{ note.date }}</p>
          <div class="flex space-x-2">
            <button
              @click="openFullNoteModal(note)"
              class="w-8 h-8 rounded-full bg-gray-100 text-purple-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              aria-label="edit note"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"
                  fill="#7e57c2"
                />
              </svg>
            </button>
            <button
              @click="editNote(note)"
              class="w-8 h-8 rounded-full bg-gray-100 text-purple-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              aria-label="edit note"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-pencil"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"
                ></path>
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
              </svg>
            </button>
            <button
              @click="deleteNote(note.id)"
              class="w-8 h-8 rounded-full bg-gray-100 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              aria-label="delete note"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#b39ddb"
                  d="M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"
                ></path>
                <path fill="#9575cd" d="M28 6L20 6 14 12 34 12z"></path>
                <path
                  fill="#7e57c2"
                  d="M10,8h28c1.1,0,2,0.9,2,2v2H8v-2C8,8.9,8.9,8,10,8z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <NotesModal
      v-if="isNotesModalVisible"
      :note="currentNote"
      @close="closeNotesModal"
      @save="saveNote"
    />

    <FullNoteModal
      v-if="isFullNoteModalVisible"
      :content="fullNoteContent"
      @close="closeFullNoteModal"
    />
  </div>
</template>
