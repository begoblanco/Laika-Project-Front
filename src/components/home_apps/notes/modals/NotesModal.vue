<script setup>
import { watch, toRefs } from "vue";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close", "save"]);

const { note } = toRefs(props);

const save = () => {
  emit("save", { ...note.value });
};

watch(note, (newValue) => {
  if (!newValue) {
  }
});
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-violet-300 rounded-lg p-4">
      <h2 class="text-lg mb-4 text-gray-800">
        {{ note.id ? "Edit Note" : "New Note" }}
      </h2>
      <input v-model="note.title" placeholder="Title"
        class="border mb-2 w-full p-2 rounded text-gray-800 focus:outline-violet-500" />
      <textarea v-model="note.content" placeholder="Content"
        class="border mb-2 w-full p-2 rounded text-gray-800 focus:outline-violet-500" rows="4"></textarea>
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
