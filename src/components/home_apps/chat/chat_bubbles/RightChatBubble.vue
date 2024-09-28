<script setup>
import { toRefs } from 'vue';

const props = defineProps(['message'])
const { message } = toRefs(props);
</script>

<template>
    <div class="flex justify-end mb-4 cursor-pointer">
      <!-- Chat Bubble -->
      <div class="bg-violet-400 text-white rounded-lg p-3 max-w-lg break-words">
        <p v-html="message"></p>
      </div>
  
      <!-- Avatar -->
      <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2">
        <img src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato" alt="My Avatar"
             class="w-8 h-8 rounded-full" />
      </div>
    </div>
  </template>