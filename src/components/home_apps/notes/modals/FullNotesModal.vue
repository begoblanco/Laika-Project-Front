<script setup>
import { toRefs } from "vue";

const props = defineProps({
   
  content: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["close"]);
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-violet-300 rounded-lg p-4 max-w-sm w-full">
    
        <p class="text-gray-800 break-words">{{ content }}</p>
        <div class="flex justify-end">
          <button @click="$emit('close')" class="bg-gray-300 text-gray-700 px-4 py-2 rounded ml-2">
            Close
          </button>
        </div>
      </div>
    </div>
  </template>
